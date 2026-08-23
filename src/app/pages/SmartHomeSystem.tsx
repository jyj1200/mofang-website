import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Home, Wifi, Smartphone, Shield, Droplets, Lightbulb, 
  Sun, Wind, Lock, Thermometer, Coffee, Moon, Tv, Radio 
} from 'lucide-react';
import smartHomeControlImage from 'figma:asset/66b42493cead6a2e0e39d3b380f3599c407295ca.png';
import awayModeImage from 'figma:asset/32c15b8efdd74f1501d6c41b7b707edadc15977e.png';

export function SmartHomeSystem() {
  const { language } = useLanguage();

  const livingRoomImage = "https://images.unsplash.com/photo-1774437290569-4c7061cae2c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwc21hcnQlMjBsaWdodGluZyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzc1MTEzMTEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const bedroomImage = "https://images.unsplash.com/photo-1774437290627-a06f6cd768e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwc2xlZXAlMjBtb2RlJTIwc21hcnQlMjBob21lJTIwYW1iaWVudHxlbnwxfHx8fDE3NzUxMTMxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  const theaterImage = "https://images.unsplash.com/photo-1721733258410-35e699661ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwdGhlYXRlciUyMG1vdmllJTIwbW9kZSUyMHNtYXJ0JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NzUxMTMxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  const pageInfo = {
    zh: {
      title: '全屋智能控制系统',
      subtitle: '一站式打造舒适、便捷、安全的智慧家庭生活',
      backLink: '返回工业设计',
    },
    en: {
      title: 'Whole-Home Smart Control System',
      subtitle: 'One-stop solution for comfortable, convenient, and secure smart home living',
      backLink: 'Back to Industrial Design',
    },
  }[language];

  // 核心产品特性
  const coreFeatures = [
    {
      icon: <Home size={40} />,
      title: language === 'zh' ? '全屋设备集中管控' : 'Centralized Device Control',
      description: language === 'zh' 
        ? '一块屏幕掌控全屋智能设备，灯光、空调、窗帘、安防一键操作'
        : 'Control all smart devices from one screen - lighting, AC, curtains, security',
      color: '#0066CC',
    },
    {
      icon: <Wifi size={40} />,
      title: language === 'zh' ? '双协议稳定互联' : 'Dual Protocol Stable Connection',
      description: language === 'zh'
        ? 'Zigbee 3.0+WIFI 2.4G+5G 双芯双网，全屋智能更稳更快'
        : 'Zigbee 3.0 + WiFi 2.4G+5G dual-chip dual-network, more stable and faster smart home',
      color: '#00B894',
    },
    {
      icon: <Smartphone size={40} />,
      title: language === 'zh' ? '语音交互控制' : 'Voice Interaction',
      description: language === 'zh'
        ? '支持语音唤醒与命令执行，解放双手，自然交互更便捷'
        : 'Voice wake-up and command execution, hands-free natural interaction',
      color: '#FF7A30',
    },
    {
      icon: <Shield size={40} />,
      title: language === 'zh' ? '场景一键联动' : 'One-Touch Scene Linking',
      description: language === 'zh'
        ? '预设回家、离家、睡眠、观影等场景，一键开启智慧生活'
        : 'Preset scenes for home, away, sleep, movie modes - smart living at one touch',
      color: '#0066CC',
    },
  ];

  // 配套智能硬件
  const smartDevices = [
    {
      icon: <Droplets size={32} />,
      name: language === 'zh' ? '恒温花洒' : 'Thermostatic Shower',
      description: language === 'zh' ? '精准温控，舒适体验' : 'Precise temperature control',
      color: '#0066CC',
    },
    {
      icon: <Lightbulb size={32} />,
      name: language === 'zh' ? '触控灯光开关' : 'Touch Light Switch',
      description: language === 'zh' ? '智能调光，氛围营造' : 'Smart dimming, ambiance',
      color: '#FF7A30',
    },
    {
      icon: <Sun size={32} />,
      name: language === 'zh' ? '智能窗帘面板' : 'Smart Curtain Panel',
      description: language === 'zh' ? '定时开合，光线调节' : 'Timed control, light adjustment',
      color: '#00B894',
    },
    {
      icon: <Wind size={32} />,
      name: language === 'zh' ? '智能空调面板' : 'Smart AC Panel',
      description: language === 'zh' ? '远程温控，节能高效' : 'Remote control, energy efficient',
      color: '#0066CC',
    },
    {
      icon: <Lock size={32} />,
      name: language === 'zh' ? '智能门锁' : 'Smart Door Lock',
      description: language === 'zh' ? '多重验证，安全可靠' : 'Multi-factor authentication',
      color: '#FF7A30',
    },
    {
      icon: <Thermometer size={32} />,
      name: language === 'zh' ? '环境传感器' : 'Environment Sensor',
      description: language === 'zh' ? '实时监测，智能联动' : 'Real-time monitoring, smart linkage',
      color: '#00B894',
    },
  ];

  // 系统优势
  const systemAdvantages = [
    {
      step: '01',
      title: language === 'zh' ? '全场景联动' : 'Full Scene Linkage',
      description: language === 'zh'
        ? '自定义回家、离家等智慧场景，让设备随时间、位置、环境自动联动执行。基于多条件触发逻辑，打造个性化、自动化、沉浸式的智慧生活体验，真正实现场景自动执行、生活无需等待。'
        : 'Customize smart scenes like home, away, sleep, movie modes with multi-device automatic linkage. Support time, location, environmental triggers for truly intuitive smart living experience.',
    },
    {
      step: '02',
      title: language === 'zh' ? '多协议兼容' : 'Multi-Protocol Compatible',
      description: language === 'zh'
        ? '支持Zigbee、WiFi、蓝牙、红外等主流智能家居协议，兼容市面上90%以上品牌设备。无需更换现有设备，即可实现全屋智能升级，保护用户投资。'
        : 'Support Zigbee, WiFi, Bluetooth, IR protocols, compatible with 90%+ brand devices. Upgrade to smart home without replacing existing devices, protecting user investment.',
    },
    {
      step: '03',
      title: language === 'zh' ? '多端控制' : 'Multi-Terminal Control',
      description: language === 'zh'
        ? '中控屏、手机APP、语音音箱、遥控器多入口操作，随时随地掌控家居状态。支持远程控制，即使出门在外也能实时查看家中情况，确保安全。'
        : 'Control via central panel, mobile app, voice speaker, remote control - manage home from anywhere. Remote control support ensures home security even when away.',
    },
    {
      step: '04',
      title: language === 'zh' ? '安全稳定' : 'Secure & Stable',
      description: language === 'zh'
        ? '本地+云端双备份机制，断网仍可运行。采用加密技术，保护用户隐私数据安全。7×24小时系统监控，故障自动报警，确保系统稳定运行。'
        : 'Local + cloud dual backup, works even offline. Financial-grade encryption protects user privacy. 24/7 system monitoring with automatic fault alerts ensures stable operation.',
    },
  ];

  // 智能场景展示
  const smartScenes = [
    {
      icon: <Coffee size={48} />,
      title: language === 'zh' ? '回家模式' : 'Home Mode',
      image: livingRoomImage,
      description: language === 'zh'
        ? '门锁识别指纹后，自动打开玄关灯、客厅灯，空调调至舒适温度，窗帘自动开启，背景音乐响起，迎接温馨回家时刻。'
        : 'Door lock fingerprint triggers entrance lights, living room lights, AC to comfort temp, curtains open, background music plays - welcoming you home.',
      color: '#0066CC',
    },
    {
      icon: <Lock size={48} />,
      title: language === 'zh' ? '离家模式' : 'Away Mode',
      image: awayModeImage,
      description: language === 'zh'
        ? '一键关闭全屋灯光、空调、电视等设备，门窗传感器进入布防状态，摄像头开启监控，智能门锁上锁，守护家庭安全。'
        : 'One-touch turns off all lights, AC, TV; door/window sensors enter armed state, cameras start monitoring, smart lock engages - home security assured.',
      color: '#00B894',
    },
    {
      icon: <Moon size={48} />,
      title: language === 'zh' ? '睡眠模式' : 'Sleep Mode',
      image: bedroomImage,
      description: language === 'zh'
        ? '自动关闭客厅灯光，卧室灯光调至夜间模式，窗帘完全闭合，空调调节至睡眠温度，启动安防系统，营造舒适睡眠环境。'
        : 'Auto turns off living room lights, bedroom lights to night mode, curtains close, AC to sleep temp, security system on - perfect sleep environment.',
      color: '#FF7A30',
    },
    {
      icon: <Tv size={48} />,
      title: language === 'zh' ? '观影模式' : 'Movie Mode',
      image: theaterImage,
      description: language === 'zh'
        ? '灯光自动调暗至影院效果，窗帘闭合遮挡外界光线，投影/电视自动开启，音响系统启动，打造沉浸式观影体验。'
        : 'Lights dim to theater effect, curtains close blocking outside light, projector/TV on, sound system activates - immersive viewing experience.',
      color: '#0066CC',
    },
  ];

  // 技术参数
  const technicalSpecs = [
    { 
      label: language === 'zh' ? '显示屏' : 'Display', 
      value: language === 'zh' ? '7-10英寸高清触控屏' : '7-10\" HD Touchscreen' 
    },
    { 
      label: language === 'zh' ? '通信协议' : 'Protocol', 
      value: 'Zigbee 3.0 / WiFi 2.4G+5G / Bluetooth 5.2' 
    },
    { 
      label: language === 'zh' ? '语音助手' : 'Voice Assistant', 
      value: language === 'zh' ? 'AI智能语音，支持多语言' : 'AI Voice, Multi-language Support' 
    },
    { 
      label: language === 'zh' ? '设备容量' : 'Device Capacity', 
      value: language === 'zh' ? '支持40+稳定设备接入，满足大户型全屋需求' : 'Supports 40+ stable devices, meets large home needs' 
    },
    { 
      label: language === 'zh' ? '场景数量' : 'Scenes', 
      value: language === 'zh' ? '支持50+自定义场景' : 'Supports 50+ Custom Scenes' 
    },
    { 
      label: language === 'zh' ? '供电方式' : 'Power Supply', 
      value: language === 'zh' ? 'DC 12V / PoE供电' : 'DC 12V / PoE Power' 
    },
    { 
      label: language === 'zh' ? '安装方式' : 'Installation', 
      value: language === 'zh' ? '壁挂/桌面双模式' : 'Wall-mount / Desktop Dual Mode' 
    },
    { 
      label: language === 'zh' ? '工作温度' : 'Operating Temp', 
      value: '-10°C ~ 50°C' 
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title={language === 'zh' ? '全屋智能控制系统 - 工业设计 - 墨方智能科技' : 'Whole-Home Smart Control System - Industrial Design - Mofang Tech'}
        description={language === 'zh' 
          ? '墨方智能科技全屋智能控制系统，支持Zigbee+WiFi双协议，语音交互控制，全场景联动，配套恒温花洒、智能开关等硬件，打造舒适便捷的智慧家庭生活。'
          : 'Mofang Tech whole-home smart control system, Zigbee+WiFi dual protocol, voice interaction, full scene linkage, with thermostatic shower, smart switches for comfortable smart living.'}
        keywords={language === 'zh'
          ? '全屋智能,智能家居系统,智能中控屏,Zigbee,WiFi,语音控制,场景联动,智能硬件,墨方智能科技'
          : 'whole-home smart,smart home system,smart control panel,Zigbee,WiFi,voice control,scene linkage,smart hardware,Mofang Tech'}
        path="/smart-home-system"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C2C2C] to-[#0066CC]">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={smartHomeControlImage} 
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
              src={smartHomeControlImage} 
              alt={language === 'zh' ? '智能中控屏' : 'Smart Control Panel'}
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
              {language === 'zh' ? '智能中控屏 - 全屋智慧核心' : 'Smart Control Panel - The Heart of Smart Home'}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh'
                ? '一体化智能中控屏，采用高清触控大屏设计，采用AI语音交互，一句话便可操控灯光、窗帘、空调等全屋设备、内置本地场景联动引擎，断网可用。白色简约机身，外置高增益天线，大幅提升信号能力与覆盖范围。高稳定性设计，支持7*24小稳定运行，为全屋智能筑牢核心中枢。'
                : 'Integrated smart control panel with HD touchscreen, Zigbee & WiFi dual protocol modules, AI voice interaction, local scene linkage engine. Minimalist white design with high-gain antenna for whole-home coverage. Industrial-grade stability for 24/7 reliable operation.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '核心功能' : 'Core Features'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '四大核心功能，打造极致智能家居体验'
                : 'Four core functions for ultimate smart home experience'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '技术参数' : 'Technical Specifications'}</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSpecs.map((spec, index) => (
                <div 
                  key={index} 
                  className="pb-4 border-b border-gray-100 last:border-b-0"
                >
                  <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                  <p className="text-[#2C2C2C] font-semibold">{spec.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Devices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '配套智能硬件' : 'Compatible Smart Devices'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '完整的智能硬件生态，覆盖全屋各个场景'
                : 'Complete smart hardware ecosystem covering all home scenarios'}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {smartDevices.map((device, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="mb-3 inline-flex p-3 rounded-full"
                  style={{ backgroundColor: `${device.color}15` }}
                >
                  <div style={{ color: device.color }}>{device.icon}</div>
                </div>
                <h4 className="font-semibold mb-1 text-sm">{device.name}</h4>
                <p className="text-xs text-gray-500">{device.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Scenes */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '智能场景' : 'Smart Scenes'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '预设多种生活场景，一键开启智慧生活'
                : 'Preset life scenarios, one-touch smart living'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smartScenes.map((scene, index) => (
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
                    src={scene.image} 
                    alt={scene.title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute top-4 left-4 p-3 rounded-full bg-white/90 backdrop-blur-sm"
                    style={{ color: scene.color }}
                  >
                    {scene.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: scene.color }}
                  >
                    {scene.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {scene.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{language === 'zh' ? '系统优势' : 'System Advantages'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh'
                ? '专业可靠的智能家居解决方案'
                : 'Professional and reliable smart home solution'}
            </p>
          </motion.div>

          <div className="space-y-12">
            {systemAdvantages.map((advantage, index) => (
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
                    {advantage.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-[#2C2C2C]">{advantage.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Architecture Diagram */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">{language === 'zh' ? '系统架构' : 'System Architecture'}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '中控屏作为智能家居核心枢纽，连接各类智能设备'
                : 'Central panel as smart home hub, connecting various smart devices'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col items-center">
              {/* Central Hub */}
              <div className="bg-gradient-to-br from-[#0066CC] to-[#00B894] text-white p-6 rounded-2xl shadow-lg mb-8">
                <Radio size={40} className="mx-auto mb-2" />
                <p className="font-bold text-lg">
                  {language === 'zh' ? '智能中控屏' : 'Smart Control Panel'}
                </p>
                <p className="text-sm text-white/80 mt-1">
                  {language === 'zh' ? 'Zigbee + WiFi' : 'Zigbee + WiFi'}
                </p>
              </div>

              {/* Connection Lines */}
              <div className="w-px h-12 bg-gradient-to-b from-[#0066CC] to-transparent"></div>

              {/* Connected Devices Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
                {smartDevices.map((device, index) => (
                  <div
                    key={index}
                    className="bg-[#FAFAFA] p-4 rounded-lg text-center border-2 border-dashed border-gray-200 hover:border-[#0066CC] transition-colors"
                  >
                    <div style={{ color: device.color }} className="mb-2 flex justify-center">
                      {device.icon}
                    </div>
                    <p className="text-sm font-semibold">{device.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
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
              {language === 'zh' ? '开启您的智能家居项目' : 'Start Your Smart Home Project'}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {language === 'zh'
                ? '专业的工业设计团队，为您提供从概念设计到生产落地的全流程服务'
                : 'Professional industrial design team providing full-service from concept to production'}
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