import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import heritageCraftImage from '../../imports/_____03.png';
import artistPhoto from '../../imports/_____20260609174020_122_3.jpg';
import artworkImage from '../../imports/_____20260609174423_123_3.jpg';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';
import { SEOHead } from '../components/SEOHead';

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
      style={{ [side]: '16px', opacity: 0.18 } as React.CSSProperties}
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

// ── Craft categories (9) ────────────────────────────────────────────────────

const craftTypes = [
  {
    id: 'jdz',
    label: '螺钿镶嵌',
    labelEn: 'Mother-of-Pearl Inlay',
    desc: '鲍鱼螺钿手工镶嵌，东非黑木为底，虹彩流转',
    descEn: 'Hand-cut abalone shell inlay on African blackwood, with iridescent shimmer',
    color: '#7cb9e8',
  },
  {
    id: 'su',
    label: '苏绣',
    labelEn: 'Suzhou Embroidery',
    desc: '针法细腻，丝线如画，双面绣技艺精湛',
    descEn: 'Delicate stitches, painterly silk threads, exquisite double-sided embroidery',
    color: '#a8d5e2',
  },
  {
    id: 'silk',
    label: '花丝镶嵌',
    labelEn: 'Filigree Inlay',
    desc: '金银细丝，錾刻工艺，宫廷御用技艺',
    descEn: 'Fine gold and silver filaments with chasing, a royal court craft',
    color: '#b88b4a',
  },
  {
    id: 'kesi',
    label: '缂丝',
    labelEn: 'Kesi Tapestry',
    desc: '通经断纬，一寸缂丝一寸金',
    descEn: 'Cut-silk weft technique — kesi is worth its weight in gold',
    color: '#d4a5a5',
  },
  {
    id: 'brocade',
    label: '蜀锦',
    labelEn: 'Shu Brocade',
    desc: '经纬起花，锦官城之名由此而来',
    descEn: 'Warp-and-weft patterned brocade, the origin of Brocade City',
    color: '#c98b7a',
  },
  {
    id: 'tiedye',
    label: '扎染',
    labelEn: 'Tie-Dye',
    desc: '蓝靛浸染，扎结成纹，蓝白相生',
    descEn: 'Indigo dyeing with bound-resist patterns, blue and white in harmony',
    color: '#6f8fc7',
  },
  {
    id: 'wood',
    label: '木雕',
    labelEn: 'Wood Carving',
    desc: '一刀一凿，因材施艺，木纹即画',
    descEn: 'Chisel by chisel, carving follows the natural grain of the wood',
    color: '#a98467',
  },
  {
    id: 'jade',
    label: '玉雕',
    labelEn: 'Jade Carving',
    desc: '因料构图，以柔克刚，玉必有工',
    descEn: 'Design follows the stone; gentleness shapes hardness; every jade piece carries craft',
    color: '#8fbf9f',
  },
  {
    id: 'celadon',
    label: '冰裂纹陶瓷',
    labelEn: 'Ice-Crackle Ceramic',
    desc: '釉面开片如冰裂，千峰翠色',
    descEn: 'Ice-crackle glaze crazing, the green of a thousand peaks',
    color: '#9dbfb0',
  },
];

// ── Patterns: craftIds empty = universal ────────────────────────────────────

const patterns = [
  {
    id: 'lotus',
    label: '莲花纹',
    labelEn: 'Lotus',
    desc: '出淤泥而不染，高洁品格象征',
    descEn: 'Rising unsullied from mud — a symbol of integrity',
    craftIds: [] as string[],
  },
  {
    id: 'cloud',
    label: '云纹',
    labelEn: 'Cloud',
    desc: '祥云绵绵，吉祥如意之意',
    descEn: 'Continuous auspicious clouds, bringing fortune',
    craftIds: [] as string[],
  },
  {
    id: 'vine',
    label: '缠枝莲',
    labelEn: 'Scrolling Lotus Vine',
    desc: '蔓延不断，寓意生生不息',
    descEn: 'Twining lotus vines — the rhythm of endless life',
    craftIds: [] as string[],
  },
];

// 专属纹样等设计端提供，直接往对应条目的 craftIds 里填门类 id 即可

// ── Sizes / formats ─────────────────────────────────────────────────────────

const sizes = [
  { id: 'small', label: '小件（10–20cm）', labelEn: 'Small (10–20cm)' },
  { id: 'medium', label: '中件（20–40cm）', labelEn: 'Medium (20–40cm)' },
  { id: 'large', label: '大件（40cm+）', labelEn: 'Large (40cm+)' },
  { id: 'set', label: '成套定制', labelEn: 'Custom Set' },
];

