import React, { Component } from 'react'
import styles from "./Register.module.css"

export default class Register extends Component {
    render() {
        return (
            <form className={styles.form}>
                <label htmlFor="name"  className={styles.label}> Name
                    <input id="name" name='email' type="text" className={styles.input} placeholder="Name*" required />
                </label>
                <label htmlFor="email"  className={styles.label}>Email
                    <input id="email" name='email' type="mail" className={styles.input} placeholder="Email*" required />
                </label>
                <label htmlFor="password"  className={styles.label}>Password
                    <input id="password" name='password' type="password" className={styles.input} placeholder="Password*" required />
                </label>
                <button type="submit"  className={styles.submitBtn}>Sign up</button>
            </form>
        )
    }
}
