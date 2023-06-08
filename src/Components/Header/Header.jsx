import { observer } from "mobx-react"
import MailLockRoundedIcon from "@mui/icons-material/MailLockRounded"
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import React from "react"
import { motion } from "framer-motion"
import "./Header.less"

const Header = observer(() => {
  return (
    <div className="HeaderRoot">
      <div className="leftSection">Deepansh Agrawal</div>
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
  )
})

export default Header
