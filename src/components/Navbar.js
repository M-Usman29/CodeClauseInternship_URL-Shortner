import React from 'react'

export default function Navbar() {
  return (
    <div>
 <nav className="navbar navbar-expand-lg bg-body-tertiary navbar navbar bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand " style={{marginBottom:"10px",fontSize:"25px"}} href="#">URL Shortner</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
      <li className="nav-item">
          <a className="nav-link active mx-2"  style={{fontSize:"17px"}} aria-current="page" href="#">Home</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active mx-2" style={{fontSize:"17px"}} aria-current="page" href="#">About</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
       
      </form>
    </div>
  </div>
</nav>  
    </div>
  )
}
