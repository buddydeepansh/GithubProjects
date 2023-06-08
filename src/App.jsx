import { useLayoutEffect } from "react"
import "./App.css"
import DashBoard from "./Components/Dashboard/DashBoard"
import Header from "./Components/Header/Header"
import AppStore from "./Store/AppStore"
import { observer } from "mobx-react"

const App = observer(() => {
  const handleResize = () => {
    if (window.innerWidth < 800) {
      AppStore.setDevice(0)
    } else {
      AppStore.setDevice(1)
    }
  }
  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize)
    handleResize()
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className="AppRoot">
      <Header />
      <DashBoard />
    </div>
  )
})

export default App
