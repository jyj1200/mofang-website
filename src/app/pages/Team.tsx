import { motion } from 'motion/react';
import { Award, Users, Lightbulb, Target, ShieldCheck } from 'lucide-react';
import trademarkImage from '../../imports/494e861e0bc1e00cbde0fde4144d3949.png';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

// ── Core members (bilingual fields inline) ─────────────────────────────────

const coreMembers = [
  {
    name: '魏鑫',
    nameEn: 'Wei Xin',
    role: '工业设计师',
    roleEn: 'Industrial Designer',
    initials: '魏',
    initialsEn: 'W',
    accentColor: '#0066CC',
    education: [
      { school: '奥克兰理工大学', schoolEn: 'Auckland University of Technology', degree: '硕士', degreeEn: 'Master', field: '电子工程', fieldEn: 'Electronic Engineering' },
      { school: '西南交通大学', schoolEn: 'Southwest Jiaotong University', degree: '学士', degreeEn: 'Bachelor', field: '工业设计', fieldEn: 'Industrial Design' },
    ],
    highlights: [
      { label: '从业年限', labelEn: 'Experience', value: '十余年工业设计经验', valueEn: '10+ years of industrial design experience' },
      { label: '任职经历', labelEn: 'Career', value: '航天研究所 · 工业设计岗', valueEn: 'Aerospace Research Institute · Industrial Design' },
      { label: '专利成果', labelEn: 'Patents', value: '主导参与六余项实用新型专利落地', valueEn: 'Led or co-led six-plus granted utility model patents' },
    ],
    tags: ['机械工程', '工业设计', '通信工程', '电子工程', '机电一体化', '专利研发'],
    tagsEn: ['Mechanical Engineering', 'Industrial Design', 'Telecommunications', 'Electronic Engineering', 'Mechatronics', 'Patent R&D'],
    bio: '兼具机械工程、工业设计与通信工程的复合型知识背景，将严谨的工程思维融入产品设计实践，专注于机电设备外观与结构一体化设计。',
    bioEn: 'A composite background across mechanical engineering, industrial design and telecommunications, bringing rigorous engineering thinking into product design practice, focused on integrated appearance and structure design of electromechanical equipment.',
  },
];

// ── Values ──────────────────────────────────────────────────────────────────

const values = [
  {
    icon: <Award size={40} />,
    title: '专业严谨',
    titleEn: 'Professional & Rigorous',
    description: '以科研标准要求每一个设计细节',
    descriptionEn: 'Every design detail held to research standards',
    color: '#0066CC',
  },
  {
    icon: <Lightbulb size={40} />,
    title: '创新驱动',
    titleEn: 'Innovation Driven',
    description: '持续探索设计与技术的新边界',
    descriptionEn: 'Constantly exploring new frontiers of design and technology',
    color: '#FF7A30',
  },
  {
    icon: <Users size={40} />,
    title: '团队协作',
    titleEn: 'Team Collaboration',
    description: '多学科融合，发挥每个人的专长',
    descriptionEn: 'Multi-disciplinary synergy, leveraging everyone\'s strengths',
    color: '#00B894',
  },
  {
    icon: <Target size={40} />,
    title: '客户导向',
    titleEn: 'Client Oriented',
    description: '深入理解需求，提供最优解决方案',
    descriptionEn: 'Deep understanding of needs, best-fit solutions',
    color: '#0066CC',
  },
];

// ── Gallery cards ───────────────────────────────────────────────────────────

