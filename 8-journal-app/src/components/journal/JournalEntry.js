import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://blog.taranna.com/docs/amanecer-barcelona-620x388.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    asdkfjhkjsdajfjsadkfhksdahfksjdk iasfhsh saifhishf oh fiosahdfoih ihsdiufhasifh
                </p>
            </div>

            <div className="journal__entry-date-box">
                    <span>Monday</span>
                    <h4>28</h4>
            </div>

        </div>
    )
}
