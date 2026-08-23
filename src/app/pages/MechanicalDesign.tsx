import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Cpu, 
  Settings, 
  Layers,
  Zap,
  Shield,
  TrendingUp,
  Boxes,
  Gauge,
  Wrench,
  CircuitBoard,
  Palette,
  CheckCircle2
} from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import mechanicalDesignImage from 'figma:asset/664ad5bdb4184c5b232084803976bad52dcda008.png';

export function MechanicalDesign() {
  const { language } = useLanguage();

  const cadImage = "https://images.unsplash.com/photo-1769152683420-f4eff91cb30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVjaXNpb24lMjBtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBkZXNpZ24lMjBDQUR8ZW58MXx8fHwxNzc1MTMyMzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const manufacturingImage = "https://images.unsplash.com/photo-1768734831178-4898bca7225c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJvZHVjdCUyMGRlc2lnbiUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzc1MTMyMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const pcbImage = "https://images.unsplash.com/photo-1731400800900-1bce57414c09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwY2lyY3VpdCUyMGJvYXJkJTIwUENCJTIwZGVzaWdufGVufDF8fHx8MTc3NTEzMjM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const machineryImage = "https://images.unsplash.com/photo-1764114441097-6a475eca993d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFjaGluZXJ5JTIwZXF1aXBtZW50JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3NzUxMzIzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const prototypeImage = "https://images.unsplash.com/photo-1767498051847-b7a2bffcd6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcHJvdG90eXBlJTIwM0QlMjBtb2RlbGluZ3xlbnwxfHx8fDE3NzUxMzIzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const cncImage = "https://images.unsplash.com/photo-1625465104346-1ec72f86a54b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDTkMlMjBtYWNoaW5pbmclMjBtZXRhbCUyMHBhcnRzJTIwcHJlY2lzaW9ufGVufDF8fHx8MTc3NTEzMjM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const pageInfo = {
    zh: {
      title: '机械、机电、外观一体化设计',
      subtitle: '多方位全面工业设计解决方案',
      backLink: '返回工业设计',
    },
    en: {
      title: 'Integrated Mechanical, Electromechanical & Appearance Design',
      subtitle: 'Comprehensive Industrial Design Solutions',
      backLink: 'Back to Industrial Design',
    },
  }[language];

  // 三大核心能力
  const coreCapabilities = [
    {
      icon: <Settings size={48} />,
      title: language === 'zh' ? '机械结构设计' : 'Mechanical Structure Design',
      description: language === 'zh' 
        ? '精密机械结构设计，参数化建模，应力仿真分析，轻量化结构优化，装配公差控制±0.02mm'
        : 'Precision mechanical structure design, parametric modeling, stress simulation, lightweight optimization, assembly tolerance ±0.02mm',
      color: '#0066CC',
      features: [
        language === 'zh' ? '参数化3D建模' : 'Parametric 3D Modeling',
        language === 'zh' ? '有限元仿真分析' : 'FEA Simulation',
        language === 'zh' ? '结构强度验证' : 'Structural Strength Verification',
        language === 'zh' ? '装配工艺优化' : 'Assembly Process Optimization',
      ],
    },
    {
      icon: <CircuitBoard size={48} />,
      title: language === 'zh' ? '机电一体化设计' : 'Electromechanical Integration',
      description: language === 'zh'
        ? '电路板与机械结构协同设计，热管理系统集成，电磁兼容性优化，传感器与执行器布局'
        : 'PCB-mechanical co-design, thermal management integration, EMC optimization, sensor and actuator layout',
      color: '#00B894',
      features: [
        language === 'zh' ? 'PCB布局设计' : 'PCB Layout Design',
        language === 'zh' ? '热管理方案' : 'Thermal Management',
        language === 'zh' ? '电磁兼容设计' : 'EMC Design',
        language === 'zh' ? '线缆走线优化' : 'Cable Routing Optimization',
      ],
    },
    {
      icon: <Palette size={48} />,
      title: language === 'zh' ? '工业外观设计' : 'Industrial Appearance Design',
      description: language === 'zh'
        ? 'CMF设计创新，人机工程学优化，品牌视觉识别，表面处理工艺，符合美学与功能统一'
        : 'CMF design innovation, ergonomic optimization, brand visual identity, surface treatment process, aesthetics and function unity',
      color: '#FF7A30',
      features: [
        language === 'zh' ? 'CMF材质色彩工艺' : 'CMF Design',
        language === 'zh' ? '人机交互设计' : 'Human-Machine Interaction',
        language === 'zh' ? '品牌形象塑造' : 'Brand Image Building',
        language === 'zh' ? '表面处理工艺' : 'Surface Treatment Process',
      ],
    },
  ];

  // 设计流程
  const designProcess = [
    {
      step: '01',
      title: language === 'zh' ? '需求分析' : 'Requirement Analysis',
      description: language === 'zh'
        ? '深入了解客户需求、行业标准、使用场景、性能指标、成本预算等关键信息，制定详细的设计规格书（Design Specification）'
        : 'In-depth understanding of client needs, industry standards, usage scenarios, performance metrics, budget, creating detailed design specifications',
      icon: <Gauge size={32} />,
      color: '#0066CC',
    },
    {
      step: '02',
      title: language === 'zh' ? '概念设计' : 'Concept Design',
      description: language === 'zh'
        ? '头脑风暴、草图绘制、多方案对比，结合机械、机电、外观三方面进行初步设计，快速迭代验证可行性'
        : 'Brainstorming, sketching, multi-option comparison, preliminary design integrating mechanical, electrical, and appearance aspects with rapid iteration',
      icon: <Layers size={32} />,
      color: '#00B894',
    },
    {
      step: '03',
      title: language === 'zh' ? '详细设计' : 'Detailed Design',
      description: language === 'zh'
        ? '3D建模、工程图绘制、零件清单（BOM）、装配仿真、公差分析、电路原理图、PCB布局、热仿真、结构强度验证'
        : '3D modeling, engineering drawings, BOM, assembly simulation, tolerance analysis, circuit schematics, PCB layout, thermal simulation, structural verification',
      icon: <Cpu size={32} />,
      color: '#FF7A30',
    },
    {
      step: '04',
      title: language === 'zh' ? '样品制作' : 'Prototype Production',
      description: language === 'zh'
        ? '3D打印快速成型、CNC手板加工、钣金件制作、电路板打样、零部件采购、样机组装、功能测试、外观验证'
        : '3D printing rapid prototyping, CNC machining, sheet metal fabrication, PCB prototype, parts procurement, prototype assembly, functional testing, appearance verification',
      icon: <Boxes size={32} />,
      color: '#0066CC',
    },
    {
      step: '05',
      title: language === 'zh' ? '测试优化' : 'Testing & Optimization',
      description: language === 'zh'
        ? '性能测试、可靠性测试、环境适应性测试（高低温、湿度、振动）、EMC测试、安全认证（CE/UL/FCC），根据测试结果迭代优化'
        : 'Performance testing, reliability testing, environmental testing (temperature, humidity, vibration), EMC testing, safety certification (CE/UL/FCC), iterative optimization',
      icon: <Shield size={32} />,
      color: '#00B894',
    },
    {
      step: '06',
      title: language === 'zh' ? '量产支持' : 'Mass Production Support',
      description: language === 'zh'
        ? 'DFM（可制造性设计）评审、工艺文件编制、供应商对接、模具设计、试产跟进、品质管控、生产成本优化'
        : 'DFM review, process documentation, supplier coordination, mold design, trial production follow-up, quality control, production cost optimization',
      icon: <TrendingUp size={32} />,
      color: '#FF7A30',
    },
  ];

  // 技术亮点
  const technicalHighlights = [
    {
      title: language === 'zh' ? '参数化建模技术' : 'Parametric Modeling',
      description: language === 'zh'
        ? '采用SolidWorks、CATIA、Creo等专业软件进行参数化建模，快速响应设计变更，提升设计效率30%+'
        : 'Using SolidWorks, CATIA, Creo for parametric modeling, fast design change response, 30%+ efficiency improvement',
      icon: <Wrench size={24} />,
    },
    {
      title: language === 'zh' ? '有限元仿真分析' : 'FEA Simulation',
      description: language === 'zh'
        ? '应力、应变、模态、热分析，优化结构设计，减少物理测试次数，缩短开发周期20%+'
        : 'Stress, strain, modal, thermal analysis, optimize structural design, reduce physical testing, 20%+ cycle time reduction',
      icon: <Gauge size={24} />,
    },
    {
      title: language === 'zh' ? '轻量化设计' : 'Lightweight Design',
      description: language === 'zh'
        ? '拓扑优化、材料选型、结构优化，在保证强度前提下实现轻量化，典型项目减重15-25%'
        : 'Topology optimization, material selection, structural optimization, achieving lightweight while maintaining strength, typical 15-25% weight reduction',
      icon: <Layers size={24} />,
    },
    {
      title: language === 'zh' ? '公差分析' : 'Tolerance Analysis',
      description: language === 'zh'
        ? '装配公差链分析，确保零件互换性，装配精度控制在±0.02mm，提升产品一致性'
        : 'Assembly tolerance chain analysis, ensuring part interchangeability, assembly accuracy ±0.02mm, improving product consistency',
      icon: <Settings size={24} />,
    },
    {
      title: language === 'zh' ? '热管理设计' : 'Thermal Management',
      description: language === 'zh'
        ? '散热器设计、风道优化、热仿真分析，确保电子元件工作温度在安全范围内，延长产品寿命'
        : 'Heat sink design, airflow optimization, thermal simulation, ensuring electronic components operate within safe temperature range, extending product life',
      icon: <Zap size={24} />,
    },
    {
      title: language === 'zh' ? 'DFM可制造性设计' : 'DFM Design',
      description: language === 'zh'
        ? '从设计阶段考虑制造工艺，降低生产难度，减少模具成本，提升良品率，典型项目节省制造成本10-15%'
        : 'Considering manufacturing process from design stage, reducing production difficulty, lowering mold costs, improving yield, typical 10-15% cost savings',
      icon: <TrendingUp size={24} />,
    },
  ];

  // 应用领域
  const applicationFields = [
    {
      title: language === 'zh' ? '工业设备' : 'Industrial Equipment',
      description: language === 'zh' ? '自动化生产设备、检测仪器、机械臂' : 'Automation equipment, testing instruments, robotic arms',
      image: machineryImage,
      color: '#0066CC',
    },
    {
      title: language === 'zh' ? '消费电子' : 'Consumer Electronics',
      description: language === 'zh' ? '智能穿戴、智能家居、数码产品' : 'Wearables, smart home, digital products',
      image: prototypeImage,
      color: '#00B894',
    },
    {
      title: language === 'zh' ? '医疗器械' : 'Medical Devices',
      description: language === 'zh' ? '诊断设备、治疗仪器、监护系统' : 'Diagnostic equipment, therapeutic devices, monitoring systems',
      image: pcbImage,
      color: '#FF7A30',
    },
    {
      title: language === 'zh' ? '精密制造' : 'Precision Manufacturing',
      description: language === 'zh' ? 'CNC加工、模具设计、精密零件' : 'CNC machining, mold design, precision parts',
      image: cncImage,
      color: '#0066CC',
    },
  ];

  // 项目案例数据
  const projectStats = [
    {
      number: '50+',
      label: language === 'zh' ? '完成项目' : 'Completed Projects',
      color: '#0066CC',
    },
    {
      number: '92%',
      label: language === 'zh' ? '客户满意度' : 'Client Satisfaction',
      color: '#00B894',
    },
    {
      number: '±0.02mm',
      label: language === 'zh' ? '装配精度' : 'Assembly Accuracy',
      color: '#FF7A30',
    },
    {
      number: '15-25%',
      label: language === 'zh' ? '轻量化减重' : 'Weight Reduction',
      color: '#0066CC',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={language === 'zh' ? '机械机电外观一体化设计 - 工业设计 - 墨方智能科技' : 'Integrated Mechanical Electromechanical Appearance Design - Mofang Tech'}
        description={language === 'zh' 
          ? '墨方智能科技提供机械结构设计、机电一体化设计、工业外观设计一体化解决方案，涵盖参数化建模、有限元仿真、热管理、DFM可制造性设计等全流程服务。'
          : 'Mofang Tech provides integrated mechanical structure design, electromechanical design, and industrial appearance design solutions, covering parametric modeling, FEA simulation, thermal management, DFM design.'}
        keywords={language === 'zh'
          ? '机械设计,机电设计,外观设计,工业设计,结构设计,参数化建模,有限元仿真,DFM,墨方智能科技'
          : 'mechanical design,electromechanical design,appearance design,industrial design,structural design,parametric modeling,FEA simulation,DFM,Mofang Tech'}
        path="/mechanical-design"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C2C2C] to-[#0066CC]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={mechanicalDesignImage} 
            alt={pageInfo.title}
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
              {pageInfo.backLink}
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              {pageInfo.title}
            </h1>
            <p className="text-xl text-gray-200">
              {pageInfo.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product Image */}
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
              src={mechanicalDesignImage} 
              alt={language === 'zh' ? '机械设计案例' : 'Mechanical Design Case'}
              className="w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <h2 className="mb-4">
              {language === 'zh' ? '机械、机电、外观三位一体' : 'Mechanical, Electromechanical, Appearance Integration'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh'
                ? '墨方智能科技拥有机械设计、机电设计、外观设计的完整能力体系，从概念设计到量产落地，提供全流程一站式服务。团队成员来自西南交通大学、西安电子科技大学等知名院校，具备深厚的工程背景和丰富的项目经验，累计完成50+工业设计项目，客户满意度达92%。'
                : 'Mofang Tech has complete capabilities in mechanical, electromechanical, and appearance design, providing one-stop service from concept to mass production. Team members from Southwest Jiaotong University, Xidian University with deep engineering background and rich project experience, completed 50+ industrial design projects with 92% client satisfaction.'}
            </p>
          </motion.div>
        </div>
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
            <h2 className="mb-4">{language === 'zh' ? '三大核心能力' : 'Three Core Capabilities'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '机械、机电、外观设计深度融合，打造高品质工业产品'
                : 'Deep integration of mechanical, electromechanical, appearance design for high-quality industrial products'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-8 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div
                  className="mb-6 inline-flex p-4 rounded-xl"
                  style={{ backgroundColor: `${capability.color}15` }}
                >
                  <div style={{ color: capability.color }}>{capability.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 
                        size={16} 
                        className="mr-2 mt-1 flex-shrink-0"
                        style={{ color: capability.color }}
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#00B894] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '设计流程' : 'Design Process'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh'
                ? '从需求分析到量产支持，六大步骤确保项目成功交付'
                : 'From requirement analysis to mass production support, six steps ensure successful project delivery'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0"
                    style={{ backgroundColor: process.color }}
                  >
                    {process.step}
                  </div>
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${process.color}15`, color: process.color }}
                  >
                    {process.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '技术亮点' : 'Technical Highlights'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh'
                ? '先进的设计工具与方法论，提升设计质量与效率'
                : 'Advanced design tools and methodologies, improving design quality and efficiency'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-3">
                  <div className="p-2 rounded-lg bg-[#0066CC]/10 text-[#0066CC] mr-3">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{highlight.title}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Fields */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '应用领域' : 'Application Fields'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '广泛应用于工业设备、消费电子、医疗器械、精密制造等领域'
                : 'Widely applied in industrial equipment, consumer electronics, medical devices, precision manufacturing'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationFields.map((field, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={field.image} 
                    alt={field.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  ></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: '#FFFFFF' }}
                    >
                      {field.title}
                    </h3>
                    <p className="text-white/90">{field.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Software & Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{language === 'zh' ? '设计软件与工具' : 'Design Software & Tools'}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F5F5F7] to-[#FAFAFA] rounded-2xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { name: 'SolidWorks', category: language === 'zh' ? '机械设计' : 'Mechanical' },
                { name: 'CATIA', category: language === 'zh' ? '曲面建模' : 'Surface Modeling' },
                { name: 'ANSYS', category: language === 'zh' ? '有限元仿真' : 'FEA Simulation' },
                { name: 'Altium Designer', category: language === 'zh' ? 'PCB设计' : 'PCB Design' },
                { name: 'Rhino', category: language === 'zh' ? '外观设计' : 'Appearance' },
                { name: 'KeyShot', category: language === 'zh' ? '渲染' : 'Rendering' },
                { name: 'AutoCAD', category: language === 'zh' ? '工程图' : 'Engineering Drawing' },
                { name: 'MATLAB', category: language === 'zh' ? '算法仿真' : 'Algorithm Simulation' },
              ].map((tool, index) => (
                <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-[#2C2C2C] mb-1">{tool.name}</p>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </div>
              ))}
            </div>
          </motion.div>
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
            <p className="text-lg text-gray-300 mb-8">
              {language === 'zh'
                ? '专业的工业设计团队，为您提供从概念设计到量产落地的全流程服务'
                : 'Professional industrial design team providing full-service from concept to mass production'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/industrial-order"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#0066CC] text-white rounded-lg hover:bg-[#0052A3] transition-colors font-semibold"
              >
                {language === 'zh' ? '立即咨询' : 'Consult Now'}
              </Link>
              <Link
                to="/industrial-design"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold backdrop-blur-sm"
              >
                {language === 'zh' ? '查看更多案例' : 'View More Cases'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}
