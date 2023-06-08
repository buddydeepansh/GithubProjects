import { observer } from "mobx-react"
import React from "react"
import AppStore from "../../Store/AppStore"
import "./DashBoard.less"
import projectsJSON from "../../JSON/Projects.json"
import GridBox from "../GridBox/GridBox"

const DashBoard = observer(() => {
  return (
    <div className="DashboardRoot">
      <div className="gridContainer">
        {projectsJSON.map((project, index) => {
          return <GridBox key={index} project={project} />
        })}
      </div>
    </div>
  )
})

export default DashBoard
