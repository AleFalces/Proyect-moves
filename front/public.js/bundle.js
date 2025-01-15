/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nconst renderCards = __webpack_require__(/*! ./renderCards */ \"./scripts/renderCards.js\")\r\n\r\nconsole.log(renderCards) \r\n\r\n$.get(\"https://students-api.up.railway.app/movies\", (data, status) => {\r\n  renderCards(data)\r\n  });\r\n  \r\n\r\n\r\n\r\n\r\n \n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderCards.js":
/*!********************************!*\
  !*** ./scripts/renderCards.js ***!
  \********************************/
/***/ ((module) => {

eval("const renderCards = (data) =>{ \r\n    const cardContainer = document.getElementById('container')   \r\n    data.map(movie => {\r\n      let card = document.createElement('div')\r\n      card.classList.add('card')\r\n      card.innerHTML = `\r\n      <h2 class=\"card-title\">${movie.title}</h2>\r\n      <p class=\"card-text text-nowrap bd-highlight\">${movie.director}</p>\r\n      <p class=\"card-text text-nowrap bd-highlight\">${movie.duration}</p>\r\n      <p class=\"card-text text-nowrap bd-highlight\">${movie.genre}</p>\r\n      <p class=\"card-text text-nowrap bd-highlight\">${movie.rate}</p>\r\n      <img src=\"${movie.poster}\" alt=\"${movie.title}\"  class=\"img\" >`\r\n      cardContainer.appendChild(card)});\r\n    }\r\n    console.log(renderCards)\r\n    module.exports = renderCards;\r\n    \r\n    //   Tag X tag option  \r\n    /* const cardContainer = document.getElementById('container') \r\n    title.classList.add('card')\r\n    title.innerText =movie.title\r\n    \r\n     let title = document.createElement('article')\r\n    \r\n    let director = document.createElement('article')\r\n    director.innerText = movie.director\r\n    \r\n    let duration = document.createElement('article')\r\n    duration.innerText = movie.duration\r\n    \r\n    let genre = document.createElement('article')\r\n    genre.innerText = movie.genre\r\n    \r\n    let rate = document.createElement('article')\r\n    rate.innerText = movie.rate\r\n    \r\n    let poster = document.createElement('img')\r\n    poster.src = movie.poster\r\n  \r\n    card.appendChild(title)\r\n    card.appendChild(director) \r\n    card.appendChild(duration)\r\n    card.appendChild(genre)\r\n    card.appendChild(rate)\r\n    card.appendChild(poster) \r\n      */\r\n\n\n//# sourceURL=webpack://front/./scripts/renderCards.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;