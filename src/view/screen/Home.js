import { Container,Row,Col,Carousel,Card,Button,Figure,ListGroup,Spinner} from "react-bootstrap";
import{banner,product,product1, product2,product3,product4,product5,pro} from '../data/data'
import '../style/style.css'
import { useNavigate } from "react-router-dom";
import { FaBeer, } from 'react-icons/fa';
import { SlEmotsmile} from "react-icons/sl";
import { FiAperture } from "react-icons/fi";
import {GrSwift,GrCloudlinux } from "react-icons/gr";


function Home() {
console.log(product);
const navigate=useNavigate()
function productinfo(d){
  navigate('Details',{state:d})
}

    return (
    
            <Container fluid>
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
              <h1 className="he1 m-3</FaBeer >">What's on your <SlEmotsmile/> mind?</h1>
               
               
{ 
product.map(function(d){    
    return( 
        <Col md={4} lg={3} sm={6}  onClick={()=>{productinfo(d)}} className="mt" >
      <Card className="mt ">
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
        <Button variant="danger">Add</Button></div>
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
            
<h1>FOOD MOOD </h1>
             { 
pro.map(function(d){
    return(
    <> 
      <Col  className="pro m-5" >
  
     
      <Card className="card2" style={{ width: '' }}>
      <Card.Img className="pic" variant="top" src={d.image1} />
      <Card.Body className="con-bg">
        <div className="jj">
        <Card.Title  >Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        </div>
      </Card.Body >
    </Card>
    </Col>
    <Col className="pro m-5">
    <Card className="cart" style={{ width: '' }}>
      <Card.Img variant="top" src={d.image1} />
      <Card.Body >
        <Card.Title>Farm</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
    <Col className="pro m-5">
    <Card className="cart" style={{ width: '' }}>
      <Card.Img  variant="top" src={d.image1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
           {/* <h1 className="her2">FOOD</h1>
           <h1 className="her2">MOOD</h1> */}
            {/*  */}
           

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
      <img src={d.image2}  className="img3" />
           <h3>{d.name}</h3>
           <p>{d.info1}</p>
           <p>{d.info2}</p>
         

            </Col>
    <Col md={4}>
    <h3>{d.name1}</h3>
           <p>{d.info1}</p>
           <p>{d.info2}</p>
    <img src={d.image1}  className="img4" />
    </Col>
    
   
    <Col md={4}>
    <img src={d.image2}  className="img3" />
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
              <Col md={2} className="box4">
              
                
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
<Col md={3} >


<Figure >
<Figure.Image className="im1"
width={300}
height={100}
alt="400x100"
src={d.image}
/>
<Figure.Caption>
Buy 2 Get 1 free On Lay's & Bingo Chips.
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