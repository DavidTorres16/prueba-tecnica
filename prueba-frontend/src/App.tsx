import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from '@pages/mainPage'
import './App.css'

function App() {
  return (
    <div className="theme--default">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
