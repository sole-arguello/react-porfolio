import React from 'react'

export default function ProjectCard({project: {title, imageSrc, description, skills, demo, source}}) {
  return (
    <div className='projects__content-item' >
        <img className='projects__content-item-img' src={imageSrc} 
        alt={`Imangen de ${title}`} />

        <h3 className='projects__content-item-title'>{title}</h3>
        <p className='projects__content-item-description' >{description}</p>
        <ul className='projects__content-item-skills'>
            {skills.map((skill, id) => {
                return <li className='projects__content-item-skills_item' key={id}>{skill}</li>
            })}
        </ul>
        <div className='projects__content-item-links'>
            <a className='projects__content-item-links_item' href={demo}>Demo</a>
            <a className='projects__content-item-links_item' href={source}>Source</a>
        </div>
    </div>
  )
}
