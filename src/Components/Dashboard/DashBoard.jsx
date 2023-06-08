import { observer } from "mobx-react"
import React, { useState } from "react"
import projectsJSON from "../../JSON/Projects.json"
import GridBox from "../GridBox/GridBox"
import "./DashBoard.less"

const DashBoard = observer(() => {
  const [expand, setExpand] = useState(false)
  return (
    <div className="DashboardRoot">
      <div className="gridContainer">
        {!expand &&
          projectsJSON.map((project, index) => {
            if (index < 6) return <GridBox key={index} index={index} project={project} />
          })}
        {expand &&
          projectsJSON.map((project, index) => {
            return <GridBox key={index} index={index} project={project} />
          })}
      </div>
      <div
        className="expandBtn"
        onClick={() => {
          setExpand(!expand)
        }}
      >
        {" "}
        {expand ? "View less" : "View All"}
      </div>
    </div>
  )
})

export default DashBoard
