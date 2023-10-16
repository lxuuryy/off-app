import React from 'react'
import { Link } from 'react-router-dom'


export default function Training (){

    
    return(
        <div className="training--page">
            <div className="workout--title">
            <h1>Workouts Library</h1>
            <p className="title--details">Choose from 2 carefully designed workouts created by us</p>
            </div>
            <div className="pic--group"> 
            <Link className="program--link" to="beginner">
            <div className="workout--pic1">
                <img src="/images/beginner.jpg
                " alt="beginner--pic" />
                <div className="pic1--details">
                    <span className="level--date">July 11, 2023</span>
                    <span className="level--name">Beginner</span>
                </div>
                
            </div>
            </Link>
            <Link className="program--link" to="/training/advanced">   
            <div  className="workout--pic1">
            <img src="/images/advanced.jpg" alt="advanced--pic" />
            <div className="pic1--details">
                    <span className="level--date">July 30, 2023</span>
                    <span className="level--name">Advanced</span>
                </div>
            </div>
            </Link> 
            </div>

            
            
            

        </div>
    )
}