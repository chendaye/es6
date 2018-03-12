/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	// es6 默认开启严格模式

	// let 是快作用域 局部变量
	// var 是全局作用域  全局变量
	function test() {

	  // let 不能重复定义一个变量
	  for (var i = 1; i <= 6; i++) {
	    console.log(i);
	  }

	  // 报错  i 没有定义
	  // console.log(i);

	  for (var j = 1; j <= 6; j++) {
	    console.log(j);
	  }
	  // 不报错
	  console.log(j);
	}

	test();

	function test2() {
	  // 常量声明时必须赋值
	  var PI = 3.1415926; // 常量不可变

	  // k 实际上是指向对象的指针    k不变  但是对象本身是可以变的
	  var k = {
	    a: 1
	  };

	  console.log(PI, k);
	}

	test2();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	// 解构赋值
	// 解构赋值的分类  数组解构赋值  对象解构赋值  字符串解构赋值  布尔值解构赋值  函数参宿解构赋值 数值解构赋值


	{
	  // 数值解构赋值
	  var a = void 0,
	      b = void 0,
	      c = void 0;
	  a = 1;
	  b = 2;


	  console.log(a, b);
	}

	{
	  var _a = void 0,
	      _b = void 0,
	      _c = void 0;

	  _a = 1;
	  _b = 2;
	  _c = [3, 4, 5, 6];


	  console.log(_a, _b, _c);
	}

	{
	  // 对象解构赋值
	  var _a2 = void 0,
	      _b2 = void 0;
	  var _a$b = { a: 1, b: 2 };
	  _a2 = _a$b.a;
	  _b2 = _a$b.b;

	  console.log(_a2, _b2);
	}

	{
	  // 默认值
	  var _a3 = void 0,
	      _b3 = void 0,
	      _c2 = void 0;

	  var _ref = [1, 2];
	  _a3 = _ref[0];
	  _b3 = _ref[1];
	  var _ref$ = _ref[2];
	  _c2 = _ref$ === undefined ? 3 : _ref$;


	  console.log(_a3, _b3, _c2);
	}

	{
	  var _a4 = 1;
	  var _b4 = 2;

	  // 变量交换
	  var _ref2 = [_b4, _a4];
	  _a4 = _ref2[0];
	  _b4 = _ref2[1];


	  console.log(_a4, _b4);
	}

	{
	  var f = function f() {
	    return [1, 2];
	  };

	  var _a5 = void 0,
	      _b5 = void 0;

	  var _f = f();

	  var _f2 = _slicedToArray(_f, 2);

	  _a5 = _f2[0];
	  _b5 = _f2[1];


	  console.log(_a5, _b5);
	}

	{
	  var _f3 = function _f3() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a6 = void 0,
	      _b6 = void 0,
	      _c3 = void 0;

	  var _f4 = _f3();

	  var _f5 = _slicedToArray(_f4, 4);

	  _a6 = _f5[0];
	  _b6 = _f5[2];
	  _c3 = _f5[3];


	  console.log(_a6, _b6, _c3);
	}

	{
	  var _f6 = function _f6() {
	    return [1, 2, 3, 4, 5];
	  };

	  var _a7 = void 0,
	      _b7 = void 0,
	      _c4 = void 0;

	  var _f7 = _f6();

	  var _f8 = _toArray(_f7);

	  _a7 = _f8[0];
	  _b7 = _f8.slice(1);


	  console.log(_a7, _b7);
	}

	{
	  var o = { a: 1, b: 2 };

	  var _a8 = o.a,
	      _b8 = o.b;


	  console.log(_a8, _b8);
	}

	{
	  var _a10 = { a: 7 },
	      _a10$a = _a10.a,
	      _a9 = _a10$a === undefined ? 1 : _a10$a,
	      _a10$b = _a10.b,
	      _b9 = _a10$b === undefined ? 2 : _a10$b;

	  console.log(_a9, _b9);
	}

	{
	  var data = {
	    title: 123,
	    test: [{ title: 456, des: 'desc' }]
	  };

	  var title1 = data.title,
	      _data$test = _slicedToArray(data.test, 1),
	      title2 = _data$test[0].title;

	  console.log(title1, title2);
	}

/***/ })
/******/ ]);