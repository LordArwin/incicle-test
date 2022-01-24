import styles from './styles.module.css'
import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react'
export function HeaderList({ title, handleSelectType }) {
    const [selectOptions,] = useState([{ name: 'Evento', id: 'event' }, { name: 'Publicação', id: 'publication' }, {name: 'Comunicado', id: 'release'}])
    
    const selectStyles = {
        multiselectContainer: {
            width: '95px',
        },
        chips: {
            display: 'none'
        },
        searchBox:{
            width: '95px'
        },
        inputField:{
            width: '95px'
        },
        optionContainer:{
            width: 'max-content',
            backgroundColor: '#FFF'
        }
    }

    return (

        <div className={styles.headerlist}>
            <h1>{title}</h1>
            <div className={styles.buttons}>
                <Multiselect style={selectStyles}
                    options={selectOptions}
                    displayValue="name"
                    onSelect={handleSelectType}
                    onRemove={handleSelectType}
                    showCheckbox placeholder="TIPO"
                    showArrow />
                <button>
                    <span>CRIAR
                    </span> <span>+</span>
                </button>
            </div>
        </div>
    )
}