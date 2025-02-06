import Button from "./components/Button"
import Input from "./components/Input"
function App() {


  return (
    <>
      <div className="h-screen bg-blue-700">
        <br /><br /><br /><br />
        <Input type={"text"} placeholder={"Username"}></Input>
        <Button disabled={false}>Sign Up</Button>
      </div>
    </>
  )
}

export default App
