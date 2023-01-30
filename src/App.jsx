import Container from './components/container'
import Nav from "./components/Nav"
import travelData from "../public/assets/data"

function App() {
  const data = travelData.map(x => <Container key={x.title} item={x}/>)
  return (
    <div className='app'>
      <Nav />
      {data}
    </div>
  )
}

export default App