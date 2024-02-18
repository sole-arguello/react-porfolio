import skills from '../data/skills.json'
import history from '../data/history.json'
export default function Experience() {
  return (
    <section className='experience__container' id="experience">

      <h2 className='experience__title' >Experiencia</h2>
      <div className='experience__content'>
        
        <div className='experience__content-skills'>
            {skills.map((skill, id) =>{
                return (
                  <div className='experience__content-skills_item' key={id}>
                    <div className='experience__content-skills_item-img'>
                      <img className='skills_item-img' src={skill.imageSrc} alt={skill.title} />
                    </div>
                    <p className='experience__content-skills_item-title'>{skill.title}</p>
                  </div>
                )
            } )}
        </div>
        
        <ul className='experience__content-history'>
            { history.map((historyItem, id) =>{
                return (
                  <li className='content-history_item' key={id}>
                    
                    <img className='history_item-img' src={historyItem.imageSrc}
                     alt={`${historyItem.company} Logo`} />
                    
                    <div className='history_item-details'>
                        <h3 className='history_item-details--title'>{`${historyItem.role}, 
                        ${historyItem.company}`}</h3>
                        <p className='history_item-details--date'>{historyItem.startDate} 
                        - {historyItem.endDate}</p>
                        <ul className='history_item-details--experences'>
                          {historyItem.experences.map((experence, id) => 
                            {return (
                              <li className='history_item-details--experences_item' 
                              key={id}>{experence}</li>
                            )}
                        )}</ul>
                    </div>
                </li>
                )
            })}
        </ul>
      </div>

    </section>
  )
}
