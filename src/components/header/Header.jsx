import React from 'react'

import AuthNav from '../authNav/AuthNav'
import Navigation from '../navigation/Navigation'

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <div  className={styles.thumb}>
                <Navigation/>            
                <AuthNav />
            </div>
        </header>
    )
}

export default Header
