import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Phone, Mail, ArrowRight, CheckCircle2, Zap, Target, Layers } from 'lucide-react';
import roboticArmImage from 'figma:asset/d2fc3828de75a4b4160d194e209a466421445b5a.png';

// ── Data ────────────────────────────────────────────────────────────────────

const specs = [
  { param: '自由度', value: '6 轴' },
  { param: '最大臂展', value: '1,450 mm' },
  { param: '最大负载', value: '25 kg' },
  { param: '重复定位精度', value: '± 0.05 mm' },
  { param: '最大速度', value: '5,000 mm/s' },
  { param: '防护等级', value: 'IP67' },
  { param: '本体重量', value: '138 kg' },
  { param: '额定功耗', value: '2.2 kW' },
  { param: '安装方式', value: '地装 / 壁装 / 倒装' },
  { param: '控制系统', value: '自研 MFC-9 控制器' },
  { param: '通信接口', value: 'EtherCAT / Profinet / Modbus' },
  { param: '工作温度', value: '0 — 45 °C' },
];

const scenarios = [
  {
    icon: '⚡',
    title: '焊接作业',
    desc: '六轴自由度实现任意角度焊接，轨迹重复精度 ±0.05mm，焊缝均匀稳定，适配 MIG / TIG / 激光焊。',
    tag: '高温防护 IP67',
  },
  {
    icon: '🏗',
    title: '重型搬运',
    desc: '最大负载 25kg，配合视觉系统实现柔性抓取，适用于铸件、模具等高密度工件的自动化搬运。',
    tag: '负载 25 kg',
  },
  {
    icon: '🔬',
    title: '精密装配',
    desc: '重复定位精度 ±0.05mm，力控反馈模块可感知 0.1N 级别力矩，适用于精密器件压装与精细化装配线。',
    tag: '精度 ±0.05mm',
  },
];

