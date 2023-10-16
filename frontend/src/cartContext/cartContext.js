

import React from 'react'


export const CartContext = React.createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = React.useState([])

    

    return(
        <CartContext.Provider value ={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}


