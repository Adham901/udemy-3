import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"


export default function Navbarr({filterBySearch}) {

  const [search , setSearch] = useState('')

const onsearch = ()=>{
  filterBySearch(search)
  setSearch("")
}

  return (
   <>
   
   
   <Navbar bg='dark' variant='dark' expand="lg" >
   <Container >
     <Navbar.Brand href="#">
     <div className='btn-nav'>مطعم الشلقامي</div>
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
       <Nav
         className="me-auto my-2 my-lg-0"
         style={{ maxHeight: '100px' }}
         navbarScroll
       >
        
       </Nav>
       <Form className="d-flex">
         <Form.Control
           type="search"
           placeholder="ابحث.."
           className="mx-2"
           onChange={(e)=> setSearch(e.target.value)  }
           value={search}
         />
         <Button onClick={()=> onsearch()} variant="outline-success">بحث</Button>
       </Form>
     </Navbar.Collapse>
   </Container>
 </Navbar>
   
   
   </>
  )
}