// ── Artists（只保留：姓名 / 英文名 / 所属门类 / 参展经历最多 2 条）─────────

const artists = [
  {
    id: 'xiahe',
    name: '夏禾',
    nameEn: 'XIA HE',
    photo: artistPhoto,
    craftId: 'jdz',
    exhibitions: [
      { year: '2024', title: 'TATE MODERN LATES', venue: '泰特现代美术馆', venueEn: 'Tate Modern', location: '伦敦', locationEn: 'London' },
      { year: '2024', title: '皇家艺术学院硕士毕业展', titleEn: 'RCA Degree Show', venue: '皇家艺术学院', venueEn: 'Royal College of Art', location: '伦敦', locationEn: 'London' },
    ],
  },
];

// ── Works（作品数 < 4 时不渲染筛选条）───────────────────────────────────────

const works = [
  {
    id: 'pine-snow-snake',
    craftId: 'jdz',
    image: artworkImage,
    title: '松、雪与冬蛇',
    titleEn: 'Pine, Snow and Winter Snake',
    year: '2025',
    size: '42 × 18 × 2.8 cm',
    material: '东非黑木、螺钿（鲍鱼贝）',
    materialEn: 'African blackwood, abalone mother-of-pearl',
    craft: 'ICH 非遗螺钿镶嵌技艺',
    craftEn: 'ICH mother-of-pearl inlay craft',
    desc: '以东非黑木为底，将鲍鱼螺钿细裁为松枝、瑞雪、蜿蜒冬蛇，层叠镶入，光线流转间虹彩浮动。每一枚贝片均由非遗传承人手工切割、打磨、嵌入，传承千年螺钿工艺之精髓。',
    descEn: 'On an African blackwood base, abalone shell is cut into pine branches, auspicious snow and a winding winter snake, inlaid layer by layer — iridescence floats as light moves. Each shell piece is hand-cut, polished and set by an ICH inheritor, carrying on a thousand years of mother-of-pearl craft.',
  },
];

// ── Main Component ───────────────────────────────────────────────────────────

