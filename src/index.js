import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThingsComponent } from './components/challenge';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
import './index.css'



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navbar />

    <TextForm />

    {/* <ThingsComponent /> */}
  </React.StrictMode>
)
















