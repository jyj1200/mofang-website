# 客户信息收集系统使用说明

## 系统概述

墨方智能科技官网已建立完整的客户信息收集系统，实现了：
- ✅ 云端数据库存储客户咨询信息
- ✅ 自动邮件通知至公司邮箱
- ✅ 管理员后台查看所有咨询
- ✅ 数据导出功能

---

## 功能模块

### 1️⃣ 客户提交表单（前端）

#### **文创产品定制页面**
- 📍 路径：`/cultural-creative-order`
- 📋 表单字段：
  - 姓名 *（必填）
  - 公司名称
  - 联系电话 *（必填）
  - 电子邮箱
  - 产品类型 *（必填）
  - 预计数量
  - 预算范围
  - 期望材质
  - 项目需求描述 *（必填）

#### **工业设计服务页面**
- 📍 路径：`/industrial-order`
- 📋 表单字段：
  - 姓名 *（必填）
  - 企业名称 *（必填）
  - 所属行业
  - 联系电话 *（必填）
  - 电子邮箱
  - 产品类型 *（必填）
  - 项目阶段
  - 项目周期
  - 预算范围
  - 需求描述 *（必填）

#### **用户体验**
- ✅ 提交时显示加载动画
- ✅ 提交成功后显示绿色成功提示
- ✅ 提交失败后显示红色错误提示
- ✅ 成功后自动清空表单

---

### 2️⃣ 云端数据库存储（Supabase KV Store）

#### **数据存储结构**

**工业设计咨询：**
```json
{
  "id": "industrial_1736248932000_abc123xyz",
  "type": "industrial",
  "name": "张三",
  "company": "某科技公司",
  "industry": "消费电子",
  "phone": "13800138000",
  "email": "zhangsan@example.com",
  "productType": "智能硬件",
  "projectStage": "概念设计",
  "timeline": "3-6个月",
  "budget": "10-20万",
  "requirements": "需要设计一款智能穿戴设备...",
  "submittedAt": "2026-01-07T10:30:00.000Z"
}
```

**文创产品定制：**
```json
{
  "id": "cultural_1736248932000_xyz789abc",
  "type": "cultural",
  "name": "李四",
  "company": "某文化公司",
  "phone": "13900139000",
  "email": "lisi@example.com",
  "productType": "礼品",
  "quantity": "500-1000件",
  "budget": "5-10万",
  "material": "陶瓷",
  "deadline": "2个月",
  "description": "企业年会礼品定制需求...",
  "submittedAt": "2026-01-07T11:15:00.000Z"
}
```

#### **数据存储优势**
- 🔒 云端持久化存储
- 📈 无限容量扩展
- ⚡ 快速读写性能
- 🔄 自动备份
- 🌐 全球访问

---

### 3️⃣ 自动邮件通知（Resend API）

#### **邮件发送流程**
1. 用户提交表单
2. 数据保存到数据库
3. 自动发送邮件至 `yuanzhuDESIGN@hotmail.com`
4. 返回成功提示给用户

#### **邮件内容格式**

**工业设计咨询邮件：**
```
主题：【工业设计咨询】某科技公司 - 张三

内容：
新的工业设计咨询需求
提交时间：2026年1月7日 18:30:00

━━━━━━━━━━━━━━━━━━━━
客户信息
姓名：张三
企业名称：某科技公司
所属行业：消费电子
联系电话：13800138000
电子邮箱：zhangsan@example.com

━━━━━━━━━━━━━━━━━━━━
项目信息
产品类型：智能硬件
项目阶段：概念设计
项目周期：3-6个月
预算范围：10-20万

━━━━━━━━━━━━━━━━━━━━
需求详情
需要设计一款智能穿戴设备...

━━━━━━━━━━━━━━━━━━━━
咨询ID: industrial_1736248932000_abc123xyz
```

**文创产品定制邮件：**
```
主题：【文创定制咨询】某文化公司 - 礼品

内容：
新的文创产品定制需求
提交时间：2026年1月7日 19:15:00

━━━━━━━━━━━━━━━━━━━━
客户信息
姓名：李四
企业/机构名称：某文化公司
联系电话：13900139000
电子邮箱：lisi@example.com

━━━━━━━━━━━━━━━━━━━━
产品信息
产品类型：礼品
定制数量：500-1000件
预算范围：5-10万
材质要求：陶瓷
交付时间：2个月

━━━━━━━━━━━━━━━━━━━━
设计需求
企业年会礼品定制需求...

━━━━━━━━━━━━━━━━━━━━
咨询ID: cultural_1736248932000_xyz789abc
```

