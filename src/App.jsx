import { Outlet, useNavigation } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import LoadSpinner from './components/LoadSpinner/LoadSpinner'

function App() {
  const navigation = useNavigation()

  if(navigation.state === 'loading'){
    return <LoadSpinner></LoadSpinner>
}
  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
