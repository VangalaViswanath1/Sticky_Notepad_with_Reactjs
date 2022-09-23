import { MdDeleteForever } from 'react-icons/md'
const Note = ( {id, text, date, handleDeleteNote } ) => {
    return <>
        <div className="note">
            <span>{text}</span>
            <div className="note-footer">
                <span>{date}</span>
                <MdDeleteForever onClick={ ()=> handleDeleteNote(id) } className='delete-icon' size='1.3rem' />
            </div>
        </div>
    </>
}
export default Note;