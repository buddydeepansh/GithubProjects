import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded"
import MailLockRoundedIcon from "@mui/icons-material/MailLockRounded"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { IconButton } from "@mui/material"
import Drawer from "@mui/material/Drawer"
import { motion } from "framer-motion"
import { observer } from "mobx-react"
import React, { useState } from "react"
import "./Drawerr.less"

const Drawerr = observer(() => {
  const [open, setOpen] = useState(false)

  return (
    <div className="drawerRoot">
      <IconButton
        onClick={() => {
          setOpen(true)
        }}
      >
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false)
        }}
        className="custDrawerRoot"
      >
        <div className="drawerDiv">
          <div className="rightSection">
            <div className="link">
              <motion.a href="mailto:99.deepanshagrawal@gmail.com" target="__blank" whileHover={{ scale: 1.1 }} transition={{ type: "smooth", repeatType: "mirror", duration: 0.3 }}>
                <MailLockRoundedIcon />
                <p> Email me</p>
              </motion.a>
            </div>
            <div className="link">
              <motion.a href="tel:+917723032150" target="__blank" whileHover={{ scale: 1.1 }} transition={{ type: "smooth", repeatType: "mirror", duration: 0.3 }}>
                <LocalPhoneRoundedIcon />
                <p> Call</p>
              </motion.a>
            </div>
            <div className="link">
              <motion.a href="https://github.com/buddydeepansh/" target="__blank" whileHover={{ scale: 1.1 }} transition={{ type: "smooth", repeatType: "mirror", duration: 0.3 }}>
                <GitHubIcon />
                <p>GitHub</p>
              </motion.a>
            </div>
            <div className="link">
              <motion.a href="https://www.linkedin.com/in/deepansh-agrawal-b536421b0/" target="__blank" whileHover={{ scale: 1.1 }} transition={{ type: "smooth", repeatType: "mirror", duration: 0.3 }}>
                <LinkedInIcon />
                <p> LinkedIn</p>
              </motion.a>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  )
})

export default Drawerr
