import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (

    <section className='projects__container' id='projects'>

        <h2 className='projects__title'>Proyectos</h2>
        <div className='projects__content'>
          { projects.map( (project, id) => <ProjectCard key={id} project={project}/> ) }
        </div>
        
    </section>

  )
}
