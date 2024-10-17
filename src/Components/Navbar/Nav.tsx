import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'; // Import your CSS file

import xam from '../../Assets/Images/X.avif'
import xa from '../../Assets/Images/EKXxSMvFSqMy2TGSHcVn0VN5ZY.avif'
import x from '../../Assets/Images/cW3swno96E3vriAYUavKCeD7U.avif'
import cat from '../../Assets/Images/072vrnYaWejTBc4d1wCmetFfaOg.png'

function BasicExample() {
  return (
    <Navbar expand="lg" className="transparent-navbar">
      <Container className='Parent'>
        <Navbar.Brand ><img src={cat} className='AZ'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='AT'>
          <Nav className="me-auto">
            <Nav.Link ><img src={xam} className='AA'/></Nav.Link>
            <Nav.Link ><img src={xa} className='AB'/></Nav.Link>
            <Nav.Link ><img src={x} className='AC'/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
