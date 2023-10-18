import React from 'react'
import {Link} from 'react-router-dom'

export default function Contact (){

    const [form, setForm] = React.useState({
        name:"",
        email: "",
        message: ""
    })

    const [error, setError] = React.useState('')

    function handleChange(event){
        const { type, value, checked, name} = event.target;
        setForm(prevForm => {
            return{
                ...prevForm,
                [name] : type === "checkbox" ? checked : value
            }
        })

    }

   async function handleSubmit(event){
        event.preventDefault()

        const message =  {
            name: form.name,
            email: form.email,
            message: form.message
        }

        const response = await fetch('/api/message',{
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        
        if (response.ok){
            console.log(response)
            setForm({
                name: "",
                email:"",
                message: "",
            })

        } else{
            console.log(json.error)
            setError(json.error)
            
        }
        
           
        
    }
    return(
        <div>
            <div className="contact--container">
                <div className='contact--header'><h1>CONTACT US</h1> </div>
            
            </div>
            <div className="godfather--header">
            <div className="contact--children--header">
                <div className="p--tags"> 
            <p className="">Contact our team with any questions or comments at support@www.com</p>
            </div>
            
            </div>
            
            </div>
            <form onSubmit={handleSubmit}>
            <div className="name--email--container">
                <div className="name--email--div">
                    <div className="title--con">
                        <label>NAME</label>
                        
                        <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="title--con">
                    
                        <label>EMAIL</label>
                        <input 
                        type="text"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="message--container">
                    <label>MESSAGE</label>
                    <textarea 
                    type="text" 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    ></textarea>
                
            </div>
            <div className="button--send">
                <button>SEND</button>
                
            </div>
            </form>
            <div className='error-container'>
            <label className='error-button'>{error}</label>
            </div>
            <hr></hr>

            <div className="info--container">
                <div className="image--div1">
                    <img  src='/images/pic1.jpeg' alt="pic1" />
                    <div className="for--info">
                <span  className='info--head'>TRY OUR WORKOUTS</span>
                    <p>get access to our free workouts, tips and more!</p>
                    <Link to="/training">
                    <button className='info--button'>WORKOUTS</button>
                    </Link>
                    </div>
                    </div>
                    
                
                <div className="image--div2">
                <img src='/images/pic2.jpg' alt="pic2" />
                
                <div className="for--info">
                <span className='info--head'>Become a member</span>
                    <p>Join us to get updates on our stuff!</p>
                    <Link to="/register"><button className='info--button'>JOIN NOW</button></Link>
                    </div>
                    </div>
            </div>

        </div>
    )
}