import React from 'react'
import { BsCartPlus } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";
import { CartContext } from '../cartContext/cartContext'
import { UserContext } from '../cartContext/UserContext'
import {Link, Navigate} from 'react-router-dom'
import { loadStripe } from "@stripe/stripe-js"; 
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const stripePromise = loadStripe('pk_live_51NzsKPGdxsICiosJqJCVLekhWdS2sYuEOV6gDhLwcNDIreYLr9VQuDSNv7FNIZQzhi1NNKU0snIF2b43ofnCOVeU00WQSl6DNk');





export default function Shop(){

   

    

    
    const [menu, setMenu] = React.useState(false)
    const { cart, setCart} = React.useContext(CartContext)
    const { users, name, picture} = React.useContext(UserContext)

    const videoRef = React.useRef(null);
    React.useEffect(() => {
        // Get a reference to the video element
        const videoElement = videoRef.current;
    
        if (videoElement) {
          // Play the video when the component mounts
          videoElement.play().catch((error) => {
            // Handle any autoplay errors, such as on mobile devices
            console.error('Autoplay error:', error);
          });
        }
      }, []);

     


    React.useEffect(() => {
        
        const fetchData = async () => {
            const response = await fetch('/api/cart',{
                headers: {
                    Authorization: `Bearer ${users}`
                }
                 
            })
                const json = await response.json()
                setCart(json)
                console.log(json)
                
        }


    {
       fetchData()

       }
         

         },[setCart])

        
         React.useEffect(() => {
        
            const fetchData = async () => {
                const response = await fetch('/api/cart',{
                    headers: {
                        Authorization: `Bearer ${users}`
                    }
                     
                })
                    const json = await response.json()
                    setCart(json)
                    
            }
    
    
            fetchData()
    
           
             
    
             },[users])


       
    
    
    const [sizeS, setSizeS] = React.useState(false)
    const [sizeM, setSizeM] = React.useState(false)
    const [sizeL, setSizeL] = React.useState(false)
    const [size, setSize] = React.useState('')
    const [error, setError] = React.useState(null)
    
  function handleSizeS(size){
    setSizeS(prevSize => !prevSize)
    console.log(size)
    setSize(size)
    setSizeM(false)
    setSizeL(false)
  }  
  function handleSizeM(size){
    setSizeM(prevSize => !prevSize)
    console.log(size)
    setSize(size)
    setSizeS(false)
    setSizeL(false)
  } 

  function handleSizeL(size){
    setSizeL(prevSize => !prevSize)
    console.log(size)
    setSize(size)
    setSizeM(false)
    setSizeS(false)
  } 
 
    async function handleClick(id, name, price, size, url){


        
        
        

        if (id === 1 && size === "" ){

            setError('Please provide a size')
            setSize("")

        }

        if((sizeS || sizeM || sizeL) && id === 'price_1NzsRAGdxsICiosJWrNpt8xZ' && size ){

            

        const updatedCart = {id, name, price, size, url}
        const newCart = [...cart, updatedCart]
        setCart(newCart)
        console.log(newCart)
        
 
        try {

            const item = {
                id: id,
                product: name,
                price: price,
                size: size,
                url: url,
               
                
                
                
            }

            
            console.log(users)
            

            const response = await fetch('/api/cart', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    
                    Authorization: `Bearer ${users}`
                    
                }

        

            })

            const json = await response.json()

            

            if(!response.ok){
                console.log(json.error)
            }

            
        
            if(response.ok){
                console.log(json)
            }


        } catch (error){
            

        }

    }
        if (id === 'price_1NzsSCGdxsICiosJANgpgr47' ){

            
            const updateCart = {  id, name, price, url}
        const newCart = [...cart, updateCart]
        setCart(newCart)
        console.log(newCart)

        try {

            const item = {
                id: id,
                product: name,
                price: price,
                url: url,
                
                
                
                
            }
            

            const response = await fetch('/api/cart', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${users}`
                    
                    
                    
                }

        

            })

            const json = await response.json()

            

            if(!response.ok){
                console.log(json.error)
            }

            
            if(response.ok){
                console.log(json)
            }


        } catch (error){
            


        }
    }

        if (id === 'price_1NzsVJGdxsICiosJB2nDhWy9' ){
            
            const updateCart = {  id, name, price, url}
        const newCart = [...cart, updateCart]
        setCart(newCart)
        console.log(newCart)
        console.log(cart.length)
        console.log(users)

        try {

            const item = {
                id: id,
                product: name,
                price: price,
                url: url,
               
                
                
                
            }
            

            

            const response = await fetch('/api/cart', {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${users}`
                    
                }

        

            })

            const json = await response.json()

            

            if(!response.ok){
                console.log(json.error)
            }

            if(response.ok)
            console.log(json)
           
            setSize("")
            
            
           
      


        } catch (error){
        console.log(error)


        }

        

    }

   
        
       

        

        
}

