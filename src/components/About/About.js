import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../constants'
import { ThemeContext } from '../../contexts/theme'
import { useContext } from 'react'
import me_orange from "../../images/me-orange.png"
import me_teal from "../../images/me-teal.png"
import './About.css'

const About = () => {
  const {photo, name, role, description, resume, social } = about
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div className='about center'>
      <img className='about-pic' alt='Profile picture' src={themeName === 'dark' ? me_orange : me_teal}/>
      {name && (
        <h1 className='about-name'>
          hi, i'm <span className='first-name'>{name}</span> :)
        </h1>
      )}

      {role && <h2 className='about-role'>a {role}.</h2>}
      <p className='about-desc center'>{description}.</p>

      <div className='about-contact center'>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
