import React from "react";


function Home() {
    return (
      <>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <div>
    <form class="d-flex " >
      <input class="form-control nav" type="search" placeholder="Search" aria-label="Search" style={{width:570}}  />
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>

<nav class="navbar navbar-light bg-light nav justify-content-center" >
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Grocery</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Value Packs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Home Appliance</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Kitchen</a>
  </li>
</ul>
</nav>

      </>
    );
}
export default Home;

