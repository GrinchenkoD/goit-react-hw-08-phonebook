import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <form>
                <label htmlFor=""> Name
                    <input type="text" />
                </label>
                <label htmlFor="">Email
                    <input type="mail" />
                </label>
                <label htmlFor="">Password
                    <input type="password" />
                </label>
                <button type="submit">Sign up</button>
            </form>
        )
    }
}
