import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Package, CheckCircle, Target } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import smartWearableImage from 'figma:asset/5429af07af3c02fa27d18149678b9bb7ccb981a5.png';
import roboticArmImage from 'figma:asset/d2fc3828de75a4b4160d194e209a466421445b5a.png';
import smartHomeImage from 'figma:asset/6535ad4347d37e8e376ef4383e865a0f998fc741.png';
import automationEquipmentImage from 'figma:asset/e827403943e279191731b2ab58c4000b5908da48.png';
import mechanicalDesignImage from 'figma:asset/664ad5bdb4184c5b232084803976bad52dcda008.png';
import applianceDesignImage from 'figma:asset/27d143674b91c093bba530a13b9d743f3bbf341f.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function IndustrialDesign() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.indDesign.filterAll },
    { id: 'smart-hardware', label: t.indDesign.filterSmart },
    { id: 'machinery', label: t.indDesign.filterMachinery },
    { id: 'consumer-electronics', label: t.indDesign.filterConsumer },
  ];

  const capabilities = [
    {
      icon: <Lightbulb size={32} />,
      title: t.indDesign.mechDesign,
      description: t.indDesign.mechDesignDesc,
      color: '#0066CC',
    },
    {
      icon: <Package size={32} />,
      title: t.indDesign.mechatronic,
      description: t.indDesign.mechatronicDesc,
      color: '#00B894',
    },
    {
      icon: <CheckCircle size={32} />,
      title: t.indDesign.appearanceDesign,
      description: t.indDesign.appearanceDesignDesc,
      color: '#FF7A30',
    },
    {
      icon: <Target size={32} />,
      title: t.indDesign.integratedSolution,
      description: t.indDesign.integratedSolutionDesc,
      color: '#0066CC',
    },
  ];

  const cases = [
    {
      id: 1,
      name: t.indDesign.case1Name,
      category: 'smart-hardware',
      image: smartWearableImage,
      description: t.indDesign.case1Desc,
      details: t.indDesign.case1Details,
      link: '/wearable-device',
    },
    {
      id: 2,
      name: t.indDesign.case2Name,
      category: 'machinery',
      image: roboticArmImage,
      description: t.indDesign.case2Desc,
      details: t.indDesign.case2Details,
      link: '/robotic-arm',
    },
    {
      id: 3,
      name: t.indDesign.case3Name,
      category: 'consumer-electronics',
      image: smartHomeImage,
      description: t.indDesign.case3Desc,
      details: t.indDesign.case3Details,
      link: '/smart-home-system',
    },
    {
      id: 4,
      name: t.indDesign.case4Name,
      category: 'consumer-electronics',
      image: applianceDesignImage,
      description: t.indDesign.case4Desc,
      details: t.indDesign.case4Details,
    },
    {
      id: 5,
      name: t.indDesign.case5Name,
      category: 'machinery',
      image: mechanicalDesignImage,
      description: t.indDesign.case5Desc,
      details: t.indDesign.case5Details,
    },
    {
      id: 6,
      name: t.indDesign.case6Name,
      category: 'machinery',
      image: automationEquipmentImage,
      description: t.indDesign.case6Desc,
      details: t.indDesign.case6Details,
    },
  ];

  const filteredCases =
    activeCategory === 'all'
      ? cases
      : cases.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="工业设计 - 墨方智能科技"
        description="墨方智能科技工业设计服务，提供机械设计、机电一体化、外观设计、CMF设计等专业服务，从概念设计到生产接全流程技术支持。"
        keywords="工业设计,机械设计,机电设计,外观设计,CMF设计,智能硬件设计,中山工业设计"
        path="/industrial-design"
      />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#2C2C2C] to-[#0066CC]">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white"
          >
            {t.indDesign.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            {t.indDesign.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.indDesign.coreCapabilities}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.indDesign.coreCapabilitiesDesc}
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
                className="bg-[#FAFAFA] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div
                  className="mb-4 inline-flex p-3 rounded-lg"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-[#F5F5F7] border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-white text-[#2C2C2C] hover:bg-[#0066CC]/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item, index) => {
              const CardWrapper = item.link ? Link : 'div';
              const cardProps = item.link ? { to: item.link } : {};
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CardWrapper
                    {...cardProps}
                    className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {item.link && (
                        <div className="absolute inset-0 bg-[#0066CC]/0 group-hover:bg-[#0066CC]/10 transition-colors flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity bg-[#0066CC] px-4 py-2 rounded-lg">
                            {t.indDesign.viewDetails}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.indDesign.featuredCases}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.indDesign.featuredCasesDesc}
            </p>
          </motion.div>

          {/* 智能穿戴设备案例 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={smartWearableImage}
                alt="智能穿戴设备"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-[#0066CC]">{t.indDesign.wearableTitle}</h3>
              <h4 className="mb-6 text-gray-600">{t.indDesign.wearableSubtitle}</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.materialLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.materialDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.ergonomicLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.ergonomicDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.mechatronicIntLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.mechatronicIntDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.processOptLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.processOptDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 工业机械臂案例 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="mb-2 text-[#00B894]">{t.indDesign.roboticArmTitle}</h3>
              <h4 className="mb-6 text-gray-600">{t.indDesign.roboticArmSubtitle}</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.specLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.specDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.structureLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.structureDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.applicationLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.applicationDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.aiLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.aiDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2"
            >
              <ImageWithFallback
                src={roboticArmImage}
                alt="工业机械臂设计"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* 自动化生产设备案例 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <ImageWithFallback
                src={automationEquipmentImage}
                alt="自动化生产设备外观设计"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-2 text-[#FF7A30]">{t.indDesign.automationTitle}</h3>
              <h4 className="mb-6 text-gray-600">{t.indDesign.automationSubtitle}</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.hmiLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.hmiDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.safetyLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.safetyDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.maintenanceLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.maintenanceDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.spaceLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.spaceDesc}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>{t.indDesign.aestheticsLabel}</strong></p>
                    <p className="text-gray-600 text-sm">
                      {t.indDesign.aestheticsDesc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{t.indDesign.ctaTitle}</h2>
            <p className="text-gray-300 mb-8 text-lg">
              {t.indDesign.ctaDesc}
            </p>
            <Link
              to="/industrial-order"
              className="inline-flex items-center bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors"
            >
              {t.indDesign.ctaButton}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="industrial" />
    </div>
  );
}