import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Lightbulb, FileText, Cpu, Package, BarChart, Loader2 } from 'lucide-react';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function IndustrialOrder() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const t = translations[language].indOrder;

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

  const servicePackages = [
    {
      name: '概念设计',
      nameEn: 'Concept Design',
      icon: <Lightbulb size={32} />,
      description: '产品创意构思与概念方案',
      descriptionEn: 'Product ideation and concept development',
      includes: ['需求分析', '竞品调研', '概念草图', '3D建模', '渲染效果图'],
      includesEn: ['Requirement analysis', 'Competitive research', 'Concept sketches', '3D modeling', 'Photorealistic rendering'],
      color: '#0066CC',
    },
    {
      name: '结构设计',
      nameEn: 'Structural Design',
      icon: <FileText size={32} />,
      description: '详细的机械结构设计',
      descriptionEn: 'Detailed mechanical structure design',
      includes: ['结构设计', '工程图纸', 'BOM单', '结构分析', '设计修改'],
      includesEn: ['Structure design', 'Engineering drawings', 'BOM list', 'Structural analysis', 'Design revisions'],
      color: '#00B894',
    },
    {
      name: '样机支持',
      nameEn: 'Prototyping Support',
      icon: <Package size={32} />,
      description: '原型样机制作',
      descriptionEn: 'Prototype and mockup fabrication',
      includes: ['3D打印', '手板制作', '优化迭代', '认证辅导'],
      includesEn: ['3D printing', 'Mockup fabrication', 'Iterative optimization', 'Certification guidance'],
      color: '#FF7A30',
    },
    {
      name: '生产对接',
      nameEn: 'Production Handover',
      icon: <Cpu size={32} />,
      description: '生产工艺与供应链对接',
      descriptionEn: 'Manufacturing process and supply chain coordination',
      includes: ['供应商对接', '工艺优化', '质量把控', '小批量试产', '技术支持'],
      includesEn: ['Supplier coordination', 'Process optimization', 'Quality control', 'Small-batch trial production', 'Technical support'],
      color: '#0066CC',
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: '需求对接',
      titleEn: 'Requirement Alignment',
      description: '深入了解产品需求与技术指标',
      descriptionEn: 'Understanding your product needs and technical specifications',
    },
    {
      step: 2,
      title: '方案设计',
      titleEn: 'Solution Design',
      description: '提供多套设计方案与技术评估',
      descriptionEn: 'Multiple design options with technical evaluation',
    },
    {
      step: 3,
      title: '详细设计',
      titleEn: 'Detailed Design',
      description: '完成结构设计与工程图纸',
      descriptionEn: 'Completing structure design and engineering drawings',
    },
    {
      step: 4,
      title: '样机验证',
      titleEn: 'Prototyping',
      description: '制作样机并测试',
      descriptionEn: 'Building and testing prototypes',
    },
    {
      step: 5,
      title: '优化迭代',
      titleEn: 'Optimization',
      description: '根据测试结果优化设计',
      descriptionEn: 'Refining the design based on test results',
    },
    {
      step: 6,
      title: '交付支持',
      titleEn: 'Delivery Support',
      description: '提供技术文档与生产支持',
      descriptionEn: 'Providing documentation and production support',
    },
  ];

  const technicalSupport = [
    {
      icon: <BarChart size={24} />,
      title: '仿真分析',
      titleEn: 'Simulation Analysis',
      description: '结构强度、流体、热学等多物理场仿真',
      descriptionEn: 'Structural, fluid, thermal and other multi-physics simulation',
    },
    {
      icon: <Cpu size={24} />,
      title: '工艺优化',
      titleEn: 'Process Optimization',
      description: '降低制造成本，提高良品率',
      descriptionEn: 'Reducing manufacturing cost and improving yield',
    },
    {
      icon: <FileText size={24} />,
      title: '全套项目设计',
      titleEn: 'Full Project Design',
      description: '3D建模、效果图渲染、结构机械设计',
      descriptionEn: '3D modeling, rendering, structural and mechanical design',
    },
    {
      icon: <Package size={24} />,
      title: '供应链支持',
      titleEn: 'Supply Chain Support',
      description: '对接优质供应商资源，保障项目进度',
      descriptionEn: 'Coordinating quality suppliers to keep projects on schedule',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title={t.metaTitle}
        description={t.metaDesc}
        keywords={t.metaKeywords}
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
            <h2 className="mb-4">{t.pkgTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.pkgDesc}
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
                <h4 className="mb-2">{isZh ? pkg.name : pkg.nameEn}</h4>
                <p className="text-gray-600 text-sm mb-4">{isZh ? pkg.description : pkg.descriptionEn}</p>
                <ul className="space-y-2">
                  {(isZh ? pkg.includes : pkg.includesEn).map((item, i) => (
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
            <h2 className="mb-4">{t.processTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.processDesc}
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
                  <h4 className="mb-2">{isZh ? step.title : step.titleEn}</h4>
                  <p className="text-gray-600 text-sm">{isZh ? step.description : step.descriptionEn}</p>
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
            <h2 className="mb-4">{t.techTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.techDesc}
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
                <h4 className="mb-2">{isZh ? item.title : item.titleEn}</h4>
                <p className="text-gray-600 text-sm">{isZh ? item.description : item.descriptionEn}</p>
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
            className="bg-white p-8 rounded-xl shadow-lg"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder={t.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldCompany}</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder={t.companyPlaceholder}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">{t.fieldIndustry}</label>
                <select
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  <option value="智能硬件">{t.indSmartHardware}</option>
                  <option value="机械设备">{t.indMachinery}</option>
                  <option value="消费电子">{t.indConsumer}</option>
                  <option value="医疗器械">{t.indMedical}</option>
                  <option value="其他">{t.indOther}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldPhone}</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder={t.phonePlaceholder}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">{t.fieldEmail}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                placeholder={t.emailPlaceholder}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">{t.fieldProductType}</label>
                <input
                  type="text"
                  name="productType"
                  required
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                  placeholder={t.productTypePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldStage}</label>
                <select
                  name="projectStage"
                  value={formData.projectStage}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  <option value="概念阶段">{t.stageConcept}</option>
                  <option value="详细设计">{t.stageDetail}</option>
                  <option value="样机制作">{t.stagePrototype}</option>
                  <option value="量产准备">{t.stageProduction}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm mb-2">{t.fieldTimeline}</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  <option value="1-3个月">{t.tl1}</option>
                  <option value="3-6个月">{t.tl2}</option>
                  <option value="6-12个月">{t.tl3}</option>
                  <option value="12个月以上">{t.tl4}</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2">{t.fieldBudget}</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                >
                  <option value="">{t.selectPlaceholder}</option>
                  <option value="1万以下">{t.budget1}</option>
                  <option value="1-5万">{t.budget2}</option>
                  <option value="5-10万">{t.budget3}</option>
                  <option value="10-15万">{t.budget4}</option>
                  <option value="15万以上">{t.budget5}</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">{t.fieldRequirements}</label>
              <textarea
                name="requirements"
                required
                value={formData.requirements}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066CC]"
                placeholder={t.requirementsPlaceholder}
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

      {/* Contact Section */}
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
                <p className="text-gray-400">mofangtech@qq.com</p>
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

      <PageEnding variant="industrial" />
    </div>
  );
}
