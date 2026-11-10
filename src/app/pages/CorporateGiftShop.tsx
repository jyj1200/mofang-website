import { useState } from "react";
import { motion } from "motion/react";
import { Gift, Award, BookOpen, Coffee, Shirt, Star, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import customLampImage from "@/imports/____02.png";
import woodenGiftImage from "@/imports/__________-1.png";
import aromatherapyImage from "@/imports/__________-2.png";
import metalBadgeImage from "@/imports/____1.png";
import brandGiftImage from "@/imports/_____01.png";

const giftProducts = [
  {
    id: 1,
    name: "企业定制灯具",
    desc: "以企业文化为灵感，融合品牌视觉元素进行灯具造型定制，兼顾艺术性与实用性，适合办公空间陈设、高端客户伴手礼及品牌形象展示。",
    tag: "空间定制",
    tagColor: "bg-[#D9A7A7] text-white",
    icon: "💡",
    img: customLampImage,
    minQty: "20件起订",
  },
  {
    id: 2,
    name: "木质礼品套装",
    desc: "原木工艺礼盒，内含香薰蜡烛、香皂花与精油，传递温暖关怀，适合节庆回馈。",
    tag: "节庆优选",
    tagColor: "bg-[#C4A8A8] text-white",
    icon: "🌸",
    img: woodenGiftImage,
    minQty: "30件起订",
  },
  {
    id: 3,
    name: "公司品牌礼遇",
    desc: "以企业品牌视觉为核心，定制专属Logo礼盒套装，含品牌手册、徽章与纪念品，彰显企业文化底蕴，适合重要客户接待与商务合作纪念。",
    tag: "品牌礼遇",
    tagColor: "bg-[#BEA0A0] text-white",
    icon: "🏅",
    img: brandGiftImage,
    minQty: "30套起订",
  },
  {
    id: 4,
    name: "高端香薰礼盒",
    desc: "法式植物香氛系列，雕花玻璃瓶身，附企业定制刻字服务，品味与品牌双重传递。",
    tag: "品牌定制",
    tagColor: "bg-[#D9A7A7] text-white",
    icon: "✨",
    img: aromatherapyImage,
    minQty: "100件起订",
  },
];

const cultureProducts = [
  {
    id: 1,
    name: "定制皮面笔记本",
    desc: "头层牛皮封面，内页道林纸，支持烫金企业Logo与个性化内封设计。",
    tag: "企业Logo定制",
    icon: <BookOpen size={20} />,
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&h=300&fit=crop&auto=format",
    minQty: "50本起订",
  },
  {
    id: 2,
    name: "马克杯定制套装",
    desc: "高白骨瓷材质，哑光釉面工艺，支持四色印花Logo及企业标语，随附礼品盒包装。",
    tag: "企业Logo定制",
    icon: <Coffee size={20} />,
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=300&fit=crop&auto=format",
    minQty: "100个起订",
  },
  {
    id: 3,
    name: "文化衫定制",
    desc: "260g重磅纯棉，丝网印刷工艺，支持团队Logo、活动主题多色定制，多种版型可选。",
    tag: "企业Logo定制",
    icon: <Shirt size={20} />,
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop&auto=format",
    minQty: "30件起订",
  },
  {
    id: 4,
    name: "金属徽章套装",
    desc: "黄铜锌合金材质，烤漆冲压工艺，可制作公司会徽、纪念章、活动胸针，工艺精湛。",
    tag: "企业Logo定制",
    icon: <Award size={20} />,
    img: metalBadgeImage,
    minQty: "200枚起订",
  },
];

function ProductCard({
  product,
  index,
  showTag = false,
}: {
  product: typeof giftProducts[0] | typeof cultureProducts[0];
  index: number;
  showTag?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const p = product as any;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white rounded-2xl overflow-hidden border border-[#EAE6E6] flex flex-col"
      style={{
        boxShadow: hovered
          ? "0 12px 36px rgba(180,140,140,0.18)"
          : "0 2px 12px rgba(180,140,140,0.08)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.28s ease, transform 0.28s ease",
      }}
    >
      <div className="relative overflow-hidden bg-[#F5F0F0]" style={{ height: 200 }}>
        <ImageWithFallback
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        {p.tag && (
          <span
            className={`absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full ${
              p.tagColor || "bg-[#D9A7A7] text-white"
            }`}
          >
            {p.tag}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-2">
          {p.icon && typeof p.icon !== "string" ? (
            <span className="text-[#C4A8A8]">{p.icon}</span>
          ) : (
            <span className="text-lg">{p.icon}</span>
          )}
          <h3 className="font-semibold text-[#4A4A4A] text-base">{p.name}</h3>
        </div>
        <p className="text-sm text-[#8A8080] leading-relaxed flex-grow mb-4">{p.desc}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-[#B0A0A0] bg-[#F5F0F0] px-2.5 py-1 rounded-full">
            {p.minQty}
          </span>
          <button
            className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200"
            style={{
              borderColor: "#D9A7A7",
              color: hovered ? "#fff" : "#C4A8A8",
              backgroundColor: hovered ? "#D9A7A7" : "transparent",
            }}
          >
            定制询价
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function CorporateGiftShop() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F5F5", color: "#4A4A4A" }}>
      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #EAE6E6 0%, #F0E4E4 40%, #EDD5D5 100%)",
          paddingTop: 64,
          paddingBottom: 64,
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 rounded-full opacity-20 pointer-events-none"
          style={{ width: 320, height: 320, background: "#D9A7A7", transform: "translate(80px, -80px)" }}
        />
        <div
          className="absolute bottom-0 left-0 rounded-full opacity-10 pointer-events-none"
          style={{ width: 200, height: 200, background: "#C4A8A8", transform: "translate(-60px, 60px)" }}
        />

        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Gift size={20} className="text-[#D9A7A7]" />
              <span className="text-sm text-[#B0A0A0] tracking-widest uppercase font-medium">
                Corporate Gift Mall
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3A3030] mb-3 leading-tight">
              企业定制礼物
            </h1>
            <p className="text-base text-[#8A7878] max-w-md leading-relaxed">
              甄选品质好礼，传递企业文化
              <br />
              每一份礼物，都是品牌温度的延伸
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="tel:+8613680231042"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200"
              style={{
                backgroundColor: "#D9A7A7",
                color: "#fff",
                boxShadow: "0 4px 16px rgba(217,167,167,0.4)",
              }}
            >
              <Phone size={15} />
              定制咨询
            </a>
            <a
              href="mailto:mofangtech@qq.com"
              className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border transition-all duration-200"
              style={{ borderColor: "#D9A7A7", color: "#C4A8A8", backgroundColor: "white" }}
            >
              <MessageCircle size={15} />
              发送邮件
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <div
        className="border-b"
        style={{ backgroundColor: "white", borderColor: "#EAE6E6" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap gap-6 justify-center md:justify-start">
          {["一对一设计顾问", "支持小批量起订", "全程品质追踪", "专业包装配送"].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-sm text-[#8A8080]">
              <Star size={13} className="text-[#D9A7A7]" fill="#D9A7A7" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14">
        {/* Section 1: Gift Boxes */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <div className="flex items-end gap-3 mb-2">
            <div
              className="w-1 rounded-full self-stretch"
              style={{ backgroundColor: "#D9A7A7", minHeight: 36 }}
            />
            <div>
              <h2 className="text-xl font-bold text-[#3A3030]">企业伴手礼</h2>
              <p className="text-sm text-[#B0A0A0] mt-0.5">
                精选礼品，彰显品牌格调与人文温度
              </p>
            </div>
          </div>

          <div
            className="h-px my-5"
            style={{ background: "linear-gradient(to right, #D9A7A7, transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {giftProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} showTag />
            ))}
          </div>
        </motion.section>

        {/* Section 2: Culture Goods */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16"
        >
          <div className="flex items-end gap-3 mb-2">
            <div
              className="w-1 rounded-full self-stretch"
              style={{ backgroundColor: "#C4A8A8", minHeight: 36 }}
            />
            <div>
              <h2 className="text-xl font-bold text-[#3A3030]">企业文化用品</h2>
              <p className="text-sm text-[#B0A0A0] mt-0.5">
                支持企业Logo定制，强化品牌形象与团队凝聚力
              </p>
            </div>
          </div>

          <div
            className="h-px my-5"
            style={{ background: "linear-gradient(to right, #C4A8A8, transparent)" }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cultureProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl overflow-hidden relative"
          style={{
            background: "linear-gradient(120deg, #E8D5D5 0%, #F0E0E0 50%, #EAE6E6 100%)",
            padding: "40px 48px",
          }}
        >
          <div
            className="absolute right-0 top-0 rounded-full opacity-20 pointer-events-none"
            style={{ width: 240, height: 240, background: "#D9A7A7", transform: "translate(60px, -60px)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#3A3030] mb-1.5">
                没有找到合适的方案？
              </h3>
              <p className="text-sm text-[#8A7878] max-w-sm leading-relaxed">
                我们提供完全定制化服务，从概念设计到生产交付全流程把控，
                专属设计顾问为您打造独一无二的企业礼品解决方案。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+8613680231042"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: "#3A3030",
                  color: "#fff",
                  boxShadow: "0 4px 16px rgba(58,48,48,0.2)",
                }}
              >
                <Phone size={14} />
                +86 136 8023 1042
              </a>
              <a
                href="mailto:mofangtech@qq.com"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border whitespace-nowrap transition-all duration-200"
                style={{ borderColor: "#3A3030", color: "#3A3030", backgroundColor: "transparent" }}
              >
                发送定制需求
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
