# AI语言模型连接指南

墨方智能科技官网AI助手已具备连接真实语言模型的能力。当前使用**本地知识库模式**，提供基于预设规则的智能问答。

## 当前状态

✅ **已启用功能：**
- 本地知识库智能问答
- 工业设计+文创融合知识体系
- 行业痛点与解决方案
- 公司业务、团队、产品信息
- 定制流程与价格咨询

## 如何连接真实语言模型

### 方案一：OpenAI (推荐)

1. **获取API密钥**
   - 访问 https://platform.openai.com/api-keys
   - 注册账号并创建新的API密钥
   - 复制您的API密钥

2. **配置AI助手**
   - 打开 `/lib/ai-config.ts` 文件
   - 找到 `openAIConfig` 配置项
   - 将 `YOUR_OPENAI_API_KEY_HERE` 替换为您的真实API密钥
   ```typescript
   export const openAIConfig: AIConfig = {
     provider: 'openai',
     apiKey: 'sk-proj-xxxxxxxxxxxxx', // 您的API密钥
     model: 'gpt-4',
     baseURL: 'https://api.openai.com/v1',
     temperature: 0.7,
     maxTokens: 2000,
   };
   ```

3. **切换到OpenAI模式**
   - 在 `/components/AIChatDialog.tsx` 中
   - 修改导入语句：
   ```typescript
   import { openAIConfig as defaultAIConfig } from '../lib/ai-config';
   ```

4. **重启应用**
   - AI助手将使用GPT-4提供更智能的对话

### 方案二：Anthropic Claude

1. **获取API密钥**
   - 访问 https://console.anthropic.com/
   - 注册账号并获取API密钥

2. **配置AI助手**
   - 打开 `/lib/ai-config.ts`
   - 配置 `anthropicConfig`：
   ```typescript
   export const anthropicConfig: AIConfig = {
     provider: 'anthropic',
     apiKey: 'sk-ant-xxxxxxxxxxxxx', // 您的API密钥
     model: 'claude-3-sonnet-20240229',
     baseURL: 'https://api.anthropic.com/v1',
     temperature: 0.7,
     maxTokens: 2000,
   };
   ```

3. **切换到Claude模式**
   - 修改导入为 `anthropicConfig`

### 方案三：国产大模型

支持接入：
- **阿里云通义千问**
- **讯飞星火**
- **智谱AI (ChatGLM)**

根据各服务商文档配置相应的API端点和密钥。

## 核心知识库

AI助手已内置以下企业知识：

### 1. 工业设计核心价值
- 用户需求导向的系统性创新
- 提升产品竞争力、优化体验、降低成本
- 适用于消费电子、家居用品、智能穿戴等领域

### 2. 文创制品核心属性
- 文化符号与实用产品的结合
- 文化性、艺术性、实用性、纪念性
- 文创文具、IP周边、非遗衍生等品类

### 3. 融合型公司优势
- 设计驱动生产，解决"小批量、高成本、难量产"痛点
- 文化赋能设计，提升产品附加值
- 设计+生产+销售一体化服务

### 4. 三大业务模块
- 前端设计服务：外观设计、结构优化、UX设计
- 中端生产管理：供应链整合、工艺把控、柔性生产
- 后端市场销售：B端定制、C端品牌、IP授权

### 5. 成本控制策略
- 3D打印快速打样
- 模块化设计降低成本
- "以销定产"减少库存风险

### 6. 行业痛点解决方案
- 产品同质化 → 深挖文化+功能创新
- 生产成本高 → 供应链整合+批量优惠
- 设计生产脱节 → 全程品控跟进
- 库存积压风险 → 预售模式+柔性生产

## 安全提示

⚠️ **重要：**
- 请勿将API密钥提交到版本控制系统
- 建议使用环境变量存储敏感信息
- 生产环境应使用密钥管理服务（如AWS Secrets Manager）
- 定期轮换API密钥
- 监控API使用量和费用

## 技术支持

如需帮助配置AI语言模型，请联系：
- 📧 邮箱：337839167@qq.com
- 📱 电话：+8613680231042

---

**中山市墨方智能科技有限公司**  
以科研人员为核心的工业设计与文创产品设计机构