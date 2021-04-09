import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes'
import { UseForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {


    const dispatch = useDispatch();

    /* renombrar */
    const { active: note } = useSelector(store => store.notes)
    const [values, handleInputChange, reset] = UseForm(note);
    const { body, title, id } = values;

    /* esto es para solucinar el problema del form donde no cambiaba por el comportamiento del useform */
    const activeId = useRef(note.id)

    useEffect(() => {
        if(note.id !== activeId.current) {
            reset(note)
            activeId.current = note.id
            
        }
    }, [note, reset])

    useEffect(() => {
        dispatch(activeNote(values.id, {...values}));
    }, [values, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    name="title"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    autoFocus
                    value={title}
                    onChange={handleInputChange}

                />
                <textarea
                    placeholder="What happened today"
                    name="body"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>
                {
                    (note.url) &&
                    (<div>
                        <img
                            src={note.url}
                            alt="img"
                            className="notes__image"
                        />
                    </div>)
                }
            </div>

            <button 
            className="btn btn-danger"
            onClick={handleDelete}
            > 
                Delete
            </button>
        </div>
    )
}
