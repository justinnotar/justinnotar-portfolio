import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from '../../contexts/theme'
import { projects, skills, contact } from '../../assets/content'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav-theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyIcon /> : <Brightness2Icon />}
      </button>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav-list'
      >
        {projects.length ? (
          <li className='nav-list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav-list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav-list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav-hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
      
    </nav>
  )
}

export default Navbar
