import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import styles from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div className={styles.thumb}>
            <span><Link to="/" className={styles.logo}>LOGO</Link></span>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
                            Главная
                            </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/contacts" className={styles.link} activeClassName={styles.activeLink}>
                            Контакты
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
