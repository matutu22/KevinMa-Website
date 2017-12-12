/**
 * Created by machenhan on 2017/12/11.
 */
import React, {Component} from 'react'
import image from './images/IMG_2731.jpg'

export default class Home extends Component{
    render() {
        return (
            <div>
                <img className="headPortrait" src={image} alt=""/>
                <Description />
            </div>
        )
    }
}

const Description = () => (
    <p style={styles.description}>
        Master IT student at Unimelb<br/>
        Developer<br/>
        AI Enthusiast<br/>
        All-arounder<br/>
        Traveller<br/>
        Sports Enthusiast<br/>
        Movie Enthusiast<br/>
        Gamer<br/>
    </p>
)


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