import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form >
                <label htmlFor="">Email
                    <input type="mail" />
                </label>
                <label htmlFor="">Password
                    <input type="password" />
                </label>
                <button type="submit">Log in</button>
            </form>
        )
    }
}
