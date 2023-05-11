import { Container,Row,Col,Carousel,Card,Button,Figure,ListGroup,Spinner} from "react-bootstrap";
import{banner,product,product1, product2,product3,product4,product5,pro} from '../data/data'
import '../style/style.css'
import { useNavigate } from "react-router-dom";
import { FaBeer,FaRegGrinStars } from 'react-icons/fa';
import { SlEmotsmile} from "react-icons/sl";
import { FiAperture } from "react-icons/fi";
import {GrSwift,GrCloudlinux } from "react-icons/gr";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect, useState } from "react";

import { motion, spring } from 'framer-motion';
import { type } from "@testing-library/user-event/dist/type";





function Home() {

  useEffect(()=> {
    Aos.init({duration:2000});
  },[]);



console.log(product);
const navigate=useNavigate()
function productinfo(d){
  navigate('Details',{state:d})
}


const transition={type:"spring",loop:Infinity,duration:3};
const [selected,setselected]=useState(2);

    return (
    
            <Container fluid>

{/* <motion.h1 animate={{x: 10,}}>
    An animated text
</motion.h1>

<motion.button
    animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
    transition={{ delay: 1 }}
>
    Add
</motion.button>

<motion.div
    animate={{
        x: 10,
        backgroundColor: '#fff',
        boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
    }}
>
    <h1>friend</h1>
    <img src={banner} alt="" />
</motion.div> */}

{/* <motion.div
    initial={{ opacity: 0, x: '-50' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{transition}}
    key={{selected}}
    exit={{opacity:0,x:50}}
>
    <h1>Hi</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        perspiciatis voluptates nihil dolores eum architecto eligendi
    </p>
</motion.div> */}



    <Row>
<Col className="col">
<Carousel>

{ 
banner.map(function(d){
    return(
        <Carousel.Item interval={1000}>
        <img
          className="w-100"
          src={d}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>setting cafe quality<FaBeer/></h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when
             looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
}
  
  )
   
    
}
    </Carousel>

</Col>

    </Row>
             <Row className="mt ">
              <h1 data-aos="fade-right" className="he1 m-3</FaBeer >">What's on your <SlEmotsmile/> mind?</h1>
               
               
{ 
product.map(function(d){    
    return( 
        <Col md={4} lg={3} sm={6}  onClick={()=>{productinfo(d)}} className="mt" >
      <Card data-aos="zoom-in-left" className="mt ">
       <div className="imgcard  ">
      <Card.Img className="show" variant="top" src={d.image}  />
      </div>
      <Card.Body>
        <Card.Title>{d.name}</Card.Title>
        <Card.Text>
      price comming soon
        </Card.Text>
        <ListGroup.Item>{d.mrp}</ListGroup.Item>
        <ListGroup.Item>10% off</ListGroup.Item>
        <div className="d-grid">
        <motion.button
    animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
    transition={{ delay: 5 }}
    
>
    Add
</motion.button></div>
      </Card.Body>
    </Card>
    </Col>
    


    )
}
  
  )
 
    
}
               
                  
              </Row>


             <Row className=" m-5">
              <h2 className="kid m-5"> SAVER DEAL</h2>

             { 
product1.map(function(d){
    return(
    <> 
      <Col md={4} className="box1" onClick={()=>{productinfo(d)}} >
      <h2>{d.info}</h2>
           <h3>{d.name}</h3>
           
           <img src={d.image2}  className="img1" />

            </Col>
    <Col md={4} className="box2">
    <img src={d.image1}  className="img2" />
    <h1 className="con2">{d.name2}</h1>
           <h2>{d.info2}</h2>
    </Col>
    
   
    <Col md={4} className="box1">
    <h2>{d.info}</h2>
   <h3>{d.name}</h3>
  
   <img src={d.image2}  className="img1" />
    </Col> 
  
 
 
    </>
    )
}
  
  )
 
    
}
               
       
               
 

             </Row>
            
{/* 
new mindset */}

<Row className="probox m-5">
            
<h1 className="yk" >  # FOOD MOOD  </h1>
             { 
pro.map(function(d){
    return(
    <> 
   <Col>
   
   </Col>


   <Col>
   
   </Col>


   <Col>
   
   </Col>
 
    </>
    )
}
  
  )
 
    
}
               

             </Row>
{/* 
end */}

             <Row className="box3 m-5" >
             <h2 className="kid2 " > Delight for you  <GrSwift/></h2>
             { 
 product2.map(function(d){
    return(
    <> 
      <Col md={4} >
      <img  data-aos="flip-left"  src={d.image2}  className="img3" />
           <h3>{d.name}</h3>
           <p>{d.info1}</p>
           <p>{d.info2}</p>
         

            </Col>
    <Col md={4}>
    <h3>{d.name1}</h3>
           <p>{d.info1}</p>
           <p>{d.info2}</p>
    <img data-aos="flip-up" src={d.image1}  className="img4" />
    </Col>
    
   
    <Col md={4}>
    <img data-aos="flip-left" src={d.image2}  className="img3" />
   <h3>{d.name}</h3>
   <p>{d.info1}</p>
   <p>{d.info2}</p>
 
    </Col> 
  
 
 
    </>
    )
}
  
  )
 
    
}
               
       
             </Row>
             <Row className="m-5" >
             
             { 
product3.map(function(d){
    return(
    <> 
      <Col md={12} >
           
      <Card className="text-center">
      <Card.Header><h2>Festive offer</h2></Card.Header>
      <Card.Body>
        <Card.Title>Get back up to 125 on order above 499.</Card.Title>
        <Card.Text>
          offer is limited time offer
        </Card.Text>
        <Button variant="secondary">Hurry up!</Button>
      </Card.Body>
      <Card.Footer className="text-muted">special price live now</Card.Footer>
    </Card>
    </Col>
    
   
   
 
 
    </>
    )
}
  
  )
 
    
}
               
       
             </Row>
              <Row>


                <h1 className="con4">DRINKS FOR YOU </h1>
             { 
product4.map(function(d){
    return(
    <> 
              <Col md={2} className="box4" onClick={()=>{productinfo(d)}} >
              
                
              <Figure>
      <Figure.Image
        width={300}
        height={100}
        alt="400x100"
        src={d.image}
      />
      <Figure.Caption>
   <h3> cold drink</h3>
      </Figure.Caption>
      <Figure.Caption>
        Summer special price and offer!
      </Figure.Caption>
    </Figure>

              
             


              
                </Col>

                
              </>
    )
}
  
  )
 
    
}
    
             </Row>
             <Row className="box5 m-5">


<h1 className="m-5"><GrCloudlinux/> Limited Time Offer!</h1>
{ 
product5.map(function(d){
return(
<> 
<Col md={3} onClick={()=>{productinfo(d)}} >


<Figure >
<Figure.Image className="im1"
width={300}
height={100}
alt="400x100"
src={d.image}
/>
<Figure.Caption>
Buy 2 Get 1 free On pepsi & fanta drinks.
</Figure.Caption>
</Figure>






</Col>


</>
)
}

)


}

</Row>
            </Container>
   
    )
  
       }
    export default Home;