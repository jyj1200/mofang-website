import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

interface PageEndingProps {
  variant?: 'industrial' | 'cultural' | 'default';
}

export function PageEnding({ variant = 'default' }: PageEndingProps) {
  const { language } = useLanguage();
  const t = translations[language].pageEnding;

  const config = {
    industrial: {
      bgColor: 'from-[#2C2C2C] to-[#0066CC]',
      title: t.indTitle,
      description: t.indDesc,
      primaryBtn: {
        text: t.indBtn1,
        link: '/industrial-order',
        color: 'bg-[#0066CC] hover:bg-[#0052A3]',
      },
      secondaryBtn: {
        text: t.indBtn2,
        link: '/industrial-design',
        color: 'bg-white/10 hover:bg-white/20 border border-white/30',
      },
    },
    cultural: {
      bgColor: 'from-[#FF7A30] to-[#00B894]',
      title: t.cultTitle,
      description: t.cultDesc,
      primaryBtn: {
        text: t.cultBtn1,
        link: '/cultural-creative-order',
        color: 'bg-white text-[#FF7A30] hover:bg-gray-100',
      },
      secondaryBtn: {
        text: t.cultBtn2,
        link: '/cultural-creative',
        color: 'bg-white/10 hover:bg-white/20 border border-white/30',
      },
    },
    default: {
      bgColor: 'from-[#0066CC] via-[#00B894] to-[#FF7A30]',
      title: t.defTitle,
      description: t.defDesc,
      primaryBtn: {
        text: t.defBtn1,
        link: '/industrial-order',
        color: 'bg-white text-[#0066CC] hover:bg-gray-100',
      },
      secondaryBtn: {
        text: t.defBtn2,
        link: '/team',
        color: 'bg-white/10 hover:bg-white/20 border border-white/30',
      },
    },
  };

  const currentConfig = config[variant];

  const contactCards = [
    {
      icon: <Phone size={24} />,
      title: t.phoneTitle,
      desc: t.phoneDesc,
      descClass: 'text-white/80',
      action: { href: 'tel:+8613680231042', label: '+86 136 8023 1042', isLink: true },
    },
    {
      icon: <Mail size={24} />,
      title: t.emailTitle,
      desc: t.emailDesc,
      descClass: 'text-gray-300',
      action: { href: 'mailto:337839167@qq.com', label: '337839167@qq.com', isLink: true },
    },
    {
      icon: <MessageCircle size={24} />,
      title: t.wechatTitle,
      desc: t.wechatDesc,
      descClass: 'text-white/80',
      action: { label: 'yz277562627', isLink: false },
    },
  ];

  const stats = [
    { value: '200+', label: t.statCases },
    { value: '50+', label: t.statPartners },
    { value: '98%', label: t.statSatisfaction },
    { value: '15+', label: t.statAwards },
  ];

  return (
    <section className={`py-20 bg-gradient-to-r ${currentConfig.bgColor} text-white relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{currentConfig.title}</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {currentConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={currentConfig.primaryBtn.link}
                className={`${currentConfig.primaryBtn.color} px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center`}
              >
                {currentConfig.primaryBtn.text}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to={currentConfig.secondaryBtn.link}
                className={`${currentConfig.secondaryBtn.color} backdrop-blur-sm text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center`}
              >
                {currentConfig.secondaryBtn.text}
              </Link>
            </div>
          </motion.div>

          {/* Right Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="mb-1 text-white">{card.title}</h4>
                    <p className={`${card.descClass} text-sm mb-2`}>
                      {card.desc}
                    </p>
                    {card.action.isLink ? (
                      <a href={card.action.href} className="text-white hover:underline">
                        {card.action.label}
                      </a>
                    ) : (
                      <p className="text-white">{card.action.label}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl mb-2">{stat.value}</div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
