import {InvitesModal} from '../../Components/InvitesModal'
import styles from './styles.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { EndomarketingList } from '../../Components/EndomarketingList';
import { HeaderList } from '../../Components/HeaderList';
import { InformativeFrame } from '../../Components/InformativeFrame';
import { BoardsFrame } from '../../Components/BoardsFrame';

export function EndomarketingPage() {
    const [isOpen, setIsOpen] = useState(false)
    const [itensEndomarketing, setItensEndomarketing] = useState([])
    const [boardsEndomarketing, setBoardsEndomarketing] = useState([])
    const [selectedEventInvites, setSelectedEventInvites] = useState([])

    function openModalAndSelectEvent(eventInvites){
        setSelectedEventInvites(eventInvites)
        setIsOpen(true)
    }

    function handleSelectType(itens){
        const filters = itens.map((item) => item.id)
        const itensEndomarketingFiltered = itensEndomarketing.map(
            (item) => {
                if(!filters.includes(item.type) && filters.length > 0){
                    return {
                        ...item,
                        visible: false
                    }
                }else{
                    return {
                        ...item,
                        visible: true
                    }
                }
            }
        )
        setItensEndomarketing(itensEndomarketingFiltered)
    }


    useEffect(() => {
        async function loadItens() {
            const itens = await axios.get('https://raw.githubusercontent.com/InCicle/frontend-test/main/data.json')
            const itensWithConfirmations = []
            itens.data.data.forEach((item) => {
                if (item.type === 'event') {
                    let confirmed = 0;
                    let invited = item.invited_people.length
                    item.invited_people.forEach((invite) => {
                        if (invite.confirmed_presence) {
                            confirmed++
                        }
                    })
                    itensWithConfirmations.push({
                        ...item,
                        confirmed: confirmed,
                        invited: invited,
                        visible: true
                    })
                }else {
                    itensWithConfirmations.push({
                        ...item,
                        confirmed: 0,
                        invited: 0,
                        visible: true
                    })
                }
            })
            setItensEndomarketing(itensWithConfirmations)
            const boards = await axios.get('https://raw.githubusercontent.com/InCicle/frontend-test/main/management.json')
            setBoardsEndomarketing(boards.data.data[0].boards)
        }
        loadItens()
    }, [])


    return (
        <>
        <InvitesModal isOpen={isOpen} setIsOpen={setIsOpen} eventInvites={selectedEventInvites}/>
        <main className={styles.container}>
            <div className={styles.list}>
                <HeaderList title="Endomarketing" handleSelectType={handleSelectType}/>
                <EndomarketingList openModalAndSelectEvent={openModalAndSelectEvent} itensEndomarketing ={ itensEndomarketing } setItensEndomarketing ={setItensEndomarketing}/>
            </div>
            <div className={styles.side}>
                <InformativeFrame/>
                <BoardsFrame boardsEndomarketing={boardsEndomarketing} setBoardsEndomarketing={setBoardsEndomarketing}/>
            </div>

        </main>
        </>
    )
}