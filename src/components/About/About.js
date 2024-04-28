import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../assets/content'
import { ThemeContext } from '../../contexts/theme'
import { useContext } from 'react'
import me_orange from "../../images/me-orange.png"
import me_teal from "../../images/me-teal.png"
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about
  const [{ themeName }] = useContext(ThemeContext)


  return (
    <div className='about center'>
      <img className='about-pic floating' alt='Profile picture' src={themeName === 'dark' ? me_orange : me_teal}/>
      {name && (
        <h1 className='about-name'>
          <span className='first-name'>{name}</span>: <span className='about-role'><i>{role}</i></span>
        </h1>
      )}

      <p className='about-desc center'>{description}</p>

      <div className='about-contact center'>
        {resume && (
          <a href={resume} target="_blank">
            <span type='button' className='btn btn--outline button'>
              resume
            </span>
          </a>
        )}
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
