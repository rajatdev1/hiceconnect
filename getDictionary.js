const dictionaries = {
  en: () => import('./hive/pages/dictionaries/en.json').then((r) => r.default),
  hi: () => import('./hive/pages/dictionaries/hi.json').then((r) => r.default),
  es: () => import('./hive/pages/dictionaries/es.json').then((r) => r.default),
};

export const getDictionary = (lang) => {
  console.log('Requested Language:', lang);
  const result = dictionaries[lang]();
  result.then((data) => console.log('Loaded Dictionary for', lang, ':', data));
  return result;
};
