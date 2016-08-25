/**
 * BaseComponent
 * @class
 */
let id = 0;
export class BaseComponent {
  constructor() {
    this.__id__ = id++;
    this.__event_list__ = {};
  }

  /**
   * 获取组件名称
   * @return {String}
   */
  getName() {
    return 'BaseComponent';
  }

  /**
   * 获取组件id
   * @return {Number}
   */
  getId() {
    return this.__id__;
  }

  /**
   * 增加事件监听
   * @param type 事件类型
   * @param cb 回调函数
   * @returns this
   */
  on(type, cb) {
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
  off(type, cb) {
    if (typeof cb !== 'function') {
      return this;
    }
    let list = this.__event_list__[type];
    if (list) {
      for (let i = 0; i < list.length; i++) {
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
  hasEvent(type) {
    return (this.__event_list__[type] && this.__event_list__[type].length) ? true : false;
  }

  /**
   * 派发事件
   * @param type 事件类型
   * @param cb 回调函数
   * @returns this
   */
  fire(type, event) {
    const list = this.__event_list__[type];
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
  destroyEvent() {
    this.__event_list__ = [];
    return this;
  }

  /**
   * 获取全部绑定事件
   * @returns 全部绑定事件
   */
  getEventList() {
    return this.__event_list__;
  }
}
