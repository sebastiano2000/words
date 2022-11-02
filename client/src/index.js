import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContextProvider } from "./context/GlobalContext";
import { BrowserRouter } from 'react-router-dom';

import App from './App';

ReactDOM.render(<React.StrictMode>
                    <GlobalContextProvider>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </GlobalContextProvider>
                </React.StrictMode>
            , document.getElementById('root'));