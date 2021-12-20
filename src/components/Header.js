import React from 'react'

function Header({handleToggleDarkMode}) {
    return (
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className='btn'>Toggle Mode</button>
        </div>
    )
}

export default Header
