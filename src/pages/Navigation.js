import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Slogan from './Slogan';

const Navigation = () => {
  return (
   <>
      <Navbar bg='dark' variant="dark" expand='lg'>
      <Container  className="justify-content-center">
      <Nav>
      <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='border-start border-end border-light' href="/quotes">Quotes</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link href="/links">Links</Nav.Link>
      </Nav.Item>
      </Nav>
      </Container>
      </Navbar>  
      <Slogan/>
   <Outlet/>
   </>
  )
}

export default Navigation