
import './App.css'
import { Header } from './Components/Header'
import Tindercard from './Components/Tindercards/Tindercards'
import SwipeButtons from './Components/SwipeButtons/SwipeButtons'
function App() {
  

  return (
    <div className="App">
     <Header />
     <Tindercard/>
     <SwipeButtons/>
    </div>
  )
}

export default App
