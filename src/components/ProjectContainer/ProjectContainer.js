import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <a href={project.livePreview} target="_blank">
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project-description'>{project.description}</p>
    {project.stack && (
      <ul className='project-stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project-stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        target="_blank"
        aria-label='source code'
        className='link link--icon github'
      >
        <GitHubIcon />
      </a>
    )}
    
  </div>
  </a>
)

export default ProjectContainer