export function HeritageCraft() {
  const [activeCraft, setActiveCraft] = useState('jdz');
  const [activePattern, setActivePattern] = useState('lotus');
  const [activeSize, setActiveSize] = useState('medium');
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();
  const isZh = language === 'zh';
  const t = translations[language].heritage;

  const craft = craftTypes.find((c) => c.id === activeCraft)!;

  // 按当前门类过滤纹样：craftIds 为空视为通用
  const filteredPatterns = patterns.filter(
    (p) => !p.craftIds.length || p.craftIds.includes(activeCraft)
  );

  // 门类切换时，若当前纹样不在新列表里，重置为首项
  useEffect(() => {
    if (filteredPatterns.length && !filteredPatterns.some((p) => p.id === activePattern)) {
      setActivePattern(filteredPatterns[0].id);
    }
  }, [activeCraft]);

  const hasPatternOptions = filteredPatterns.length > 0;

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
      <SEOHead
        title={t.metaTitle}
        description={t.metaDesc}
        keywords={t.metaKeywords}
        path="/heritage-craft"
      />

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
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            {t.backToCreative}
          </Link>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-3 pb-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white/70 tracking-[0.3em] text-xs mb-1 uppercase"
          >
            {t.heroKicker}
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
            {t.heroTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/85 tracking-[0.2em] text-sm mt-2"
          >
            {t.heroCraftsAnchor}
          </motion.p>
        </div>

        <CloudBorder />
      </header>

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-6 py-3 text-xs text-[#7cb9e8]/70 flex items-center gap-2">
        <span>{t.crumbsCreative}</span>
        <span>›</span>
        <span>{t.crumbsHeritage}</span>
        <span>›</span>
        <span className="text-[#7cb9e8]">{t.crumbsCurrent}</span>
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
            {t.introLine1}
            <br />
            {t.introLine2}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#7cb9e8]" />
            <span style={{ color: '#b88b4a', fontSize: '1.1rem' }}>✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#7cb9e8]" />
          </div>
        </motion.div>

        {/* ── Two-column: Gallery + Options ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: artwork gallery（单图静态展示，轮播待补充图片后恢复） */}
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

              {/* Static hero image */}
              <img
                src={heritageCraftImage}
                alt={t.galleryAlt}
                className="w-full object-cover"
                style={{ aspectRatio: '4/3', maxHeight: '420px' }}
              />
            </div>

            {/* Craft caption */}
            <motion.div
              key={activeCraft}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
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
                    className="tracking-widest text-xs mb-1 uppercase"
                    style={{ color: '#b88b4a' }}
                  >
                    {isZh ? craft.labelEn : craft.labelEn}
                  </p>
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif',
                      color: '#2c4a6a',
                    }}
                  >
                    {isZh ? craft.label : craft.labelEn}
                  </h3>
                  <p className="text-sm text-[#5a7a96]">{isZh ? craft.desc : craft.descEn}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: customization panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* Section 1: craft category (9) */}
                <div>
                  <SectionTitle index="一" title={t.sectionCraft} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {craftTypes.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setActiveCraft(c.id)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200"
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
                        <span className="min-w-0">
                          <span
                            className="block text-sm tracking-wide truncate"
                            style={{
                              color: activeCraft === c.id ? '#2c4a6a' : '#5a7a96',
                              fontFamily: '"Source Han Serif SC", serif',
                            }}
                          >
                            {isZh ? c.label : c.labelEn}
                          </span>
                          <span className="block text-xs text-[#8aabbf] mt-0.5 line-clamp-2">
                            {isZh ? c.desc : c.descEn}
                          </span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 2: pattern（按门类过滤；空列表时显示说明） */}
                <div>
                  <SectionTitle index="二" title={t.sectionPattern} />
                  {hasPatternOptions ? (
                    <div className="flex gap-3 mt-4 flex-wrap">
                      {filteredPatterns.map((p) => (
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
                            {isZh ? p.label : p.labelEn}
                          </span>
                          <span className="block text-xs" style={{ color: '#8aabbf', fontSize: '0.7rem' }}>
                            {isZh ? p.desc : p.descEn}
                          </span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p
                      className="mt-4 px-4 py-3 rounded-xl text-sm"
                      style={{
                        background: 'rgba(124,185,232,0.06)',
                        border: '1px dashed rgba(124,185,232,0.3)',
                        color: '#5a7a96',
                      }}
                    >
                      {t.patternNone}
                    </p>
                  )}
                </div>

                {/* Section 3: size / format */}
                <div>
                  <SectionTitle index="三" title={t.sectionSize} />
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
                        <span className="block text-sm" style={{ color: '#2c4a6a' }}>
                          {isZh ? s.label : s.labelEn}
                        </span>
                      </button>
                    ))}
                  </div>
                  <p className="mt-3 text-xs" style={{ color: '#8aabbf' }}>
                    {t.sizeNote}
                  </p>
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
                    {t.submitButton}
                  </span>
                  <Sparkles size={16} style={{ color: '#f5d98c' }} />
                </motion.button>

                <p className="text-center text-xs" style={{ color: '#a0bccf' }}>
                  {t.submitNote}
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
                  {t.successTitle}
                </h3>
                <p className="text-sm text-[#5a7a96] leading-relaxed mb-2">
                  {t.successLine1}
                  <br />
                  {t.successLine2}
                </p>
                <p className="text-xs" style={{ color: '#b88b4a' }}>
                  {t.successContact}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-6 py-2 rounded-full text-sm text-[#7cb9e8] border border-[#7cb9e8]/40 hover:bg-[#7cb9e8]/10 transition-colors"
                >
                  {t.refillButton}
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
              {t.processTitle}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '壹', title: t.process1Title, desc: t.process1Desc },
              { num: '贰', title: t.process2Title, desc: t.process2Desc },
              { num: '叁', title: t.process3Title, desc: t.process3Desc },
              { num: '肆', title: t.process4Title, desc: t.process4Desc },
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

        {/* ── ICH Artisans ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] text-[#b88b4a] mb-2 uppercase">ICH Artisans</p>
            <h2 style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif', color: '#2c4a6a' }}>
              {t.artistsTitle}
            </h2>
            <p className="mt-3 text-sm text-[#5a7a96]">{t.artistsSubtitle}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {artists.map((a) => {
              const aCraft = craftTypes.find((c) => c.id === a.craftId);
              return (
                <div
                  key={a.id}
                  className="rounded-3xl p-8 flex flex-col items-center text-center"
                  style={{
                    width: '320px',
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(124,185,232,0.2)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    className="w-28 h-28 rounded-full overflow-hidden mb-4 flex-shrink-0"
                    style={{ border: '2px solid rgba(124,185,232,0.35)', boxShadow: '0 4px 20px rgba(124,185,232,0.2)' }}
                  >
                    <img
                      src={a.photo}
                      alt={isZh ? a.name : a.nameEn}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3
                    className="mb-1 tracking-widest"
                    style={{ fontFamily: '"Source Han Serif SC", serif', color: '#2c4a6a', fontSize: '1.3rem' }}
                  >
                    {isZh ? a.name : a.nameEn}
                  </h3>
                  <p className="text-xs tracking-widest text-[#b88b4a] mb-2">{a.nameEn}</p>
                  {aCraft && (
                    <p
                      className="text-xs px-3 py-1 rounded-full mb-5"
                      style={{ background: `rgba(${hexToRgb(aCraft.color)},0.12)`, color: '#2c4a6a' }}
                    >
                      {isZh ? aCraft.label : aCraft.labelEn}
                    </p>
                  )}
                  <p
                    className="text-xs tracking-[0.25em] text-[#b88b4a] mb-3 uppercase self-start"
                  >
                    {t.artistsExhibitionLabel}
                  </p>
                  <div className="space-y-2 text-left w-full">
                    {a.exhibitions.slice(0, 2).map((ex, i) => (
                      <p key={i} className="text-xs leading-relaxed text-[#5a7a96]">
                        <span style={{ color: '#b88b4a', fontVariantNumeric: 'tabular-nums' }}>{ex.year}</span>
                        {' · '}
                        {isZh
                          ? `${ex.title}，${ex.venue}，${ex.location}`
                          : `${ex.titleEn ?? ex.title}, ${ex.venueEn ?? ex.venue}, ${ex.locationEn ?? ex.location}`}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center mt-8 text-xs" style={{ color: '#8aabbf' }}>
            {t.artistsMoreNote}
          </p>
        </motion.div>

        {/* ── Selected ICH Works ── */}
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
              {t.worksTitle}
            </h2>
          </div>

          {/* 作品数 >= 4 时启用门类筛选条 */}
          {works.length >= 4 && (
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {craftTypes
                .filter((c) => works.some((w) => w.craftId === c.id))
                .map((c) => (
                  <span
                    key={c.id}
                    className="px-4 py-1.5 rounded-full text-xs"
                    style={{ border: '1px solid rgba(124,185,232,0.3)', color: '#5a7a96' }}
                  >
                    {isZh ? c.label : c.labelEn}
                  </span>
                ))}
            </div>
          )}

          <div className={works.length === 1 ? 'max-w-2xl mx-auto' : ''}>
            {works.map((w) => {
              const wCraft = craftTypes.find((c) => c.id === w.craftId);
              return (
                <div
                  key={w.id}
                  className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
                  style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(124,185,232,0.2)' }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ minHeight: '420px' }}>
                    <img
                      src={w.image}
                      alt={`${isZh ? w.title : w.titleEn} – ${wCraft ? (isZh ? wCraft.label : wCraft.labelEn) : ''}`}
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
                    {wCraft && (
                      <p className="text-xs tracking-[0.25em] text-[#b88b4a] mb-3 uppercase">
                        {isZh ? wCraft.label : wCraft.labelEn} · {isZh ? wCraft.labelEn : wCraft.label}
                      </p>
                    )}
                    <h3
                      className="mb-1"
                      style={{ fontFamily: '"Source Han Serif SC", "Noto Serif SC", serif', color: '#2c4a6a', fontSize: '1.45rem', letterSpacing: '0.08em' }}
                    >
                      {isZh ? w.title : w.titleEn}
                    </h3>
                    <p className="text-sm text-[#8aabbf] mb-6 tracking-wide italic">{isZh ? w.titleEn : w.title}</p>

                    <div className="space-y-4">
                      {[
                        { label: t.worksYear, value: w.year },
                        { label: t.worksSize, value: w.size },
                        { label: t.worksMaterial, value: isZh ? w.material : w.materialEn },
                        { label: t.worksCraft, value: isZh ? w.craft : w.craftEn },
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
                      {isZh ? w.desc : w.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
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
            {t.quoteMain}
          </p>
          <p className="relative mt-3 text-sm tracking-widest text-[#5a7a96]">
            {t.quoteSub}
          </p>
          <p className="relative mt-3 text-xs tracking-widest text-[#b88b4a]">
            {t.quoteNote}
          </p>
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
