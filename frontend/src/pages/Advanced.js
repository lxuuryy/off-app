import React from 'react'

export default function Beginner(){
    
            
    const  [ day1 ] = React.useState({

        days:"Day 6",
        muscles: " Full Body",

        titles:"Warm up - Repeat 2 times",

            
        exercise1:"Shoulder Rotations",
        duration1:"10 seconds",

        exercise2:"Stretches",
        duration2:"1 minute",

        exercise3:"Rolling Shoulder Circles",
        duration3:" 7 seconds",

        




    })

    const [ session1 ] = React.useState({

        titles:"Round 1 - Repeat 2 times",

            
            exercise1:"Bicep Curls",
            duration1:"10 reps (each side)",

            exercise2:"Dumbbell Chest Press",
            duration2:"5 reps",

            exercise3:"Lat Pull Down",
            duration3:"8 reps",

            exercise4:"Tricep Push Down",
            duration4:"8 reps",
    })


return(






<div className="header--tag">  

<div className="myHeader--tag">

    <h1>{day1.titles}</h1>
    

    </div>

    

    


        
        
    <div className='exercise--table'>

    

    <div className=" exercise-names">
        <div className="p-tags">
        <p>{day1.exercise1}</p>
        <p>{day1.duration1}</p>
        </div>
        <div className="condition--class">
        <p className="condition--word">free</p>
        </div>
        </div>
    
    
        <div className=" exercise-names">
        <div className="p-tags">
        <p>{day1.exercise2}</p>
        <p>{day1.duration2}</p>
        </div>
        <div className="condition--class">
        <p className="condition--word">free</p>
        </div>
        </div>

        <div className=" exercise-names">
        <div className="p-tags">
        <p>{day1.exercise3}</p>
        <p>{day1.duration3}</p>
        </div>
        <div className="condition--class">
        <p className="condition--word">free</p>
        </div>
        </div>

    </div>


        <div className="myHeader--tag">
    
    
    <h1>{session1.titles}</h1>

    </div>

    

    


        
        
    <div className='exercise--table'>

    

    <div className=" exercise-names">
        <div className="p-tags">
        <p>{session1.exercise1}</p>
        <p>{session1.duration1}</p>
        </div>
        <div className="condition--class">
        <p className="condition--word">free</p>
        </div>
        </div>
    
    
        <div className=" exercise-names">
        <div className="p-tags">
        <p>{session1.exercise2}</p>
        <p>{session1.duration2}</p>
        </div>
        <div className="condition--class">
        <p className="condition--word">free</p>
        </div>
        </div>

        <div className=" exercise-names">
        <div className="p-tags">
        <p>{session1.exercise3}</p>
        <p>{session1.duration3}</p>
        </div>
        <div className="condition--class">
        <p className="condition--word">free</p>
        </div>
        </div>

    </div>



        

        
    </div>
    
    
        
    
)





}
            
     