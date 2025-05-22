import './App.css';
import Intro from './components/Intro'
import Instructions from './components/Instructions';
import Ace from './components/Ace';
import Test from './components/Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tip from './components/Tip';
import AdminEmails from './components/AdminEmails';
import LostInSpace from './components/LostInSpace';
import Menu from './components/Menu';
import PastQuestions from './components/PastQuestions';
import Reviews from './components/Reviews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ace />} />
        <Route path="/welcome" element={<Intro />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/instructions" element={<Instructions />} />
        <Route path="/menu/instructions/test" element={<Test />} />
        <Route path="menu/past-questions" element={<PastQuestions />} />
        <Route path="menu/reviews" element={<Reviews />} />
        <Route path="/tip" element={<Tip />} />
        <Route path="/*" element={<LostInSpace />} />
        <Route path="/mechseiko" element={<AdminEmails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
