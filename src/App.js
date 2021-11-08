import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Order from './Components/Dashboard/Order/Order';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Progress from './Components/Progress/Progress';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceListAdmin from './Components/Admin/ServiceListAdmin/ServiceListAdmin';
import AddService from './Components/Admin/AddService/AddService';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import About from './Components/About/About';

export const UserContext = createContext();

function App() {
    // const [user, setUser] = useState({
    //     displayName: '',
    //     email: '',
    // });
    const userDetails = localStorage.getItem('user');
    let parseUser = JSON.parse(userDetails);
    if (!parseUser) {
        parseUser = {
            displayName: '',
            email: '',
            photo: '',
        };
    }

    const [user, setUser] = useState(parseUser);
    // const [user, setUser] = useState({
    //     displayName: 'Ansar A',
    //     email: 'ansar.sdp75@gmail.com',
    //     photo: 'https://lh3.googleusercontent.com/a-/AOh14GjGDWDvTge5bjoANXcIOXqWIEnXevfvamt7FRm82w=s96-c',
    // });

    return (
        <UserContext.Provider className="container" value={[user, setUser]}>
            <Router>
                <Switch>
                    <PrivateRoute path="/dashboard/:id">
                        <Dashboard />
                    </PrivateRoute>

                    <PrivateRoute path="/order">
                        <Order></Order>
                    </PrivateRoute>

                    <PrivateRoute path="/serviceList">
                        <ServiceList></ServiceList>
                    </PrivateRoute>

                    <PrivateRoute path="/serviceListAdmin">
                        <ServiceListAdmin />
                    </PrivateRoute>

                    <PrivateRoute path="/addService">
                        <AddService />
                    </PrivateRoute>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/home">
                        <Home></Home>
                    </Route>

                    <Route path="/progress">
                        <Progress></Progress>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>

                    <Route exact path="/">
                        <Home></Home>
                    </Route>

                    <Route path="*">
                        <PageNotFound></PageNotFound>
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
