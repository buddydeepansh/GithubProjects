import { observer } from "mobx-react"
import "./GridBox.less"
import GitHubIcon from "@mui/icons-material/GitHub"
import TelegramIcon from "@mui/icons-material/Telegram"
import Tooltip from "@mui/material/Tooltip"
import Zoom from "@mui/material/Zoom"
import AppStore from "../../Store/AppStore"
import React from "react"

const GridBox = observer(({ key, project }) => {
  const handleGridBtnClick = () => {
    AppStore.setModalData(project.id)
  }
  return (
    <div className="GridBoxRoot" key={`singleGrid${key}`}>
      <p className="projectName">{project.name}</p>
      <div className="btnContainer">
        <button className="gitBtn">
          <Tooltip className="btnToolTip" title="View Repository" TransitionComponent={Zoom} placement="bottom">
            <a href={`${project.gitLink}`} target={"__blank"}>
              <GitHubIcon />
            </a>
          </Tooltip>
        </button>
        <button className="gitBtn">
          <Tooltip className="btnToolTip" title="View Demo" TransitionComponent={Zoom} placement="bottom">
            <a href={`${project.depLink}`} target={"__blank"}>
              <TelegramIcon />
            </a>
          </Tooltip>
        </button>
      </div>
      <div className="viewMoreBtn">
        <button type="button" onClick={handleGridBtnClick}>
          view more
        </button>
      </div>
    </div>
  )
})

export default GridBox
