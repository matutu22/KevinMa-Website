/**
 * Created by machenhan on 2017/12/12.
 */
import React, {Component} from 'react'
import './css/font.css'
import ansible from './images/icons/ansible.png'
import css3 from './images/icons/css3.png'
import html from './images/icons/html.png'
import java from './images/icons/java.png'
import js from './images/icons/js.png'
import ml from './images/icons/ml.png'
import python from './images/icons/python.ico'
import react from './images/icons/react.png'
import sql from './images/icons/sql.png'
import swift from './images/icons/swift.png'
import aws from './images/icons/aws.png'



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
                    <br/>
                    <Skills/>
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

const Skills = () =>(
    <div style={{marginBottom:'100px', marginTop:'200px'}}>
        <div id="column1" style={{float:'left', margin:0, width: '20%'}}>
            <h2 style={{fontSize :'1.5em'}}>SkillSet</h2>
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '80%', borderLeft: '1px solid lightgrey'}}>
            <div>
                {
                    SkillFunctions.all().map(s =>(
                        <div style={styles.imgdiv}>
                            <img style={styles.img} src={s.path} alt={s.name} title={s.name}/>
                            <p style={styles.name}>{s.name}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    </div>
)


const SkillFunctions = {
    skillList :[
        {name:'Ansible', path : ansible},
        {name:'CSS3', path: css3},
        {name:'HTML', path: html},
        {name:'Java', path: java},
        {name:'Javascript', path: js},
        {name:'ML, AI', path:ml},
        {name:'Python', path: python},
        {name:'React.js', path: react},
        {name:'Sql', path: sql},
        {name:'Swift', path:swift},
        {name: 'AWS', path :aws},
    ],
    all : function() {
        return this.skillList
    }
}



const styles = {
    title:{
        fontSize :'1em',
        fontWeight: 'bold',
        fontFamily: 'Merriweather',
        color: 'black',
        paddingLeft :'20px',
        margin: '0 0 20px 0'
    },
    imgdiv:{
        height :'150px',
        float: 'left',
        width: '20%'
    },
    img:{
        height: '100px',
        width: '100px',
        marginLeft: 'auto',
        marginRight : 'auto',
        display: 'block'
    },
    name:{
        fontWeight: 'bold',
        fontFamily: 'Merriweather',
        textAlign: 'center'
    }

}