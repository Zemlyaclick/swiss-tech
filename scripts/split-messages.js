const fs = require('fs');
const path = require('path');

const locales = ['en', 'de', 'de-CH', 'fr', 'it', 'ru'];

const groups = {
  common: ['nav', 'footer', 'cta_section', 'trust_badges', 'guarantee'],
  home: ['hero', 'usp', 'metrics', 'stats', 'services', 'tech', 'process', 'not_for_everyone', 'testimonials', 'faq'],
  services: [], // будет заполнено динамически
  industries: [], // будет заполнено динамически
  pages: ['about', 'contact', 'pricing', 'imprint', 'privacy', 'terms', 'cases', 'compare', 'discovery', 'security'],
  components: ['ai_chat', 'contact_form', 'price_calculator']
};

// Сначала читаем en.json чтобы получить динамические ключи
const enData = JSON.parse(fs.readFileSync('./messages/en.json', 'utf8'));
groups.services = Object.keys(enData).filter(k => k.startsWith('services_'));
groups.industries = Object.keys(enData).filter(k => k.startsWith('industry_'));

console.log('Splitting translation files...\n');

locales.forEach(locale => {
  const inputPath = `./messages/${locale}.json`;
  const outputDir = `./messages/${locale}`;
  
  // Создаём директорию
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
  
  console.log(`\n📁 ${locale.toUpperCase()}:`);
  
  // Разбиваем по группам
  Object.entries(groups).forEach(([groupName, keys]) => {
    const groupData = {};
    keys.forEach(key => {
      if (data[key]) {
        groupData[key] = data[key];
      }
    });
    
    if (Object.keys(groupData).length > 0) {
      const outputPath = `${outputDir}/${groupName}.json`;
      fs.writeFileSync(outputPath, JSON.stringify(groupData, null, 2));
      const size = (fs.statSync(outputPath).size / 1024).toFixed(1);
      console.log(`   ✅ ${groupName}.json (${Object.keys(groupData).length} namespaces, ${size} KB)`);
    }
  });
});

console.log('\n✨ Done! Files created in messages/{locale}/ directories');
console.log('\n⚠️  Remember to update src/i18n/request.ts to use the new structure');
