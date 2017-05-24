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
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(5);

	$(document).ready(function() {

		/**
		 * Onepage scroll
		 */ 
		$('#fullpage').fullpage({
			autoScrolling: true,
			scrollBar:true,
			anchors: ['section-1', 'section-2', 'section-3', 'section-4', 'section-5', 'section-6'],
			menu: '#menu'
		});

		/**
		 *	Scroll animation
		 */
		window.sr = ScrollReveal();

		/***
		 * Section 1
		 */
		sr.reveal('.text-big h2', { 
			reset: true,
			origin: 'top',
			distance: '20px',
		});
		sr.reveal('.text-big p', { 
			reset: true,
			origin: 'bottom',
			distance: '20px',
		});
		sr.reveal('.intro-text', { 
			reset: true,
			origin: 'left',
			distance: '20px',
		});
		sr.reveal('.btn-apply', { 
			reset: true,
			origin: 'right',
			distance: '20px',
		});

		/***
		 * Section 2
		 */
		 sr.reveal('.section-2 .js-fri-green', { 
			reset: true,
			opacity: 0,
			scale: 0.5,
		});

		/***
		 * Section 3
		 */
		 sr.reveal('.section-3 .js-fri-white', { 
			reset: true,
			origin: 'right',
			distance: '20px',
		});

		/***
		 * Section 4
		 */
		 sr.reveal('.section-4 .js-fri-green', { 
			reset: true,
			origin: 'left',
			distance: '20px',
		});

		/***
		 * Section 5
		 */
		 sr.reveal('.section-5 .js-fri-white', { 
			reset: true,
			origin: 'right',
			distance: '20px',
		});

		/***
		 * Section 6
		 */
		 sr.reveal('.section-6 .js-fri-green', { 
			reset: true,
			origin: 'top',
			distance: '60px',
		});

		console.log("dzo");
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);