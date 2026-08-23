import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Lightbulb, FileText, Cpu, Package, BarChart, Loader2 } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function IndustrialOrder() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    phone: '',
    email: '',
    productType: '',
    projectStage: '',
    timeline: '',
    budget: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-3f503f37/submit-industrial-inquiry`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setStatusMessage(result.message);
        // Reset form
        setFormData({
          name: '',
          company: '',
          industry: '',
          phone: '',
          email: '',
          productType: '',
          projectStage: '',
          timeline: '',
          budget: '',
          requirements: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(result.error || '提交失败，请稍后重试');
        console.error('Submit error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('网络错误，请检查连接后重试');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const servicePackages = [
    {
      name: '概念设计',
      icon: <Lightbulb size={32} />,
      description: '产品创意构思与概念方案',
      includes: ['需求分析', '竞品调研', '概念草图', '3D建模', '渲染效果图'],
      color: '#0066CC',
    },
    {
      name: '结构设计',
      icon: <FileText size={32} />,
      description: '详细的机械结构设计',
      includes: ['结构设计', '工程图纸', 'BOM单', '结构分析', '设计修改'],
      color: '#00B894',
    },
    {
      name: '样机支持',
      icon: <Package size={32} />,
      description: '原型样机制作',
      includes: ['3D打印', '手板制作', '优化迭代', '认证辅导'],
      color: '#FF7A30',
    },
    {
      name: '生产对接',
      icon: <Cpu size={32} />,
      description: '生产工艺与供应链对接',
      includes: ['供应商对接', '工艺优化', '质量把控', '小批量试产', '技术支持'],
      color: '#0066CC',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: '需求对接',
      description: '深入了解产品需求与技术指标',
    },
    {
      step: 2,
      title: '方案设计',
      description: '提供多套设计方案与技术评估',
    },
    {
      step: 3,
      title: '详细设计',
      description: '完成结构设计与工程图纸',
    },
    {
      step: 4,
      title: '样机验证',
      description: '制作样机并测试',
    },
    {
      step: 5,
      title: '优化迭代',
      description: '根据测试结果优化设计',
    },
    {
      step: 6,
      title: '交付支持',
      description: '提供技术文档与生产支持',
    },
  ];

  const technicalSupport = [
    {
      icon: <BarChart size={24} />,
      title: '仿真分析',
      description: '结构强度、流体、热学等多物理场仿真',
    },
    {
      icon: <Cpu size={24} />,
      title: '工艺优化',
      description: '降低制造成本，提高良品率',
    },
    {
      icon: <FileText size={24} />,
      title: '全套项目设计',
      description: '3D建模、效果图渲染、结构机械设计',
    },
    {
      icon: <Package size={24} />,
      title: '供应链支持',
      description: '对接优质供应商资源，保障项目进度',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="工业设计服务 - 墨方智能科技"
        description="墨方智能科技工业设计服务，提供从概念到生产的全流程技术支持，包括概念设计、结构设计、样机制作、生产对接等专业服务。"
        keywords="工业设计服务,产品设计,结构设计,样机制作,机械设计,机电设计,中山工业设计"
        path="/industrial-order"
      />
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-[#2C2C2C] to-[#0066CC]">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white"
          >
            工业设计服务
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            从概念到落地的全流工业设计解决方案
          </motion.p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">服务套餐</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              灵活的服务组合，满足不同阶段的产品开发需求
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#FAFAFA] p-6 rounded-xl hover:shadow-xl transition-shadow"
              >
                <div
                  className="mb-4 inline-flex p-3 rounded-lg"
                  style={{ backgroundColor: `${pkg.color}15` }}
                >
                  <div style={{ color: pkg.color }}>{pkg.icon}</div>
                </div>
                <h4 className="mb-2">{pkg.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <CheckCircle
                        size={16}
                        className="mr-2 flex-shrink-0"
                        style={{ color: pkg.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">服务流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              标准化的项目流程，确保高质量交付
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-6 rounded-xl shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0066CC] to-[#00B894] text-white flex items-center justify-center mb-4 relative z-10">
                    <span className="text-lg">{step.step}</span>
                  </div>
                  <h4 className="mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">技术支持能力</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              专业的技术团队为您的产品保驾护航
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSupport.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#0066CC]/10 text-[#0066CC] flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">项目咨询</h2>
            <p className="text-gray-600">
              填写您的项目需求，我们将为您量身定制解决方案
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">姓名 *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">企业名称 *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder="请输入企业名称"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">所属行业 *</label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">请选择</option>
                  <option value="智能硬件">智能硬件</option>
                  <option value="机械设备">机械设备</option>
                  <option value="消费电子">消费电子</option>
                  <option value="医疗器械">医疗器械</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">联系电话 *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder="请输入联系电话"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">电子邮箱</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                placeholder="请输入电子邮箱"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">产品类型 *</label>
                <input
                  type="text"
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder="例如：智能穿戴设备"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">项目阶段</label>
                <select
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">请选择</option>
                  <option value="概念阶段">概念阶段</option>
                  <option value="详细设计">详细设计</option>
                  <option value="样机制作">样机制作</option>
                  <option value="量产准备">量准备</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">项目周期</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">请选择</option>
                  <option value="1-3个月">1-3个月</option>
                  <option value="3-6个月">3-6个月</option>
                  <option value="6-12个月">6-12个月</option>
                  <option value="12个月以上">12个月以上</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">预算范围</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">请选择</option>
                  <option value="1万以下">1万以下</option>
                  <option value="1-5万">1-5万</option>
                  <option value="5-10万">5-10万</option>
                  <option value="10-15万">10-15万</option>
                  <option value="15万以上">15万以上</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">项目需求详情 *</label>
              <textarea
                name="requirements"
                required
                value={formData.requirements}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                placeholder="请详细描述您的项目需求，包括功能要求、技术指标、设计风格等..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0066CC] to-[#00B894] hover:opacity-90 text-white py-4 rounded-lg transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={20} />
                  提交中...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2" size={20} />
                  提交咨询需求
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ✓ {statusMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                ✗ {statusMessage}
              </div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">联系我们</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <p className="mb-2">电话咨询</p>
                <p className="text-gray-400">+86 136 8023 1042</p>
              </div>
              <div>
                <p className="mb-2">邮件咨询</p>
                <p className="text-gray-400">337839167@qq.com</p>
              </div>
              <div>
                <p className="mb-2">微信咨询</p>
                <p className="text-gray-400">yz277562627</p>
              </div>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              ✓ 专业技术团队 ✓ 全流程服务 ✓ 快速响应机制 ✓ 项目保密协议
            </p>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="industrial" />
    </div>
  );
}