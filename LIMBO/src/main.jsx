import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoutesFromElements, RouterProvider, createBrowserRouter, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Profile, Upload, Layout, Saved, Created, Error, Intro,Login,Register} from './components'


const router = createBrowserRouter(
  createRoutesFromElements(

      <Route path='/' element={<Layout/>}>
        <Route path='intro' element={<Intro />}/>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='profile' element={<><Profile /></>}>
          <Route path='saved' element={<Saved />} />
          <Route path='created' element={<Created />} />
        </Route>
        <Route path='upload' element={<Upload />} />
        <Route path='*' element={<Error />} />
      </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
