const fs = require('fs');
const path = 'f:\\墨方官网\\Mofang intellectual Techology (2)\\src\\app\\pages\\IndustrialDesign.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace remaining structure label and description
content = content.replace(
  /<strong>结构创新4;新4;<\/strong>/,
  '<strong>{t.indDesign.structureLabel}</strong>'
);
content = content.replace(
  /采用中空臂身设计，内置线缆保护，铝合金铸造\+钢材复合结构，减重18%同时提升刚性/,
  '{t.indDesign.structureDesc}'
);

// Replace remaining maintenance description
content = content.replace(
  /侧面板采用快拆卡设计，核心部件可独立拆卸更换，维护时间从2小时缩短至40分钟，减少停机损失/,
  '{t.indDesign.maintenanceDesc}'
);

fs.writeFileSync(path, content, 'utf8');
console.log('Remaining replacements complete');
