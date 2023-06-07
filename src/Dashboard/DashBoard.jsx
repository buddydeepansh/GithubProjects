import { observer } from "mobx-react"
import React from "react"
import AppStore from "../Store/AppStore"
import "./DashBoard.less"

const DashBoard = observer(() => {
  return <div className="DashboardRoot">{AppStore.state1}</div>
})

export default DashBoard
