// Единый источник данных о проектах: библиотека рисуется отсюда, счётчики на главной считаются отсюда.
// Поля: id, title, cat, year (число или null), status ('done' | 'live' | 'wip'), blurb,
// и ровно одно из: page (страница кейса), url (внешняя ссылка) — или ничего (строка «скоро»).
window.PROJECTS = [
  { id:'mindstack', title:'Mind Stack', cat:'Брендинг', year:2026, status:'done',
    page:'mindstack.html', blurb:'Бренд ИИ-ассистента для разработчиков' },
  { id:'marathon', title:'Marathon', cat:'Плакаты', year:null, status:'done',
    page:'marathon.html', blurb:'Серия плакатов для игры в жанре sci-fi action' },
  { id:'paulrand', title:'Пол Рэнд', cat:'Исследование', year:null, status:'done',
    page:'paulrand.html', blurb:'Исследование творчества и наследия классика графдизайна' },
  { id:'museum', title:'ГМИ СПб', cat:'Брендинг', year:null, status:'done',
    page:'museum.html', blurb:'Логотип и брендбук для Музея истории Санкт-Петербурга' },
  { id:'trifonai', title:'TrifonAI', cat:'Платформа', year:2026, status:'done',
    page:'trifonai.html', blurb:'Персональная локальная ИИ-платформа' },
  { id:'blaze', title:'blaze', cat:'Брендинг', year:2026, status:'done',
    page:'blaze.html', blurb:'Бренд одежды и снаряжения для туризма' }
  // Новые записи дописывай сюда — плитка в библиотеке появится автоматически.
];

// «проектов» = всё, что не в работе
window.projectsDoneCount = function () {
  return window.PROJECTS.filter(function (p) { return p.status !== 'wip'; }).length;
};

// склонение: 1 проект, 3 проекта, 13 проектов
window.projectsWord = function (n) {
  var a = n % 100, b = n % 10;
  if (a >= 11 && a <= 14) return 'проектов';
  if (b === 1) return 'проект';
  if (b >= 2 && b <= 4) return 'проекта';
  return 'проектов';
};
