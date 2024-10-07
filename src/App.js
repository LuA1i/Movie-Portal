import 'bootstrap/dist/js/bootstrap.js'
import 'bootswatch/dist/darkly/bootstrap.min.css'
import MoviesPortal from './Components/MoviesPortal'
import Header from './Components/Header'

function App() {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <MoviesPortal />
      </div>
    </div>
  )
}

export default App
