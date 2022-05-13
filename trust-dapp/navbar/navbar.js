import Link from "next/link";

export default function Navbar(){
    return(
      //  <div className="navbar1">
      //      <div className="navbar4">
      //        <a className="navbar3" href="/about">Insurance</a>
      //        <a className="navbar3" href="/contact">Stream Earning</a>
      //        <a className="navbar3" href="/privacy-policy">Borrow</a>
      //       </div>

      //       <div className="navbar2">
      //        <a className="navbar3" href="/">Login</a>
      //        <a className="navbar3" href="/categories">Sign Up</a>
      //      </div >
      //    </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/">Trust</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Insurance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Stream Earning</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Borrow</a>
        </li>
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">

   <Link href="/auth/login">
          <a  style={{marginRight:"30px"}}>
          <button class="btn btn-primary me-md-2" type="button">Login </button>
          </a>
   </Link>
   <Link href="/auth/register">
          <a  style={{marginRight:"30px"}}>
  <button class="btn btn-outline-primary" type="button">Register</button>
  {/* <button class="btn btn-primary me-md-2" type="button">Login </button> */}
          </a>
   </Link>
</div>
    </div>
  </div>
</nav>

// {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// <Container>
// <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
// <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// <Navbar.Collapse id="responsive-navbar-nav">
//   <Nav className="me-auto">
//     <Nav.Link href="#features">Features</Nav.Link>
//     <Nav.Link href="#pricing">Pricing</Nav.Link>
//     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
//       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//     </NavDropdown>
//   </Nav>
//   <Nav>
//     <Nav.Link href="#deets">More deets</Nav.Link>
//     <Nav.Link eventKey={2} href="#memes">
//       Dank memes
//     </Nav.Link>
//   </Nav>
// </Navbar.Collapse>
// </Container>
// </Navbar> */}
      )
  }