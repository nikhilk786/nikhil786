import { BrowserRouter,Routes,Route ,useNavigate, Link  } from "react-router-dom";
import Details from "./view/screen/Details";
import About from "./view/screen/About";
import Home from "./view/screen/Home";
import Cart from "./view/screen/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col,Container,NavDropdown,Navbar,Nav,Button,Form } from "react-bootstrap";
import { FaBeer } from 'react-icons/fa';
import {BiHeart } from "react-icons/bi";
import {useState,useEffect} from 'react'
import {menubar} from './view/data/data'
import Register from "./view/screen/Register";
import Login from "./view/screen/Login";
import ProductInfo from "./view/screen/product";
console.log(menubar);

function App() {
const nav = useNavigate();
 const [user,setUser] = useState(localStorage.getItem('user'));

useEffect(()=>{
console.log("usereffect");
 function show(){

    
  }
  show()
},[])

function logout(){
  alert('logout')
localStorage.clear()
  
  nav('/')
  window.location.reload();
}

async function addcart(){
console.log("add to cart user"+user);
console.log(user);
  if(user){

nav('/cart')
  }
  else{
 nav("/login");

  }
 
}
console.log(user);
  return (
            <>
           
            <Container fluid>
              <Row><Col> 
              <Link><img src={require('./view/img/cart.png')}  onClick={addcart} style={{width:50}}/>
              </Link>
              </Col>
              <Col>
             
              { 
            user!=null? <Button  onClick={logout} >Logout</Button>:null
          }
              </Col></Row>
              <Row>
                  <Col>

                  <Navbar bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#nikhil">Setting Cafe Quality </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav me-auto my-2 my-lg-0"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link href="/" >Home</Nav.Link>
            {
               menubar.map(function(d){
                return(
                 <Nav.Link href={`/${d}`} >{d} </Nav.Link>
                )
               }
               )

            }
     {user!=null?null:<>      
   <Nav.Link href="/register" >Register</Nav.Link>
   <Nav.Link href="/login" >Login</Nav.Link>
   </> }
          
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
         
       

        </Navbar.Collapse>
      </Container>
    </Navbar>
                  
                  </Col>  </Row>
               
                


            </Container>
            
            <Routes>

             <Route path='/' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/details' element={<Details/>}/>
            
             <Route path='/product' element={<ProductInfo/>}/>
             <Route path='/cart' element={<Cart/>}/>
{user!=null?null:<>
             <Route path='/register' element={<Register/>}/>
             <Route path='/login' element={<Login/>}/>
             </>
}
         {/*    {
              user? null:<>
             <Route path='/register' element={<Register/>}/>
             <Route path='/login' element={<Login/>}/>
             </>
             
            
} */}
             
             
             {/* <Route path='/Cart' element={<Cart/>}/> */}

            </Routes>
            <>
            <Container fluid>

            <div className=" footer bg-warning ">
            
            <h1> LIVE IT UP! </h1>
            <h3> crafted with <BiHeart/> in jaipur, india</h3>
                                               
            </div>
            </Container>
            
            </>
            
            
           
         
  
            </>
  )

 
  }
  export default App;