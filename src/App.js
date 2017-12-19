import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom'

import './css/main.css';
// import image from './images/IMG_2731.jpg'
import LinkedIn from 'react-icons/lib/fa/linkedin-square'
import Github from 'react-icons/lib/fa/github'
import Email from 'react-icons/lib/md/email'
import Instagram from 'react-icons/lib/fa/instagram'
import Home from './Main'
import Profile from './Profile'
import Projects from './Projects'
import Footprints from './Footprints'
import Loading from './LoadingAnimation'

class Header extends Component{
    render(){
        return(
            <div id="header-wrapper">
                <header id = "header" className="container">

                    <div id="logo">

                        <h1><Link to="/">Kevin Ma</Link></h1>
                    </div>

                    <nav id="nav">
                        <ul>

                            <li className="current"><Link to="/">Welcome</Link></li>

                            <li><Link to="/profile" >Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/footprints">Footprints</Link></li>

                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

class Main extends Component{
    constructor(){
        super()
        this.state={
            isLoading : 1
        }
    }

    componentDidMount() {
        setTimeout(function() { this.setState({isLoading: 0}); }.bind(this), 0);
    }

    render(){
        if(this.state.isLoading === 1){
            return(
                <Loading type="bubbles" color="bubbles"/>
            )
        }
        return(

            <div id="main-wrapper">

                <div className="container">
                    <div id="content" style={{minHeight: '100px', overflow: 'hidden'}}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/profile' component={Profile}/>
                            <Route path='/projects' component={Projects}/>
                            <Route path='/footprints' component={Footprints}/>

                        </Switch>
                    </div>

                </div>
            </div>
        )
    }
}

class Footer extends Component{
    render(){
        return(
            <div id="footer-wrapper">
                <footer id="footer" className="container">

                    <div className="widget contact">
                        <h3>Find Me At</h3>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/kevinma2222/" ><LinkedIn style={styles.icon}/></a></li>
                            <li><a href="https://github.com/matutu22" ><Github style={styles.icon}/> </a></li>
                            <li><a href="mailto:kevinma2222@gmail.com" ><Email style={styles.icon}/></a></li>
                            <li><a href="https://www.instagram.com/matutu22/" ><Instagram style = {styles.icon}/></a></li>
                        </ul>
                        <p></p>
                    </div>

                    <div className="row">
                        <div className="12u">
                            <div id="copyright">
                                <ul className="menu">
                                    <li>&copy; 2017. Kevin Ma. All rights reserved</li>
                                    <li>Design: <a href="#">Kevin Ma</a></li>
                                    <li>Developed using <a href="https://reactjs.org/">React</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}

class App extends Component {

  render() {

      return (
          <div id="page-wrapper">
              <Header/>

              <Main/>

              <Footer/>

          </div>
      )
  }

}

const styles = {
    image:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    description:{
        marginTop: '2rem',
        textAlign: 'center',
        fontFamily: 'Ubuntu',
        fontSize: '1.5rem',
        color: 'black'
    },
    icon:{
        width: '3rem',
        height : '3rem',
        color: 'black'
    }
};

export default App;
