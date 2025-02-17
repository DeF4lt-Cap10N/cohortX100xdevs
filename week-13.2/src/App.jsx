import SideBar from "./components/SideBar"

function App() {
  return (
    <>
    <div className="h-screen bg-white text-black  dark:bg-black dark:text-white"
    >
      <button onClick={()=>{document.querySelector("html").classList.toggle("dark")} }>Toggle</button>
      <SideBar/>
    </div>
    
    </>
  )
}

export default App
