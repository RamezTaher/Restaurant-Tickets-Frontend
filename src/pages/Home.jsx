import React from "react"
import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa"

const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>What Do you Wanna Order</h1>
        <p> Choose From the Options Below</p>
      </section>
      <Link to="/new-order" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Add Order To Your Table
      </Link>
      <Link to="/orders" className="btn btn-block">
        <FaTicketAlt /> View My Orders
      </Link>
    </>
  )
}

export default Home

