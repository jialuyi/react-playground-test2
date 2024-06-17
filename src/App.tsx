// import MonacoEditor from '@monaco-editor/react'
// import { Button } from 'antd'
// import { useState } from 'react'

// eslint-disable-next-line import/order
import { PlaygroundSandbox } from './Playground/PlaygroundSandbox'

import './index.css'

// import ReactPreview from './ReactPreview'
// import { Playground as PlaygroundSandbox } from '@/Playground'

const files = {
  'App.tsx': {
    code: `import React from 'react'
import Child from './Child'

export default function App() {
return <div>
父组件
<Child msg="哈哈哈" />
</div>
}
    `,
  },
  'Child.tsx': {
    code: `import React from 'react'

export default function Child(props) {
return <h1>
子组件{props.msg || 123}
</h1>
}`,
  },
}

// const defaultCode = `

// function Count() {
//   const [count, setCount] = React.useState(0)

//   return (
//     <>
//       <p>count: {count}</p>
//       <Button type="primary" onClick={() => setCount(count + 1)}>+1</Button>
//     </>
//   )
// }

// `

function App() {
  // const [code, setCode] = useState<string>(defaultCode)
  const handleFilesHash = (hash: string) => {
    window.location.hash = hash
  }

  // @ts-ignore
  window.Playground = PlaygroundSandbox
  // return (
  //   <div style={{ display: 'flex' }}>
  //     <MonacoEditor
  //       width='600px'
  //       height='800px'
  //       onChange={(newCode) => setCode(newCode)}
  //       defaultValue={code}
  //       defaultLanguage='javascript'
  //     />
  //     <ReactPreview code={code} scope={{ Button }} />
  //   </div>
  // )
  return <PlaygroundSandbox files={files} onFilesChange={handleFilesHash} />
}

export default App
