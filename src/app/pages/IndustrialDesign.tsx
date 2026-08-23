import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Lightbulb, Package, CheckCircle, Target } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import smartWearableImage from 'figma:asset/5429af07af3c02fa27d18149678b9bb7ccb981a5.png';
import roboticArmImage from 'figma:asset/d2fc3828de75a4b4160d194e209a466421445b5a.png';
import smartHomeImage from 'figma:asset/6535ad4347d37e8e376ef4383e865a0f998fc741.png';
import automationEquipmentImage from 'figma:asset/e827403943e279191731b2ab58c4000b5908da48.png';
import mechanicalDesignImage from 'figma:asset/664ad5bdb4184c5b232084803976bad52dcda008.png';
import applianceDesignImage from 'figma:asset/27d143674b91c093bba530a13b9d743f3bbf341f.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function IndustrialDesign() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'smart-hardware', label: '智能硬件' },
    { id: 'machinery', label: '机械设备' },
    { id: 'consumer-electronics', label: '消费电子' },
  ];

  const capabilities = [
    {
      icon: <Lightbulb size={32} />,
      title: '机械设计',
      description: '精密机械结构设计，符合工业标准与制造工艺要求',
      color: '#0066CC',
    },
    {
      icon: <Package size={32} />,
      title: '机电一体化',
      description: '集成电子电路与机械结构，实现智能化产品功能',
      color: '#00B894',
    },
    {
      icon: <CheckCircle size={32} />,
      title: '外观设计',
      description: 'CMF设计，人机工程学优化，提升产品美感与体验',
      color: '#FF7A30',
    },
    {
      icon: <Target size={32} />,
      title: '一体化解决方案',
      description: '从概念设计到生产对接，提供全流程技术支持',
      color: '#0066CC',
    },
  ];

  const cases = [
    {
      id: 1,
      name: '智能穿戴设备',
      category: 'smart-hardware',
      image: smartWearableImage,
      description: '轻量化结构设计，人体工学优化',
      details: '采用航空级铝合金外壳，集成多传感器系统，续航时间达72小时',
      link: '/wearable-device',
    },
    {
      id: 2,
      name: '工业机械臂',
      category: 'machinery',
      image: roboticArmImage,
      description: '工业机械臂，适用于大型制造生产线',
      details: '六轴关节设计，最大负载25kg，重复定位精度±0.05mm，适配焊接、搬运、装配等工序',
      link: '/robotic-arm',
    },
    {
      id: 3,
      name: '智能家居产品系列',
      category: 'consumer-electronics',
      image: smartHomeImage,
      description: '全屋智能控制系统，打造舒适智慧生活',
      details: '含智能中控屏、恒温花洒、触控灯光开关、智能窗帘/空调面板，zigbee+WiFi双协议，语音控制，场景联动',
      link: '/smart-home-system',
    },
    {
      id: 4,
      name: '电器造型设计',
      category: 'consumer-electronics',
      image: applianceDesignImage,
      description: '现代家电美学设计，融合功能与艺术',
      details: 'CMF设计创新，极简主义风格，柔和圆润线条，隐藏式按键交互，哑光喷涂工艺，荣获IF设计奖，市场用户满意度92%',
    },
    {
      id: 5,
      name: '机械与机电外观与结构设计',
      category: 'machinery',
      image: mechanicalDesignImage,
      description: '精密机械结构设计，机电一体化集成方案',
      details: '采用参数化建模，应力仿真分析，轻量化结构优化，电路板与机械结构协同设计，热管理系统集成，装配公差控制±0.02mm',
    },
    {
      id: 6,
      name: '自动化生产设备外观设计',
      category: 'machinery',
      image: automationEquipmentImage,
      description: '模块化工业设备设计，安全性与维护便利性优先',
      details: '符合CE/ISO安全标准，人机交互界面优化，设备占地面积减少20%，维护时间缩短40%',
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
            工业设计
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            结合机械、机电、外观于一体的多方面全面工业设计
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
            <h2 className="mb-4">核心能力</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              多学科融合的设计能力，满足工业级产品开发需求
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
                            查看详情
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
            <h2 className="mb-4">精选案例详解</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              深度剖析我们的设计项，展示从概念到落地的完整技术实力
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
              <h3 className="mb-2 text-[#0066CC]">智能穿戴设备</h3>
              <h4 className="mb-6 text-gray-600">结构解析与设计亮点</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>材料选择：</strong></p>
                    <p className="text-gray-600 text-sm">
                      航空级铝合金CNC加工，表面阳极氧化处理，兼顾轻量化与强度要求
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>人机工程：</strong></p>
                    <p className="text-gray-600 text-sm">
                      基于人体工学数据优化曲线设计，长时间佩戴无压迫感
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>机电集成：</strong></p>
                    <p className="text-gray-600 text-sm">
                      多传感器紧布局，电池与主板分层设计，有效散热管理
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#0066CC] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>工艺优化：</strong></p>
                    <p className="text-gray-600 text-sm">
                      结构优化设计，降低制造成本，提高良品率
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
              <h3 className="mb-2 text-[#00B894]">工业机械臂</h3>
              <h4 className="mb-6 text-gray-600">精密机械臂设计</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>技术规格：</strong></p>
                    <p className="text-gray-600 text-sm">
                      六轴关节设计，最大负载25kg，重复定位精度±0.05mm，工作半径1850mm
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>结构创新：</strong></p>
                    <p className="text-gray-600 text-sm">
                      采用中空臂身设计，内置线缆保护系统，铝合金铸造+钢材复合结构，减重18%同时提升刚性
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>应用场景：</strong></p>
                    <p className="text-gray-600 text-sm">
                      适配汽车制造、电子组装、焊接、搬运、喷涂等多种工业场景，模块化设计便于快速部署
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#00B894] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>智能化升级：</strong></p>
                    <p className="text-gray-600 text-sm">
                      集成视觉系统与力传感器，支持示教编程与AI路径规划，生产效率提升35%
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
              <h3 className="mb-2 text-[#FF7A30]">自动化生产设备外观设计</h3>
              <h4 className="mb-6 text-gray-600">模块化设计与安全性优先</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>智能化人机交互：</strong></p>
                    <p className="text-gray-600 text-sm">
                      15.6英寸工业触摸屏，3D可视化监控界面，实时显示设备运行状态、机械臂动作轨迹及生产数据
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>安全防护结构：</strong></p>
                    <p className="text-gray-600 text-sm">
                      防护罩快拆结构设计，符合CE/ISO13849安全标准，紧急停止按钮易于触及，安全光栅联动保护
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>模块化维护设计：</strong></p>
                    <p className="text-gray-600 text-sm">
                      侧面板采用快拆卡扣设计，核心部件可独立拆卸更换，维护时间从2小时缩短至40分钟，减少停机损失
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>空间优化设计：</strong></p>
                    <p className="text-gray-600 text-sm">
                      紧凑型结构布局，设备占地面积减少20%，垂直空间利用率提升，LED状态指示灯带便于远程监控
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#FF7A30] rounded-full mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <p className="mb-1"><strong>工业美学设计：</strong></p>
                    <p className="text-gray-600 text-sm">
                      银灰色金属外壳配蓝色科技灯带，圆润流线型造型，在满足工业功能的同时提升车间视觉形象
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
            <h2 className="mb-6 text-white">获取工业设计解决方案</h2>
            <p className="text-gray-300 mb-8 text-lg">
              提供从概念设计到生产对接的全流程技术支持
            </p>
            <Link
              to="/industrial-order"
              className="inline-flex items-center bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors"
            >
              立即咨询
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="industrial" />
    </div>
  );
}