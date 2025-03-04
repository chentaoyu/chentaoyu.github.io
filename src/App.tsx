import { useState } from 'react'
import './App.css'

function App() {
  const [htmlCode, setHtmlCode] = useState('<h1>Hello, World!</h1>')
  const [cssCode, setCssCode] = useState('h1 { color: cyan; }')

  const exportHtml = () => {
    const blob = new Blob([`<style>${cssCode}</style>${htmlCode}`], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'preview.html'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <header className="bg-black text-cyan-400 p-4">
        <h1 className="text-4xl">赛博朋克个人主页</h1>
        <p className="text-xl">你好，我是xxx，一个热爱编程的开发者。</p>
      </header>
      <main className="flex">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl text-cyan-400">输入 HTML 和 CSS</h2>
          <textarea
            className="w-full h-40 bg-black text-cyan-400 p-2"
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder="输入 HTML 代码"
          />
          <textarea
            className="w-full h-40 bg-black text-cyan-400 p-2 mt-4"
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            placeholder="输入 CSS 代码"
          />
        </div>
        <div className="w-1/2 p-4 bg-black text-cyan-400">
          <h2 className="text-2xl">预览</h2>
          <style>{cssCode}</style>
          <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
        </div>
      </main>
      <button
        className="fixed bottom-4 right-4 bg-cyan-400 text-black p-2 rounded"
        onClick={exportHtml}
      >
        导出 HTML
      </button>
    </>
  )
}

export default App
