/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	window.tvcnpt = window.tvcnpt || {};
	window.tvcnpt.BaseComponent = _index.BaseComponent;
	module.exports = _index.BaseComponent;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * BaseComponent
	 * @class
	 */
	var id = 0;
	
	var BaseComponent = exports.BaseComponent = function () {
	  function BaseComponent() {
	    _classCallCheck(this, BaseComponent);
	
	    this.__id__ = id++;
	    this.__event_list__ = {};
	  }
	
	  /**
	   * 获取组件名称
	   * @return {String}
	   */
	
	
	  _createClass(BaseComponent, [{
	    key: 'getName',
	    value: function getName() {
	      return 'BaseComponent';
	    }
	
	    /**
	     * 获取组件id
	     * @return {Number}
	     */
	
	  }, {
	    key: 'getId',
	    value: function getId() {
	      return this.__id__;
	    }
	
	    /**
	     * 增加事件监听
	     * @param type 事件类型
	     * @param cb 回调函数
	     * @returns this
	     */
	
	  }, {
	    key: 'on',
	    value: function on(type, cb) {
	      if (typeof cb !== 'function') {
	        return this;
	      }
	      if (this.__event_list__[type]) {
	        this.__event_list__[type].push(cb);
	      } else {
	        this.__event_list__[type] = [cb];
	      }
	      return this;
	    }
	
	    /**
	     * 移除事件监听
	     * @param type 事件类型
	     * @param cb 回调函数
	     * @returns this
	     */
	
	  }, {
	    key: 'off',
	    value: function off(type, cb) {
	      if (typeof cb !== 'function') {
	        return this;
	      }
	      var list = this.__event_list__[type];
	      if (list) {
	        for (var i = 0; i < list.length; i++) {
	          if (cb === list[i]) {
	            list.splice(i, 1);
	            i--;
	          }
	        }
	      }
	      return this;
	    }
	
	    /**
	     * 是否包含某事件类型
	     * @param type
	     * @returns this
	     */
	
	  }, {
	    key: 'hasEvent',
	    value: function hasEvent(type) {
	      return this.__event_list__[type] && this.__event_list__[type].length ? true : false;
	    }
	
	    /**
	     * 派发事件
	     * @param type 事件类型
	     * @param cb 回调函数
	     * @returns this
	     */
	
	  }, {
	    key: 'fire',
	    value: function fire(type, event) {
	      var list = this.__event_list__[type];
	      if (list && list.length) {
	        list.forEach(function (cb) {
	          cb.call(this, event);
	        }.bind(this));
	      }
	      return this;
	    }
	
	    /**
	     * 销毁事件
	     * @returns this
	     */
	
	  }, {
	    key: 'destroyEvent',
	    value: function destroyEvent() {
	      this.__event_list__ = [];
	      return this;
	    }
	
	    /**
	     * 获取全部绑定事件
	     * @returns 全部绑定事件
	     */
	
	  }, {
	    key: 'getEventList',
	    value: function getEventList() {
	      return this.__event_list__;
	    }
	  }]);

	  return BaseComponent;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzNkMWMxODMzOTkyYTA0MTNkYTQiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7O0FBQ0EsUUFBTyxNQUFQLEdBQWdCLE9BQU8sTUFBUCxJQUFpQixFQUFqQztBQUNBLFFBQU8sTUFBUCxDQUFjLGFBQWQ7QUFDQSxRQUFPLE9BQVAsd0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7OztBQUlBLEtBQUksS0FBSyxDQUFUOztLQUNhLGEsV0FBQSxhO0FBQ1gsNEJBQWM7QUFBQTs7QUFDWixVQUFLLE1BQUwsR0FBYyxJQUFkO0FBQ0EsVUFBSyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OytCQUlVO0FBQ1IsY0FBTyxlQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBSVE7QUFDTixjQUFPLEtBQUssTUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7d0JBTUcsSSxFQUFNLEUsRUFBSTtBQUNYLFdBQUksT0FBTyxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsZ0JBQU8sSUFBUDtBQUNEO0FBQ0QsV0FBSSxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBSixFQUErQjtBQUM3QixjQUFLLGNBQUwsQ0FBb0IsSUFBcEIsRUFBMEIsSUFBMUIsQ0FBK0IsRUFBL0I7QUFDRCxRQUZELE1BRU87QUFDTCxjQUFLLGNBQUwsQ0FBb0IsSUFBcEIsSUFBNEIsQ0FBQyxFQUFELENBQTVCO0FBQ0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7O3lCQU1JLEksRUFBTSxFLEVBQUk7QUFDWixXQUFJLE9BQU8sRUFBUCxLQUFjLFVBQWxCLEVBQThCO0FBQzVCLGdCQUFPLElBQVA7QUFDRDtBQUNELFdBQUksT0FBTyxLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBWDtBQUNBLFdBQUksSUFBSixFQUFVO0FBQ1IsY0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssTUFBekIsRUFBaUMsR0FBakMsRUFBc0M7QUFDcEMsZUFBSSxPQUFPLEtBQUssQ0FBTCxDQUFYLEVBQW9CO0FBQ2xCLGtCQUFLLE1BQUwsQ0FBWSxDQUFaLEVBQWUsQ0FBZjtBQUNBO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsY0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OzhCQUtTLEksRUFBTTtBQUNiLGNBQVEsS0FBSyxjQUFMLENBQW9CLElBQXBCLEtBQTZCLEtBQUssY0FBTCxDQUFvQixJQUFwQixFQUEwQixNQUF4RCxHQUFrRSxJQUFsRSxHQUF5RSxLQUFoRjtBQUNEOztBQUVEOzs7Ozs7Ozs7MEJBTUssSSxFQUFNLEssRUFBTztBQUNoQixXQUFNLE9BQU8sS0FBSyxjQUFMLENBQW9CLElBQXBCLENBQWI7QUFDQSxXQUFJLFFBQVEsS0FBSyxNQUFqQixFQUF5QjtBQUN2QixjQUFLLE9BQUwsQ0FBYSxVQUFVLEVBQVYsRUFBYztBQUN6QixjQUFHLElBQUgsQ0FBUSxJQUFSLEVBQWMsS0FBZDtBQUNELFVBRlksQ0FFWCxJQUZXLENBRU4sSUFGTSxDQUFiO0FBR0Q7QUFDRCxjQUFPLElBQVA7QUFDRDs7QUFFRDs7Ozs7OztvQ0FJZTtBQUNiLFlBQUssY0FBTCxHQUFzQixFQUF0QjtBQUNBLGNBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7O29DQUllO0FBQ2IsY0FBTyxLQUFLLGNBQVo7QUFDRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzNkMWMxODMzOTkyYTA0MTNkYTRcbiAqKi8iLCJpbXBvcnQge0Jhc2VDb21wb25lbnR9IGZyb20gJy4vbGliL2luZGV4LmpzJztcbndpbmRvdy50dmNucHQgPSB3aW5kb3cudHZjbnB0IHx8IHt9O1xud2luZG93LnR2Y25wdC5CYXNlQ29tcG9uZW50ID0gQmFzZUNvbXBvbmVudDtcbm1vZHVsZS5leHBvcnRzID0gQmFzZUNvbXBvbmVudDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCIvKipcbiAqIEJhc2VDb21wb25lbnRcbiAqIEBjbGFzc1xuICovXG5sZXQgaWQgPSAwO1xuZXhwb3J0IGNsYXNzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9faWRfXyA9IGlkKys7XG4gICAgdGhpcy5fX2V2ZW50X2xpc3RfXyA9IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPlue7hOS7tuWQjeensFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXROYW1lKCkge1xuICAgIHJldHVybiAnQmFzZUNvbXBvbmVudCc7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W57uE5Lu2aWRcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgZ2V0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX19pZF9fO1xuICB9XG5cbiAgLyoqXG4gICAqIOWinuWKoOS6i+S7tuebkeWQrFxuICAgKiBAcGFyYW0gdHlwZSDkuovku7bnsbvlnotcbiAgICogQHBhcmFtIGNiIOWbnuiwg+WHveaVsFxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBvbih0eXBlLCBjYikge1xuICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX2V2ZW50X2xpc3RfX1t0eXBlXSkge1xuICAgICAgdGhpcy5fX2V2ZW50X2xpc3RfX1t0eXBlXS5wdXNoKGNiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fX2V2ZW50X2xpc3RfX1t0eXBlXSA9IFtjYl07XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOenu+mZpOS6i+S7tuebkeWQrFxuICAgKiBAcGFyYW0gdHlwZSDkuovku7bnsbvlnotcbiAgICogQHBhcmFtIGNiIOWbnuiwg+WHveaVsFxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBvZmYodHlwZSwgY2IpIHtcbiAgICBpZiAodHlwZW9mIGNiICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbGV0IGxpc3QgPSB0aGlzLl9fZXZlbnRfbGlzdF9fW3R5cGVdO1xuICAgIGlmIChsaXN0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNiID09PSBsaXN0W2ldKSB7XG4gICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIOaYr+WQpuWMheWQq+afkOS6i+S7tuexu+Wei1xuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcmV0dXJucyB0aGlzXG4gICAqL1xuICBoYXNFdmVudCh0eXBlKSB7XG4gICAgcmV0dXJuICh0aGlzLl9fZXZlbnRfbGlzdF9fW3R5cGVdICYmIHRoaXMuX19ldmVudF9saXN0X19bdHlwZV0ubGVuZ3RoKSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmtL7lj5Hkuovku7ZcbiAgICogQHBhcmFtIHR5cGUg5LqL5Lu257G75Z6LXG4gICAqIEBwYXJhbSBjYiDlm57osIPlh73mlbBcbiAgICogQHJldHVybnMgdGhpc1xuICAgKi9cbiAgZmlyZSh0eXBlLCBldmVudCkge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLl9fZXZlbnRfbGlzdF9fW3R5cGVdO1xuICAgIGlmIChsaXN0ICYmIGxpc3QubGVuZ3RoKSB7XG4gICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIGNiLmNhbGwodGhpcywgZXZlbnQpO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6ZSA5q+B5LqL5Lu2XG4gICAqIEByZXR1cm5zIHRoaXNcbiAgICovXG4gIGRlc3Ryb3lFdmVudCgpIHtcbiAgICB0aGlzLl9fZXZlbnRfbGlzdF9fID0gW107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5YWo6YOo57uR5a6a5LqL5Lu2XG4gICAqIEByZXR1cm5zIOWFqOmDqOe7keWumuS6i+S7tlxuICAgKi9cbiAgZ2V0RXZlbnRMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9fZXZlbnRfbGlzdF9fO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2xpYi9pbmRleC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=