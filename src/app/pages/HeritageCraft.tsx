import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import heritageCraftImage from '../../imports/_____03.png';
import artistPhoto from '../../imports/_____20260609174020_122_3.jpg';
import artworkImage from '../../imports/_____20260609174423_123_3.jpg';

// ── Decorative SVG primitives ──────────────────────────────────────────────

function CloudBorder() {
  return (
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="w-full h-12"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="cloudGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8d8f0" />
          <stop offset="50%" stopColor="#7cb9e8" />
          <stop offset="100%" stopColor="#b8d8f0" />
        </linearGradient>
      </defs>
      {/* Repeating cloud-scroll / hui-wen pattern */}
      {Array.from({ length: 24 }).map((_, i) => {
        const x = i * 60;
        return (
          <g key={i} transform={`translate(${x},0)`}>
            <path
              d="M0 36 Q5 20 15 24 Q20 10 30 16 Q40 10 45 24 Q55 20 60 36 Z"
              fill="url(#cloudGrad)"
              opacity="0.85"
            />
            <path
              d="M10 36 Q15 28 20 30 Q25 22 30 26 Q35 22 40 30 Q45 28 50 36"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.6"
              opacity="0.5"
            />
          </g>
        );
      })}
    </svg>
  );
}

function LotusPattern({ side }: { side: 'left' | 'right' }) {
  const flip = side === 'right' ? 'scale(-1,1)' : '';
  return (
    <svg
      viewBox="0 0 80 480"
      className="absolute top-1/2 -translate-y-1/2 w-16 hidden lg:block"
      style={{ [side]: '16px', opacity: 0.18 }}
      aria-hidden="true"
    >
      <g transform={flip} style={{ transformOrigin: '40px 240px' }}>
        {/* Stem */}
        <line x1="40" y1="20" x2="40" y2="460" stroke="#7cb9e8" strokeWidth="1.2" />
        {/* Repeated lotus + leaf motifs */}
        {[80, 180, 280, 380].map((y, i) => (
          <g key={i} transform={`translate(40,${y})`}>
            {/* Lotus petals */}
            <ellipse rx="12" ry="22" fill="#7cb9e8" opacity="0.9" />
            <ellipse rx="8" ry="18" cx="-14" cy="4" fill="#7cb9e8" opacity="0.7" transform="rotate(-25)" />
            <ellipse rx="8" ry="18" cx="14" cy="4" fill="#7cb9e8" opacity="0.7" transform="rotate(25)" />
            {/* Center detail */}
            <circle r="4" fill="#b88b4a" opacity="0.8" />
            {/* Curling leaves */}
            <path d={`M0 22 Q-20 38 -28 30 Q-18 18 0 22`} fill="#7cb9e8" opacity="0.6" />
            <path d={`M0 22 Q20 38 28 30 Q18 18 0 22`} fill="#7cb9e8" opacity="0.6" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function IceCrackTexture() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={{ opacity: 0.04 }}
    >
      <filter id="feTurb">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#feTurb)" />
    </svg>
  );
}

// ── Craft data ──────────────────────────────────────────────────────────────

const craftTypes = [
  {
    id: 'jdz',
    label: '螺钿镶嵌木质工艺品',
    labelEn: 'Mother-of-Pearl Wood Inlay',
    desc: '鲍鱼螺钿手工镶嵌，东非黑木为底，虹彩流转',
    color: '#7cb9e8',
  },
  {
    id: 'su',
    label: '苏绣',
    labelEn: 'Suzhou Embroidery',
    desc: '针法细腻，丝线如画，双面绣技艺精湛',
    color: '#a8d5e2',
  },
  {
    id: 'silk',
    label: '花丝镶嵌',
    labelEn: 'Filigree Inlay',
    desc: '金银细丝，錾刻工艺，宫廷御用技艺',
    color: '#b88b4a',
  },
];

const patterns = [
  { id: 'lotus', label: '莲花纹', desc: '出淤泥而不染，高洁品格象征' },
  { id: 'cloud', label: '云纹', desc: '祥云绵绵，吉祥如意之意' },
  { id: 'vine', label: '缠枝莲', desc: '蔓延不断，寓意生生不息' },
];

const sizes = [
  { id: 'small', label: '小件（10–20cm）' },
  { id: 'medium', label: '中件（20–40cm）' },
  { id: 'large', label: '大件（40cm+）' },
  { id: 'set', label: '成套定制' },
];

// ── Main Component ───────────────────────────────────────────────────────────

export function HeritageCraft() {
  const [activeCraft, setActiveCraft] = useState('jdz');
  const [activePattern, setActivePattern] = useState('lotus');
  const [activeSize, setActiveSize] = useState('medium');
  const [submitted, setSubmitted] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const craft = craftTypes.find((c) => c.id === activeCraft)!;

  const galleryImages = [heritageCraftImage, heritageCraftImage, heritageCraftImage];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: 'linear-gradient(160deg, #e8f0f8 0%, #f4f8fc 40%, #ffffff 100%)',
        fontFamily: '"Source Han Sans SC", "Noto Sans SC", "PingFang SC", sans-serif',
      }}
    >
      {/* Ice-crack overlay */}
      <IceCrackTexture />

      {/* Side lotus ornaments */}
      <LotusPattern side="left" />
      <LotusPattern side="right" />

      {/* ── Top cloud-pattern banner ── */}
      <header
        style={{ background: 'linear-gradient(90deg, #c5dff5 0%, #7cb9e8 50%, #c5dff5 100%)' }}
        className="relative"
      >
        {/* Back link */}
        <div className="max-w-6xl mx-auto px-6 pt-4 pb-0">
          <Link
            to="/cultural-creative"
            className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft size={16} />
            返回文创产品
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-3 pb-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white/70 tracking-[0.3em] text-xs mb-1 uppercase"
            style={{ fontFamily: 'inherit' }}
          >
            MO FANG · HERITAGE CRAFT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white tracking-[0.15em]"
            style={{
              fontFamily: '"Source Han Serif SC", "Noto Serif SC", "STSong", serif',
              textShadow: '0 2px 12px rgba(0,0,0,0.15)',
            }}
          >
            螺钿艺术
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/85 tracking-[0.2em] text-sm mt-1"
          >
            非遗工艺定制平台
          </motion.p>
        </div>

        <CloudBorder />
      </header>

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-6 py-3 text-xs text-[#7cb9e8]/70 flex items-center gap-2">
        <span>文创产品</span>
        <span>›</span>
        <span>非遗工艺传承定制</span>
        <span>›</span>
        <span className="text-[#7cb9e8]">天青雅集</span>
      </div>

      {/* ── Main content ── */}
      <main className="max-w-6xl mx-auto px-6 pb-24">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-14"
        >
          <p
            className="text-[#5a7a96] max-w-xl mx-auto leading-relaxed tracking-wide"
            style={{ fontSize: '0.97rem' }}
          >
            与非遗传承人携手，以千年工艺承载您的心意。
            <br />
            每一件定制作品，皆是文化的延续与情感的凝结。
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#7cb9e8]" />
            <span style={{ color: '#b88b4a', fontSize: '1.1rem' }}>✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#7cb9e8]" />
          </div>
        </motion.div>

        {/* ── Two-column: Gallery + Options ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: artwork gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{ background: 'linear-gradient(135deg, #deedf8, #f0f7fc)' }}
            >
              {/* Corner ornaments */}
              {['top-2 left-2', 'top-2 right-2 rotate-90', 'bottom-2 left-2 -rotate-90', 'bottom-2 right-2 rotate-180'].map((pos, i) => (
                <svg
                  key={i}
                  viewBox="0 0 24 24"
                  className={`absolute ${pos} w-7 h-7 opacity-40`}
                  aria-hidden="true"
                >
                  <path d="M2 2 L10 2 L10 4 L4 4 L4 10 L2 10 Z" fill="#7cb9e8" />
                  <circle cx="3" cy="3" r="1.2" fill="#b88b4a" />
                </svg>
              ))}

              {/* Main image */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={galleryImages[imgIndex]}
                  alt="非遗工艺定制作品展示"
                  className="w-full object-cover"
                  style={{ aspectRatio: '4/3', maxHeight: '420px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Gallery nav */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-3">
                <button
                  onClick={() => setImgIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)}
                  className="w-8 h-8 rounded-full bg-white/70 backdrop-blur flex items-center justify-center hover:bg-white transition-colors shadow"
                  aria-label="上一张"
                >
                  <ChevronLeft size={16} className="text-[#5a7a96]" />
                </button>
                {galleryImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ background: i === imgIndex ? '#7cb9e8' : '#c5dff5' }}
                    aria-label={`第${i + 1}张`}
                  />
                ))}
                <button
                  onClick={() => setImgIndex((i) => (i + 1) % galleryImages.length)}
                  className="w-8 h-8 rounded-full bg-white/70 backdrop-blur flex items-center justify-center hover:bg-white transition-colors shadow"
                  aria-label="下一张"
                >
                  <ChevronRight size={16} className="text-[#5a7a96]" />
                </button>
              </div>
            </div>

            {/* Craft caption */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCraft}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-6 p-5 rounded-xl"
                style={{ background: 'rgba(124,185,232,0.08)', border: '1px solid rgba(124,185,232,0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-1 self-stretch rounded-full mt-1"
                    style={{ background: craft.color, minHeight: '2.5rem' }}
                  />
                  <div>
                    <p
                      className="tracking-widest text-xs mb-1"
                      style={{ color: '#b88b4a', fontFamily: 'inherit' }}
                    >
                      {craft.labelEn.toUpperCase()}
                    </p>
                    <h3
                      className="mb-1"
                      style={{
                        fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif',
                        color: '#2c4a6a',
                      }}
                    >
                      {craft.label}
                    </h3>
                    <p className="text-sm text-[#5a7a96]">{craft.desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: customization panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Section: craft type */}
                <div>
                  <SectionTitle index="一" title="工艺类型" />
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    {craftTypes.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setActiveCraft(c.id)}
                        className="flex items-center gap-4 px-5 py-3.5 rounded-xl text-left transition-all duration-200"
                        style={{
                          border: activeCraft === c.id
                            ? `1.5px solid ${c.color}`
                            : '1.5px solid rgba(124,185,232,0.2)',
                          background: activeCraft === c.id
                            ? `rgba(${hexToRgb(c.color)},0.08)`
                            : 'rgba(255,255,255,0.6)',
                          boxShadow: activeCraft === c.id ? `0 0 0 3px ${c.color}22` : 'none',
                        }}
                      >
                        <span
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ background: activeCraft === c.id ? c.color : '#c5dff5' }}
                        />
                        <span>
                          <span
                            className="block text-sm tracking-wide"
                            style={{
                              color: activeCraft === c.id ? '#2c4a6a' : '#5a7a96',
                              fontFamily: '"Source Han Serif SC", serif',
                            }}
                          >
                            {c.label}
                          </span>
                          <span className="block text-xs text-[#8aabbf] mt-0.5">{c.desc}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section: pattern */}
                <div>
                  <SectionTitle index="二" title="纹样选择" />
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {patterns.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setActivePattern(p.id)}
                        className="flex-1 min-w-[7rem] px-4 py-3 rounded-xl text-center transition-all duration-200 text-sm"
                        style={{
                          border: activePattern === p.id
                            ? '1.5px solid #7cb9e8'
                            : '1.5px solid rgba(124,185,232,0.2)',
                          background: activePattern === p.id
                            ? 'rgba(124,185,232,0.1)'
                            : 'rgba(255,255,255,0.6)',
                          color: activePattern === p.id ? '#2c4a6a' : '#5a7a96',
                        }}
                      >
                        <span
                          className="block mb-0.5"
                          style={{
                            fontFamily: '"Source Han Serif SC", serif',
                            fontSize: '0.9rem',
                          }}
                        >
                          {p.label}
                        </span>
                        <span className="block text-xs" style={{ color: '#8aabbf', fontSize: '0.7rem' }}>
                          {p.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section: size */}
                <div>
                  <SectionTitle index="三" title="尺寸规格" />
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {sizes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActiveSize(s.id)}
                        className="px-4 py-3 rounded-xl text-left transition-all duration-200"
                        style={{
                          border: activeSize === s.id
                            ? '1.5px solid #7cb9e8'
                            : '1.5px solid rgba(124,185,232,0.2)',
                          background: activeSize === s.id
                            ? 'rgba(124,185,232,0.1)'
                            : 'rgba(255,255,255,0.6)',
                        }}
                      >
                        <span className="block text-sm" style={{ color: '#2c4a6a' }}>{s.label}</span>
                      </button>
                    ))}
                  </div>
                </div>


                {/* Submit button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-200"
                  style={{
                    background: 'linear-gradient(135deg, #7cb9e8 0%, #5a9fd4 100%)',
                    boxShadow: '0 4px 20px rgba(124,185,232,0.4)',
                    color: '#ffffff',
                  }}
                >
                  {/* Gold cloud icon */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
                    <path
                      d="M6 16.5A4.5 4.5 0 0 1 6 7.5a4.5 4.5 0 0 1 4-4.45A5 5 0 0 1 19 8a4 4 0 0 1-1 7.9"
                      fill="none"
                      stroke="#f5d98c"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M9 12 Q12 8 15 12"
                      fill="none"
                      stroke="#f5d98c"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="16" r="1.5" fill="#f5d98c" />
                  </svg>
                  <span
                    className="tracking-widest"
                    style={{ fontFamily: '"Source Han Serif SC", serif', fontSize: '1rem' }}
                  >
                    开始定制
                  </span>
                  <Sparkles size={16} style={{ color: '#f5d98c' }} />
                </motion.button>

                <p className="text-center text-xs" style={{ color: '#a0bccf' }}>
                  提交后，我们的非遗传承人将在 24 小时内与您联系
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16 px-8 rounded-2xl"
                style={{ background: 'rgba(124,185,232,0.08)', border: '1.5px solid rgba(124,185,232,0.25)' }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#7cb9e8,#5a9fd4)' }}
                >
                  <Sparkles size={28} className="text-white" />
                </div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: '"Source Han Serif SC", serif', color: '#2c4a6a' }}
                >
                  定制申请已提交
                </h3>
                <p className="text-sm text-[#5a7a96] leading-relaxed mb-2">
                  感谢您选择天青雅集，
                  <br />
                  我们的非遗传承人将在 24 小时内与您联系。
                </p>
                <p className="text-xs" style={{ color: '#b88b4a' }}>
                  联系方式：+86 136 8023 1042 · 337839167@qq.com
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2 rounded-full text-sm text-[#7cb9e8] border border-[#7cb9e8]/40 hover:bg-[#7cb9e8]/10 transition-colors"
                >
                  重新填写
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* ── Process steps ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-[#b88b4a] mb-2 uppercase">How It Works</p>
            <h2
              style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif', color: '#2c4a6a' }}
            >
              定制流程
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '壹', title: '提交需求', desc: '选择工艺、纹样与尺寸规格' },
              { num: '贰', title: '传承人对接', desc: '专属传承人与您深度沟通，确认方案' },
              { num: '叁', title: '手工制作', desc: '纯手工制作，每件作品约需 15–30 天' },
              { num: '肆', title: '质检交付', desc: '严格质检，精美包装，安全送达' },
            ].map((s) => (
              <div
                key={s.num}
                className="text-center p-6 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(124,185,232,0.18)' }}
              >
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#c5dff5,#7cb9e8)', color: '#fff', fontFamily: '"Source Han Serif SC", serif' }}
                >
                  {s.num}
                </div>
                <h4
                  className="mb-2"
                  style={{ fontFamily: '"Source Han Serif SC", serif', color: '#2c4a6a', fontSize: '0.95rem' }}
                >
                  {s.title}
                </h4>
                <p className="text-xs text-[#5a7a96] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Artist Profile ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-[#b88b4a] mb-2 uppercase">Artist</p>
            <h2 style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif', color: '#2c4a6a' }}>
              主理艺术家
            </h2>
          </div>

          <div
            className="rounded-3xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(124,185,232,0.2)', backdropFilter: 'blur(8px)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Left: portrait + bio */}
              <div
                className="p-8 flex flex-col items-center text-center md:border-r"
                style={{ borderColor: 'rgba(124,185,232,0.15)' }}
              >
                <div
                  className="w-32 h-32 rounded-full overflow-hidden mb-5 flex-shrink-0"
                  style={{ border: '2px solid rgba(124,185,232,0.35)', boxShadow: '0 4px 20px rgba(124,185,232,0.2)' }}
                >
                  <img
                    src={artistPhoto}
                    alt="夏禾"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3
                  className="mb-1 tracking-widest"
                  style={{ fontFamily: '"Source Han Serif SC", serif', color: '#2c4a6a', fontSize: '1.4rem' }}
                >
                  夏禾
                </h3>
                <p className="text-xs tracking-widest text-[#b88b4a] mb-4">XIA HE</p>
                <div className="space-y-2 text-left w-full">
                  {[
                    { year: '2024–今', text: '学习螺钿镶嵌，师从非遗传承人 邵益达' },
                    { year: '2023–2024', text: '硕士 MA 当代艺术实践，皇家艺术学院，伦敦' },
                    { year: '2015–2019', text: '学士 BA 雕塑，威尼斯美术学院，威尼斯' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span
                        className="text-xs flex-shrink-0 mt-0.5 w-20"
                        style={{ color: '#b88b4a', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {item.year}
                      </span>
                      <span className="text-xs text-[#5a7a96] leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: exhibitions */}
              <div className="p-8 md:col-span-2">
                <p
                  className="text-xs tracking-[0.25em] text-[#b88b4a] mb-5 uppercase"
                >
                  Exhibition History · 展览经历
                </p>
                <div className="space-y-3">
                  {[
                    { year: '2025', title: '「悬停此处有声」', venue: 'SWCAC 海上世界文化艺术中心', location: '深圳，中国' },
                    { year: '2025', title: '「失声的后浪潮」', venue: '龙城 CC 创意街区', location: '深圳，中国' },
                    { year: '2025', title: '"Echoes of Stillness"', venue: 'the handbag gallery', location: '伦敦，英国' },
                    { year: '2025', title: '「艺术家不用简历」', venue: '', location: '杭州，中国' },
                    { year: '2024', title: '「皇家艺术学院硕士毕业展」', venue: '皇家艺术学院', location: '伦敦，英国' },
                    { year: '2024', title: '"CAP Cinema"', venue: '皇家艺术学院', location: '伦敦，英国' },
                    { year: '2024', title: '"TATE MODERN LATES"', venue: 'Tate Modern 泰特现代美术馆', location: '伦敦，英国' },
                    { year: '2024', title: '"AH? AH~"', venue: '皇家艺术学院', location: '伦敦，英国' },
                    { year: '2024', title: '"DADA BALL"', venue: '皇家艺术学院', location: '伦敦，英国' },
                    { year: '2024', title: '"EVERYTHING MUST GO"', venue: 'the cookhouse gallery', location: '伦敦，英国' },
                    { year: '2021', title: '「Re-重生」科勒城市空间艺术展', venue: '', location: '上海，中国' },
                    { year: '2019', title: '"Art Night"', venue: '威尼斯美术学院', location: '威尼斯，意大利' },
                    { year: '2017', title: '「春」俄罗斯美术家协会于蓝色大厅承办', venue: '', location: '圣彼得堡，俄罗斯' },
                  ].map((ex, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      className="flex items-start gap-4 py-2"
                      style={{ borderBottom: i < 12 ? '1px solid rgba(124,185,232,0.1)' : 'none' }}
                    >
                      <span
                        className="text-xs flex-shrink-0 w-8 mt-0.5"
                        style={{ color: '#b88b4a', fontVariantNumeric: 'tabular-nums' }}
                      >
                        {ex.year}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm text-[#2c4a6a]" style={{ fontFamily: '"Source Han Serif SC", serif' }}>
                          {ex.title}
                        </span>
                        {ex.venue && (
                          <span className="text-sm text-[#5a7a96]">，{ex.venue}</span>
                        )}
                      </div>
                      <span className="text-xs text-[#8aabbf] flex-shrink-0 text-right">{ex.location}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* ── Artwork ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-[#b88b4a] mb-2 uppercase">Selected Works</p>
            <h2 style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif', color: '#2c4a6a' }}>
              艺术家作品
            </h2>
          </div>

          <div
            className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
            style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(124,185,232,0.2)' }}
          >
            {/* Image */}
            <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
              <img
                src={artworkImage}
                alt="松、雪与冬蛇 – 螺钿镶嵌作品"
                className="w-full h-full object-cover"
                style={{ minHeight: '420px' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.15))' }}
              />
            </div>

            {/* Info */}
            <div className="p-10 flex flex-col justify-center">
              <p className="text-xs tracking-[0.25em] text-[#b88b4a] mb-3 uppercase">螺钿镶嵌 · ICH Mother-of-Pearl Inlay</p>
              <h3
                className="mb-1"
                style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif', color: '#2c4a6a', fontSize: '1.45rem', letterSpacing: '0.08em' }}
              >
                松、雪与冬蛇
              </h3>
              <p className="text-sm text-[#8aabbf] mb-6 tracking-wide italic">Pine, Snow and Winter Snake</p>

              <div className="space-y-4">
                {[
                  { label: '年份', value: '2025' },
                  { label: '尺寸', value: '42 × 18 × 2.8 cm' },
                  { label: '材质', value: '东非黑木、螺钿（鲍鱼贝）' },
                  { label: '工艺', value: 'ICH 非遗螺钿镶嵌技艺' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span
                      className="text-xs flex-shrink-0 w-10 mt-0.5"
                      style={{ color: '#b88b4a' }}
                    >
                      {item.label}
                    </span>
                    <div className="flex-1 h-px self-center" style={{ background: 'rgba(124,185,232,0.2)' }} />
                    <span className="text-sm text-[#2c4a6a] flex-shrink-0">{item.value}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm text-[#5a7a96] leading-relaxed">
                以东非黑木为底，将鲍鱼螺钿细裁为松枝、瑞雪、蜿蜒冬蛇，层叠镶入，
                光线流转间虹彩浮动。每一枚贝片均由非遗传承人手工切割、打磨、嵌入，
                传承千年螺钿工艺之精髓。
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Quote ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center py-12 relative"
        >
          <div className="absolute inset-0 rounded-3xl" style={{ background: 'linear-gradient(135deg,rgba(124,185,232,0.07),rgba(184,139,74,0.06))' }} />
          <p
            className="relative text-lg tracking-[0.12em] text-[#2c4a6a]"
            style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif' }}
          >
            「 一枚螺钿，藏一片海的光 」
          </p>
          <p className="relative mt-3 text-sm tracking-widest text-[#5a7a96]">
            将千年非遗技艺镌入日常之物，让每一件作品都成为光与时间的对话
          </p>
          <p className="relative mt-3 text-xs tracking-widest text-[#b88b4a]">— 螺钿镶嵌，非遗活态传承</p>
        </motion.div>
      </main>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0"
        style={{ background: 'linear-gradient(135deg,#7cb9e8,#5a9fd4)', fontFamily: '"Source Han Serif SC", serif' }}
      >
        {index}
      </span>
      <span
        className="tracking-wider"
        style={{ color: '#2c4a6a', fontFamily: '"Source Han Serif SC", serif', fontSize: '0.95rem' }}
      >
        {title}
      </span>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,rgba(124,185,232,0.4),transparent)' }} />
    </div>
  );
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
