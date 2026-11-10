import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
}

export function SEOHead({ 
  title = 'Mofang Tech 墨方智能科技 - 工业设计与文创产品设计专家',
  description = 'Mofang Tech（中山市墨方智能科技有限公司）是以科研人员为核心的工业设计与文创产品设计机构，提供机械设计、机电设计、外观设计与文创产品制作一体化服务。Industrial design & cultural creative studio in Zhongshan, China.',
  keywords = 'Mofang Tech,工业设计,文创产品,机械设计,机电设计,外观设计,中山,墨方智能科技',
  path = ''
}: SEOHeadProps) {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      {/* 基础SEO信息 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Mofang Tech 墨方智能科技" />
      
      {/* Canonical URL */}
      {path && <link rel="canonical" href={canonicalUrl} />}
      
      {/* 开放图谱 Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {path && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content="Mofang Tech 墨方智能科技" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* 语言和地区 */}
      <meta name="language" content="zh-CN" />
      <meta name="geo.region" content="CN-GD" />
      <meta name="geo.placename" content="中山" />
    </Helmet>
  );
}
