import React, { useEffect, useState } from "react"

import GitHubIcon from "@mui/icons-material/GitHub"
import TelegramIcon from "@mui/icons-material/Telegram"
import Modal from "@mui/material/Modal"
import Tooltip from "@mui/material/Tooltip"
import Zoom from "@mui/material/Zoom"
import { observer } from "mobx-react"
import ProjectJSON from "../../JSON/Projects.json"
import AppStore from "../../Store/AppStore"
import "./ProjectModal.less"

const ProjectModal = observer(() => {
  const [data, setdata] = useState(ProjectJSON[0])
  useEffect(() => {
    const tempData = ProjectJSON.filter((item) => item.id == AppStore.modalData)
    setdata(tempData[0])
  }, [])

  const handleClose = () => {
    AppStore.setModalVisible(false)
  }
  return (
    <Modal open={AppStore.modalVisible} onClose={handleClose} className="ProjectModalRoot">
      <div className="projectModalContainer">
        <p className="heading">{data.name}</p>
        <img src={data.imgSrc} alt={"Project preview"} className="projectImg" />
        <div className="btnContainer">
          <Tooltip className="btnToolTip" title="View Repository" TransitionComponent={Zoom} placement="bottom">
            <a href={`${data.gitLink}`} target={"__blank"}>
              <GitHubIcon />
            </a>
          </Tooltip>
          <Tooltip className="btnToolTip" title="View Demo" TransitionComponent={Zoom} placement="bottom">
            <a href={`${data.depLink}`} target={"__blank"}>
              <TelegramIcon />
            </a>
          </Tooltip>
        </div>
        <p className="description">{data.projectDesc}</p>
      </div>
    </Modal>
  )
})

export default ProjectModal
