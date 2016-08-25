### [base-component](https://www.npmjs.com/package/base-component)

#### 是什么
* base-component是tv端所有组件的基类
* 开发仅包含逻辑实现，无视觉显示或交互需求的组件请继承base-component

#### 组件架构
<img width="500" src="https://gw.alicdn.com/tps/TB1ldHNMVXXXXcUaXXXXXXXXXXX-1886-1120.png" /> 


      base-component是所有组件基类（逻辑或者功能类组件）
      display-component是展示组件的基类（展示类UI组件）
	  focusable-component是交互组件的基类(有焦点切换有交互需求类组件)	


#### 如何使用
* 通过npm引入模块

      npm install base-component --save
      
      const BaseComponent = require('base-component')
* 通过script标签引入模块

      <script type="text/javascript" src="//g.alicdn.com/de/base-component/{version}/index-min.js"></script>

      提供全局对象:window.tvcpnt.BaseComponent
  
  
* 组件继承

      class XX extends BaseComponent {
        constructor(options) {
          super(options)
        }
      }
      

* 组件API
            
  * `getName()` 获取组件名称，需重写
     
        // return 'util'
    
  * `getId()` 获取id，组件id唯一
     
        // return 10
   
  * `on(type, func)` 注册事件
     
         on("data", function(){})            
         
         return this
        
  * `off(type, func)` 注销事件
  
        off("data", function(){})
                    
        return this
        
  * `hasEvent(type)` 是否存在该事件
  
        hasEvent(type)  
                    
        return boolean 
        
  * `fire(type, event)` 触发该事件
  
        fire(type, event) 
                    
        // return this
        
  * `getEventList()` 获取事件列表
  
        getEventList()  
                    
        // return event
        
  * `destroyEvent()` 置空事件
  
        destroyEvent()  
                    
        return this 
        

* 使用实例

      class XX extends BaseComponent {
        constructor(options) {
          super(options) 
        }
      }
