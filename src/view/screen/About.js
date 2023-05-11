import { Container,Row,Col,Carousel,Card,Button,Figure} from "react-bootstrap";
import{banner,product,product5,product6, product7,product9,product11} from '../data/data'
import '../style/style.css'


function About() {

    return (
      <Container fluid>
        <Row>
        <h2 className="reg-con m-2 " > description</h2>
        { 
product9.map(function(d){
return(
<> 

 <Col md={6} className="abt1" >
      
 <Figure.Image
   width={500}
   height={100}
   alt="400x100"
   src={d.image2}
 />
      {/* <img src={d.image2}  className="img1" /> */}

      </Col>
<Col md={6} className="abt2" >

<h3>{d.name1}</h3>
      <p>{d.info1}</p>
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
    export default About;