import React from 'react'

import {Link} from 'react-router-dom'




export default function Home (){

    const videoRef = React.useRef(null);

    React.useEffect(() => {
      // Start playing the video when the component mounts
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          // Handle any potential error (e.g., autoplay not allowed)
          console.error('Error playing video:', error);
        });
      }
    }, []);



    return (

        <div className="home--container">
            
            <div className="video--container">
            <video ref={videoRef} loop autoPlay muted playsInline >
                <source src= {require('../video/motivation.mp4')} type= 'video/mp4'/>
                
            </video>
            
            
            <div className="title--container">
                <div>
            <h3 className="video--title">THE SCHOOL OF GYM.</h3>
            </div>
            <div>
            <h3 className="video--title2">GET IN THE BEST SHAPE OF YOUR LIFE.</h3>
            </div>
            </div>
            
            </div>
            <div className="hero section">
                <div className="first--section">
                    <img  className='first-image' src="/images/weights2.jpg" alt="" />
                    <div>
                    <div className='p-fam'>
                    <p className="p--tag">Get the program</p>
                    </div>

                    <h2 className="h2--tag">From Beginner to Pro,<br></br>trusted by 2 million people</h2>
                    <div className="button--class"> 
                    <Link to="/training"><button className="program--button">Programs</button></Link>
                    <Link to="/contact"><button className="goals--button">Contact </button></Link>
                    </div>
                    </div>

                </div>
                
                <div className="first--section">
                
                <div>
                    <p className="p--tag p">Visit our shop</p>
                    <h2 className="h2--tag s">Elite Products,<br></br>Elite Mentality</h2>
                    <div className="button--class"> 
                    <button className="program--button s">Shop</button>
                    
                </div> 
                    </div>
                    <img  className='second--image 'src="/images/weights.jpg" alt="" />
            </div>
            </div>
            
                
            <div className="shop--background">
            <div>
            <h1 className="home--shop--title">Shop</h1>
            </div>
            <div className="home--images">
                <div className="para--container">
                <Link to="/shop">
                    <img src="/images/para.jpg" alt="" />
                    <div className="equip--con">
                        <span>Paralletes</span>
                    </div>
                    <div className="price--tag">
                        <span>129 AUD</span>
                        </div>
                        </Link>
                </div>
                
                <div className="para--container">
                    <Link to="/shop">
                    <img src="/images/pullbar.jpg" alt="" />
                    <div className="equip--con">
                        <span>Pull Up bar</span>
                    </div>
                    <div className="price--tag">
                        <span>149 AUD</span>
                        </div>
                        </Link>
                </div>
                <div className="para--container">
                    <Link to="/shop">
                    <img src="/images/vest.jpg" alt="" />
                    <div className="equip--con">
                        <span>Vest</span>
                    </div>
                    <div className="price--tag">
                        <span>59 AUD</span>
                        </div>
                        </Link>
                </div>
                </div>
            </div>
            

        </div>

        

    )

};