function hidden(){
    setMenu( prevMenu => !prevMenu)
}

function calculateTotalPrice() {
    const totalPrice = cart.reduce((accumulator, item) => accumulator + item.price, 0);
    return totalPrice.toFixed(2); // Assuming you want to display the total with 2 decimal places
}


        async function handleDelete(id  ){

            

            
            try {
                const response = await fetch (`/api/cart/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${users}`
            }})

                

                if(response){
                    
                    setShow(true)
                    const fetchData = async () => {
                        const response = await fetch('/api/cart',{
                            headers:{
                                Authorization: `Bearer ${users}`
                            }
                        })
                        const json = await response.json()
                        setCart(json)
                        

                    }
                
                    
                    fetchData()  
                             
                        }
                            
                          
                    
            
            
                {
                    
                    
                
            
            }

                
                
            } catch (error){
                console.log(error)
            }

        }

        const handleCheckout = async () => {
            try {
              // Create a checkout session on your server
              const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  
                },
                body: JSON.stringify({ cart}),
              });
        
              const session = await response.json();
        
              // Redirect to the Stripe Checkout page
              const stripe = await stripePromise;
              const { error } = await stripe.redirectToCheckout({
                sessionId: session.id,
              });
        
              if (error) {
                setError(error.message);
              }
            } catch (err) {
              setError('An error occurred during checkout. from foront end');
              console.error(err);
            }
          };
    
       
    

    const [show, setShow] =  React.useState(false)

    function showMenu(){
        setShow( prevShow => !prevShow)
       
    }


    return(
        <div className="main--shop">
        <div className={ show ? "blur--back" : "shop--page"}>
            <div className="shop--video">
            <video  ref={videoRef} autoPlay muted loop playsInline>
                    <source src={require('../video/shop.mp4')} type="video/mp4"/>

                </video>
                <div className="shop--header">
                    <div>
                    <h3>THE OFFICIAL<br>
                
                </br> FIT SHOP</h3>
                <div><h3>APPAREL | EQUIPMENT</h3></div></div>
                </div>
            </div>
            <div>
           
                <div className="Items">

                
                    
                    <div className="item--1">
                    
                    <div className="item1--details">
                    <p className="item1--header"> ESSENTIAL  FOR  YOUR  TRAINING</p>
                    <h4 className='item--name'>FIT WEIGHT VESTS</h4>
                    <p className="vest--disc">Highly flexible, durable to use, Each vest is 35lb <br className='break1'></br> with removable weights <br className='break2'></br>
                    Improve your training levels <br className='break3'></br>. <br></br>Get it here.</p>
                    {error && <p>{error.message}</p>}

                    <div className="vest--cart">

                        <span>SIZE</span>
                        <div className="size--buttons">
                        <div onClick={() => handleSizeS('S')}className={ sizeS ? "buttons--size" : "buttons"}>S</div>
                        <div onClick={() => handleSizeM('M')}className ={ sizeM ? "buttons--size" : "buttons"}>M</div>
                        <div onClick={() => handleSizeL('L')}className ={ sizeL ? "buttons--size" : "buttons"}>L</div>
                        </div>
                        <div className="new--buttons">
                        <div onClick={() => handleSizeS('S')}className={ sizeS ? "red--button" : "default--buttons"}>S</div>
                        <div onClick={() => handleSizeM('M')}className ={ sizeM ? "red--button" : "default--buttons"}>M</div>
                        <div onClick={() => handleSizeL('L')}className ={ sizeL ? "red--button" : "default--buttons"}>L</div>
                        
                        
                        </div>
                        <div className="add--container">
                        {!users ? <Link style={{textDecoration:"none"}} to="/register"><div className="button--cart s">ADD TO CART</div></Link> : <div className="button--cart s" onClick={() => handleClick ('price_1NzsRAGdxsICiosJWrNpt8xZ', 'Vest', 59.99, size, 'https://kingsbox.com/blog/wp-content/uploads/2020/10/Giubotto-zavorratto-tactical-vest-kingsbox.jpg')}>ADD TO CART</div>}

                        </div>
                    </div>
                </div>
                <div className="vest--image--container">
                        <img src="/images/vest.jpg" alt="vests" />
                        <div className="price1--item"><p>$59.99</p></div>
                </div>

                    </div>

                    
                <div className="item--2">
                    <div className="item2--image">
                        <img src="/images/para.jpg" alt="PARA" />
                        <div className="price2--item"><p>$79.99</p></div>
                    </div>
                    <div className="item2--details">
                    <p className="item2--header"> STEP UP YOUR TRAINING</p>
                    <h4>FIT PARALLETTES</h4>
                    <p>Introducing our premium Parallettes - the perfect fitness tool to elevate <br></br> your strength and flexibility training to new heights. Crafted with precision <br></br>and designed for versatility, our parallettes are the ideal addition to any home gym or fitness routine.</p>
                    
                        <div className="add--container">
                        {!users ? <Link style={{textDecoration:"none"}}to="/register"><div className="button--cart s">ADD TO CART</div></Link> : <div className="button--cart s" onClick={() => handleClick ('price_1NzsSCGdxsICiosJANgpgr47', 'Paralletes', 79.99, !!size, 'https://kingsbox.com/blog/wp-content/uploads/2019/11/parallele-per-calistenico.jpg')}>ADD TO CART</div>}
                        </div> 
                    </div>
                    
                    </div>

                    <div className="item--3">
                        
                            <div className="image3--container">
                            <img src ="/images/pullbar.jpg" alt="pulling" />
                            <div className="limited--tag">LIMITED </div>
                        </div>
                        <div className="item3--details">
                            <h1>FIT PULL UP BAR</h1>
                            <p className="fit--desc">Our mounted pull-up bar is a robust fitness tool designed for wall, <br></br>
                            ceiling, or door frame installation. It facilitates a variety of <br></br>
                            upper body exercises, like pull-ups and chin-ups, to build<br></br> strength, improve grip, and enhance overall fitness.</p>
                            <hr className='line--list'></hr>
                            <p className="price--red"><span>$149.99</span> $110.99</p>
                            <div>
                            {users ? <div className="button--cart3 s" onClick={()=> handleClick('price_1NzsVJGdxsICiosJB2nDhWy9', 'Pull Up Bar', 110.99, !!size, 'https://cdn.kingsbox.com/assets/media/products/body-weight/pull-up-bars/for-indoor-use/X-075-2000--kingsbox-pull-up-bar--0.jpg')}>ADD TO CART</div> : <Link  className="cart--offline"to="/register"><div className="button--cart3" >ADD TO CART</div></Link> }
                        </div> 
                        
                            
                        </div>
                    </div>

                    </div>
            </div>
            <div className="cart--list">
                <div onClick={showMenu} className="view--cart">
                    VIEW CART <BsCartPlus />
                    <div  className="cart--length">
                        {cart.length}
                    </div>
                </div>
            </div>
        </div>
        {show && (
  <div className="cart--menu">
    <div className="menu--cancel">
      <HiXMark onClick={showMenu} />
      
      
        
      <div className="cart--header">
      <div className="cart--headermain">
    <h1>CART</h1>

    <div className='taggs'><span >You have {cart.length} {cart.length  > 1 || cart.length === 0 ? " items" : " item"}</span></div>
    
    <h3 className="header-3">SUBTOTAL ${calculateTotalPrice()} </h3>
    </div> 
    

          
          <div>
            {cart.map((item) => (
                <div key={item.id} className="item--list">
                 <div className="image--div"> <img src={item.url} alt={`this is ${cart.length}`} /></div>
                <div className="product--name"><p>{item.product}<br></br>
                {item.size && `Size: ${item.size}`}</p>
                <button className='remove--button' onClick={() =>  
  handleDelete(item._id) }> REMOVE ITEM</button></div>
                <div className="price--cart"><p>${item.price}</p></div>
              </div> 
            ))}
          </div>
        </div>
        
      
    
</div>
<div onClick={handleCheckout} className='checking'>CHECKOUT< MdOutlineShoppingCartCheckout style={{paddingLeft: "20px", }} /></div>

    

    
    </div>

        )}

        </div>
        
    )

            }        