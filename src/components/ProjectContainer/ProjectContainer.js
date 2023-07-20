import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <a href={project.livePreview} target="_blank">
    <div className={`project project-${project.class}`}>
        <h3 className='project-title'>{project.name}</h3>
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
        <div className={`project-image ${project.class}`}/>    
        {/* {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            aria-label='source code'
            className='link link--icon icon'
          >
            <GitHubIcon />
          </a>
        )}
        {project.livePreview && (
          <a
            href={project.livePreview}
            target="_blank"
            aria-label='live preview'
            className='link link--icon icon'
          >
            <LaunchIcon />
          </a>
        )} */}
  </div>
  </a>
)

export default ProjectContainer
