import React from 'react'

export default function Beginner(){
    
            
    const  [ day1 ]= React.useState({

days:"Day 1",
muscles: " Beginner",


titles: "Warm up - Repeat 3 times",

exercise1: "Jumping jacks",
duration1: "30secs",

exercise2: "Low Plank To High Plank",
duration2:"7 reps each",

exercise3:"Half Burpees",
duration3: "10 reps",







})

const [ session1 ] = React.useState({

titles: "Round 1 - Repeat 2 times",
exercise1: "Jump Dips",
duration1: "7 reps",
exercise2: "Incline Push Ups",
duration2: "10 reps",
exercise3: "Bicep Curls",
duration3:"8 reps (each side)"
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
            
     