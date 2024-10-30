import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CountryList } from './pages/CountryList';
import { CountryDetail } from './pages/CountryDetail';
import { Partnerships } from './pages/Partnerships';
import { PartnershipProvider } from './context/PartnershipContext';

function App() {
  return (
    <PartnershipProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<CountryList />} />
              <Route path="/country/:id" element={<CountryDetail />} />
              <Route path="/partnerships" element={<Partnerships />} />
            </Routes>
          </main>
        </div>
      </Router>
    </PartnershipProvider>
  );
}

export default App;