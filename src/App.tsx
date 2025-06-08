// src/App.tsx
import AppRouter from './router/AppRouter';
import Navbar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      <Navbar />
      <AppRouter />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default App;
