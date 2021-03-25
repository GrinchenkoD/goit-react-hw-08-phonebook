import React from 'react'
import { Route, Switch } from 'react-router'
import Contacts from '../../pages/contacts/Contacts'
import Homepage from '../../pages/homepage/Homepage'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import PrivateRoute from '../PrivateRoute'
import PublicRoute from '../PublicRoute'




const Main = () => {
    return (
        <main className='thumb'>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/register" component= {Register}/> 
                <PublicRoute path="/login" component={Login} redirectTo="/contacts" restricted />
                <PrivateRoute path="/contacts"  component={Contacts} redirectTo='/login'/>

            </Switch>
        </main> 
    )


}

export default Main
