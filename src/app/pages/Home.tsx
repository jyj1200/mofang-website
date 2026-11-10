import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Package, Users, Award, Target, Zap, ShieldCheck } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import heroImage from 'figma:asset/ce8956ced8e164a79086df9764c9978ef0c75d17.png';
import trademarkImage from '../../imports/494e861e0bc1e00cbde0fde4144d3949.png';
import culturalCreativeImage from 'figma:asset/87da4fd5d6fac55f20fbfc8321e3204d520f551f.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  const capabilities = [
    {
      icon: <Lightbulb size={40} />,
      title: t.home.mechanicalDesign,
      description: t.home.mechanicalDesignDesc,
      color: '#0066CC',
    },
    {
      icon: <Zap size={40} />,
      title: t.home.mechatronicDesign,
      description: t.home.mechatronicDesignDesc,
      color: '#FF7A30',
    },
    {
      icon: <Award size={40} />,
      title: t.home.appearanceDesign,
      description: t.home.appearanceDesignDesc,
      color: '#00B894',
    },
    {
      icon: <Package size={40} />,
      title: t.home.culturalIntegration,
      description: t.home.culturalIntegrationDesc,
      color: '#0066CC',
    },
  ];

  const featuredCases = [
    {
      id: 1,
      title: t.home.industrialCase,
      category: t.home.industrialCategory,
      image: heroImage,
      link: '/industrial-design',
    },
    {
      id: 2,
      title: t.home.culturalCase,
      category: t.home.culturalCategory,
      image: culturalCreativeImage,
      link: '/cultural-creative',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Mofang Tech 墨方智能科技 - 工业设计与文创产品设计专家"
        description="Mofang Tech（中山市墨方智能科技有限公司）是以科研人员为核心的工业设计与文创产品设计机构，提供机械设计、机电设计、外观设计与文创产品制作一体化服务。Industrial design & cultural creative studio in Zhongshan, China."
        keywords="Mofang Tech,工业设计,文创产品,机械设计,机电设计,外观设计,中山,墨方智能科技"
        path="/"
      />
      
      {/* SEO Keywords Section - 缩小并置顶 */}
      <section className="py-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs text-gray-500">
              {language === 'zh' ? '服务范围：' : 'Services:'}
            </span>
            {language === 'zh' ? (
              ['工业设计', '文创产品', '机械设计', '机电设计', '外观设计', 'CMF设计', 
               '智能硬件', '文创礼品', '景区城市文创', '企业定制', '结构设计',
               '非遗传承', '中山设计', '墨方智能科技'].map((keyword) => (
                <span
                  key={keyword}
                  className="inline-block px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs hover:bg-gray-100 transition-colors"
                >
                  {keyword}
                </span>
              ))
            ) : (
              ['Industrial Design', 'Cultural Creative', 'Mechanical Design', 'Mechatronic Design', 
               'Appearance Design', 'CMF Design', 'Smart Hardware', 'Creative Gifts', 
               'Cultural Tourism', 'Custom Products', 'Structural Design',
               'Heritage Craft', 'Zhongshan', 'Mofang Tech'].map((keyword) => (
                <span
                  key={keyword}
                  className="inline-block px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs hover:bg-gray-100 transition-colors"
                >
                  {keyword}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
          role="img"
          aria-label="工业设计与文创产品展示背景"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/90 to-[#0066CC]/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white tracking-wider"
          >
            {t.home.heroTitle}
          </motion.h1>
          <p className="text-xl mb-3 text-white border-b-2 border-white pb-2 inline-block">
            {t.home.heroSubtitle}
          </p>
          <p className="text-xl mb-8 text-gray-200">
            {t.home.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/industrial-order"
              className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
            >
              {t.home.consultServices}
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/cultural-creative"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center border border-white/30"
            >
              {t.home.viewCases}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.home.coreCapabilities}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.home.coreCapabilitiesDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-8 rounded-xl hover:shadow-xl transition-shadow group"
              >
                <div
                  className="mb-4 inline-flex p-3 rounded-lg"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.home.featuredCases}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.home.featuredCasesDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCases.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  to={item.link}
                  className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="text-sm opacity-90">{item.category}</span>
                      <h3 className="mt-2 text-white">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">{t.home.researchDriven}</h2>
              <p className="text-gray-600 mb-6">
                {t.home.researchDesc1}
              </p>
              <p className="text-gray-600 mb-8">
                {t.home.researchDesc2}
              </p>
              <Link
                to="/team"
                className="inline-flex items-center text-[#0066CC] hover:text-[#0052A3] transition-colors"
              >
                {t.home.learnMore}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{t.home.ctaTitle}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {t.home.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/industrial-order"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                {t.home.industrialService}
              </Link>
              <Link
                to="/cultural-creative-order"
                className="bg-[#FF7A30] hover:bg-[#E66A20] text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center"
              >
                {t.home.culturalCustom}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trademark */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg,#f7f7f8 0%,#ffffff 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-[#0066CC]/60 mb-3 uppercase">Intellectual Property</p>
            <h2 className="mb-3" style={{ color: '#1a1a1a' }}>知识产权</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#0066CC]/30" />
              <p className="text-gray-400 text-sm tracking-wide">以严谨态度守护原创，以版权意识驱动创作</p>
            </div>
          </motion.div>

          <div
            className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
            style={{ border: '1px solid #ebebeb', background: '#ffffff' }}
          >
            {/* Left: trademark certificate */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-10"
              style={{ background: '#f9f9f9', borderRight: '1px solid #ebebeb' }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-xl opacity-20"
                  style={{ background: 'linear-gradient(135deg,#0066CC,#00B894)' }}
                />
                <img
                  src={trademarkImage}
                  alt="圆著商标注册证"
                  className="relative rounded-lg shadow-lg w-full max-w-[260px] object-contain"
                />
              </div>
            </motion.div>

            {/* Right: explanation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-10 flex flex-col justify-center gap-7"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0066CC12', border: '1px solid #0066CC25' }}>
                    <ShieldCheck size={18} style={{ color: '#0066CC' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#111', letterSpacing: '0.06em' }}>注册商标 · 圆著</h3>
                    <p className="text-xs text-gray-400 mt-0.5 tracking-wide">Registered Trademark · Yuanzhu</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  墨方智能科技已于 2026 年 6 月 14 日获得国家知识产权局颁发的商标注册证，注册商标「圆著」，国际分类第 42 类，涵盖技术研究、工业外观设计、包装设计及产品原型设计等核心业务领域，有效期至 2036 年 6 月 13 日。
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: '注册人', value: '中山市墨方智能科技有限公司' },
                  { label: '国际分类', value: '第 42 类（技术研究与设计服务）' },
                  { label: '注册日期', value: '2026 年 6 月 14 日' },
                  { label: '有效期至', value: '2036 年 6 月 13 日' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-xs flex-shrink-0 w-16" style={{ color: '#aaa' }}>{item.label}</span>
                    <div className="flex-1 h-px" style={{ background: '#ececec' }} />
                    <span className="text-xs flex-shrink-0" style={{ color: '#333' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed pt-2">
                商标的注册体现了我们对原创设计的高度重视。从方案构思到交付落地，每一个设计成果都受到法律保护；我们也以同样严谨的版权意识尊重他人的知识产权，这是墨方的设计风骨。
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}