/**
 * Created by machenhan on 2017/12/12.
 */
import React, {Component} from 'react'
import './css/font.css'
import Gallery from './Gallery'
import AurinVideo from './Aurin'

export default class Projects extends Component{
    render() {
        return (
            <div>
                <h1 style={{fontSize : '2.5em', textAlign:'center'}}>
                    Projects
                </h1><br/><hr/>
                <TwitterSentiment/>
                <br/>
                <br/>

                <br/>
                <Pacman/>
                <br/>
                <br/>
                <br/>
                <Aurin/>
                <br/>
                <hr/>
            </div>
        )
    }
}


// Image lists
const cloud = [
    { id: '1513579564521-d61d1d1aa64c', caption: 'System Data Flow', orientation: 'square', useForDemo: true },
    { id: '1513574289827-3f66c2dfa017', caption: 'Melbourne tweets-income hot spots ', orientation: 'landscape', useForDemo: true },
    { id: '1513574356741-5b9dca678a2d', caption: 'System Architecture', orientation: 'landscape', useForDemo: true },
 ];

const ai = [
    { id: '1513579302553-de5190f66317', caption: 'Pacman Game Interface', orientation: 'landscape2', useForDemo: true },
    { id: '1513579447089-e8da80d20afb', caption: 'Approximate Q-Learning Algorithm Analysis', orientation: 'landscape2', useForDemo: true },
]

//Image Component
class Image extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            project : props.project
        }
    }

    render(){
        const p = this.state.project;
        return(
            <div >
                <Gallery images={p.map(({ caption, id, orientation, useForDemo }) => ({
                    src: makeUnsplashSrc(id),
                    thumbnail: makeUnsplashThumbnail(id, orientation),
                    srcSet: [
                        makeUnsplashSrcSet(id, 1024),
                        makeUnsplashSrcSet(id, 800),
                        makeUnsplashSrcSet(id, 500),
                        makeUnsplashSrcSet(id, 320),
                    ],
                    caption,
                    orientation,
                    useForDemo,
                }))} showThumbnails/>

            </div>
        )
    }
}



// Project Components
const TwitterSentiment = () =>(
    <div style={{marginBottom:'100px', marginTop:'50px'}}>
        <div id="column1" title="Click for more!" style={{float:'left', margin:0, width: '40%', paddingRight:'10px'}}>
            <Image project={cloud} />
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '50%', borderLeft: '1px solid lightgrey', paddingLeft:'20px'}}>
            <h3 style={{ margin:'0 0 5 0'}}>Twitter Sentiment Analysis</h3>
            <li style={styles.title}>
                <b>Keywords</b>:  NLP, Cloud Computing, Big Data, Automation Deployment, Machine Learning, Distributed System.
            </li>
            <li style={styles.title}>
                Use Machine Learning algorithms to analyze sentiment of tweets, combine with urban data (https://aurin.org.au/).
                System deployed on AWS cluster(NoSQL DB), with load-balancing and hot stand by feature, with a Web demo.
            </li>
            <li style={styles.title}>
                Written with Python(Django, Boto), Javascript, Shell, Ansible
            </li>
        </div>
    </div>
);

const Pacman = () =>(
    <div style={{marginBottom:'100px', marginTop:'150px'}}>
        <div id="column1" title="Click for more!" style={{float:'left', margin:0, width: '40%', paddingRight:'10px'}}>
            <Image project={ai} />
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '60%', borderLeft: '1px solid lightgrey', paddingLeft:'20px'}}>
            <h3>AI Contest: Pacman Capture the Flag</h3>
            <li style={styles.title}>
                <a href="http://inst.eecs.berkeley.edu/~cs188/pacman/contest.html">Contest Description</a>
            </li>
            <li style={styles.title}>
                Written in Python, implemented Approximate Q-Learning, Heuristic Search and Decision Tree Algorithm
            </li>
            <li style={styles.title}>
                Team received 3rd place among 90+ teams, participated Inter-Uni Contest: <br/>
                <a href="https://sites.google.com/view/pacman-capture-hall-fame"  >
                    Inter University Pacman Hall of Fame
                </a>
            </li>
        </div>
    </div>
);

const Aurin = () =>(
    <div style={{marginBottom:'100px', marginTop:'150px'}}>
        <div id="column1" title="Click for more!" style={{float:'left', margin:0, width: '40%', paddingRight:'10px', borderRight: '1px solid lightgrey'}}>
            <AurinVideo/>
        </div>

        <div id="column2" style={{float:'left', margin:0, width: '60%',paddingLeft:'20px'}}>
            <h3>AURIN Mobile</h3>
            <li style={styles.title}>
                Developed an iOS APP for <a href="https://aurin.org.au/">AURIN</a> using Swift in MVC pattern.
            </li>
            <li style={styles.title}>
                <b>Main Functionality:</b>  Fetch Geo-data from OpenAPI and data visualization.
            </li>

        </div>
    </div>
);



function makeUnsplashSrc (id) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}

function makeUnsplashSrcSet (id, size) {
    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=${size} ${size}w`;
}

function makeUnsplashThumbnail (id, orientation = 'landscape') {
    const dimensions = orientation === 'square'
        ? 'w=300&h=300'
        : 'w=240&h=159';

    return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

const styles = {
    title: {
        fontSize: '1em',
        fontFamily: 'Open Sans',
        color: 'black',
        fontWeight: '500',
        margin: '0 0 0px 0',
        lineHeight: '160%',
        paddingLeft: '1.5em',
        textIndent: '-1.5em',
        marginBottom: '3px'
    }
}