#### **邮件发送配置**
- 📧 发件地址：`墨方智能科技 <onboarding@resend.dev>`
- 📬 收件地址：`yuanzhuDESIGN@hotmail.com`
- 🔐 API密钥：已配置在环境变量 `RESEND_API_KEY`

---

### 4️⃣ 管理员后台（Admin Dashboard）

#### **访问方式**
```
网址：https://您的域名.com/admin-dashboard
```

#### **功能特性**

##### **📊 数据统计卡片**
- **总咨询数**：所有咨询总数
- **工业设计**：工业设计咨询数量
- **文创产品**：文创产品定制数量
- **今日新增**：当天新提交的咨询数

##### **🔍 搜索和筛选**
- **搜索框**：按姓名、公司名或电话号码搜索
- **类型筛选**：
  - 全部
  - 工业设计
  - 文创产品

##### **📋 咨询列表表格**
显示字段：
- 提交时间
- 类型（工业设计/文创产品）
- 姓名
- 公司
- 联系方式（电话 + 邮箱）
- 操作按钮

##### **👁️ 查看详情**
点击"查看详情"按钮，弹出模态框显示：
- 咨询类型
- 提交时间
- 客户信息（姓名、公司、电话、邮箱）
- 项目信息（根据类型显示不同字段）
- 需求详情（完整描述）
- 咨询ID

##### **📞 快捷操作**
- **发送邮件**：点击直接打开邮件客户端
- **拨打电话**：点击直接拨打客户电话

##### **📥 数据导出**
- 点击"导出"按钮
- 自动下载CSV文件
- 文件名：`客户咨询数据_2026年1月7日.csv`
- 包含所有筛选后的咨询记录

##### **🔄 刷新数据**
- 点击"刷新"按钮
- 重新从数据库加载最新数据

---

## 技术架构

### 前端（React + TypeScript）
```
/pages/CulturalCreativeOrder.tsx  → 文创产品定制表单
/pages/IndustrialOrder.tsx        → 工业设计服务表单
/pages/AdminDashboard.tsx         → 管理员后台面板
```

### 后端（Supabase Edge Function + Hono）
```
/supabase/functions/server/index.tsx
  ├─ POST /make-server-3f503f37/submit-cultural-inquiry    → 提交文创咨询
  ├─ POST /make-server-3f503f37/submit-industrial-inquiry  → 提交工业设计咨询
  ├─ GET  /make-server-3f503f37/inquiry/:id                → 查询单个咨询
  └─ GET  /make-server-3f503f37/admin/inquiries            → 获取所有咨询（管理员）
```

### 数据库（Supabase KV Store）
```
/supabase/functions/server/kv_store.tsx
  ├─ set(key, value)           → 保存数据
  ├─ get(key)                  → 读取数据
  ├─ getByPrefix(prefix)       → 按前缀查询
  └─ del(key)                  → 删除数据
```

### 邮件服务（Resend API）
```
API端点：https://api.resend.com/emails
认证：Bearer Token（RESEND_API_KEY）
格式：HTML邮件
```

---

## API使用说明

### 1. 提交工业设计咨询

**端点：**
```
POST https://{projectId}.supabase.co/functions/v1/make-server-3f503f37/submit-industrial-inquiry
```

**请求头：**
```json
{
  "Content-Type": "application/json",
  "Authorization": "Bearer {publicAnonKey}"
}
```

**请求体：**
```json
{
  "name": "张三",
  "company": "某科技公司",
  "industry": "消费电子",
  "phone": "13800138000",
  "email": "zhangsan@example.com",
  "productType": "智能硬件",
  "projectStage": "概念设计",
  "timeline": "3-6个月",
  "budget": "10-20万",
  "requirements": "需要设计一款智能穿戴设备..."
}
```

**成功响应：**
```json
{
  "success": true,
  "message": "提交成功！我们的工业设计顾问将在24小时内与您联系",
  "inquiryId": "industrial_1736248932000_abc123xyz"
}
```

### 2. 提交文创产品定制

**端点：**
```
POST https://{projectId}.supabase.co/functions/v1/make-server-3f503f37/submit-cultural-inquiry
```

