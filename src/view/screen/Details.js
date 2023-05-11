
import{product,product1} from '../data/data'
import { useLocation ,useNavigate} from "react-router-dom";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';


function Details() {

const nav=useNavigate()
    const loc =useLocation()
    const [productinfo,]=useState(loc.state)
    console.log(product,product1);
async function detailsitem(product){

console.log(product);
let res = await axios.post("addtocart",product)
console.log(res.data);
const {message,success} =res.data
if(success){

    alert(message)
    nav("/")
}
else{
    alert(message)
}
}

    return (
        
            <Container fluid >
            <Row  className='t1'>
        

                
 
<>
            <Col className='cd' md={6} >
            
        <img src={productinfo.image} alt='' className="rock"/>
        <h1 className='her'></h1>
        
        
            
            
            </Col>
        
        <Col md={6}>
        
       <h1 className='de1'> {productinfo.name}</h1>
        
       <h1 className='de2'> {productinfo.mrp}</h1>
       <button className='bt1 bg-warning' onClick={()=>detailsitem(productinfo)}>add to Cart</button> 
       </Col>  
       <Col>
</Col>



        </>
         
   
</Row>

<Row>

<h1 className='row-2'>   quality   </h1>

</Row>


                
            </Container>




   
   
    )
  
   
    }
    export default Details;