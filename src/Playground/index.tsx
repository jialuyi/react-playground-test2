import React, { useContext, useEffect } from 'react'

import { EditorContainer } from './components/EditorContainer'
import { Header } from './components/Header'
import { Output } from './components/Output'
import { Sandbox } from './components/Sandbox'
import { SplitPane } from './components/SplitPane'
import { ENTRY_FILE_NAME, initFiles } from './files'
import { PlaygroundContext, PlaygroundProvider } from './PlaygroundContext'
import { getPlaygroundTheme } from './utils'

import type { IPlayground } from './types'

import './index.less'

const defaultCodeSandboxOptions = {
  theme: 'dark',
  editorHeight: '100vh',
  showUrlHash: true,
}

const ReactPlayground = (props: IPlayground) => {
  const {
    width = '100vw',
    height = '100vh',
    theme,
    files: propsFiles,
    showCompileOutput = true,
    showHeader = true,
    showFileSelector = true,
    fileSelectorReadOnly = false,
    border = false,
    defaultSizes,
    onFilesChange,
    autorun = true,
  } = props
  const { filesHash, changeTheme, files, setFiles } = useContext(PlaygroundContext)
  const options = Object.assign(defaultCodeSandboxOptions, props.options || {})

  useEffect(() => {
    onFilesChange?.(filesHash)
  }, [filesHash])

  useEffect(() => {
    setTimeout(() => {
      if (!theme) {
        changeTheme(getPlaygroundTheme())
      } else {
        changeTheme(theme)
      }
    }, 15)
  }, [theme])

  useEffect(() => {
    if (!propsFiles) setFiles(initFiles)
  }, [])

  return files[ENTRY_FILE_NAME] ? (
    <div
      data-id='react-playground'
      className={theme}
      style={{
        width,
        height,
        boxSizing: 'border-box',
        border: border ? '1px solid var(--border)' : '',
      }}
    >
      {showHeader ? <Header /> : null}
      <div style={{ height: `calc(100% - ${showHeader ? 50 : 0}px)` }}>
        <SplitPane defaultSizes={defaultSizes}>
          <EditorContainer
            options={options}
            showFileSelector={showFileSelector}
            fileSelectorReadOnly={fileSelectorReadOnly}
          />
          {autorun ? <Output showCompileOutput={showCompileOutput} /> : null}
        </SplitPane>
      </div>
    </div>
  ) : null
}

export const Playground: React.FC<IPlayground> = (props) => {
  return (
    <PlaygroundProvider saveOnUrl={props.saveOnUrl}>
      <ReactPlayground {...props} />
    </PlaygroundProvider>
  )
}

export const PlaygroundSandbox = Sandbox
