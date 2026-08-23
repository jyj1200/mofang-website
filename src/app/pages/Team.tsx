import { motion } from 'motion/react';
import { Award, Users, Lightbulb, Target, ShieldCheck } from 'lucide-react';
import trademarkImage from '../../imports/494e861e0bc1e00cbde0fde4144d3949.png';
import { PageEnding } from '../components/PageEnding';
import { SEOHead } from '../components/SEOHead';
import { Link } from 'react-router-dom';
import designDiscussionImage from "figma:asset/848017830c6aae2bdb4dd4c6ec3c435bdc30c91c.png";

export function Team() {
  const coreMembers = [
    {
      name: '魏鑫',
      nameEn: 'Wei Xin',
      role: '工业设计师',
      roleEn: 'Industrial Designer',
      initials: '魏',
      accentColor: '#0066CC',
      education: [
        { school: '奥克兰理工大学', degree: '硕士', field: '电子工程' },
        { school: '西南交通大学', degree: '学士', field: '工业设计' },
      ],
      highlights: [
        { label: '从业年限', value: '十余年工业设计经验' },
        { label: '任职经历', value: '航天研究所 · 工业设计岗' },
        { label: '专利成果', value: '主导参与六余项实用新型专利落地' },
      ],
      tags: ['机械工程', '工业设计', '通信工程', '电子工程', '机电一体化', '专利研发'],
      bio: '兼具机械工程、工业设计与通信工程的复合型知识背景，将严谨的工程思维融入产品设计实践，专注于机电设备外观与结构一体化设计。',
    },
  ];

  const values = [
    {
      icon: <Award size={40} />,
      title: '专业严谨',
      description: '以科研标准要求每一个设计细节',
      color: '#0066CC',
    },
    {
      icon: <Lightbulb size={40} />,
      title: '创新驱动',
      description: '持续探索设计与技术的新边界',
      color: '#FF7A30',
    },
    {
      icon: <Users size={40} />,
      title: '团队协作',
      description: '多学科融合，发挥每个人的专长',
      color: '#00B894',
    },
    {
      icon: <Target size={40} />,
      title: '客户导向',
      description: '深入理解需求，提供最优解决方案',
      color: '#0066CC',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="团队介绍 - 墨方智能科技"
        description="墨方智能科技团队介绍，科研人员为核心的设计团队，成员来自西南交通大学、西安电子科技大学等知名院校，拥有十余年工业设计经验。"
        keywords="设计团队,工业设计师,文创设计,科研团队,西南交通大学,西安电子科技大学"
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
            我们的团队
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl"
          >
            科研人员为主的设计团队
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
            <h2 className="mb-6">团队理念</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              我们是一支由科研人员组成的设计团队，将严谨的科学思维与创新的设计理念相结合。
              团队成员来自国内顶尖院校与知名企业，拥有深厚的技术背景和丰富的项目经验。
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              我们相信，优秀的设计不需要美学感知，更需要科学的方法论与工程实践能力。通过多学科协作，我们为客户提供兼具创新性与可行性的解决方案。
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
            <h2 className="mb-4">核心价值观</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的价值观指导着团队的每一个决策和行动
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
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            <h2 className="mb-3" style={{ color: '#1a1a1a' }}>核心成员</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#0066CC]/30" />
              <p className="text-gray-400 text-sm tracking-wide">汇聚各领域专家，构建强大的技术与设计团队</p>
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
                        {member.initials}
                      </span>
                    </div>
                    <h4 className="mb-0.5" style={{ color: '#111', letterSpacing: '0.08em' }}>{member.name}</h4>
                    <p className="text-xs tracking-widest mb-1" style={{ color: member.accentColor }}>{member.nameEn.toUpperCase()}</p>
                    <span
                      className="inline-block px-3 py-0.5 rounded-full text-xs mt-1"
                      style={{ background: `${member.accentColor}12`, color: member.accentColor, border: `1px solid ${member.accentColor}25` }}
                    >
                      {member.role}
                    </span>

                    {/* Education */}
                    <div className="mt-6 w-full space-y-2 text-left">
                      {member.education.map((edu, i) => (
                        <div key={i} className="flex flex-col gap-0.5 py-2" style={{ borderTop: i === 0 ? '1px solid #e8e8e8' : '1px solid #e8e8e8' }}>
                          <span className="text-xs" style={{ color: '#999' }}>{edu.school}</span>
                          <span className="text-xs" style={{ color: '#444' }}>{edu.degree} · {edu.field}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right column — details */}
                  <div className="p-8 md:p-10 flex flex-col justify-between gap-8">

                    {/* Bio */}
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xl">{member.bio}</p>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {member.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-4"
                          style={{ background: '#f7f7f8', border: '1px solid #ececec' }}
                        >
                          <p className="text-xs mb-1.5" style={{ color: '#aaa', letterSpacing: '0.05em' }}>{h.label}</p>
                          <p className="text-sm" style={{ color: '#222', lineHeight: '1.5' }}>{h.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div>
                      <p className="text-xs tracking-[0.15em] text-gray-300 uppercase mb-3">专业领域</p>
                      <div className="flex flex-wrap gap-2">
                        {member.tags.map((tag) => (
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
            <h2 className="mb-4">团队风采</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              真实的工作场景，展现我们的专业与热情
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="mb-3 text-xl font-semibold text-[#2C2C2C]">设计讨论与头脑风暴</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                团队每周定期召开设计评审会，工业设计师、机械工程师、文创设计师齐聚一堂，针对项目需求进行深度讨论。从概念草图到3D建模方案，每个环节都经过反复推敲与优化。
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                我们坚信跨学科的碰撞能够激发创新灵感，科研背景与艺术思维的融合让设计既有技术深度，又具美学高度。团队成员积极分享行业前沿动态，不断提升专业能力。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="mb-3 text-xl font-semibold text-[#2C2C2C]">实验室测试与优化</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                设计不止于图纸，更在于实践验证。团队配备专业的测试实验室，对产品进行跌落测试、防水测试、耐久性测试等多维度检验，确保设计方案的可行性与可靠性。
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                从材料选型、结构强度到人机工程学验证，每个细节都经过严格的科学测试。我们的工程师运用专业仪器采集数据，通过量化分析持续优化设计，让产品在美观的同时更具实用价值。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h4 className="mb-3 text-xl font-semibold text-[#2C2C2C]">样品制作与工艺验证</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                从3D打印快速原型到CNC精密加工，再到注塑、五金、表面处理等工艺环节，团队全程参与样品制作过程，与供应商深度协作，确保设计意图的完美呈现。
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                我们深入生产一线，了解每道工艺的特性与限制，在设计阶段就充分考虑可制造性。通过反复打样与工艺调试，将设计方案落地为高品质的实物产品，实现从概念到量产的无缝衔接。
              </p>
            </motion.div>
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
            <h2 className="mb-3" style={{ color: '#1a1a1a' }}>知识产权</h2>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#0066CC]/30" />
              <p className="text-gray-400 text-sm tracking-wide">以严谨态度守护原创，以版权意识驱动创作</p>
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
                  alt="圆著商标注册证"
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
                      注册商标 · 圆著
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5 tracking-wide">Registered Trademark · Yuanzhu</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  墨方智能科技已于 2026 年 6 月 14 日获得国家知识产权局颁发的商标注册证，注册商标「圆著」，国际分类第 42 类，涵盖技术研究、工业外观设计、包装设计及产品原型设计等核心业务领域，有效期至 2036 年 6 月 13 日。
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { label: '注册人', value: '中山市墨方智能科技有限公司' },
                  { label: '国际分类', value: '第 42 类（技术研究与设计服务）' },
                  { label: '注册日期', value: '2026 年 6 月 14 日' },
                  { label: '有效期至', value: '2036 年 6 月 13 日' },
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
                  商标的注册体现了我们对原创设计的高度重视。从方案构思到交付落地，每一个设计成果都受到法律保护；我们也以同样严谨的版权意识尊重他人的知识产权，这是墨方的设计风骨。
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
            <h2 className="mb-6 text-white">加入我们</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              如果你热爱设计，追求创新，欢迎关注并加入墨方智能科技。
            </p>
            <Link
              to="/careers"
              className="inline-block bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-3 rounded-lg transition-colors"
            >
              查看招聘职位
            </Link>
          </motion.div>
        </div>
      </section>

      <PageEnding variant="default" />
    </div>
  );
}