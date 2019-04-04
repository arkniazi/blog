import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import  Contacts from "./components/MainView/Contacts";
import  EmailPage from "./components/MainView/EmailPage";
import  AddUpdate from "./components/MainView/AddUpdate";
import ProjectView from './components/MainView/Project';


const Home = () => {
    return (
        <BrowserRouter>
        <Switch>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
            <Route exact path="/contact_us" component={EmailPage}></Route>
            <Route exact path="/add_update" component={AddUpdate}></Route>
            <Route exact path="/project_view" component={ProjectView}></Route>
            {/* <Route exact path='/contacts' component={Contacts}></Route> */}
            {/* <Route exact path='/signup' component={SignUp}></Route> */}
            {/* <Route exact path='/dashboard' component={dashboard}></Route> */}
            {/* <Route exact path='/drawer' component={drawer}></Route> */}
        </div>
        </Switch>
            {/* <Route path='/' component={App} /> */}
            {/* <Route path='/contacts' component={Contact} /> */}
        </BrowserRouter>
    )
}


ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
