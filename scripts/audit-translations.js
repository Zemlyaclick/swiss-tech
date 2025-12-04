const fs = require('fs');
const locales = ['en', 'de', 'de-CH', 'fr', 'it', 'ru'];
const files = ['common', 'home', 'services', 'industries', 'pages', 'components'];

console.log('=== Проверка наличия всех файлов переводов ===\n');

let allGood = true;
locales.forEach(locale => {
  files.forEach(file => {
    const path = `./messages/${locale}/${file}.json`;
    if (!fs.existsSync(path)) {
      console.log(`❌ Missing: ${path}`);
      allGood = false;
    }
  });
});

if (allGood) {
  console.log('✅ Все файлы переводов на месте\n');
}

// Проверяем консистентность ключей
console.log('=== Проверка консистентности namespace-ов ===\n');

const enFiles = {};
files.forEach(file => {
  enFiles[file] = JSON.parse(fs.readFileSync(`./messages/en/${file}.json`, 'utf8'));
});

locales.filter(l => l !== 'en').forEach(locale => {
  let missingKeys = [];
  files.forEach(file => {
    const localeData = JSON.parse(fs.readFileSync(`./messages/${locale}/${file}.json`, 'utf8'));
    const enKeys = Object.keys(enFiles[file]);
    const localeKeys = Object.keys(localeData);
    
    enKeys.forEach(key => {
      if (!localeKeys.includes(key)) {
        missingKeys.push(`${file}.${key}`);
      }
    });
  });
  
  if (missingKeys.length > 0) {
    console.log(`⚠️  ${locale} missing ${missingKeys.length} namespaces:`);
    missingKeys.forEach(k => console.log(`   - ${k}`));
  } else {
    console.log(`✅ ${locale} - все namespaces на месте`);
  }
});

console.log('\n=== Статистика по файлам ===\n');

files.forEach(file => {
  const namespaces = Object.keys(enFiles[file]);
  console.log(`${file}.json: ${namespaces.length} namespaces`);
  namespaces.forEach(ns => {
    const keys = Object.keys(enFiles[file][ns]);
    console.log(`  - ${ns}: ${keys.length} ключей`);
  });
});

console.log('\n=== Итого ===\n');
let totalNamespaces = 0;
files.forEach(file => {
  totalNamespaces += Object.keys(enFiles[file]).length;
});
console.log(`Всего namespaces: ${totalNamespaces}`);
console.log(`Всего локалей: ${locales.length}`);
console.log(`Всего файлов переводов: ${locales.length * files.length}`);
