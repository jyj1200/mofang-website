import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Package, Palette, Cog, Truck, Loader2 } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import festivalGiftImage from 'figma:asset/676d57d0fd55e705c39fc38f4335eadea8330621.png';
import scenicSouvenirImage from 'figma:asset/b35557f19bb0942c4c84875a0d5c72304ebb8567.png';

export function CulturalCreativeOrder() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    productType: '',
    quantity: '',
    budget: '',
    material: '',
    deadline: '',
    description: '',
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
        `https://${projectId}.supabase.co/functions/v1/make-server-3f503f37/submit-cultural-inquiry`,
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
          phone: '',
          email: '',
          productType: '',
          quantity: '',
          budget: '',
          material: '',
          deadline: '',
          description: '',
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

  const process = [
    {
      icon: <Package size={32} />,
      title: '需求沟通',
      description: '详细了解您的��制需求与品牌理念',
      color: '#FF7A30',
    },
    {
      icon: <Palette size={32} />,
      title: '概念设计',
      description: '提供多套设计方案供您选择',
      color: '#00B894',
    },
    {
      icon: <Cog size={32} />,
      title: '打样制作',
      description: '精选材料，制作实物样品确认',
      color: '#0066CC',
    },
    {
      icon: <Truck size={32} />,
      title: '批量生产',
      description: '质量把控，按时交付成品',
      color: '#FF7A30',
    },
  ];

  const caseExamples = [
    {
      name: '企业年会礼品',
      description: '某科技公司定制500套主题礼盒，融合企业VI与文化元素',
      image: 'https://images.unsplash.com/photo-1625552187571-7ee60ac43d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnaWZ0fGVufDF8fHx8MTc2NTQzNTEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: '景区纪念品系列',
      description: '为某5A景区设计10款文创衍生品，体现地域文化特色',
      image: scenicSouvenirImage,
    },
    {
      name: '节日限定礼盒',
      description: '中秋主题茶具套装，融合传统工艺与现代设计',
      image: festivalGiftImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="文创产品定制服务 - 墨方智能科技"
        description="墨方智能科技文创产品定制服务，提供从概念到落地的全流程设计制作服务，包括企业礼品、文旅纪念品、节日礼盒等定制解决方案。"
        keywords="文创产品定制,企业礼品定制,文旅纪念品,礼盒设计,文创设计制作,中山文创"
        path="/cultural-creative-order"
      />
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-r from-[#FF7A30] to-[#00B894]">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-white"
          >
            文创产品定制服务
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            从概念到落地，全流程设计制作服务
          </motion.p>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
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
              专业的设计制作流程，确保每一个细节都符合您的期望
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#FF7A30] to-[#00B894] opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">定制案例参考</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              成功案例展示，为您的定制项目提供灵感
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <img
                    src={example.image}
                    alt={example.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-2">{example.name}</h4>
                  <p className="text-gray-600 text-sm">{example.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">定制需求咨询</h2>
            <p className="text-gray-600">
              请填写您的定制需求，我们将尽快与您联系
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#FAFAFA] p-8 rounded-xl"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder="请输您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">公司名称</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder="请输入公司名称"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">联系电话 *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder="请输入联系电话"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">电子邮箱</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder="请输入电子邮箱"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">产品类型 *</label>
                <select
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                >
                  <option value="">请选择</option>
                  <option value="礼品">礼品</option>
                  <option value="文创衍生品">文创衍生品</option>
                  <option value="定制工艺品">定制工艺品</option>
                  <option value="文旅产品">文旅产品</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">预计数量</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder="例如：100-500件"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">预算范围</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                >
                  <option value="">请选择</option>
                  <option value="5万以下">5万以下</option>
                  <option value="5-10万">5-10万</option>
                  <option value="10-20万">10-20万</option>
                  <option value="20-50万">20-50万</option>
                  <option value="50万以上">50万以上</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">期望材质</label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder="例如：陶瓷、木质、金属等"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">项目需求描述 *</label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                placeholder="请详细描述您的定制需求，包括设计风格、用途、特殊要求等..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#FF7A30] to-[#00B894] hover:opacity-90 text-white py-4 rounded-lg transition-opacity flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Contact Info */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">联系方式</h2>
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
              ✓ 支持小批量定制（50件起） ✓ 支持批量生产 ✓ 全流程服务保障
            </p>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="cultural" />
    </div>
  );
}