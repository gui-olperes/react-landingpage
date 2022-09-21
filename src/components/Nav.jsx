import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function nav() {
  return (
   
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><span>Nav</span>bar</Navbar.Brand>
          <Nav className="me-5">
            <Nav.Link href="#home" className='line'>Home</Nav.Link>
            <Nav.Link href="#features"className='line'>Features</Nav.Link>
            <Nav.Link href="#pricing"className='line'>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      
      


  </>


  );
}
