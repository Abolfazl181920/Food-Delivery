import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from 'App'
import FoodsPage from 'pages/FoodsPage'
import SignUp from './register/SignUp'
import SignIn from './register/SignIn'

import './App.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='foods' element={ <FoodsPage /> } />
      <Route path='registration/signup' element={ <SignUp /> } />
      <Route path='registration/signin' element={ <SignIn /> } />
    </Routes>
  </Router>
)