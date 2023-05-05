import axios from "axios"
import { useEffect, useState } from "react"
import { Container,Row,Col } from "react-bootstrap"

export default function Cart(){

const[data,setData] =useState('')

useEffect(()=>{
    async function show(){
        let res = await axios.post('showtocart',{})
        console.log(res.data);
        setData(res.data)
    } 
    show()
},[])

function removeitem(index){
    console.log(index);
    setData(data.map((d,index1)=>{
        return index!==index1&& d
    }))

}
console.log(data);

    return(
        <Container>

                <Row>
                   
                   <Col>
                   <Row>
                        {
                           data ? data.map((d,index)=>{
                            if(d!==false){
                                return(
                                    
                                   <div className="addtocartshow d-flex">
                                    <div className="addtocartshow-img">
                                    <img src={d.image} style={{width:'100%'}}/>
                                        
                                    </div>
                                    <div className="addtocartshow-text">
                                    <p>{d.name}</p>
                                    <p>{d.mrp}</p>
                                    <p>Qty:{1}</p>
                                   

                                    </div>
                                    
                                    <div className="addtocartshow-text">
                                    <button onClick={()=>removeitem(index)}>Remove</button>

                                    </div>
                                    </div>
                                )}
                            }):null
                        }
                        </Row>
                   </Col>
                   <Col>
                        <div className="bg-primary">
                            <h1>Pay</h1>

                        </div>
                   </Col>
                   
                </Row>

        </Container>
    )
}