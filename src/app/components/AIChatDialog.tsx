import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { defaultAIConfig, COMPANY_KNOWLEDGE_BASE } from '../lib/ai-config';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatDialog({ isOpen, onClose }: AIChatDialogProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: '您好！我是墨方智能科技的AI助手。我已连接到云端知识库，可以帮您深入了解我们的文创产品设计、工业设计服务、团队信息、行业知识以及定制流程。请问有什么可以帮助您的？',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // 案例相关 - 工业设计案例
    if (lowerMessage.includes('案例') || lowerMessage.includes('项目') || lowerMessage.includes('作品') || lowerMessage.includes('成功案例')) {
      if (lowerMessage.includes('工业') || lowerMessage.includes('机械') || lowerMessage.includes('投影') || lowerMessage.includes('扫地')) {
        return '**我们的工业设计案例**\n\n🤖 协作机械臂设计\n• 面向中小型企业的轻型协作机械臂\n• 一体化流线型机身，轻量化铝合金+磨砂ABS材质\n• 触屏+遥控双模式操作\n• 上市后订单量较同类产品提升20%\n\n📽️ 家用智能投影仪设计\n• 便携+高清的家用投影仪\n• 圆柱形机身，直径15cm，重量0.8kg\n• 磁吸式遥控器，1080P高清投影\n• 电商月销超5000台\n\n🤖 家用扫地机器人设计\n• D型机身设计，贴合墙角无死角\n• 激光雷达导航+3D避障技术\n• 双滚刷设计，机身厚度仅8cm\n• 获得外观设计专利，复购率达15%\n\n需要了解某个案例的详细信息吗？';
      }
      
      if (lowerMessage.includes('文创') || lowerMessage.includes('徽章') || lowerMessage.includes('冰箱贴') || lowerMessage.includes('笔')) {
        return '**我们的文创设计案例**\n\n🎖️ 主题徽章设计\n• 景区款：孙中山故居、岭南水乡元素，浮雕+珐琅彩工艺\n• 企业款：结合LOGO与工业设计元素，金属烤漆工艺\n• IP联名款：博物馆文物复刻，锌合金压铸工艺\n\n🧲 地域特色冰箱贴设计\n• 融合中山非遗元素（醉龙舞、沙溪凉茶）\n• 软胶+磁性贴，3D立体造型\n• 部分款式内置LED灯，夜间发光\n\n✒️ 文创笔设计\n• 非遗款：竹制笔杆+红木雕刻纹样，陶瓷笔帽\n• 企业款：金属笔杆+激光雕刻，商务礼品\n• 学生款：卡通机械臂造型，防滑硅胶设计\n\n想详细了解哪个产品呢？';
      }
      
      return '**我们的设计案例**\n\n📐 工业设计案例：\n• 协作机械臂设计\n• 家用智能投影仪设计\n• 家用扫地机器人设计\n\n🎨 文创设计案例：\n• 主题徽章设计\n• 地域特色冰箱贴设计\n• 文创笔设计\n\n这些案例展示了我们"工业设计+文创"的融合能力。您对哪类案例感兴趣？';
    }

    // 机械臂案例详情
    if (lowerMessage.includes('机械臂') || lowerMessage.includes('协作机器人')) {
      return '**协作机械臂设计案例**\n\n🎯 设计需求：\n面向中小型企业的轻型协作机械臂，适配流水线分拣、装配场景\n\n✨ 设计亮点：\n• 一体化流线型机身 - 减少棱角降低碰撞风险\n• 轻量化铝合金+磨砂ABS材质 - 兼顾耐用性与散热性\n• 优化传动结构 - 提升运动精度，降低噪音\n• 触屏+遥控双模式 - 适配不同工人操作习惯\n\n📊 市场效果：\n• 订单量较同类产品提升20%\n• 成为中小型工厂的主力协作设备\n• 客户反馈：外观简洁、操作便捷\n\n这是我们将工业设计与实用功能完美结合的典型案例。';
    }

    // 投影仪案例详情
    if (lowerMessage.includes('投影') || lowerMessage.includes('投影仪')) {
      return '**家用智能投影仪设计案例**\n\n🎯 设计需求：\n主打"便携+高清"，目标用户为租房青年、家庭影院爱好者\n\n✨ 设计亮点：\n• 圆柱形机身 - 直径15cm，重量0.8kg\n• 磁吸式遥控器 - 顶部集成，避免丢失\n• 高透光率玻璃镜头 - 1080P高清投影\n• 防滑硅胶垫 - 多场景稳定放置\n• 莫兰迪配色 - 奶白、浅灰适配现代家居\n\n📊 市场效果：\n• 电商平台月销超5000台\n• 用户好评："颜值高、便携性强"\n• 成为爆款家用投影产品\n\n完美诠释了美学与功能的平衡设计。';
    }

    // 扫地机器人案例详情
    if (lowerMessage.includes('扫地机') || lowerMessage.includes('扫地机器人') || lowerMessage.includes('清洁机器人')) {
      return '**家用扫地机器人设计案例**\n\n🎯 设计需求：\n解决传统扫地机器人"越障能力弱、清洁死角多、噪音大"的痛点\n\n✨ 设计亮点：\n• D型机身设计 - 贴合墙角清洁无死角\n• 激光雷达+3D避障 - 松越过2cm门槛\n• 双滚刷设计 - 毛刷+胶刷兼顾毛发与除尘\n• 超薄机身 - 厚度仅8cm，深入沙发底床底\n• APP远程控制 - 自定义清洁路线\n\n📊 市场效果：\n• 获得外观设计专利\n• 成为品牌旗舰机型\n• 复购率达15%\n\n这个案例体现了我们解决用户痛点的设计能力。';
    }

    // 徽章案例详情
    if (lowerMessage.includes('徽章') || lowerMessage.includes('纪念章')) {
      return '**主题徽章设计案例**\n\n🎨 设计类型：\n景区定制纪念徽章、企业周年庆徽章、IP联名徽章\n\n✨ 设计亮点：\n\n【景区款】\n• 元素：孙中山故居、岭南水乡等地域特色\n• 工艺：浮雕+珐琅彩\n• 功能：背面二维码，扫码查看景区介绍\n\n【企业款】\n• 元素：企业LOGO+工业设计元素（机械臂、投影仪轮廓）\n• 工艺：金属烤漆\n• 用途：员工福利、客户伴手礼\n\n【IP联名款】\n• 合作：博物馆文物复刻（青铜鼎、青花瓷）\n• 工艺：锌合金压铸\n• 价值：兼具收藏性与纪念性\n\n应用场景：景区商店、企业年会、文创市集';
    }

    // 冰箱贴案例详情
    if (lowerMessage.includes('冰箱贴') || lowerMessage.includes('磁贴')) {
      return '**地域特色冰箱贴设计案例**\n\n🎨 设计类型：\n岭南文化主题冰箱贴、城市地标冰箱贴\n\n✨ 设计亮点：\n\n【材质工艺】\n• 软胶+磁性贴 - 手感柔软，吸附力强\n• 3D立体造型 - 彩色印刷工艺\n\n【文化元素】\n• 中山非遗：醉龙舞、沙溪凉茶包装纹样\n• 岭南建筑：骑楼、镬耳屋\n• 地域特色：深度融合本地文化\n\n【创新功能】\n• 部分款式内置迷你LED灯\n• 夜间可发光展示\n• 提升趣味性与实用性\n\n📍 应用场景：\n景区旅游纪念品、文创电商平台热销品\n\n将地域文化转化为日常生活中的艺术品。';
    }

    // 文创笔案例详情
    if (lowerMessage.includes('文创笔') || (lowerMessage.includes('笔') && lowerMessage.includes('设计'))) {
      return '**文创笔设计案例**\n\n🎨 设计类型：\n非遗元素签字笔、企业定制中性笔、学生文创笔\n\n✨ 设计亮点：\n\n【非遗款】\n• 笔杆：竹制材质 + 沙溪红木雕刻纹样\n• 笔帽：陶瓷材质 + 青花瓷图案\n• 特点：可替换笔芯，实用性与文化性兼备\n\n【企业款】\n• 设计：工业产品轮廓（扫地机器人、机械臂）\n• 工艺：金属笔杆 + 激光雕刻\n• 用途：企业商务礼品\n\n【学生款】\n• 造型：卡通机械臂外形\n• 配色：鲜艳色彩\n• 细节：防滑硅胶握笔处，适配小学生习惯\n\n📍 应用场景：\n企业商务礼品、学生文具、文创市集\n\n将工业设计元素融入日常文具，实现文化传承与创新。';
    }

    // 工业设计核心价值与定义
    if (lowerMessage.includes('工业设计') && (lowerMessage.includes('是什么') || lowerMessage.includes('定义') || lowerMessage.includes('核心') || lowerMessage.includes('价值'))) {
      return '**工业设计的核心价值**\n\n工业设计是以用户需求为导向，结合美学、工学、材料学、市场学，对产品的外观、结构、功能、用户体验进行系统性创新的活动。\n\n🎯 核心目标：\n• 提升品竞争力\n• 优化用户体验\n• 降低生产成本\n\n💡 适用场景：\n• 消费电子\n• 家居用品\n• 五金工具\n• 智能穿戴设备\n\n我们的团队来自西南交通大学、西安电子科技大学，具备从概念到量产的完整实施能力。';
    }

    // 文创产品相关
    if (lowerMessage.includes('文创') && (lowerMessage.includes('是什么') || lowerMessage.includes('定义') || lowerMessage.includes('特点') || lowerMessage.includes('属性'))) {
      return '**文创制品的核心属性**\n\n文创制品是文化创意与实用产品的结合体，通过将文化符号、IP元素、地域特色融入产品设计，实现"文化赋能产品"。\n\n✨ 核心特征：\n• 文化性 - 承载文化符号与故事\n• 艺术性 - 独特的美学设计\n• 实用性 - 兼具使用功能\n• 纪念性 - 具有收藏价值\n\n📦 常见品类：\n• 文创文具\n• 家居摆件\n• 旅游纪念品\n• IP周边产品\n• 非遗衍生产品';
    }

    // 公司优与定位
    if (lowerMessage.includes('优势') || lowerMessage.includes('特色') || lowerMessage.includes('为什么选择') || lowerMessage.includes('区别')) {
      return '**墨方智能科技的核心优势**\n\n我们是"工业设计+文创"的融合型公司，区别于纯设计公司或纯文创生产厂：\n\n🔧 设计驱动生产：\n用工业设计的标准化、规模化思维，解决文创产品"小批量、高成本、难量产"的痛点\n\n🎨 文化赋能设计：\n为工业产品注入文化内涵，提升产品附加值（如为普通水杯设计地域文化主题外观，从实用品升级为文创礼品）\n\n💪 一体化服务：\n设计+生产+销售全流程服务，确保设计落地质量\n\n🎓 专业团队：\n核心成员来自西南交通大学、西安电子科技大学，具备多学科背景';
    }

    // 业务模块与服务范围
    if (lowerMessage.includes('业务') || lowerMessage.includes('服务范围') || lowerMessage.includes('能做什么') || lowerMessage.includes('提供什么服务')) {
      return '**我们的核心业务模块**\n\n🎨 前端设计服务：\n• 工业产品外观设计 - 产品造型、色彩、材质、表面工艺\n• 文创产品定制设 - 文化IP衍生、地域特色文创、企业礼品\n• 结构与功能优化 - 内部结构设计、装配工艺优化\n• 用户体验(UX)设计 - 智能产品的人机交互设计\n\n🏭 中端生产管理：\n• 供应链整合 - 对接注塑厂、五金厂、印刷厂、包装厂\n• 核心工艺把控 - 浮雕、烫金、UV打印、非遗工艺结合\n• 小批量柔性生产 - 满足定制化需求\n\n🛒 后端市场销售：\n• B端业务 - 企业、政府、景区定制服务\n• C端业务 - 自有文创品牌运营\n• IP授权合作 - 联名款文创产品开发';
    }

    // 生产与供应链
    if (lowerMessage.includes('生产') || lowerMessage.includes('供应链') || lowerMessage.includes('工厂') || lowerMessage.includes('制造')) {
      return '**我们的生产与供应链管理**\n\n我们采用"轻资产代工+核心工艺自研"的模式：\n\n🏭 供应链整合：\n• 对接优质注塑厂、五金厂、印刷厂、包装厂\n• 全程负责产品打样、批量生产的品控与进度跟踪\n\n🎯 核心工艺把控：\n• 浮雕、烫金、UV打印等特色工艺\n• 非遗工艺结合创新\n• 建立标准化工艺流程\n\n⚡ 小批量柔性生产：\n• 满足文创产品"定制化、小批量"需求\n• 通过工业设计的模块化设计降低生产成本\n• 采用"以销定产"模式，减少库存风险\n\n✅ 质量保证：\n• 选择具备生产资质的代工厂\n• 确保产品符合国家质量标准（3C认证、食品接触料安全认证等）';
    }

    // 成本控制
    if (lowerMessage.includes('成本') || lowerMessage.includes('价格优势') || lowerMessage.includes('怎么控制') || lowerMessage.includes('降低费用')) {
      return '**我们的成本控制策略**\n\n💰 打样成本：\n• 采用3D打印快速打样\n• 降低传统开模的高成本\n\n🏭 生产成本：\n• 模块化设计，提高零件通用性\n• 批量采购原材料，获取价格优势\n• 优化装配工艺，提升生产效率\n\n📦 库存成本：\n• 采用"以销定产"模式\n• 减少文创产品的库存积压风险\n• 预售模式+柔性生产结合\n\n🤝 供应链优势：\n• 与代工厂签订长期合作协议\n• 争取批量价格优惠\n• 建立稳定的供应商网络';
    }

    // 行业痛点与解决方案
    if (lowerMessage.includes('痛点') || lowerMessage.includes('问题') || lowerMessage.includes('挑战') || lowerMessage.includes('难点')) {
      return '**行业痛点与我们的解决方案**\n\n❌ 痛点1：文创产品同质化严重\n✅ 解决：深挖地域文化、非遗元素，结合工业设计做功能创新\n\n❌ 痛点2：小批量生产导致成本高\n✅ 解决：整合供应链资源，与代工厂签订长期合作，争取批量价格\n\n❌ 痛点3：设计与生产脱节，样品与成品差异大\n✅ 解：建立专职品控团队，全程跟进生产流程，产前确认工艺标准\n\n❌ 痛点4：市场需求变化快，库存积压风险高\n✅ 解决：采用预售模式+柔性生产，根据订单量调整生产计划\n\n我们通过工业设计与文创的融合，系统性解决行业痛点。';
    }

    // 知识产权与合规
    if (lowerMessage.includes('知识产权') || lowerMessage.includes('专利') || lowerMessage.includes('合规') || lowerMessage.includes('授权') || lowerMessage.includes('版权')) {
      return '**知识产权与合规要求**\n\n📋 知识产权保护：\n• 设计成果申请外观专利、实用新型专利\n• 避免侵权风险，保护原创设计\n• 使用他人IP、图片、字体时，获得正规授权\n\n✅ 生产合规：\n• 选择具备生产资质的代工厂\n• 确保产品符合国家质量标准\n• 3C认证、食品接触材料安全认证等\n• 文创产品涉及非遗工艺的，遵守非遗保护规定\n\n⚠️ 风险提示：\n• 避免过度依赖单一客户或IP\n• 分散业务风险\n• 建立市场调研机制\n• 及时跟踪文化潮流与用户需求变化\n\n我们严格遵守所有法律法规，为客户提供合规的设计与生产服务。';
    }

    // 与传统公司的对比
    if (lowerMessage.includes('对比') || lowerMessage.includes('不同') || lowerMessage.includes('传统公司') || lowerMessage.includes('其他公司')) {
      return '**墨方与传统公司的区别**\n\n🔄 业务范围：\n我们：设计+生产+销售一体化\n纯设计公司：仅提供设计服务\n纯文创公司：以生产销售为主，设计能力弱\n\n💰 盈利模式：\n我们：设计服务费+产品销售利润+IP授权费\n纯设计公司：仅设计服务费\n纯文创公司：仅产品销售利润\n\n💪 核心优势：\n我们：设计与生产无缝衔接，文化与实用结合\n纯设计公司：专业设计能力强\n纯文创公司：渠道与生产能力强\n\n这种融合模式让我们能够更好地控制产品质量、成本和交付周期，为客户提供一站式解决方案。';
    }

    // 文创产品相关
    if (lowerMessage.includes('文创') || lowerMessage.includes('礼品') || lowerMessage.includes('套装')) {
      return '我们提供多样化的文创产品设计服务，包括：\n\n• 创意礼品套装（禅意茶道、文具套装、家居美学、商务礼盒）\n• 陶瓷艺术茶具\n• 木质文创摆件\n• 企业定制礼盒\n• 景区城市文创系列\n• 艺术收藏品\n\n我们的设计流程包括概念构思、设计深化、打样确认和生产落地。您对哪类产品感兴趣呢？';
    }

    // 工业设计相关
    if (lowerMessage.includes('工业设计') || lowerMessage.includes('机械') || lowerMessage.includes('机电') || lowerMessage.includes('外观')) {
      return '我们在工业设计领域具有深厚的专业能力：\n\n• 机械结构设计 - 精密机械与结构优化\n• 机电一体化设计 - 软硬件协同开发\n• 外观造型设计 - 美学与功能完美融合\n• 材料与工艺研究 - 创新工艺应用\n\n我们的团队拥有西南交通大学、西安电子科技大学等顶尖院校背景，可以为您提供从概念到量产的全流程服务。需要了解具体案例吗？';
    }

    // 团队相关
    if (lowerMessage.includes('团队') || lowerMessage.includes('成员') || lowerMessage.includes('背景') || lowerMessage.includes('公司')) {
      return '墨方智能科技是一家以科研人员为核心的设计机构：\n\n• 核心团队来自西南交通大学、西安电子科技大学等顶尖院校\n• 拥有机械工程、工业设计、艺术设计等多学科背景\n• 具备从概念设计到生产落地的完整实施能力\n• 服务过多个行业的企业客户\n\n我们的使命是将科技创新与人文美学相融合，创造兼具实用价值与艺术价值的设计作品。';
    }

    // 定制流程相关
    if (lowerMessage.includes('定制') || lowerMessage.includes('流程') || lowerMessage.includes('怎么') || lowerMessage.includes('如何')) {
      return '我们的定制流程非常简单：\n\n1️⃣ 需求沟通 - 了解您的具体需求和预算\n2️⃣ 方案设计 - 提供专业的设计方案和效果图\n3️⃣ 确认打样 - 制作样品供您确认和调整\n4️⃣ 批量生产 - 严格质量把控，按时交付\n\n无论是小批量定制还是批量生产，我们都能提供专业服务。您可以点击页面上的"立即咨询定制"按钮，或拨打我们的客服电话获取详细报价。';
    }

    // 价格相关
    if (lowerMessage.includes('价格') || lowerMessage.includes('费用') || lowerMessage.includes('多少钱') || lowerMessage.includes('报价')) {
      return '由于每个项目的需求、复杂度和数量都不同，我们需要根据具体情况提供报价。\\n\\n影响价格的因素包括：\\n• 设计复杂度\\n• 材料选择\\n• 工艺要求\\n• 生产数量\\n• 定制化程度\\n\\n建议您通过以下方式获取详细报价：\\n📧 邮箱：337839167@qq.com\\n📱 电话：+8613680231042\\n💬 填写在线定制表单\\n\\n我们会在24小时内给您专业的方案和报价。';
    }

    // 联系方式相关
    if (lowerMessage.includes('联系') || lowerMessage.includes('电话') || lowerMessage.includes('地址') || lowerMessage.includes('邮箱')) {
      return '📍 联系我们：\\n\\n📧 邮箱：337839167@qq.com\\n📱 电话：+8613680231042\\n🏢 地址：广东省中山市火炬开发区科技园\\n⏰ 工作时间：周一至周五 9:00-18:00\\n\\n您也可以直接在网站上填写定制表单，我们会尽快与您联系！';
    }

    // 礼品套装详细信息
    if (lowerMessage.includes('茶道') || lowerMessage.includes('茶具')) {
      return '禅意茶道套装是我们的特色产品之一：\n\n✨ 产品特点：\n• 手工陶瓷茶具，匠心工艺\n• 精选优质茶叶，品质保证\n• 禅意东方设计，传承文化\n• 精美礼盒包装，送礼佳品\n\n适合用于商务赠礼、节日礼品、文化交流等场合。支持企业定制LOGO和个性化包装。';
    }

    if (lowerMessage.includes('文具')) {
      return '创意文具套装将艺术与实用完美结合：\n\n✨ 产品特点：\n• 原创设计，独特美学\n• 环保材料，健康安全\n• 多功能性，提升效率\n• 收藏价值，品质之选\n\n适合作为企业礼品、学生用品、办公文具等。我们可以根据您的品牌形象进行定制设计。';
    }

    // 招聘相关
    if (lowerMessage.includes('招聘') || lowerMessage.includes('加入') || lowerMessage.includes('职位') || lowerMessage.includes('应聘')) {
      return '感谢您对墨方智能科技的关注！\\n\\n我们正在寻找充满热情的设计与工程人才。如果您热爱设计，追求创新，欢迎加入我们。\\n\\n💼 当前状态：暂无招聘职位\\n\\n但我们欢迎优秀人才随时投递简历：\\n📧 337839167@qq.com\\n\\n请在简历中注明应聘方向和期望岗位，我们会妥善保存您的信息，有合适机会时第一时间联系您。';
    }

    // 默认回复
    const defaultResponses = [
      '感谢您的咨询！我可以帮您了解：\n\n📦 文创产品设计\n🔧 工业设计服务\n👥 团队与公司信息\n🛠️ 定制流程与报价\n📞 联系方式\n💡 行业知识与解决方案\n\n请告诉我您想了解哪方面的内容？',
      '您可以问我关于我们的产品、服务、团队或行业知识的任何问题。例如：\n\n• "工业设计的核心价值是什么？"\n• "你们的核心优势是什么？"\n• "如何控制生产成本？"\n• "行业有哪些痛点？"\n• "定制流程是怎样的？"',
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // 模拟AI思考时间
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 w-[440px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0066CC] to-[#00B894] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-0">墨方AI助手</h3>
                  <p className="text-xs text-white/80">在线为您服务</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F5F7]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user'
                        ? 'bg-[#0066CC]'
                        : 'bg-gradient-to-br from-[#FF7A30] to-[#00B894]'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User size={18} className="text-white" />
                    ) : (
                      <Bot size={18} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-[#0066CC] text-white rounded-tr-none'
                        : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line leading-relaxed">
                      {message.content}
                    </p>
                    <p
                      className={`text-xs mt-2 ${
                        message.role === 'user' ? 'text-white/70' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString('zh-CN', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7A30] to-[#00B894] flex items-center justify-center flex-shrink-0">
                    <Bot size={18} className="text-white" />
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4 bg-white">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="输入您的问题..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#0066CC] transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-gradient-to-r from-[#0066CC] to-[#00B894] text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}