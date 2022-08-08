import React from 'react'
import loaderModule from "./loader.module.css"

const Loader = () => {
  return (
    <div className={loaderModule.lds}></div>
  )
}

export default Loader