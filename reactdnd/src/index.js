
import { render } from 'react-dom'
import Example from './example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      {/* DndProvider 를 통해 React-DnD 를 사용할 수 있도록 한다. */}
      {/* 기본으로 제공되는 HTML5Backend 를 사용한다. */}
      <DndProvider backend={HTML5Backend}>
        <Example />
      </DndProvider>
    </div>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
