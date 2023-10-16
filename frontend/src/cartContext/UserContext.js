

import React from 'react'


export const UserContext = React.createContext()

export const UserContextProvider = ({children}) => {
    const [users, setUser] = React.useState()
    const [name, setName] = React.useState('')
    const [picture, setPicture] = React.useState()
    React.useEffect(() => {
        const User = JSON.parse(localStorage.getItem('user'))
        setUser(User)
        const Name = JSON.parse(localStorage.getItem('name'))
        setName(Name)
        const profilePic = JSON.parse(localStorage.getItem('picture'))
        setPicture(profilePic)
      },[])
    

    return(
        <UserContext.Provider value ={{users, setUser, name, setName, picture, setPicture}}>
            {children}
        </UserContext.Provider>
    )
}


