import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal';
import styles from './styles.module.css'
export function InvitesModal({ isOpen, setIsOpen, eventInvites = [] }) {
    const modalStyle = {
        content: {
            width: 'max-content',
            height: 'max-content',
            padding: 0,
            margin: '0 auto'
        }
    }

    useEffect(() => {
        Modal.setAppElement('body');
    }, [])

    return (
        <Modal
            style={modalStyle}
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            contentLabel="Invites Information"
            shouldCloseOnEsc
            closeButton>

            <div className={styles.container}>
                <IoClose onClick={() => setIsOpen(false)}></IoClose>
                <h1>Convidados</h1>
                <ul>
                    {eventInvites.map((invite, index) =>
                        <li key={index} className={styles.item}>
                            <img src={invite.avatar} onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png';
                            }} alt="Foto de Perfil" />
                            <div className={styles.info}>
                                <strong>{invite.name}</strong>
                                <span>Username: {invite.username}</span>
                                <span>Status: {invite.confirmed_presence ? <span className={styles.confirmed}>confirmado</span> : <span className={styles.pendente}>pendente</span>}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>

        </Modal>
    )
}