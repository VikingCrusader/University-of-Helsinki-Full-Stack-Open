
import './App.css'

// React 小练习（入门必练）
// 🎯 目标
// 让你练习：
// 创建组件
// 在组件中渲染 JSX
// 使用 props
// 在 App 中渲染子组件

// 请你写一个 React 小程序：
// 显示一个简单的个人卡片 ProfileCard
// 效果结构大概是：

//父组件 App
const App = () => {
  return (
    <ProfileCard 
      name='张三'
      age={25}
      description='我是一名前端开发工程师，喜欢编写高质量的代码。'
    />
  )
}

//子组件 ProfileCard,用来渲染个人卡片
const ProfileCard = (props) => {
  return (
    <div>
      <h2>个人卡片</h2>
      <p>姓名:{props.name}</p>
      <p>年龄:{props.age}</p>
      <p>描述:{props.description}</p>
    </div>
  )
}

// 导出 App 组件
export default App
