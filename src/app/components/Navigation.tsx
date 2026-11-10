import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/cultural-creative', label: t.nav.culturalCreative },
    { path: '/industrial-design', label: t.nav.industrialDesign },
    { path: '/team', label: t.nav.team },
    { path: '/cultural-creative-order', label: t.nav.culturalCreativeOrder },
    { path: '/industrial-order', label: t.nav.industrialOrder },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div>
              <div className="text-[#2C2C2C] font-semibold">{t.nav.companyName}</div>
              <div className="text-xs text-gray-500">{t.nav.companyNameEn}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-[#0066CC]'
                    : 'text-[#2C2C2C] hover:text-[#0066CC]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/payment"
              className={`transition-colors ${
                location.pathname === '/payment'
                  ? 'text-[#0066CC]'
                  : 'text-[#2C2C2C] hover:text-[#0066CC]'
              }`}
            >
              {t.nav.payment}
            </a>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-[#2C2C2C] hover:bg-[#F5F5F7] transition-colors"
              aria-label="Switch language"
            >
              <Languages size={20} />
              <span className="text-sm font-medium">{language === 'zh' ? 'EN' : '中'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-[#2C2C2C] hover:bg-[#F5F5F7]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive(item.path)
                    ? 'bg-[#0066CC] text-white'
                    : 'text-[#2C2C2C] hover:bg-[#F5F5F7]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/payment"
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2 rounded-md transition-colors ${
                location.pathname === '/payment'
                  ? 'bg-[#0066CC] text-white'
                  : 'text-[#2C2C2C] hover:bg-[#F5F5F7]'
              }`}
            >
              {t.nav.payment}
            </a>
            {/* Mobile Language Toggle */}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-[#2C2C2C] hover:bg-[#F5F5F7] transition-colors"
            >
              <Languages size={20} />
              <span className="text-sm font-medium">{language === 'zh' ? 'English' : '中文'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}