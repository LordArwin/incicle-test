import styles from './styles.module.css';
import { ButtonMore } from '../../Components/ButtonMore';
export function EndomarketingList({itensEndomarketing, setItensEndomarketing, openModalAndSelectEvent}){

    const colorsOfTypes = {
        'event': styles.eventColor,
        'release': styles.releaseColor,
        'publication': styles.publicationColor
    }

    return (
        <>
        {itensEndomarketing.map((item) =>
            item.visible !== false && <div key={item.id} className={styles.item}>
                 <div className={styles.imgItem}>
                     <img src={`${item.file.url}`} alt="Miniatura" />
                 </div>
                 <div className={styles.infoItem}>
                     <strong>{item.title}</strong>
                     <div className={styles.tagsItem}>
                         <span className={`${styles.type} ${colorsOfTypes[item.type]}`}>{item.type}</span>
                         <span className={styles.infoItem}>{item.info.place && `${item.info.place} |`}  <time>{item.info.date}</time> {item.type ==='event' && <>`| `<span className={styles.infoConfirmation} onClick={()=>openModalAndSelectEvent(item.invited_people)}>{item.confirmed} CONFIRMAÇÕES DE {item.invited}</span> </>}  </span>
                     </div>
                     <p>{item.description}</p>
                 </div>
                 <ButtonMore itemSelected = {item} listOfItems={itensEndomarketing} stateFunction={setItensEndomarketing} ></ButtonMore>
             </div>
         )}
         </>
    )
}