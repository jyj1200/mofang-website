import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <div className="text-white">{t.footer.companyName}</div>
                <div className="text-xs text-gray-400">{t.footer.companyNameEn}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/cultural-creative" className="text-gray-400 hover:text-[#0066CC] text-sm transition-colors">
                  {t.nav.culturalCreative}
                </Link>
              </li>
              <li>
                <Link to="/industrial-design" className="text-gray-400 hover:text-[#0066CC] text-sm transition-colors">
                  {t.nav.industrialDesign}
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-[#0066CC] text-sm transition-colors">
                  {t.nav.team}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-white">{t.footer.services}</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">{t.footer.service1}</li>
              <li className="text-gray-400 text-sm">{t.footer.service2}</li>
              <li className="text-gray-400 text-sm">{t.footer.service3}</li>
              <li className="text-gray-400 text-sm">{t.footer.service4}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-white">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <Phone size={16} className="mr-2" />
                +86 136 8023 1042
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail size={16} className="mr-2" />
                mofangtech@qq.com
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>{t.footer.location}</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0066CC] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}