import React from 'react'
import { Route, Switch } from 'react-router'
import Contacts from '../../pages/contacts/Contacts'
import Homepage from '../../pages/homepage/Homepage'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'



const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/register" component= {Register}/> 
            <Route path="/login" component={Login}/>
            <Route path="/contacts" component={Contacts}/>

        </Switch>

    )


}

export default Main
