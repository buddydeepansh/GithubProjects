import GitHubIcon from "@mui/icons-material/GitHub"
import TelegramIcon from "@mui/icons-material/Telegram"
import Tooltip from "@mui/material/Tooltip"
import Zoom from "@mui/material/Zoom"
import { motion } from "framer-motion"
import { observer } from "mobx-react"
import React from "react"
import AppStore from "../../Store/AppStore"
import "./GridBox.less"

const GridBox = observer(({ project, index }) => {
  const handleGridBtnClick = () => {
    AppStore.setModalData(project.id)
    AppStore.setModalVisible(true)
  }
  return (
    <motion.div className="GridBoxRoot" key={`singleGrid${index}`} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}>
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
    </motion.div>
  )
})

export default GridBox
