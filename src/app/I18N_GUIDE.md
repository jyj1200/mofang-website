# 中英文切换功能使用指南

## 功能概述

网站已成功添加中英文切换功能，用户可以在导航栏右上角点击语言切换按钮，在中文和英文之间自由切换。

## 实现方式

### 1. 语言管理系统

创建了 `LanguageContext` 上下文来管理全局语言状态：
- 文件位置：`/contexts/LanguageContext.tsx`
- 支持语言：中文 (zh) 和英文 (en)
- 提供 `toggleLanguage()` 函数用于切换语言

### 2. 翻译内容

所有翻译内容集中存放在：
- 文件位置：`/locales/translations.ts`
- 包含所有页面的中英文翻译
- 页面包括：
  - 导航栏 (Navigation)
  - 页脚 (Footer)
  - 首页 (Home)
  - 文创产品页 (Cultural Creative)
  - 工业设计页 (Industrial Design)
  - 团队介绍页 (Team)
  - 文创产品定制页 (Cultural Creative Order)
  - 工业设计服务页 (Industrial Order)
  - 招聘页 (Careers)
  - 浮动咨询按钮 (Floating Consult Button)
  - 页面结尾 (Page Ending)
  - AI对话框 (AI Chat Dialog)

### 3. 语言切换按钮

#### 桌面版
- 位置：导航栏右上角，导航链接右侧
- 显示：地球图标 + 当前语言代码
  - 中文模式显示："🌐 EN" (点击切换到英文)
  - 英文模式显示："🌐 中" (点击切换到中文)

#### 移动版
- 位置：移动菜单底部
- 显示：地球图标 + 完整语言名称
  - 中文模式显示："🌐 English" (点击切换到英文)
  - 英文模式显示："🌐 中文" (点击切换到中文)

## 已更新的组件

### 核心组件
✅ **Navigation.tsx** - 导航栏（含语言切换按钮）
✅ **Footer.tsx** - 页脚
✅ **Home.tsx** - 首页
✅ **App.tsx** - 主应用（已集成 LanguageProvider）

### 待更新组件（如需完整翻译）
以下组件的翻译内容已准备好，但需要逐个更新组件代码以使用翻译系统：

- PageEnding.tsx
- FloatingConsultButton.tsx
- CulturalCreative.tsx
- IndustrialDesign.tsx
- Team.tsx
- CulturalCreativeOrder.tsx
- IndustrialOrder.tsx  
- Careers.tsx
- AIChatDialog.tsx

## 如何在组件中使用翻译

```typescript
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../locales/translations';

export function MyComponent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <h1>{t.home.heroTitle}</h1>
      <p>{t.home.heroSubtitle}</p>
    </div>
  );
}
```

## 翻译内容结构

translations.ts 文件组织结构：

```typescript
export const translations = {
  zh: {
    nav: { ... },           // 导航栏
    footer: { ... },        // 页脚
    home: { ... },          // 首页
    cultural: { ... },      // 文创产品页
    industrial: { ... },    // 工业设计页
    team: { ... },          // 团队页
    order: { ... },         // 订单页
    careers: { ... },       // 招聘页
    consult: { ... },       // 咨询按钮
    ending: { ... },        // 页面结尾
  },
  en: {
    // 相同结构的英文翻译
  },
};
```

## 特点

1. **响应式设计**：桌面和移动端都有友好的切换体验
2. **即时切换**：点击按钮后立即切换语言，无需刷新页面
3. **全局状态**：所有页面共享同一个语言状态
4. **易于扩展**：可轻松添加更多语言支持
5. **统一管理**：所有翻译内容集中在一个文件中，便于维护

## 英文内容说明

所有英文内容都是专业的、符合商务标准的翻译，准确传达了：
- 公司定位：以科研人员为核心的设计机构
- 核心能力：机械设计、机电设计、外观设计、文创产品设计
- 服务特色：科研驱动、设计制作一体化、非遗传承合作
- 联系方式：电话、邮箱、地址等

## 测试建议

1. 在首页点击右上角的语言切换按钮
2. 观察导航栏、首页内容是否切换为英文
3. 在移动端测试切换功能
4. 在不同页面切换语言，确保状态保持一致

## 下一步优化建议

1. 添加浏览器语言自动检测
2. 使用 localStorage 保存用户语言偏好
3. 为 SEO 添加 hreflang 标签
4. 完成所有页面组件的翻译集成

---

**状态**：✅ 核心功能已实现并可用
**创建时间**：2026-01-16
**维护人员**：开发团队
