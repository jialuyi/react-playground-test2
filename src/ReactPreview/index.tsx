import React, { useState, useEffect } from 'react'
import { Transform, transform } from 'sucrase'

// 将编译后的字符串变成可执行代码，并且通过闭包方式将一些依赖传入，类似下边这种，有种 UMD 模块的感觉
// (function (name) {
//   console.log(`hello ${name}`)
// })('张三')
function evalCode(code: string, scope: Record<string, any>) {
  const scopeKeys = Object.keys(scope)
  const scopeValues = Object.values(scope)
  // eslint-disable-next-line no-new-func
  return new Function(...scopeKeys, code)(...scopeValues)
}
function generateNode(props) {
  const { code = '', scope = {} } = props
  console.log(props, 'codecodecodecode')
  // 删除末尾分号，因为下边会在 code 外包装一个 return (code) 的操作，有分号会导致语法错误
  const codeTrimmed = code.trim().replace(/;$/, '')
  const opts = { transforms: ['jsx', 'imports'] as Transform[] }
  // 前边补上一个 return，以便下边 evalCode 后能正确拿到生成的组件
  const transformed = transform(`return (${codeTrimmed})`, opts).code.trim()
  // 编译后只是一个字符串，我们通过 evalCode 函数将它变成可执行代码
  console.log(scope, transformed, 'transformedtransformed')
  return evalCode(transformed, { React, ...scope })
}
// 如果是一个函数的话，说明它是一个组件，否则就是一个组件实例或者元素
function resolveElement(node: React.ReactNode) {
  const Element =
    typeof node === 'function' ? node : () => <>{React.isValidElement(node) ? node : null}</>
  return <Element />
}

const ReactPreview = (props: any) => {
  const { code, scope } = props
  const [node, setNode] = useState<React.ReactNode>()

  // 当 code 或者 scope 变了后都需要重新编译代码
  useEffect(() => {
    transpileAsync(code).catch(console.error)
  }, [code, scope])

  function transpileAsync(newCode: string) {
    // - transformCode may be synchronous or asynchronous.
    // - transformCode may throw an exception or return a rejected promise, e.g.
    //   if newCode is invalid and cannot be transformed.
    // - Not using async-await to since it requires targeting ES 2017 or
    //   importing regenerator-runtime...
    try {
      // 这里对比 react-live 简化了部分代码，只为能更简单看懂主流程，react-live 编译前允许使用者转换处理代码
      const transformResult = newCode
      return Promise.resolve(transformResult).then((transformedCode) => {
        // Transpilation arguments
        const input = {
          code: transformedCode,
          scope,
        }
        // 一定要通过这种方式保存组件，因为 setState 支持传入一个function，但是组件本身又是一个方法，直接通过 setState(FunctionalElement)
        // 会让 react 以为你传入的组件是一个更新 state 的函数
        setNode(() => generateNode(input))
      })
    } catch (e) {
      return Promise.resolve()
    }
  }

  return resolveElement(node)
}
export default ReactPreview
