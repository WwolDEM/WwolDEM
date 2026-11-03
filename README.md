# WwolDEM — портфолио

Статический сайт [wwoldem.ru](https://wwoldem.ru): HTML/CSS/JS без фреймворков, по одному файлу на страницу. Публикуется через GitHub Pages из ветки `main`.

| Файл | Что это |
|---|---|
| `index.html` | главная |
| `library.html` | библиотека проектов (плитки из `assets/projects-data.js`) |
| `mindstack.html`, `marathon.html`, `paulrand.html`, `museum.html`, `trifonai.html`, `blaze.html` | страницы кейсов |
| `assets/projects-data.js` | список проектов: библиотека и счётчики на главной считаются отсюда |
| `assets/<проект>/` | картинки, логотипы и PDF кейсов |
| `CNAME` | домен для GitHub Pages — не удалять |

Новый проект в библиотеку — одна запись в конец массива `PROJECTS` в `assets/projects-data.js`.
Шрифты подключаются только через `fonts.bunny.net`.
