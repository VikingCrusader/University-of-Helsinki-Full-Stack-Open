import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  return <Greeting name='张三' age={23} />  //APP组件的返回值是一个Greeting组件 Greeting在这里是一个自定义组件标签
}

const Greeting = (props) => { //通过props接收父组件的参数
  return ( //渲染新的内容，用父组件的参数
    <div>
      <h1>你好, {props.name}!</h1>
      <p>你今年 {props.age} 岁了。</p>
    </div>
  )
}

//Greeting组件通过props接收父组件App传递过来的name和age参数，并在渲染时使用这些参数。
//Greeting组件在App组件中被调用，并传递了具体的值'张三'和23。
//卧槽，终于成功了！！！
//这就是组件之间传递参数的方式，父组件通过props向子组件传递数据，子组件通过props接收并使用这些数据。
//这样可以实现组件之间的数据传递和复用。
//希望你能理解组件传参的概念，加油！！！
//总结：props是组件之间传递数据的桥梁，父组件通过props向子组件传递数据，子组件通过props接收并使用这些数据。

//最后别忘了导出App组件
export default App
