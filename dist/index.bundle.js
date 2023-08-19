/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/Book.js":
/*!*************************!*\
  !*** ./modules/Book.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book)\n/* harmony export */ });\nclass Book {\r\n  constructor(title, author) {\r\n    this.title = title;\r\n    this.author = author;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://awesome-books/./modules/Book.js?");

/***/ }),

/***/ "./modules/BookManager.js":
/*!********************************!*\
  !*** ./modules/BookManager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BookManager: () => (/* binding */ BookManager)\n/* harmony export */ });\n/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ \"./modules/Book.js\");\n\r\n\r\nclass BookManager {\r\n  constructor() {\r\n    this.books = this.loadBooks();\r\n    this.bookData = document.getElementById('bookData');\r\n    this.bookForm = document.getElementById('bookForm');\r\n    this.booksLink = document.getElementById('booksLink');\r\n    this.addBookLink = document.getElementById('addBookLink');\r\n    this.contactLink = document.getElementById('contactLink');\r\n\r\n    this.booksLink.addEventListener('click', () => this.showSection('booksSection'));\r\n    this.addBookLink.addEventListener('click', () => this.showSection('addBookSection'));\r\n    this.contactLink.addEventListener('click', () => this.showSection('contactSection'));\r\n\r\n    this.bookForm.addEventListener('submit', this.addBook.bind(this));\r\n    this.displayBooks();\r\n  }\r\n\r\n  loadBooks() {\r\n    const storedBooks = localStorage.getItem('books');\r\n    return storedBooks ? JSON.parse(storedBooks) : [];\r\n  }\r\n\r\n  saveBooks() {\r\n    localStorage.setItem('books', JSON.stringify(this.books));\r\n  }\r\n\r\n  displayBooks = () => {\r\n    this.bookData.innerHTML = '';\r\n\r\n    this.books.forEach((book, index) => {\r\n      const bookDiv = document.createElement('div');\r\n      bookDiv.classList.add('book-lists');\r\n      bookDiv.textContent = `${book.title} by ${book.author}`;\r\n\r\n      const removeBtn = document.createElement('button');\r\n      removeBtn.textContent = 'Delete';\r\n      removeBtn.addEventListener('click', () => this.removeBook(index));\r\n\r\n      bookDiv.appendChild(removeBtn);\r\n      this.bookData.appendChild(bookDiv);\r\n\r\n      const hr = document.createElement('hr');\r\n      this.bookData.appendChild(hr);\r\n    });\r\n  }\r\n\r\n  addBook = (event) => {\r\n    event.preventDefault();\r\n\r\n    const bookTitle = document.getElementById('bookTitle');\r\n    const bookAuthor = document.getElementById('bookAuthor');\r\n\r\n    const title = bookTitle.value;\r\n    const author = bookAuthor.value;\r\n\r\n    const book = new _Book_js__WEBPACK_IMPORTED_MODULE_0__.Book(title, author);\r\n    this.books.push(book);\r\n\r\n    this.saveBooks();\r\n    this.displayBooks();\r\n\r\n    bookTitle.value = '';\r\n    bookAuthor.value = '';\r\n  }\r\n\r\n  removeBook = (index) => {\r\n    this.books.splice(index, 1);\r\n\r\n    this.saveBooks();\r\n    this.displayBooks();\r\n  }\r\n\r\n  showSection = (sectionId) => {\r\n    const sections = document.querySelectorAll('.content-section');\r\n    sections.forEach((section) => {\r\n      if (section.id === sectionId) {\r\n        section.classList.add('active');\r\n      } else {\r\n        section.classList.remove('active');\r\n      }\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://awesome-books/./modules/BookManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_BookManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/BookManager.js */ \"./modules/BookManager.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const bookManager = new _modules_BookManager_js__WEBPACK_IMPORTED_MODULE_0__.BookManager();\n});\n\n\n//# sourceURL=webpack://awesome-books/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;