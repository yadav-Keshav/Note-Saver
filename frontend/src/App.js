
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import LandingPage from './screens/landingPage/landingPage';
import LoginScreen from './screens/loginScreen/loginScreen';
import RegisterScreen from './screens/registerScreen/registerScreen';
import ProfileScreen from './screens/profileScreen/profileScreen';
import MyNotes from './screens/myNotesScreen/myNotesScreen';
import CreateNote from './screens/createNoteScreen/createNoteScreen';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterScreen />} exact />
        <Route path="/myprofile" element={<ProfileScreen />} exact />
        <Route path="/createnote" element={<CreateNote />} exact />
        <Route path="/mynotes" element={<MyNotes/>} exact />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
