import { Container,Row,Col,Button,Form} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

const nav = useNavigate();
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');
 let submitlogin=async()=>{
    
      let params={
        email:email,
        password:password
      }
      
      console.log(params);
      try {
        let res =await axios.post("login",params).catch(err=>alert(err))
        console.log(res.data);
        
        let {success,message,data} =res.data
        if(success){
        alert(message)
     console.log(data);
      localStorage.setItem('user',email)
     
       nav("/")
       window.location.reload();
        }
        else{
          alert(message)
         }
         } catch (error) {
        alert(error)
      }
      setEmail("")
      setPassword("")
    }

    return (
 <>
 <h1 className="reg-con m-3" >Login</h1>
 <Container>
 <Row>

<Col>
     
<Form>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(d)=>setEmail(d.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password " value={password}  onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="Password" label="Enter Password" value={password}  onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group> */}
      <Button variant="primary"onClick={submitlogin}>
        Submit
      </Button>
    </Form>
              




</Col>






 </Row>
 </Container>
 
 
 
 
 
 </>
   
    )
  
   
    }
    