const steps = [
  {
    num: '01',
    title: '现场勘测',
    desc: '工程师免费上门，评估产线布局、空间尺寸与工艺需求，输出可行性报告。',
  },
  {
    num: '02',
    title: '3D 方案定制',
    desc: '基于勘测数据建立数字孪生模型，完成工作空间仿真验证，交付可视化方案。',
  },
  {
    num: '03',
    title: '制造交付',
    desc: '严格按航天级质检标准生产，出厂前完成 72 小时满负荷测试，整机交付。',
  },
  {
    num: '04',
    title: '上门安装调试',
    desc: '原厂工程师驻场安装，完成与 PLC、MES 系统对接，交付调试合格报告。',
  },
  {
    num: '05',
    title: '培训 & 售后',
    desc: '提供操作员及维护工程师培训，远程监控 + 24h 响应，三年质保。',
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export function RoboticArm() {
  const [form, setForm] = useState({ company: '', contact: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen" style={{ background: '#f2f3f5', color: '#1a1a1a' }}>

      {/* ── Top nav strip ── */}
      <div
        className="sticky top-0 z-50 border-b"
        style={{ background: 'rgba(242,243,245,0.95)', backdropFilter: 'blur(12px)', borderColor: '#ddd' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/industrial-design"
            className="flex items-center gap-2 text-sm transition-colors"
            style={{ color: '#666' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#111')}
            onMouseLeave={e => (e.currentTarget.style.color = '#666')}
          >
            <ChevronLeft size={16} />
            工业设计
          </Link>

          {/* Abstract arm logo */}
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="w-7 h-7" aria-hidden="true">
              <rect x="14" y="2" width="4" height="10" rx="2" fill="#0055FF" />
              <rect x="8" y="10" width="16" height="4" rx="2" fill="#0055FF" opacity="0.7" />
              <rect x="10" y="14" width="4" height="8" rx="2" fill="#0055FF" opacity="0.85" />
              <rect x="10" y="22" width="12" height="3" rx="1.5" fill="#FF6B00" />
              <circle cx="22" cy="25" r="2.5" fill="#0055FF" />
            </svg>
            <span className="text-sm font-semibold tracking-widest text-white">MOFANG ARM</span>
          </div>

          <a
            href="tel:+8613680231042"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: '#FF6B00' }}
          >
            <Phone size={14} />
            +86 136 8023 1042
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 50%, #dde8f8 0%, #f2f3f5 70%)' }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(#0055FF 1px, transparent 1px), linear-gradient(90deg, #0055FF 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Glow */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.12) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs tracking-[0.4em] mb-6 uppercase"
              style={{ color: '#0055FF' }}
            >
              Industrial Robotic Arm · Six-Axis
            </p>
            <h1
              className="mb-6 leading-tight"
              style={{
                fontFamily: '"Montserrat", "Inter", sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                color: '#111111',
                letterSpacing: '-0.02em',
              }}
            >
              六轴关节
              <br />
              <span style={{ color: '#0055FF' }}>· 智造未来</span>
            </h1>
            <p className="mb-10 leading-relaxed max-w-md" style={{ color: '#555', fontSize: '1rem' }}>
              面向大型制造企业的六轴关节机械臂，覆盖设计、生产、销售与上门安装全链路服务。军工级精度，工业级可靠性，助力产线自动化升级。
            </p>

            {/* Floating spec badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { label: '最大负载', value: '25 kg', color: '#FF6B00' },
                { label: '重复定位', value: '±0.05mm', color: '#FF6B00' },
                { label: '自由度', value: '六轴', color: '#0055FF' },
              ].map((b) => (
                <div
                  key={b.label}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg"
                  style={{ background: '#ffffff', border: `1px solid ${b.color}44` }}
                >
                  {/* Pulse dot */}
                  <span className="relative flex h-2 w-2 flex-shrink-0">
                    <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ background: b.color }}
                    />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: b.color }} />
                  </span>
                  <span className="text-xs" style={{ color: '#888' }}>{b.label}</span>
                  <span className="text-sm font-bold" style={{ color: b.color, fontFamily: 'Montserrat, sans-serif' }}>
                    {b.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90"
                style={{ background: '#0055FF', color: '#111', fontFamily: 'Montserrat, sans-serif' }}
              >
                预约免费勘测
              </a>
              <a
                href="#specs"
                className="px-7 py-3 rounded-lg font-semibold text-sm transition-colors duration-200"
                style={{ border: '1px solid #ccc', color: '#555', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0055FF'; e.currentTarget.style.color = '#0055FF'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#ccc'; e.currentTarget.style.color = '#555'; }}
              >
                查看技术参数
              </a>
            </div>
          </motion.div>

          {/* Right: arm image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(0,85,255,0.15) 0%, transparent 65%)' }}
            />
            <img
              src={roboticArmImage}
              alt="六轴关节工业机械臂"
              className="relative w-full max-w-lg object-contain drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 40px rgba(0,85,255,0.3))' }}
            />
          </motion.div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#666' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-[#0055FF] to-transparent"
          />
        </div>
      </section>

      {/* ── Core data cards ── */}
      <section className="py-20" style={{ background: '#eaebee' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#0055FF' }}>Core Advantages</p>
            <h2 style={{ color: '#111', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>三大核心优势</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers size={28} />,
                accent: '#0055FF',
                title: '六轴灵活性',
                metric: '360°',
                metricSub: '全方位覆盖',
                desc: '六个旋转自由度，任意姿态到达工作空间内目标点，无死角覆盖复杂装配路径。',
              },
              {
                icon: <Zap size={28} />,
                accent: '#FF6B00',
                title: '高负载能力',
                metric: '25 kg',
                metricSub: '额定负载',
                desc: '重型设计承载满足铸件、重型模具搬运需求，配重优化后整机运动稳定，无抖振。',
              },
              {
                icon: <Target size={28} />,
                accent: '#FF6B00',
                title: '军工级精度',
                metric: '±0.05',
                metricSub: 'mm 重复定位',
                desc: '采用高刚性谐波减速器 + 绝对值编码器，精度媲美航天装配工装，全温段稳定输出。',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-xl p-8 flex flex-col gap-5 group hover:scale-[1.02] transition-transform duration-300"
                style={{ background: '#ffffff', border: `1px solid ${card.accent}22` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: `${card.accent}18`, color: card.accent }}
                >
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#555' }}>{card.title}</p>
                  <p
                    className="font-black leading-none mb-1"
                    style={{ fontSize: '2.2rem', color: card.accent, fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {card.metric}
                  </p>
                  <p className="text-xs" style={{ color: '#555' }}>{card.metricSub}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#777' }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scenarios ── */}
      <section className="py-20" style={{ background: '#f2f3f5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#0055FF' }}>Application Scenarios</p>
            <h2 style={{ color: '#111', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>多场景工业应用</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl p-8 flex flex-col gap-4"
                style={{ background: '#ffffff', border: '1px solid #e0e0e0' }}
              >
                <div className="text-4xl">{s.icon}</div>
                <div>
                  <h3 className="mb-1" style={{ color: '#111', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded mb-3"
                    style={{ background: '#FF6B0018', color: '#FF6B00', border: '1px solid #FF6B0030' }}
                  >
                    {s.tag}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: '#777' }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service steps ── */}
      <section className="py-20" style={{ background: '#eaebee' }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#0055FF' }}>Full-Chain Service</p>
            <h2 style={{ color: '#111', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>设计 · 销售 · 安装</h2>
            <p className="mt-2 text-sm" style={{ color: '#555' }}>从现场勘测到产线交付，全程原厂工程师跟进</p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute top-8 left-0 right-0 h-px hidden lg:block"
              style={{ background: 'linear-gradient(90deg, transparent, #0055FF33, #0055FF33, transparent)' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-start gap-4 relative"
                >
                  {/* Step number circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0 relative z-10"
                    style={{
                      background: '#f2f3f5',
                      border: '1.5px solid #0055FF',
                      color: '#0055FF',
                      fontFamily: 'Montserrat, sans-serif',
                      boxShadow: '0 0 20px rgba(0,85,255,0.2)',
                    }}
                  >
                    {s.num}
                  </div>
                  <div>
                    <h4 className="mb-2" style={{ color: '#111', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {s.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#666' }}>{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs table ── */}
      <section id="specs" className="py-20" style={{ background: '#3a3d42' }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#0055FF' }}>Technical Specifications</p>
            <h2 style={{ color: '#f0f0f0', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>技术参数</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid #4e5258' }}
          >
            {specs.map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-4 transition-colors duration-150"
                style={{
                  background: i % 2 === 0 ? '#44474d' : '#3a3d42',
                  borderBottom: i < specs.length - 1 ? '1px solid #4e5258' : 'none',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#4e5258')}
                onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? '#44474d' : '#3a3d42')}
              >
                <span className="text-sm" style={{ color: '#a0a4aa' }}>{row.param}</span>
                <span
                  className="text-sm font-semibold"
                  style={{ color: row.param.includes('精度') || row.param.includes('负载') ? '#FF6B00' : '#e8e8e8', fontFamily: 'Montserrat, monospace' }}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA / Contact ── */}
      <section id="contact" className="py-24" style={{ background: 'linear-gradient(135deg, #dde8f8 0%, #f2f3f5 60%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: '#0055FF' }}>Free On-Site Survey</p>
            <h2
              className="mb-4"
              style={{ color: '#111', fontFamily: 'Montserrat, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
            >
              预约免费现场勘测
            </h2>
            <p className="mb-10 text-sm leading-relaxed" style={{ color: '#555' }}>
              填写基本信息，原厂工程师将在 24 小时内联系您，安排上门勘测与方案评估，全程免费，无隐性收费。
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { key: 'company', placeholder: '企业名称 *', required: true },
                    { key: 'contact', placeholder: '联系人姓名 *', required: true },
                  ].map((f) => (
                    <input
                      key={f.key}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                      className="px-4 py-3 rounded-lg text-sm outline-none transition-all"
                      style={{
                        background: '#ffffff',
                        border: '1px solid #d8d8d8',
                        color: '#333',
                      }}
                      onFocus={e => (e.target.style.borderColor = '#0055FF')}
                      onBlur={e => (e.target.style.borderColor = '#d8d8d8')}
                    />
                  ))}
                </div>
                <input
                  required
                  placeholder="联系电话 *"
                  value={form.phone}
                  onChange={e => setForm(prev => ({ ...prev, phone: e.target.value }))}
                  className="px-4 py-3 rounded-lg text-sm outline-none transition-all"
                  style={{ background: '#ffffff', border: '1px solid #d8d8d8', color: '#333' }}
                  onFocus={e => (e.target.style.borderColor = '#0055FF')}
                  onBlur={e => (e.target.style.borderColor = '#d8d8d8')}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
                  style={{ background: '#0055FF', color: '#111', fontFamily: 'Montserrat, sans-serif' }}
                >
                  提交预约申请
                  <ArrowRight size={16} />
                </motion.button>
                <p className="text-center text-xs" style={{ color: '#444' }}>
                  或直接致电 <a href="tel:+8613680231042" style={{ color: '#0055FF' }}>+86 136 8023 1042</a>
                  {' '}· 邮件 <a href="mailto:mofangtech@qq.com" style={{ color: '#0055FF' }}>mofangtech@qq.com</a>
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center gap-4"
              >
                <CheckCircle2 size={48} style={{ color: '#0055FF' }} />
                <h3 style={{ color: '#111', fontFamily: 'Montserrat, sans-serif' }}>预约已提交</h3>
                <p className="text-sm" style={{ color: '#555' }}>工程师将在 24 小时内与您联系，安排现场勘测。</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs underline"
                  style={{ color: '#444' }}
                >
                  重新填写
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="py-6 border-t" style={{ borderColor: '#ddd' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#444' }}>© 2026 中山市墨方智能科技有限公司 · 保留所有权利</p>
          <div className="flex items-center gap-6">
            <a href="tel:+8613680231042" className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: '#444' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#111')} onMouseLeave={e => (e.currentTarget.style.color = '#444')}>
              <Phone size={12} /> +86 136 8023 1042
            </a>
            <a href="mailto:mofangtech@qq.com" className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: '#444' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#111')} onMouseLeave={e => (e.currentTarget.style.color = '#444')}>
              <Mail size={12} /> mofangtech@qq.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
