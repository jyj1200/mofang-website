import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, Lightbulb, Zap, Package, Target, Watch, Heart, Activity, Battery } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import smartWearableImage from 'figma:asset/5429af07af3c02fa27d18149678b9bb7ccb981a5.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function WearableDevice() {
  const { language } = useLanguage();

  const projectInfo = {
    zh: {
      title: '智能穿戴设备工业设计案例',
      subtitle: '中山墨方智能提供智能手表、智能耳机、智能眼镜等穿戴设备的全流程工业设计服务，涵盖结构优化、人体工学及多传感器集成。',
      client: '项目客户',
      clientName: '日本某电器品牌',
      duration: '项目周期',
      durationTime: '6个月',
      category: '项目类型',
      categoryName: '智能硬件 / 消费电子',
      service: '服务内容',
      serviceName: '工业设计、结构设计、CMF设计、智能硬件集成',
      coreChallenge: '核心挑战',
      coreChallengeDesc: '在有限空间内实现多传感器集成，同时保证佩戴舒适度与续航能力',
      challenge: '设计挑战',
    },
    en: {
      title: 'Smart Wearable Device Industrial Design Case',
      subtitle: 'Zhongshan Mofang Tech provides full-process industrial design services for wearable devices such as smart watches, earphones, and glasses, covering structural optimization, ergonomics and multi-sensor integration.',
      client: 'Client',
      clientName: 'A Japanese Electronics Brand',
      duration: 'Duration',
      durationTime: '6 Months',
      category: 'Category',
      categoryName: 'Smart Hardware / Consumer Electronics',
      service: 'Services',
      serviceName: 'Industrial Design, Structural Design, CMF Design, Smart Hardware Integration',
      coreChallenge: 'Core Challenge',
      coreChallengeDesc: 'Achieving multi-sensor integration in limited space while ensuring wearing comfort and battery life',
      challenge: 'Design Challenge',
    },
  }[language];

  const designFeatures = [
    {
      icon: <Watch size={40} />,
      title: language === 'zh' ? '人体工学设计' : 'Ergonomic Design',
      description: language === 'zh' 
        ? '贴合手腕曲线，长时间佩戴无压迫感，重量较轻'
        : 'Fits wrist curve, comfortable for long wear, lightweight design',
      color: '#0066CC',
    },
    {
      icon: <Activity size={40} />,
      title: language === 'zh' ? '多传感器集成' : 'Multi-sensor Integration',
      description: language === 'zh'
        ? '根据智能穿戴设备的不同，搭载不同作用多种传感器'
        : 'Various sensors integrated based on different wearable device types',
      color: '#FF7A30',
    },
    {
      icon: <Battery size={40} />,
      title: language === 'zh' ? '超长续航' : 'Long Battery Life',
      description: language === 'zh'
        ? '优化电路设计，72小时续航，低功耗算法'
        : 'Optimized circuit design, 72-hour battery life, low-power algorithm',
      color: '#00B894',
    },
    {
      icon: <Heart size={40} />,
      title: language === 'zh' ? '防水防尘' : 'Water & Dust Resistant',
      description: language === 'zh'
        ? 'IP68防护等级，支持游泳与水下运动'
        : 'IP68 rating, supports swimming and underwater activities',
      color: '#0066CC',
    },
  ];

  const designProcess = [
    {
      step: '01',
      title: language === 'zh' ? '设计思路' : 'Design Approach',
      description: language === 'zh'
        ? '以"轻量化+高集成"为核心理念，在有限空间内实现多传感器融合，平衡性能、续航与佩戴舒适度，打造极致用户体验'
        : 'Core concept of "lightweight + high integration", achieving multi-sensor fusion in limited space, balancing performance, battery life and comfort',
    },
    {
      step: '02',
      title: language === 'zh' ? '设计痛点' : 'Design Challenges',
      description: language === 'zh'
        ? '突破传统材料限制，采用航空级铝合金+TR90+钛合金等新材料组合，结合立体化PCB布局、模块化传感器集成、多天线隔离等巧妙结构设计，成功解决"轻量化+高集成"的矛盾问题'
        : 'Breaking traditional material limits with aerospace aluminum + TR90 + titanium alloy combinations, utilizing 3D PCB layout, modular sensor integration, multi-antenna isolation to solve "lightweight + high integration" paradox',
    },
    {
      step: '03',
      title: language === 'zh' ? '结构设计' : 'Structural Design',
      description: language === 'zh'
        ? '航空级铝合金外壳设计，电路板布局优化，天线设计，热管理方案'
        : 'Aerospace-grade aluminum shell, PCB layout optimization, antenna design',
    },
    {
      step: '04',
      title: language === 'zh' ? '技术亮点' : 'Technical Highlights',
      description: language === 'zh'
        ? '完成设计后，团队对15+种候选材料进行反复对比测试，综合评估性能、成本、供应链稳定性。通过3D打印快速验证→CNC手板精修→注塑试模→小批量试产的完整流程，每个阶段进行跌落、防水、续航、信号等多维度测试，历经6轮样品迭代优���，最终在保证品质的前提下将成本控制在预算范围内'
        : 'After design completion, team compared 15+ candidate materials, evaluating performance, cost, and supply chain stability. Through 3D printing validation → CNC prototype refinement → injection molding trial → small-batch production process, conducting drop, waterproof, battery, signal tests at each stage. 6 rounds of sample iteration, achieving quality while controlling costs within budget',
    },
  ];

  const technicalSpecs = {
    watch: {
      title: language === 'zh' ? '智能手表' : 'Smart Watch',
      specs: [
        { label: language === 'zh' ? '外壳材质' : 'Shell Material', value: language === 'zh' ? '航空级铝合金 + 陶瓷后盖' : 'Aerospace Aluminum + Ceramic Back' },
        { label: language === 'zh' ? '屏幕' : 'Display', value: language === 'zh' ? '1.4英寸 AMOLED 高亮屏' : '1.4" AMOLED High-brightness Screen' },
        { label: language === 'zh' ? '重量' : 'Weight', value: '35g' },
        { label: language === 'zh' ? '防水等级' : 'Water Resistance', value: 'IP68 (50m)' },
        { label: language === 'zh' ? '续航时间' : 'Battery Life', value: language === 'zh' ? '72小时（典型使用）' : '72 hours (typical use)' },
        { label: language === 'zh' ? '传感器' : 'Sensors', value: language === 'zh' ? '心率/血氧/加速度/陀螺仪/地磁/���压/环境光/温度' : 'HR/SpO2/ACC/GYRO/MAG/BARO/ALS/TEMP' },
        { label: language === 'zh' ? '连接' : 'Connectivity', value: 'Bluetooth 5.2 / NFC' },
        { label: language === 'zh' ? '工艺' : 'Process', value: language === 'zh' ? 'CNC精雕 + 阳极氧化 + 蓝宝石玻璃' : 'CNC Machining + Anodizing + Sapphire Glass' },
      ],
      color: '#0066CC',
    },
    earphones: {
      title: language === 'zh' ? '智能耳机' : 'Smart Earphones',
      specs: [
        { label: language === 'zh' ? '外壳材质' : 'Shell Material', value: language === 'zh' ? '工程塑料 + 金属装饰件' : 'Engineering Plastic + Metal Trim' },
        { label: language === 'zh' ? '驱动单元' : 'Driver', value: language === 'zh' ? '10mm动圈 + 主动降噪' : '10mm Dynamic + ANC' },
        { label: language === 'zh' ? '重量' : 'Weight', value: language === 'zh' ? '单只4.5g / 充电盒约50g' : '4.5g per unit / Case ~50g' },
        { label: language === 'zh' ? '防水等级' : 'Water Resistance', value: 'IPX4' },
        { label: language === 'zh' ? '续航时间' : 'Battery Life', value: language === 'zh' ? '8小时（含充电盒32小时）' : '8 hours (32 hours with case)' },
        { label: language === 'zh' ? '传感器' : 'Sensors', value: language === 'zh' ? '红外光学入耳检测、电容式触控、双MEMS麦克风（支持ANC主动降噪）' : 'Infrared Optical In-ear Detection, Capacitive Touch, Dual MEMS Mics (ANC Support)' },
        { label: language === 'zh' ? '连接' : 'Connectivity', value: 'Bluetooth 5.3' },
        { label: language === 'zh' ? '工艺' : 'Process', value: language === 'zh' ? '注塑成型 + 表面喷涂' : 'Injection Molding + Surface Spraying' },
      ],
      color: '#FF7A30',
    },
    glasses: {
      title: language === 'zh' ? '智能眼镜' : 'Smart Glasses',
      specs: [
        { label: language === 'zh' ? '镜框材质' : 'Frame Material', value: language === 'zh' ? 'TR90 + 钛合金' : 'TR90 + Titanium Alloy' },
        { label: language === 'zh' ? '镜片' : 'Lens', value: language === 'zh' ? '偏光镜片 + UV400防护' : 'Polarized Lens + UV400 Protection' },
        { label: language === 'zh' ? '重量' : 'Weight', value: '40g' },
        { label: language === 'zh' ? '防护等级' : 'Protection', value: 'IPX4' },
        { label: language === 'zh' ? '续航时间' : 'Battery Life', value: language === 'zh' ? '6小时' : '6 hours' },
        { label: language === 'zh' ? '传感器' : 'Sensors', value: language === 'zh' ? '陀螺仪/加速度/接近传感器' : 'GYRO/ACC/Proximity Sensor' },
        { label: language === 'zh' ? '连接' : 'Connectivity', value: 'Bluetooth 5.2' },
        { label: language === 'zh' ? '工艺' : 'Process', value: language === 'zh' ? '注塑成型 + 电镀/喷涂' : 'Injection Molding + Electroplating/Spraying' },
      ],
      color: '#00B894',
    },
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={language === 'zh' ? '智能穿戴设备工业设计案例 - 工业设计 - 墨方智能科技' : 'Smart Wearable Device Industrial Design Case - Industrial Design - Mofang Tech'}
        description={language === 'zh' 
          ? '墨方智能科技智能穿戴设备工业设计案例，采用航空级铝合金外壳，集成多传感器系统，续航72小时，获得IF设计奖。提供从概念设计到生产对接的全流程服务。'
          : 'Mofang Tech smart wearable device industrial design case, featuring aerospace-grade aluminum shell, multi-sensor integration, 72-hour battery life, IF Design Award winner.'}
        keywords={language === 'zh'
          ? '智能穿戴设备,可穿戴设备设计,智能手环,工业设计,结构设计,人体工学,多传感器,航空铝合金,墨方智能科技'
          : 'smart wearable,wearable device design,smart band,industrial design,structural design,ergonomics,multi-sensor,aerospace aluminum,Mofang Tech'}
        path="/wearable-device"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C2C2C] to-[#0066CC]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={smartWearableImage} 
            alt="智能穿戴设备"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              to="/industrial-design"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              {language === 'zh' ? '返回工业设计' : 'Back to Industrial Design'}
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {projectInfo.title}
            </h1>
            <p className="text-xl text-gray-200">
              {projectInfo.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-start"
            >
              <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{projectInfo.client}</p>
              <p className="text-base lg:text-lg font-semibold text-[#2C2C2C] leading-snug">{projectInfo.clientName}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-start"
            >
              <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{projectInfo.duration}</p>
              <p className="text-base lg:text-lg font-semibold text-[#2C2C2C] leading-snug">{projectInfo.durationTime}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-start"
            >
              <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{projectInfo.category}</p>
              <p className="text-base lg:text-lg font-semibold text-[#2C2C2C] leading-snug">{projectInfo.categoryName}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-start"
            >
              <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{projectInfo.service}</p>
              <p className="text-base lg:text-lg font-semibold text-[#2C2C2C] leading-snug">{projectInfo.serviceName}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center flex flex-col items-center justify-start"
            >
              <p className="text-sm text-gray-500 mb-2 whitespace-nowrap">{projectInfo.coreChallenge}</p>
              <p className="text-base lg:text-lg font-semibold text-[#2C2C2C] leading-snug">{projectInfo.coreChallengeDesc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={smartWearableImage} 
              alt="智能穿戴设备产品图"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Design Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '设计亮点' : 'Design Highlights'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '融合美学与技术，打造极致用户体验'
                : 'Combining aesthetics and technology for ultimate user experience'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-8 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div
                  className="mb-4 inline-flex p-3 rounded-lg"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <div style={{ color: feature.color }}>{feature.icon}</div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '设计目标' : 'Design Goals'}</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.values(technicalSpecs).map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Device Title Header */}
                <div 
                  className="py-4 px-6 text-center"
                  style={{ backgroundColor: `${device.color}15` }}
                >
                  <h3 
                    className="text-xl font-bold"
                    style={{ color: device.color }}
                  >
                    {device.title}
                  </h3>
                </div>
                
                {/* Specs List */}
                <div className="p-6">
                  <div className="space-y-4">
                    {device.specs.map((spec, specIndex) => (
                      <div 
                        key={specIndex} 
                        className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                      >
                        <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                        <p className="text-[#2C2C2C] font-semibold text-base">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="mb-4">{language === 'zh' ? '设计思路与技术亮点' : 'Design Approach & Technical Highlights'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh'
                ? '从用户研究到生产落地，全流程专业服务'
                : 'From user research to production, full professional service'}
            </p>
          </motion.div>

          <div className="space-y-12">
            {designProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0066CC] to-[#00B894] flex items-center justify-center text-white text-2xl font-bold">
                    {process.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-[#2C2C2C]">{process.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 leading-relaxed">
            {language === 'zh' 
              ? '以上内容为基于行业前沿技术和过往案例的设计目标与方案，旨在展示我们的工业设计与研发能力。最终产品规格及应用效果可能因量产需求与制作预算等各有差异。'
              : 'The above content represents design goals and solutions based on cutting-edge industry technology and past cases, aiming to showcase our industrial design and R&D capabilities. Final product specifications and application effects may vary due to mass production requirements and budget constraints.'}
          </p>
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
            <h2 className="mb-6 text-white">
              {language === 'zh' ? '开启您的工业设计项目' : 'Start Your Industrial Design Project'}
            </h2>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}