import React from 'react'
import "./Loader.css"
import { loader } from "../../utils/images";

export const Loader = () => {
  return (
    <>
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
    </>
  )
}
