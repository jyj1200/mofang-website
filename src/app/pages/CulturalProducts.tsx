import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Droplet, Building2, MapPin, Sparkles, Heart, Users } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import backpackImage from '../imports/效果图.png';
import penImage from '../imports/未命名的设计.png';
import penHolderImage from '../imports/无手机支架笔筒渲染.bip.290.png';
import candleHolderImage from '../imports/燭臺效果圖01.png';

export function CulturalProducts() {
  const { language } = useLanguage();

  const pageInfo = {
    zh: {
      title: '文创产品原创设计定制',
      subtitle: '传承文化之美 · 定格旅行记忆',
      backLink: '返回文创产品',
    },
    en: {
      title: 'Original Design & Customization of Cultural Creative Products',
      subtitle: 'Inherit Cultural Beauty · Capture Travel Memories',
      backLink: 'Back to Cultural Products',
    },
  }[language];

  // 产品分类
  const categories = [
    {
      icon: <Droplet size={40} />,
      title: language === 'zh' ? '景区系列' : 'Scenic Area Series',
      subtitle: language === 'zh' ? 'Scenic Area Scenic Area' : 'Scenic Area Scenic Area',
      description: language === 'zh'
        ? '以某景区为灵感，提炼景区独有的符号密码，打造兼具美学与现代设计语言的文创产品。每一件作品都凝结着独一无二的人文意境。'
        : 'Inspired by the unique natural scenery and cultural heritage of the scenic area, extracting the rhythm of landscapes to create cultural products that blend regional aesthetics with modern design.',
      color: '#7C9885',
      gradient: 'from-[#7C9885] to-[#8B9D83]',
    },
    {
      icon: <Building2 size={40} />,
      title: language === 'zh' ? '博物馆系列' : 'Museum Series',
      subtitle: language === 'zh' ? 'Museum Collections' : 'Museum Collections',
      description: language === 'zh'
        ? '携手国内知名博物馆，将馆藏文物的精髓提炼为现代设计语言。从青铜纹样到瓷器釉色，让千年文化在日常生活中焕发新生。'
        : 'Collaborating with renowned domestic museums, extracting the essence of cultural relics into modern design language. From bronze patterns to porcelain glazes, bringing millennia of culture to daily life.',
      color: '#8B9D83',
      gradient: 'from-[#8B9D83] to-[#9CAA8F]',
    },
    {
      icon: <MapPin size={40} />,
      title: language === 'zh' ? '城市文创' : 'City Cultural Creative',
      subtitle: language === 'zh' ? 'Urban Culture' : 'Urban Culture',
      description: language === 'zh'
        ? '深入挖掘各地城市文化特色，从建筑地标到民俗风情，用设计讲述每座城市的独特故事。让旅行的记忆，化作手心的温度。'
        : 'Deeply exploring local urban cultural characteristics, from architectural landmarks to folk customs, using design to tell the unique story of each city.',
      color: '#9CAA8F',
      gradient: 'from-[#9CAA8F] to-[#ABB89B]',
    },
  ];

  // 产品展示（使用Unsplash图片）
  const products = [
    {
      id: 1,
      name: language === 'zh' ? '某景区轻量化双肩包' : 'Scenic Area Sea of Clouds Lightweight Backpack',
      category: language === 'zh' ? '景区系列' : 'Scenic Area',
      price: '¥68',
      image: backpackImage,
      height: 300,
    },
    {
      id: 4,
      name: language === 'zh' ? '某景区立体水晶笔筒' : 'Scenic Area Pine 3D Crystal Pen Holder',
      category: language === 'zh' ? '景区系列' : 'Scenic Area',
      price: '¥40',
      image: penHolderImage,
      height: 320,
    },
    {
      id: 5,
      name: language === 'zh' ? '金叶晚叙半透明烛台' : 'Golden Leaf Evening Translucent Candle Holder',
      category: language === 'zh' ? '城市文创' : 'City',
      price: '¥128',
      image: candleHolderImage,
      height: 280,
    },
    {
      id: 7,
      name: language === 'zh' ? '某景区渐变中性笔' : 'Scenic Area Mist Gradient Gel Pen',
      category: language === 'zh' ? '景区系列' : 'Scenic Area',
      price: '¥18',
      image: penImage,
      height: 340,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <SEOHead
        title={language === 'zh' ? '文创产品原创设计定制 - 文创产品 - 墨方智能科技' : 'Original Design & Customization of Cultural Creative Products - Mofang Tech'}
        description={language === 'zh'
          ? '墨方智能科技文创产品原创设计定制服务，包含景区文创、博物馆联名、城市文创等产品，融合新中式设计美学，传承文化之美，定格旅行记忆。'
          : 'Mofang Tech original design and customization service for cultural creative products, including scenic area cultural creative, museum collaborations, city cultural products, integrating new Chinese design aesthetics.'}
        keywords={language === 'zh'
          ? '文创产品原创设计定制,景区文创,博物馆文创,城市纪念品,新中式设计,文化产品,墨方智能科技'
          : 'cultural creative original design,museum creative,scenic area creative,museum cultural products,city souvenirs,new Chinese design,Mofang Tech'}
        path="/cultural-products"
      />

      {/* Hero Banner - 水波纹+建筑线条 */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* 背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C9885] via-[#8B9D83] to-[#9CAA8F]"></div>
        
        {/* 水波纹SVG背景 */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M0 100 Q 50 80, 100 100 T 200 100" fill="none" stroke="white" strokeWidth="1"/>
                <path d="M0 120 Q 50 100, 100 120 T 200 120" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave)"/>
          </svg>
        </div>

        {/* 建筑线条装饰 */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <g stroke="white" strokeWidth="2" fill="none">
              <polygon points="50,50 150,50 150,150 50,150" opacity="0.3"/>
              <polygon points="100,100 200,100 200,200 100,200" opacity="0.2"/>
              <circle cx="300" cy="150" r="50" opacity="0.3"/>
            </g>
          </svg>
        </div>

        {/* 内容 */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Link 
              to="/cultural"
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              {pageInfo.backLink}
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              {pageInfo.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light tracking-wide">
              {pageInfo.subtitle}
            </p>

            {/* 装饰性水墨线条 */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-white/30 rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* 底部波浪装饰 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60 Q 300 100, 600 60 T 1200 60 L 1200 120 L 0 120 Z" fill="#FAF9F6"/>
          </svg>
        </div>
      </section>

      {/* 产品分类介绍 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2C2C2C]">
            {language === 'zh' ? '文创产品定制类目' : 'Cultural Creative Product Categories'}
          </h2>
          <div className="w-16 h-1 bg-[#7C9885] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-[#E5E5E5]">
                {/* 图标 */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {category.icon}
                </div>

                {/* 标题 */}
                <h3 className="text-2xl font-bold mb-2 text-[#2C2C2C]">
                  {category.title}
                </h3>
                <p className="text-sm text-[#7C9885] mb-4 font-medium">
                  {category.subtitle}
                </p>

                {/* 描述 */}
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>

                {/* 装饰线条 */}
                <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
                  <div className={`w-12 h-0.5 bg-gradient-to-r ${category.gradient} group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 瀑布流产品展示 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white/50 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2C2C2C]">
            {language === 'zh' ? '精选产品' : 'Featured Products'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {language === 'zh' 
              ? '每一件产品都承载着文化的温度，传递着旅行的记忆'
              : 'Each product carries the warmth of culture and the memory of travel'}
          </p>
          <div className="w-16 h-1 bg-[#7C9885] mx-auto rounded-full mt-4"></div>
        </motion.div>

        <Masonry columnsCount={3} gutter="24px" className="masonry-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E5E5E5]">
                {/* 产品图片 */}
                <div className="relative overflow-hidden" style={{ height: `${product.height}px` }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* 悬浮遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-sm font-medium mb-1">{product.category}</p>
                    </div>
                  </div>
                </div>

                {/* 产品信息 */}
                <div className="p-5">
                  <h4 className="font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#7C9885] transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <p className="text-[#7C9885] font-bold text-lg">{product.price}</p>
                    <span className="text-xs text-gray-400 border border-[#E5E5E5] px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </section>

      {/* 详情简介区 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-[#F5F3EF] rounded-3xl p-12 md:p-16 shadow-xl border border-[#E5E5E5]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* 左侧文字 */}
            <div>
              <div className="inline-block px-4 py-2 bg-[#7C9885]/10 rounded-full mb-6">
                <span className="text-[#7C9885] font-medium text-sm">
                  {language === 'zh' ? '品牌故事' : 'Brand Story'}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]">
                {language === 'zh' ? '以设计传承文化' : 'Inherit Culture Through Design'}
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {language === 'zh'
                    ? '我们深信，文化不应只存在于博物馆的玻璃柜中，而应融入生活的点滴。从某景区的山水人文中汲取灵感，我们开启了一段将地域意境转化为日常器物的探索之旅。'
                    : 'We believe that culture should not only exist in museum display cases, but should be integrated into every aspect of life. Inspired by the landscape and culture of a scenic area, we embarked on a journey to transform regional essence into daily objects.'}
                </p>
                <p>
                  {language === 'zh'
                    ? '与国内顶尖博物馆的联名合作，让我们有机会近距离触摸千年文物的纹理与温度。我们提取青铜器的庄重、瓷器的温润、书画的飘逸，用现代设计语言重新诠释，让古老的文化符号在当代生活中焕发新生。'
                    : 'Collaboration with top domestic museums gives us the opportunity to closely touch the texture and warmth of ancient artifacts. We extract the solemnity of bronzes, the gentleness of porcelain, and the elegance of calligraphy, reinterpreting them with modern design language.'}
                </p>
                <p>
                  {language === 'zh'
                    ? '每一座城市都有独特的文化基因。我们走过长城内外、大江南北，用设计记录城市的呼吸与脉搏，将地标建筑、民俗风情凝结为可触碰的记忆，让每一次旅行都留下温润的印记。'
                    : 'Each city has its unique cultural DNA. We travel across the country, recording the breath and pulse of cities with design, condensing landmarks and folk customs into tangible memories.'}
                </p>
              </div>
            </div>

            {/* 右侧装饰元素 */}
            <div className="relative">
              {/* 气泡肌理背景 */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="bubbles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="15" fill="#7C9885" opacity="0.3"/>
                      <circle cx="60" cy="50" r="20" fill="#8B9D83" opacity="0.2"/>
                      <circle cx="40" cy="80" r="10" fill="#9CAA8F" opacity="0.4"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bubbles)"/>
                </svg>
              </div>

              {/* 装饰卡片 */}
              <div className="relative space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#7C9885]/20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#7C9885] to-[#8B9D83] rounded-full flex items-center justify-center text-white font-bold">
                      某景区
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2C2C]">
                        {language === 'zh' ? '世界遗产' : 'World Heritage'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === 'zh' ? '某景区胜境' : 'Scenic Area Wonder'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#8B9D83]/20 shadow-lg ml-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B9D83] to-[#9CAA8F] rounded-full flex items-center justify-center text-white font-bold">
                      50+
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2C2C]">
                        {language === 'zh' ? '博物馆合作' : 'Museum Partners'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === 'zh' ? '文化联名' : 'Cultural Collaboration'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#9CAA8F]/20 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#9CAA8F] to-[#ABB89B] rounded-full flex items-center justify-center text-white font-bold">
                      100+
                    </div>
                    <div>
                      <p className="font-semibold text-[#2C2C2C]">
                        {language === 'zh' ? '城市足迹' : 'Cities Covered'}
                      </p>
                      <p className="text-sm text-gray-500">
                        {language === 'zh' ? '记录中国' : 'Recording China'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 合作模式 */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-[#7C9885]/5 to-[#9CAA8F]/5 rounded-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2C2C2C]">
            {language === 'zh' ? '合作模式' : 'Cooperation Models'}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            {language === 'zh' 
              ? '专业定制与批量供货，为您提供灵活的合作方案'
              : 'Custom design and bulk wholesale, providing flexible cooperation solutions'}
          </p>
          <div className="w-16 h-1 bg-[#7C9885] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 定制服务 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#7C9885] hover:border-[#8B9D83] h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7C9885] to-[#8B9D83] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  01
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#2C2C2C] mb-2">
                    {language === 'zh' ? '专属定制服务' : 'Custom Design Service'}
                  </h4>
                  <p className="text-[#7C9885] font-medium">
                    {language === 'zh' ? '为您量身打造独特文创' : 'Tailored Cultural Creative Products'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7C9885] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    {language === 'zh'
                      ? '景区文创定制：专注景区文创一站式定制，用创意设计赋能景区品牌，打造兼具特色与实用美学的景区周边'
                      : 'Scenic area custom cultural products: Focus on one-stop customization of scenic area cultural creative products, empowering scenic area brands with creative design'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8B9D83] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    {language === 'zh' 
                      ? '博物馆联名定制：深度挖掘馆藏文物元素，转化为现代设计语言，打造专属文化IP'
                      : 'Museum collaboration custom: Extract cultural relic elements and transform into modern design'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9CAA8F] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    {language === 'zh' 
                      ? '品牌文化衍生品：为企业、机构打造专属文化礼品，提升品牌文化价值'
                      : 'Brand cultural derivatives: Create exclusive cultural gifts for enterprises and institutions'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
                <p className="text-sm text-gray-500 italic">
                  {language === 'zh' 
                    ? '从创意策划、设计研发到生产落地，全流程一站式服务'
                    : 'Full-service from creative planning, design to production'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 通品订购 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-[#8B9D83] hover:border-[#9CAA8F] h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B9D83] to-[#9CAA8F] rounded-2xl flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  02
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#2C2C2C] mb-2">
                    {language === 'zh' ? '通品订购' : 'Bulk Order Products'}
                  </h4>
                  <p className="text-[#8B9D83] font-medium">
                    {language === 'zh' ? '精选现货 批量优惠' : 'Selected Stock Products with Bulk Discount'}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#7C9885] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    {language === 'zh'
                      ? '城市文创系列：涵盖全国各大城市特色纪念品，深度融合地域文化特色'
                      : 'City cultural creative series: Covering major cities across China, deeply integrating regional cultural characteristics'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#8B9D83] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    {language === 'zh' 
                      ? '经典文创通品：精选热销款式，适合批量采购、礼品赠送、文创店零售等多种需求'
                      : 'Classic cultural creative products: Selected best-sellers for bulk purchasing, gift giving, cultural store retail and more'}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#9CAA8F] rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    {language === 'zh' 
                      ? '快速交付与版权保护：现货充足，下单后快速发货，以B2B供货模式（仅供货、非零售）'
                      : 'Fast Delivery & Copyright Protection: Sufficient stock, quick shipping after ordering, B2B wholesale model (wholesale only, non-retail)'}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#E5E5E5]">
                <p className="text-sm text-gray-500 italic">
                  {language === 'zh' 
                    ? '起订量20件起，批量订购享优惠，价格透明，品质保证'
                    : 'Minimum order quantity: 20 pieces, bulk discount available, transparent pricing, quality guaranteed'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 底部装饰 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <p className="text-2xl font-light text-[#7C9885] italic mb-4">
              {language === 'zh' 
                ? '让文化在生活中流传，让记忆在指尖温润'
                : 'Let culture flow in life, let memories warm at fingertips'}
            </p>
            <div className="flex justify-center gap-2">
              <div className="w-2 h-2 bg-[#7C9885] rounded-full"></div>
              <div className="w-2 h-2 bg-[#8B9D83] rounded-full"></div>
              <div className="w-2 h-2 bg-[#9CAA8F] rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]">
            {language === 'zh' ? '开启您的文创项目' : 'Start Your Cultural Creative Project'}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'zh'
              ? '无论是博物馆联名、城市纪念品定制，还是品牌文化衍生品设计，我们都能为您提供从创意策划到生产落地的全流程服务'
              : 'Whether museum collaborations, city souvenir customization, or brand cultural derivatives design, we provide full-service from creative planning to production'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cultural-order"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7C9885] to-[#8B9D83] text-white rounded-full hover:shadow-xl transition-all duration-500 font-semibold"
            >
              {language === 'zh' ? '立即咨询' : 'Consult Now'}
            </Link>
            <Link
              to="/cultural"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#7C9885] border-2 border-[#7C9885] rounded-full hover:bg-[#7C9885] hover:text-white transition-all duration-500 font-semibold"
            >
              {language === 'zh' ? '查看更多案例' : 'View More Cases'}
            </Link>
          </div>
        </motion.div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}