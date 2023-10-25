import React from 'react'
import {BsDiscord, BsLinkedin, BsGithub} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://www.linkedin.com/in/fanghao-meng-1b230119a/" target="_blank" rel="noopener noreferrer">
        <div>
            <BsLinkedin />
        </div>
        </a>
        <a href="https://discordapp.com/users/598625216033456148" target="_blank" rel="noopener noreferrer">
        <div>
            <BsDiscord />
        </div>
        </a>
        <a href="https://github.com/copeelite" target="_blank" rel="noopener noreferrer">
        <div>
            <BsGithub />
        </div>
        </a>
    </div>
  )
}

export default SocialMedia