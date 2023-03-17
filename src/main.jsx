import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import { store } from './app/store'
import GlobalStyled from './Global'
import Routing from './routing/Routing'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyled />
      <Routing />
    </Provider>
  </React.StrictMode>,
)
