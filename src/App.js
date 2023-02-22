import './App.css';
import DonutsitesDirectoryPage from './pages/DonutsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DonutsiteDetailPage from './pages/DonutsiteDetailPage';





function App() {
  return (
      <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='directory' element={<DonutsitesDirectoryPage />} />
            <Route path='directory/:donutsiteId' element={<DonutsiteDetailPage />} />
          </Routes>
          <Footer />
      </div>
  );
};
  
    
  
          


 


export default App;
