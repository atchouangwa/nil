import React, { useEffect } from 'react'
import LandingPageV2 from './components/LandingPageV2'
import ApplyPage from './components/ApplyPage'
import ConfirmedPage from './components/ConfirmedPage'
import ReviewPage from './components/ReviewPage'

const route = () => window.location.pathname.replace(/\/+$/, '') || '/'

function ScrollTop() {
  useEffect(() => window.scrollTo(0, 0), [])
  return null
}

export default function App() {
  const path = route()
  let page = <LandingPageV2 />
  if (path === '/apply') page = <ApplyPage />
  if (path === '/confirmed') page = <ConfirmedPage />
  if (path === '/review') page = <ReviewPage />

  return <><ScrollTop />{page}</>
}
