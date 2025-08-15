// src/App.tsx
import AppRouter from './router/AppRouter';
import Navbar from './components/Layout/Navbar';
import Whatsapp from './components/UI/Whatsapp';
import ScrollToTop from './components/common/ScrollToTop';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <ScrollToTop />
      <AppRouter />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
