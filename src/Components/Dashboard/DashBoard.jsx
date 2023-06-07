import { observer } from "mobx-react"
import React from "react"
import AppStore from "../../Store/AppStore"
import "./DashBoard.less"
import GridBox from "../GridBox/GridBox"

const DashBoard = observer(() => {
  return (
    <div className="DashboardRoot">
      <GridBox />
    </div>
  )
})

export default DashBoard
