import React from "react";
import "./App.css";

import {Route,Switch} from 'react-router-dom'
import Naavbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Blogs from './pages/Blogs'
import Register from './pages/Register'
import SignIn from './pages/Sign-In'
import About from './pages/About'
import CreateBlog from './components/blogs/CreateBlog'
import AdminHomepage from "./Admin/AdminHomepage";
import Screening from "./Admin/Blogs-management/Screening";
import AddBlog from "./components/blogs/AddBlog";

class App extends React.Component{
  render(){
    return(
      <>
        <Naavbar/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/product' component={Product}/>
          <Route path='/blogs' component={Blogs}/>
          <Route path='/register' component={Register}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/About' component={About}/>
          <Route path = '/createblog' component = {CreateBlog}/>
          <Route path = '/Admin' component = {AdminHomepage}/>
          <Route path = '/BlogScreening' component = {Screening}/>
          <Route path = '/AddBlog' component = {AddBlog}/>
          {/* <Route path='/' component={Homepage}/> */}
        </Switch>
      </>
    )
  }
}

export default App;
