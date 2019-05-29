<template>
  <div>
    自2.3.0起，异步组件的工厂函数也可以返回一个如下的对象。

const AsyncComp = () => ({
// 需要加载的组件. 应当是一个 Promise
component: import('./MyComp.vue'),
// loading 时应当渲染的组件
loading: LoadingComp,
// 出错时渲染的组件
error: ErrorComp,
// 渲染 loading 组件前的等待时间。默认：200ms.
delay: 200,
// 最长等待时间。超出此时间则渲染 error 组件。默认：Infinity
timeout: 3000
})
注意：当一个异步组件被作为vue-router的路由组件使用时，这些高级选项都是无效的，因为在路由切换前就会提前加载所需要的异步组件。另外，如果你要在路由组件中使用上述写法，需要使用 vue-router 2.4.0+。
组件命名约定
当注册组件 (或者 props) 时，可以使用 kebab-case，camelCase，或 PascalCase。
// 在组件定义中
components: {
// 使用 kebab-case 形式注册
'kebab-cased-component': { /* ... */ },
// register using camelCase
'camelCasedComponent': { /* ... */ },
// register using PascalCase
'PascalCasedComponent': { /* ... */ }
}
在html模板中，请使用短横线形式：
<!-- 在HTML模版中始终使用 kebab-case -->
当使用字符串模板时，可以不受HTML的case-insensitive限制。这意味实际上在模板中，你可以使用下面的方式来引用你的组件。
kebab-case
camelCase 或 kebab-case 如果组件已经被定义为 camelCase
kebab-case，camelCase 或 PascalCase 如果组件已经被定义为 PascalCase
components: {
'kebab-cased-component': { /* ... */ },
camelCasedComponent: { /* ... */ },
PascalCasedComponent: { /* ... */ }
}

这意味着PascalCase是最通用的声明约定而kebab-case是最通用的使用约定。
如果组件未经slot元素传递内容，你甚至可以在组件名后使用/使其闭合
当然这只在字符串模板中有效。因为自闭的自定义元素是无效的html，浏览器原生的解析器也无法识别它。

递归组件

组件在它的模板内，可以递归的调用自己，不过，只有当它有name选项时才可以：

name: 'unique-name-of-my-component'

当你利用Vue.component全局注册了一个组件，全局的id作为组件的name选项，被自动设置。

Vue.component('unique-name-of-my-component', {
// ...
})
如果你不谨慎，递归组件可能导致死循环。
name: 'stack-overflow',
template: '<div><stack-overflow></stack-overflow></div>'
上面组件会导致一个错误‘max stack size exceeded’,所以要确保递归调用有终止条件。（比如递归调用时使用v-if并让他最终返回false）
组件间的循环利用

假设你正在构建一个文件目录树，像在finder或文件资源管理器中。你可能有一个tree-folder.
  </div>
</template>