**请求体：**
```json
{
  "name": "李四",
  "company": "某文化公司",
  "phone": "13900139000",
  "email": "lisi@example.com",
  "productType": "礼品",
  "quantity": "500-1000件",
  "budget": "5-10万",
  "material": "陶瓷",
  "deadline": "2个月",
  "description": "企业年会礼品定制需求..."
}
```

### 3. 获取所有咨询（管理员）

**端点：**
```
GET https://{projectId}.supabase.co/functions/v1/make-server-3f503f37/admin/inquiries
```

**成功响应：**
```json
{
  "success": true,
  "inquiries": [
    {
      "id": "cultural_1736248932000_xyz789abc",
      "type": "cultural",
      "name": "李四",
      "company": "某文化公司",
      "phone": "13900139000",
      "email": "lisi@example.com",
      "productType": "礼品",
      "submittedAt": "2026-01-07T11:15:00.000Z",
      ...
    },
    {
      "id": "industrial_1736248932000_abc123xyz",
      "type": "industrial",
      "name": "张三",
      "company": "某科技公司",
      "phone": "13800138000",
      "submittedAt": "2026-01-07T10:30:00.000Z",
      ...
    }
  ],
  "count": 2
}
```

---

## 使用流程

### 客户端流程
```
1. 客户访问表单页面
   ↓
2. 填写咨询信息
   ↓
3. 点击"提交咨询需求"
   ↓
4. 显示"提交中..."加载状态
   ↓
5. 提交成功
   ├─ 显示绿色成功提示："提交成功！我们的设计顾问将在24小时内与您联系"
   ├─ 表单自动清空
   └─ 数据已保存到数据库 + 邮件已发送
```

### 管理员流程
```
1. 访问 /admin-dashboard
   ↓
2. 查看统计数据
   ├─ 总咨询数
   ├─ 工业设计咨询
   ├─ 文创产品咨询
   └─ 今日新增
   ↓
3. 使用搜索和筛选功能
   ↓
4. 点击"查看详情"查看完整信息
   ↓
5. 快捷操作
   ├─ 发送邮件
   ├─ 拨打电话
   └─ 导出CSV数据
```

---

## 数据安全

### 🔒 安全措施
- ✅ HTTPS加密传输
- ✅ API密钥环境变量存储
- ✅ CORS跨域保护
- ✅ 表单字段验证
- ✅ 错误日志记录

### 🔐 隐私保护
- 客户数据仅存储在Supabase云端
- 不会泄露到第三方
- 仅授权人员可访问管理后台
- 邮件通知仅发送至公司邮箱

---

## 常见问题

### Q1: 客户提交后没有收到邮件怎么办？
**A:** 检查以下几点：
1. 确认 `RESEND_API_KEY` 环境变量已正确配置
2. 检查服务器日志中的错误信息
3. 确认公司邮箱 `yuanzhuDESIGN@hotmail.com` 可以正常接收邮件
4. 即使邮件发送失败，数据仍会保存到数据库

### Q2: 如何查看历史咨询记录？
**A:** 访问 `/admin-dashboard` 页面，可以查看所有历史记录，支持搜索和筛选。

### Q3: 数据会丢失吗？
**A:** 不会。数据存储在Supabase云端KV Store中，具有高可用性和自动备份功能。

### Q4: 如何导出数据？
**A:** 在管理员后台点击"导出"按钮，会自动下载CSV格式的数据文件。

### Q5: 管理后台需要登录吗？
**A:** 当前版本没有登录功能。如需添加登录保护，请联系技术支持。

---

## 未来扩展建议

### 📌 可选功能
1. **管理员登录系统**
   - 用户名密码认证
   - 防止未授权访问

2. **客户状态管理**
   - 待处理 / 已联系 / 已成交 / 已放弃
   - 添加备注功能

3. **邮件模板自定义**
   - 自定义邮件格式
   - 添加公司Logo

4. **数据统计图表**
   - 按日期统计
   - 按类型分析
   - 按预算范围分组

5. **微信/短信通知**
   - 客户提交后发送短信确认
   - 管理员微信实时通知

---

## 联系方式

如需技术支持或功能定制，请联系：
- 📧 邮箱：yuanzhuDESIGN@hotmail.com
- 📱 电话：+86 136 8023 1042

---

**系统状态：** ✅ 已部署并运行  
**最后更新：** 2026年1月7日  
**版本：** v1.0
