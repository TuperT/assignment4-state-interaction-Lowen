import './App.css'
import Counter from './components/Counter'
import ToggleMessage from './components/ToggleMessage'
import SimpleLoginStatus from './components/SimpleLoginStatus'
import FruitListRenderer from './components/FruitListRenderer'
import AddItemToList from './components/AddItemToList'
import LiftingStateUp from './components/LiftingStateUp'
import SimpleForm from './components/SimpleForm'

function App() {
  return (
    <>
      <Counter />
      <hr />
      <ToggleMessage />
      <hr />
      <SimpleLoginStatus />
      <hr />
      <FruitListRenderer />
      <hr />
      <AddItemToList />
      <hr />
      <LiftingStateUp />
      <hr />
      <SimpleForm />
    </>
  )
}

export default App
