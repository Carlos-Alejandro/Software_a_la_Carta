import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import AppRoutes from './routes/AppRouter';

// A futuro: puedes agregar estos componentes
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Whatsapp from './components/Whatsapp';
// import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader'; // componente simple de carga

function App() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      <Suspense fallback={<Loader />}>
        <Navbar />
        <AppRoutes />
        {/* <Footer /> */}
      </Suspense>
      {/* <Whatsapp /> */}
    </BrowserRouter>
  );
}

export default App;
