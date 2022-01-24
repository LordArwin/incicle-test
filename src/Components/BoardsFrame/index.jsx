import world from '../../assets/world-icon.svg'
import { ButtonMore } from '../../Components/ButtonMore';
import styles from './styles.module.css'
export function BoardsFrame({boardsEndomarketing, setBoardsEndomarketing}) {
    return (
        <div className={styles.frame}>
            <strong>
                Quadros de Gestão à Vista
            </strong>
            {boardsEndomarketing.map((board, index) =>
                <div key={index} className={styles.frameItem}>
                    <div className={styles.frameHeader}>
                        <span>{board.title}</span>
                        <button><img src={world} alt="Icone de Mundo" /></button>
                        <ButtonMore itemSelected={board} listOfItems={boardsEndomarketing} stateFunction={setBoardsEndomarketing} />
                    </div>
                    <div className={styles.frameImgs}>
                        {board.resume_files.map(
                            (file, index) => <img key={index} src={file.file} alt="Miniatura Resumo" />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}