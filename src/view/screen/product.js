import axios from "axios";
import { useState ,useEffect} from "react"

export default function ProductInfo(){

    const[data,setProduct] = useState('')


useEffect(()=>{
   async function showdata(){

    console.log("show data");
    const res =  await axios.get('productshow').catch(d=>console.log(d))
    console.log(res.data);
    }

    showdata()
})


    async function productadd(){

        console.log(data);
let info={
    item:data
}
        const res =  await axios.post('product',info)
        console.log(res.data);
    }
    return(
        <>
        <input type='text' value={data} onChange={d=>setProduct(d.target.value)}/>
        <button onClick={productadd}>Add</button>
        </>
    )
}