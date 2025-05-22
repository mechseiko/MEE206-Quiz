import React, { useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { CSVLink } from 'react-csv'; // For exporting emails to CSV
import db from '../firebase'; // Import Firestore instance
import styles from './AdminEmails.module.css';
import Header from './Header';
import Copyright from './Copyright';
import CustomAlert from './CustomAlert';

const AdminEmails = () => {
    const [emails, setEmails] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false); // Loading state
    const [searchQuery, setSearchQuery] = useState(''); // For search functionality
    const [currentPage, setCurrentPage] = useState(1); // For pagination
    const emailsPerPage = 10; // Number of emails per page
    const [selectedEmail, setSelectedEmail] = useState(null); // For viewing email details
    const [showAlert, setShowAlert] = useState(true)

    const fetchEmails = async () => {
        setLoading(true); // Start loading
        try {
            const querySnapshot = await getDocs(collection(db, 'quizEmails'));
            const emailList = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setEmails(emailList);
        } catch (error) {
            console.error('Error fetching emails:', error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            const data = await response.json();

            if (data.success) {
                setIsAuthenticated(true);
                fetchEmails(); // Fetch emails after successful login
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('⚠️ You are not authorized to view this page.');
        }
    };

    const openModal = (email) => setSelectedEmail(email);
    const closeModal = () => setSelectedEmail(null);

    const filteredEmails = emails.filter((email) =>
        email.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const indexOfLastEmail = currentPage * emailsPerPage;
    const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
    const currentEmails = filteredEmails.slice(indexOfFirstEmail, indexOfLastEmail);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const headers = [
        { label: 'Email', key: 'email' },
        { label: 'Timestamp', key: 'timestamp' },
    ];

    const csvData = emails.map((email) => ({
        email: email.email,
        timestamp: new Date(email.timestamp?.seconds * 1000).toLocaleString(),
    }));
    const alertHeaderStyle = {
        color: "red",
    }

    if (!isAuthenticated) {
        return (
            <div>
                <Header />
                <div className={styles.loginContainer}>
                    {showAlert && (
                        <CustomAlert
                            header = "⚠️ Warning"
                            alertHeaderColor={alertHeaderStyle}
                            message="You are not authorized to view this page."
                            closeAlertBox={() => {setShowAlert(false)}}
                        />
                    )}
                    <h1 className={styles.loginHeader}>Welcome, MECHSEIKO</h1>
                    <input
                        type="text"
                        value={token}
                        onChange={(e) => setToken(e.target.value.trim())}
                        className={styles.tokenInput}
                    /> <br />
                    <button onClick={handleLogin} className={styles.loginBtn}>
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className={styles.emailContainer}>
                <h1 className={styles.emailHeader}>Stored Emails</h1>
                <input
                    type="text"
                    placeholder="Search emails..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                />
                <CSVLink data={csvData} headers={headers} filename="emails.csv" className={styles.exportButton}>
                    Export to CSV
                </CSVLink>
                {loading ? (
                    <div className={styles.spinner}></div> // Show spinner while loading
                ) : (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Timestamp</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentEmails.map((email) => (
                                    <tr key={email.id}>
                                        <td>{email.email}</td>
                                        <td>{new Date(email.timestamp?.seconds * 1000).toLocaleString()}</td>
                                        <td>
                                            <button onClick={() => openModal(email)} className={styles.viewButton}>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className={styles.pagination}>
                            {Array.from({ length: Math.ceil(filteredEmails.length / emailsPerPage) }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => paginate(i + 1)}
                                    className={`${styles.pageButton} ${currentPage === i + 1 ? styles.activePage : ''}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            {selectedEmail && (
                <div className={styles.modal}>
                    <h2>Email Details</h2>
                    <p><strong>Email:</strong> {selectedEmail.email}</p>
                    <p><strong>Timestamp:</strong> {new Date(selectedEmail.timestamp?.seconds * 1000).toLocaleString()}</p>
                    <button onClick={closeModal} className={styles.closeButton}>
                        Close
                    </button>
                </div>
            )}
            <Copyright />
        </div>
    );
};

export default AdminEmails;