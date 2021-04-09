import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    autoFocus
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                </textarea>
                <div>
                    <img
                        src="https://sm.ign.com/ign_es/screenshot/default/miles-morales-in-spider-man-into-the-spider-verse-2560x1440_qwyz.jpg"
                        alt="img"
                        className="notes__image"
                    />
                </div>
            </div>
        </div>
    )
}
