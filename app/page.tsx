import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MainPage } from '../components/MainPage/MainPage';

export default function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