const galleryCards = [
  {
    title: '设计讨论与头脑风暴',
    titleEn: 'Design Reviews & Brainstorming',
    p1: '团队每周定期召开设计评审会，工业设计师、机械工程师、文创设计师齐聚一堂，针对项目需求进行深度讨论。从概念草图到3D建模方案，每个环节都经过反复推敲与优化。',
    p1En: 'Our weekly design reviews bring industrial designers, mechanical engineers and cultural-creative designers together for deep discussions on project needs. From concept sketches to 3D modeling proposals, every step is refined again and again.',
    p2: '我们坚信跨学科的碰撞能够激发创新灵感，科研背景与艺术思维的融合让设计既有技术深度，又具美学高度。团队成员积极分享行业前沿动态，不断提升专业能力。',
    p2En: 'We believe cross-disciplinary friction sparks innovation — the fusion of research background and artistic thinking gives our designs both technical depth and aesthetic height. Team members actively share industry frontiers and keep growing their expertise.',
  },
  {
    title: '实验室测试与优化',
    titleEn: 'Lab Testing & Optimization',
    p1: '设计不止于图纸，更在于实践验证。团队配备专业的测试实验室，对产品进行跌落测试、防水测试、耐久性测试等多维度检验，确保设计方案的可行性与可靠性。',
    p1En: 'Design goes beyond drawings — it must pass real-world validation. Our dedicated test lab performs drop, waterproof and durability tests and more, ensuring every solution is feasible and reliable.',
    p2: '从材料选型、结构强度到人机工程学验证，每个细节都经过严格的科学测试。我们的工程师运用专业仪器采集数据，通过量化分析持续优化设计，让产品在美观的同时更具实用价值。',
    p2En: 'From material selection and structural strength to ergonomics verification, every detail undergoes rigorous scientific testing. Our engineers collect data with professional instruments and keep optimizing through quantitative analysis, making products both beautiful and practical.',
  },
  {
    title: '样品制作与工艺验证',
    titleEn: 'Prototyping & Process Validation',
    p1: '从3D打印快速原型到CNC精密加工，再到注塑、五金、表面处理等工艺环节，团队全程参与样品制作过程，与供应商深度协作，确保设计意图的完美呈现。',
    p1En: 'From 3D-printed rapid prototypes to CNC machining, injection molding, hardware and surface finishing, the team takes part in the whole prototyping process, working closely with suppliers to faithfully deliver the design intent.',
    p2: '我们深入生产一线，了解每道工艺的特性与限制，在设计阶段就充分考虑可制造性。通过反复打样与工艺调试，将设计方案落地为高品质的实物产品，实现从概念到量产的无缝衔接。',
    p2En: 'We go deep into the production line to understand the traits and limits of each process, factoring in manufacturability from the design stage. Repeated sampling and process tuning turn designs into high-quality products — a seamless path from concept to mass production.',
  },
];

// ── Main Component ──────────────────────────────────────────────────────────

