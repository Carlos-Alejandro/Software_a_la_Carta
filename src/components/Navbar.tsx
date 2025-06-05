// src/components/navbar/Navbar.tsx
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-transparent text-white">
      <div className="text-xl font-bold">Software a la Carta</div>
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="hover:text-blue-400 transition"><a href="#home">{t('home')}</a></li>
        <li className="hover:text-blue-400 transition"><a href="#about">{t('about')}</a></li>
        <li className="hover:text-blue-400 transition"><a href="#projects">{t('projects')}</a></li>
        <li className="hover:text-blue-400 transition"><a href="#contact">{t('contact')}</a></li>
      </ul>
      <div className="flex items-center gap-4">
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
