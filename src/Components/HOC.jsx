import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOC(Components) {
    function Newcomponent() {
        return (
            <>
                <Header />
            <Components />
            <Footer/>
            </>
        )
    }
  return (
    Newcomponent
  )
}

export default HOC

