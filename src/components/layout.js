import React from 'react'
import NavBar from './navbar'

function layout({ children }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default layout
