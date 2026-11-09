import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Package, Palette, Cog, Truck, Loader2 } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import festivalGiftImage from 'figma:asset/676d57d0fd55e705c39fc38f4335eadea8330621.png';
import scenicSouvenirImage from 'figma:asset/b35557f19bb0942c4c84875a0d5c72304ebb8567.png';

export function CulturalCreativeOrder() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const t = translations[language].ccOrder;

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
        setStatusMessage(result.error || t.errorFallback);
        console.error('Submit error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(t.networkError);
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
      title: isZh ? '需求沟通' : 'Consultation',
      description: isZh ? '详细了解您的定制需求与品牌理念' : 'Understanding your customization needs and brand vision',
      color: '#FF7A30',
    },
    {
      icon: <Palette size={32} />,
      title: isZh ? '概念设计' : 'Concept Design',
      description: isZh ? '提供多套设计方案供您选择' : 'Multiple design options for your selection',
      color: '#00B894',
    },
    {
      icon: <Cog size={32} />,
      title: isZh ? '打样制作' : 'Prototyping',
      description: isZh ? '精选材料，制作实物样品确认' : 'Curated materials and physical samples for confirmation',
      color: '#0066CC',
    },
    {
      icon: <Truck size={32} />,
      title: isZh ? '批量生产' : 'Production',
      description: isZh ? '质量把控，按时交付成品' : 'Quality control with on-time delivery',
      color: '#FF7A30',
    },
  ];

  const caseExamples = [
    {
      name: isZh ? '企业年会礼品' : 'Corporate Annual Meeting Gifts',
      description: isZh
        ? '某科技公司定制500套主题礼盒，融合企业VI与文化元素'
        : 'A 500-set themed gift box for a tech company, blending corporate VI with cultural elements',
      image: 'https://images.unsplash.com/photo-1625552187571-7ee60ac43d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnaWZ0fGVufDF8fHx8MTc2NTQzNTEzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: isZh ? '景区纪念品系列' : 'Scenic Spot Souvenir Series',
      description: isZh
        ? '为某5A景区设计10款文创衍生品，体现地域文化特色'
        : 'Ten cultural derivatives designed for a 5A scenic area, reflecting local culture',
      image: scenicSouvenirImage,
    },
    {
      name: isZh ? '节日限定礼盒' : 'Festival Limited Gift Box',
      description: isZh
        ? '中秋主题茶具套装，融合传统工艺与现代设计'
        : 'A Mid-Autumn tea set combining traditional craftsmanship and modern design',
      image: festivalGiftImage,
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={t.metaTitle}
        description={t.metaDesc}
        keywords={t.metaKeywords}
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
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            {t.heroSubtitle}
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
            <h2 className="mb-4">{t.processTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.processDesc}
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
            <h2 className="mb-4">{t.caseTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.caseDesc}
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
            <h2 className="mb-4">{t.formTitle}</h2>
            <p className="text-gray-600">
              {t.formDesc}
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
                <label className="block text-sm mb-2">{t.fieldName}</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldCompany}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder={t.companyPlaceholder}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">{t.fieldPhone}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder={t.phonePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldEmail}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder={t.emailPlaceholder}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">{t.fieldProductType}</label>
                <select
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  <option value="礼品">{t.optionGift}</option>
                  <option value="文创衍生品">{t.optionDerivative}</option>
                  <option value="定制工艺品">{t.optionCraft}</option>
                  <option value="文旅产品">{t.optionTourism}</option>
                  <option value="其他">{t.optionOther}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldQuantity}</label>
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder={t.quantityPlaceholder}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">{t.fieldBudget}</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  <option value="5万以下">{t.budget1}</option>
                  <option value="5-10万">{t.budget2}</option>
                  <option value="10-20万">{t.budget3}</option>
                  <option value="20-50万">{t.budget4}</option>
                  <option value="50万以上">{t.budget5}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldMaterial}</label>
                <input
                  type="text"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                  placeholder={t.materialPlaceholder}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">{t.fieldDescription}</label>
              <textarea
                name="description"
                required
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF7A30]"
                placeholder={t.descriptionPlaceholder}
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
                  {t.submitting}
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2" size={20} />
                  {t.submitButton}
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
            <h2 className="mb-6 text-white">{t.contactTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <p className="mb-2">{t.contactPhone}</p>
                <p className="text-gray-400">+86 136 8023 1042</p>
              </div>
              <div>
                <p className="mb-2">{t.contactEmail}</p>
                <p className="text-gray-400">337839167@qq.com</p>
              </div>
              <div>
                <p className="mb-2">{t.contactWechat}</p>
                <p className="text-gray-400">yz277562627</p>
              </div>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              {t.contactNote}
            </p>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="cultural" />
    </div>
  );
}
