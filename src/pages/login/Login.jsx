import React, { Component } from 'react'

import styles from "./Login.module.css"

const InitialState = {
    email: '',
    password:''
}
export default class Login extends Component {

    state = {
        ...InitialState
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]:value})
    }


    render() {
        const {email, password}=this.state
        return (
            <form className={styles.form}>
                <label htmlFor="email" className={styles.label}>Email
                    <input id="email"
                        name='email'
                        type="mail"
                        className={styles.input}
                        placeholder="Email*"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label htmlFor="password"  className={styles.label}>Password
                    <input id="password"
                        name='password'
                        type="password"
                        className={styles.input}
                        placeholder="Password*"
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <button type="submit"  className={styles.submitBtn}>Log in</button>
            </form>
        )
    }
}
