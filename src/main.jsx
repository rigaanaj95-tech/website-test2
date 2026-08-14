import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import BeforeDemo from './BeforeDemo.jsx'
import ComparisonDemo from './ComparisonDemo.jsx'
import './styles.css'

const version = new URLSearchParams(window.location.search).get('version')
const Demo = version === 'before' ? BeforeDemo : version === 'compare' ? ComparisonDemo : App

createRoot(document.getElementById('root')).render(
  <React.StrictMode><Demo /></React.StrictMode>,
)
