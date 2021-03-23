import React, { Component } from 'react'
import styles from "./Register.module.css"


const InitialState = {
    name:'',
    email: '',
    password:''
}
export default class Register extends Component {

     state = {
        ...InitialState
    }

 handleChange = (event) => {
        const { name, value } = event.target
        this.setState({[name]:value})
    }

    render() {
const {name, email, password} = this.state

        return (
            <form className={styles.form}>
                <label htmlFor="name"  className={styles.label}> Name
                    <input id="name"
                        name='name'
                        type="text"
                        className={styles.input}
                        placeholder="Name*"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <label htmlFor="email"  className={styles.label}>Email
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
                <button type="submit"  className={styles.submitBtn}>Sign up</button>
            </form>
        )
    }
}
