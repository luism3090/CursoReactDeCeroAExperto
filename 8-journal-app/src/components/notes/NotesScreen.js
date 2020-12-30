import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />


            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                
                />

                <textarea 
                        placeholder="what happened today?"
                        className="notes_textarea"        
                >
                    
                </textarea>

                <div className="notes__image">
                    <img
                        src="../images/marvel-hulk.jpg"
                        alt="imagen"
                    />
                </div>

            </div>


        </div>
    )
}


