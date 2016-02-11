import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'

const Layout = ({content}) => (
  <div>
    <Header />
    <div className="container">{content}</div>
    <Footer />
  </div>
)

export default Layout
