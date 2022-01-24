import { useState, useRef } from 'react'
import styles from './styles.module.css'
import treeDots from '../../assets/tree-dots.svg'
export function ButtonMore({itemSelected, listOfItems, stateFunction}) {
    const navRef = useRef(null)
    const [isActive, setIsActive] = useState(false)    
    function openDropDrown(status){
        setIsActive(status)
    }

    function deleteItem(){
        stateFunction(listOfItems.filter((item)=> item !== itemSelected))
        setIsActive(false)
    }

    return (
        <>
            <div className={styles.container} >
                <div className={styles.buttonItem} onClick={()=> openDropDrown(!isActive)}>
                    <button><img src={treeDots} alt="Icone Tres Pontos" /></button>
                </div>
                <nav ref={navRef} className={!isActive ? styles.invisible: ''}>
                    <ul>
                        <li onClick={deleteItem}>
                            Excluir item
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}