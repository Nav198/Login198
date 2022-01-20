import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Nav() {
    const navigate=useNavigate();
    const handleLogout =(e)=>{
        e.preventDefault();
        navigate("/");
        localStorage.removeItem("auth");
    }
  return <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/home">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/about">About Us </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/company">Company</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/logout" onClick={handleLogout}>Logout</a>
      </li>
     
    </ul>
  </div>
</nav>
  </div>;
}
