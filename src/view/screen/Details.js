
import{product,product1} from '../data/data'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";


function Details() {


    const loc =useLocation()
    const [productinfo,]=useState(loc.state)
    console.log(product,product1);


    return (
        
            <Container>
            <Row>
 
<>
            <Col className='cd' md={6} >
            
        <img src={productinfo.image} alt='' className="rock"/>
        <h1 className='her'></h1>
        
        
            
            
            </Col>
        
        <Col md={6}>
        
       <h1 className='de1'> {productinfo.name}</h1>
        
       <h1 className='de2'> {productinfo.mrp}</h1>
       <button className='bt1 bg-warning'>add to Cart</button> 
       </Col>  
       <Col>
</Col>



        </>
         
   
</Row>
<Row>



</Row>


                
            </Container>




   
   
    )
  
   
    }
    export default Details;