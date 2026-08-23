import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Gift, Palette, Filter } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import woodenOrnamentImage from 'figma:asset/b33b5971bd9d87f2a8a69857bf1dc193ae649504.png';
import culturalTourismImage from 'figma:asset/b35557f19bb0942c4c84875a0d5c72304ebb8567.png';
import ceramicTeaSetImage from 'figma:asset/fddeea5dcda6ac6afe89d3ac32d79e9a4f40a81c.png';
import penHolderImage from '../imports/无手机支架笔筒渲染.bip.290.png';
import heritageCraftImage from '../../imports/_____03.png';
import smartElectronicsImage from '../../imports/CTA___AI________.png';
import candleHolderImage from '../imports/燭臺效果圖01.png';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function CulturalCreative() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    { id: 'all', label: t.cultural.filterAll },
    { id: 'gift', label: t.cultural.filterGift },
    { id: 'derivative', label: t.cultural.filterDerivative },
    { id: 'custom', label: t.cultural.filterCustom },
    { id: 'cultural-tourism', label: t.cultural.filterCulturalTourism },
    { id: 'heritage', label: t.cultural.filterHeritage },
    { id: 'electronics', label: t.cultural.filterElectronics },
  ];

  const products = [
    {
      id: 1,
      name: t.cultural.product1Name,
      category: 'gift',
      image: ceramicTeaSetImage,
      description: t.cultural.product1Desc,
    },
    {
      id: 2,
      name: t.cultural.product2Name,
      category: 'derivative',
      image: woodenOrnamentImage,
      description: t.cultural.product2Desc,
    },
    {
      id: 3,
      name: t.cultural.product3Name,
      category: 'custom',
      image: 'https://images.unsplash.com/photo-1625552187571-7ee60ac43d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnaWZ0fGVufDF8fHx8MTc2NTQzNTEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      description: t.cultural.product3Desc,
      link: '/corporate-gift-shop',
    },
    {
      id: 5,
      name: t.cultural.product5Name,
      category: 'cultural-tourism',
      image: penHolderImage,
      description: t.cultural.product5Desc,
      link: '/cultural-products',
    },
    {
      id: 6,
      name: t.cultural.product6Name,
      category: 'derivative',
      image: candleHolderImage,
      description: t.cultural.product6Desc,
    },
    {
      id: 7,
      name: t.cultural.product7Name,
      category: 'heritage',
      image: heritageCraftImage,
      description: t.cultural.product7Desc,
      link: '/heritage-craft',
    },
    {
      id: 8,
      name: t.cultural.product8Name,
      category: 'electronics',
      image: smartElectronicsImage,
      description: t.cultural.product8Desc,
    },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter);

  const designProcess = [
    {
      step: 1,
      title: t.cultural.step1Title,
      description: t.cultural.step1Desc,
    },
    {
      step: 2,
      title: t.cultural.step2Title,
      description: t.cultural.step2Desc,
    },
    {
      step: 3,
      title: t.cultural.step3Title,
      description: t.cultural.step3Desc,
    },
    {
      step: 4,
      title: t.cultural.step4Title,
      description: t.cultural.step4Desc,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="文创产品设计 - 墨方智能科技"
        description="墨方智能科技文创产品设计服务，提供文创礼品、景区城市文创、企业定制、艺术收藏品等设计制作一体化服务，传统工艺与现代美学结合。"
        keywords="文创产品,文创设计,文创礼品,景区城市文创,企业定制,艺术收藏品,中山文创"
        path="/cultural-creative"
      />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#FF7A30] to-[#00B894]">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white"
          >
            {t.cultural.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            {t.cultural.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span>{language === 'zh' ? '分类筛选：' : 'Filter:'}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeFilter === cat.id
                      ? 'bg-[#FF7A30] text-white'
                      : 'bg-[#F5F5F7] text-[#2C2C2C] hover:bg-[#FF7A30]/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const ProductWrapper = product.link ? Link : 'div';
              const wrapperProps = product.link ? { to: product.link } : {};
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <ProductWrapper {...wrapperProps} className={product.link ? 'block' : ''}>
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {product.link && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="bg-white/90 text-[#FF7A30] px-6 py-2 rounded-full">
                            查看详情
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="mb-2">{product.name}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                  </ProductWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.cultural.designProcess}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.cultural.processDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A30] to-[#00B894] text-white flex items-center justify-center mb-4">
                    <span className="text-2xl">{process.step}</span>
                  </div>
                  <h4 className="mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
                {index < designProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#FF7A30] to-[#00B894] opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF7A30] to-[#00B894] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{t.cultural.ctaTitle}</h2>
            <p className="text-white/90 mb-8 text-lg">
              {t.cultural.ctaDesc}
            </p>
            <Link
              to="/cultural-creative-order"
              className="inline-flex items-center bg-white text-[#FF7A30] hover:bg-gray-100 px-8 py-3 rounded-lg transition-colors"
            >
              {t.cultural.ctaButton}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="cultural" />
    </div>
  );
}