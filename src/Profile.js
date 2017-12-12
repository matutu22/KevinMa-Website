/**
 * Created by machenhan on 2017/12/12.
 */
import React, {Component} from 'react'
import './col.css'
import './font.css'

export default class Profile extends Component{
    render() {
        return (
                <article>
                    <h1 style={{fontSize : '2.5em', textAlign:'center'}}>
                        Resume
                    </h1><br/><hr/>

                    <Education />

                    <br/>
                    <Experience />

                    <br/><br/>
                    <br/><br/>

                    <Volunteer/>

                </article>

        )
    }
}

const Education = () => (
    <div style={{marginBottom:'100px', marginTop:'50px'}}>
        <div id="column1" style={{float:'left', margin:0, width: '20%'}}>
            <h2 style={{fontSize :'1.5em'}}>Education</h2>
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '80%', borderLeft: '1px solid lightgrey'}}>
            <p style={styles.title}>Master of Information Technology, Distributed Computing
                <span style={{float:'right'}}>07.2016 - 06.2018</span>
                <br/>
                University of Melbourne
            </p>
            <p style={styles.title}>Bachelor of Business Administration, Electronic Business
                <span style={{float:'right'}}>07.2012 - 06.2016</span>
                <br/>University of Macau
            </p>

        </div>
    </div>
)

const Experience = () => (
    <div style={{marginBottom:'100px', marginTop:'150px'}}>
        <div id="column1" style={{float:'left', margin:0, width: '20%'}}>
            <h2 style={{fontSize :'1.5em'}}>Experiences</h2>
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '80%', borderLeft: '1px solid lightgrey'}}>
            <p style={styles.title}>Software Engineer
                <span style={{float:'right'}}>07.2017 - 10.2017</span>
                <br/>Melbourne eResearch Group, Melbourne
            </p>
            <p style={styles.title}>Product Intern
                <span style={{float:'right'}}>05.2015 - 08.2015</span>
                <br/>New Life Insurance, Beijing
            </p>
            <p style={styles.title}>Office Assistant
                <span style={{float:'right'}}>08.2014 - 06.2016</span>
                <br/>Chai Kai Yau College, University of Macau
            </p>

        </div>
    </div>
)

const Volunteer = () => (
    <div style={{marginBottom:'100px', marginTop:'200px'}}>
        <div id="column1" style={{float:'left', margin:0, width: '20%'}}>
            <h2 style={{fontSize :'1.5em'}}>Volunteer activities</h2>
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '80%', borderLeft: '1px solid lightgrey'}}>
            <p style={styles.title}>Volunteer
                <span style={{float:'right'}}>02.2017</span>
                <br/>Playgrounds Conference, Melbourne
            </p>
            <p style={styles.title}>Volunteer
                <span style={{float:'right'}}>10.2016</span>
                <br/>Endeavour Engineering and IT Exhibition, University of Melbourne
            </p>


        </div>
    </div>
)
const styles = {
    title:{
        fontSize :'1em',
        fontWeight: 'bold',
        fontFamily: 'Merriweather',
        color: 'black',
        paddingLeft :'20px',
        margin: '0 0 20px 0'
    }
}