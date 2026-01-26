import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import DateSelection from './pages/DateSelection';
import Home from './pages/Home';
import PackageDetail from './pages/PackageDetail';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dates" element={<DateSelection />} />
        <Route path="/home" element={<Home />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
