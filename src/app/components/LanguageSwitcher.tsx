import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-md text-[#2C2C2C] hover:bg-[#F5F5F7] transition-colors"
      aria-label="Switch language"
    >
      <Languages size={20} />
      <span className="text-sm font-medium">{language === 'zh' ? 'EN' : '中'}</span>
    </button>
  );
}