export function Team() {
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const t = translations[language].teamPage;

  return (
    <div className="min-h-screen">
      <SEOHead
        title={t.metaTitle}
        description={t.metaDesc}
        keywords={t.metaKeywords}
        path="/team"
      />
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-r from-[#0066CC] to-[#00B894]">
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

      {/* Team Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">{t.philosophyTitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.philosophyP1}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t.philosophyP2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.valuesTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.valuesDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="mb-4 inline-flex p-4 rounded-full"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                </div>
                <h4 className="mb-2">{isZh ? item.title : item.titleEn}</h4>
                <p className="text-gray-600 text-sm">{isZh ? item.description : item.descriptionEn}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Members */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg, #f7f7f8 0%, #ffffff 60%, #f4f5f6 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-[#0066CC]/60 mb-3 uppercase">Core Members</p>
            <h2 className="mb-3" style={{ color: '#1a1a1a' }}>{t.membersTitle}</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#0066CC]/30" />
              <p className="text-gray-400 text-sm tracking-wide">{t.membersDesc}</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            {coreMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl"
                style={{ background: '#ffffff', border: '1px solid #ebebeb' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0">

                  {/* Left column — avatar + identity */}
                  <div
                    className="flex flex-col items-center justify-center py-10 px-6 text-center"
                    style={{ background: '#f9f9f9', borderRight: '1px solid #ebebeb' }}
                  >
                    <div
                      className="w-20 h-20 rounded-full mb-4 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${member.accentColor}22, ${member.accentColor}55)`,
                        border: `1.5px solid ${member.accentColor}33`,
                      }}
                    >
                      <span style={{ color: member.accentColor, fontSize: '1.6rem', fontWeight: 300, letterSpacing: '0.05em' }}>
                        {isZh ? member.initials : member.initialsEn}
                      </span>
                    </div>
                    <h4 className="mb-0.5" style={{ color: '#111', letterSpacing: '0.08em' }}>{isZh ? member.name : member.nameEn}</h4>
                    <p className="text-xs tracking-widest mb-1" style={{ color: member.accentColor }}>{isZh ? member.nameEn.toUpperCase() : member.name}</p>
                    <span
                      className="inline-block px-3 py-0.5 rounded-full text-xs mt-1"
                      style={{ background: `${member.accentColor}12`, color: member.accentColor, border: `1px solid ${member.accentColor}25` }}
                    >
                      {isZh ? member.role : member.roleEn}
                    </span>

                    {/* Education */}
                    <div className="mt-6 w-full space-y-2 text-left">
                      {member.education.map((edu, i) => (
                        <div key={i} className="flex flex-col gap-0.5 py-2" style={{ borderTop: i === 0 ? '1px solid #e8e8e8' : '1px solid #e8e8e8' }}>
                          <span className="text-xs" style={{ color: '#999' }}>{isZh ? edu.school : edu.schoolEn}</span>
                          <span className="text-xs" style={{ color: '#444' }}>{isZh ? `${edu.degree} · ${edu.field}` : `${edu.degreeEn} · ${edu.fieldEn}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right column — details */}
                  <div className="p-8 md:p-10 flex flex-col justify-between gap-8">

                    {/* Bio */}
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{isZh ? member.bio : member.bioEn}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {member.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-4"
                          style={{ background: '#f7f7f8', border: '1px solid #ececec' }}
                        >
                          <p className="text-xs mb-1.5" style={{ color: '#aaa', letterSpacing: '0.05em' }}>{isZh ? h.label : h.labelEn}</p>
                          <p className="text-sm" style={{ color: '#222', lineHeight: '1.5' }}>{isZh ? h.value : h.valueEn}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div>
                      <p className="text-xs tracking-[0.15em] text-gray-300 uppercase mb-3">{t.fieldsLabel}</p>
                      <div className="flex flex-wrap gap-2">
                        {(isZh ? member.tags : member.tagsEn).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs transition-colors duration-200"
                            style={{ background: '#f2f2f2', color: '#555', border: '1px solid #e4e4e4' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">{t.galleryTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.galleryDesc}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h4 className="mb-3 text-xl font-semibold text-[#2C2C2C]">{isZh ? card.title : card.titleEn}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {isZh ? card.p1 : card.p1En}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {isZh ? card.p2 : card.p2En}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trademark */}
      <section className="py-24" style={{ background: 'linear-gradient(180deg,#f7f7f8 0%,#ffffff 100%)' }}>
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em] text-[#0066CC]/60 mb-3 uppercase">Intellectual Property</p>
            <h2 className="mb-3" style={{ color: '#1a1a1a' }}>{t.ipTitle}</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#0066CC]/30" />
              <p className="text-gray-400 text-sm tracking-wide">{t.ipDesc}</p>
            </div>
          </motion.div>

          <div
            className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
            style={{ border: '1px solid #ebebeb', background: '#ffffff' }}
          >
            {/* Left: trademark certificate */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-10"
              style={{ background: '#f9f9f9', borderRight: '1px solid #ebebeb' }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-xl opacity-20"
                  style={{ background: 'linear-gradient(135deg,#0066CC,#00B894)' }}
                />
                <img
                  src={trademarkImage}
                  alt={t.ipAlt}
                  className="relative rounded-lg shadow-lg w-full max-w-[260px] object-contain"
                />
              </div>
            </motion.div>

            {/* Right: explanation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-10 flex flex-col justify-center gap-7"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#0066CC12', border: '1px solid #0066CC25' }}>
                    <ShieldCheck size={18} style={{ color: '#0066CC' }} />
                  </div>
                  <div>
                    <h3 style={{ color: '#111', letterSpacing: '0.06em' }}>
                      {t.ipMarkTitle}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 tracking-wide">{t.ipMarkSub}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t.ipMarkText}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: t.ipRegistrant, value: t.ipRegistrantValue },
                  { label: t.ipClass, value: t.ipClassValue },
                  { label: t.ipDate, value: t.ipDateValue },
                  { label: t.ipValid, value: t.ipValidValue },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="text-xs flex-shrink-0 w-16" style={{ color: '#aaa' }}>{item.label}</span>
                    <div className="flex-1 h-px" style={{ background: '#ececec' }} />
                    <span className="text-xs flex-shrink-0" style={{ color: '#333' }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <p className="text-xs text-gray-400 leading-relaxed">
                  {t.ipNote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{t.joinTitle}</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {t.joinDesc}
            </p>
            <Link
              to="/careers"
              className="inline-block bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors"
            >
              {t.joinButton}
            </Link>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}
