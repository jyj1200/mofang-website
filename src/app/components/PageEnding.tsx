import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

interface PageEndingProps {
  variant?: 'industrial' | 'cultural' | 'default';
}

export function PageEnding({ variant = 'default' }: PageEndingProps) {
  const config = {
    industrial: {
      bgColor: 'from-[#2C2C2C] to-[#0066CC]',
      title: '开启您的工业设计项目',
      description: '专业团队为您提供从概念到量产的全流程技术支持',
      primaryBtn: {
        text: '咨询工业设计',
        link: '/industrial-order',
        color: 'bg-[#0066CC] hover:bg-[#0052A3]',
      },
      secondaryBtn: {
        text: '查看更多案例',
        link: '/industrial-design',
        color: 'bg-white/10 hover:bg-white/20 border border-white/30',
      },
    },
    cultural: {
      bgColor: 'from-[#FF7A30] to-[#00B894]',
      title: '定制您的文创产品',
      description: '从创意构思到批量生产，我们为您提供一站式文创设计服务',
      primaryBtn: {
        text: '立即定制',
        link: '/cultural-creative-order',
        color: 'bg-white text-[#FF7A30] hover:bg-gray-100',
      },
      secondaryBtn: {
        text: '浏览文创案例',
        link: '/cultural-creative',
        color: 'bg-white/10 hover:bg-white/20 border border-white/30',
      },
    },
    default: {
      bgColor: 'from-[#0066CC] via-[#00B894] to-[#FF7A30]',
      title: '让创意成为现实',
      description: '墨方智能科技 - 以科研驱动设计，用创意赋能产业',
      primaryBtn: {
        text: '开始咨询',
        link: '/industrial-order',
        color: 'bg-white text-[#0066CC] hover:bg-gray-100',
      },
      secondaryBtn: {
        text: '了解团队',
        link: '/team',
        color: 'bg-white/10 hover:bg-white/20 border border-white/30',
      },
    },
  };

  const currentConfig = config[variant];

  return (
    <section className={`py-20 bg-gradient-to-r ${currentConfig.bgColor} text-white relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">{currentConfig.title}</h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              {currentConfig.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={currentConfig.primaryBtn.link}
                className={`${currentConfig.primaryBtn.color} px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center`}
              >
                {currentConfig.primaryBtn.text}
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to={currentConfig.secondaryBtn.link}
                className={`${currentConfig.secondaryBtn.color} backdrop-blur-sm text-white px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center`}
              >
                {currentConfig.secondaryBtn.text}
              </Link>
            </div>
          </motion.div>

          {/* Right Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-white">电话咨询</h4>
                  <p className="text-white/80 text-sm mb-2">
                    工作日 9:00-18:00 专业顾问为您服务
                  </p>
                  <a href="tel:+8613680231042" className="text-white hover:underline">
                    +86 136 8023 1042
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-white">邮件咨询</h4>
                  <p className="text-gray-300 text-sm mb-2">
                    24小时内回复，详细项目方案讨论
                  </p>
                  <a href="mailto:337839167@qq.com" className="text-white hover:underline">
                    337839167@qq.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-white">微信咨询</h4>
                  <p className="text-white/80 text-sm mb-2">
                    扫码添加企业微信，获取即时响应
                  </p>
                  <p className="text-white">yz277562627</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">200+</div>
              <p className="text-white/80 text-sm">成功案例</p>
            </div>
            <div>
              <div className="text-4xl mb-2">50+</div>
              <p className="text-white/80 text-sm">合作企业</p>
            </div>
            <div>
              <div className="text-4xl mb-2">98%</div>
              <p className="text-white/80 text-sm">客户满意度</p>
            </div>
            <div>
              <div className="text-4xl mb-2">15+</div>
              <p className="text-white/80 text-sm">设计奖项</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}