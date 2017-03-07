(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HelloWorld = require('./modules/HelloWorld.js');

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _Destructuring = require('./modules/Destructuring.js');

var _Destructuring2 = _interopRequireDefault(_Destructuring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = function () {
	function main() {
		_classCallCheck(this, main);
	}

	_createClass(main, [{
		key: 'run',
		value: function run() {
			//console.log('run main class...');
			//(new HelloWorld()).sayHello('jeremyyang824');
			new _Destructuring2.default().show();
		}
	}]);

	return main;
}();

window.bootstrap = new main();

},{"./modules/Destructuring.js":2,"./modules/HelloWorld.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Destructuring = function () {
	function Destructuring() {
		_classCallCheck(this, Destructuring);
	}

	_createClass(Destructuring, [{
		key: 'show',
		value: function show() {
			var foo = {
				a: 'aaa',
				b: 'bbb'
			};

			var bar = _extends({}, foo, {
				b: 'ccc'
			});

			console.log(bar);
		}
	}]);

	return Destructuring;
}();

exports.default = Destructuring;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HelloWorld = function () {
	function HelloWorld() {
		_classCallCheck(this, HelloWorld);
	}

	_createClass(HelloWorld, [{
		key: "sayHello",
		value: function sayHello(name) {
			var str = "Hello world " + name + "!";
			console.log(str);
		}
	}]);

	return HelloWorld;
}();

exports.default = HelloWorld;

},{}]},{},[1])

//# sourceMappingURL=bundle.js.map
