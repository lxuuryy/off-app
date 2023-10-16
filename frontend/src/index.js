import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartContextProvider }from './cartContext/cartContext'
import { UserContextProvider }from './cartContext/UserContext'



ReactDOM.render(<UserContextProvider><CartContextProvider>
                    <App />
                </CartContextProvider>
                </UserContextProvider>,document.getElementById('root'));

