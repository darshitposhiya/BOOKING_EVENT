import React, { useEffect, useState } from "react";
import axios from "axios";
const Product=()=>
{
        const [cat,setCat]=useState([]);

        useEffect(()=>{
            get()
            
        },[])

    const get= async (v)=>{

        if(v === undefined)
        {
            v='birthday'
        }

        const user=await axios.get("https://application-react.000webhostapp.com/showall.php?flt="+v);
        setCat(user.data)   
        
        
    }
   
    
    return(
        <>
         <div className="container-fluid about py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: '600px'}}>
                <h2 className="text-primary font-secondary">Menu & Pricing</h2>
                <h1 className="display-5 text-uppercase">Explore Our Cakes</h1>
            </div>
            <div className="tab className text-center">
                <ul className="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase border-inner p-4 mb-5">
                    <li className="nav-item m-1">
                        <button className="nav-link text-white btn btn-warning"  onClick={()=>get('birthday')} >Birthday</button>
                    </li>
                    <li className="nav-item m-1">
                    <button className="nav-link text-white btn btn-warning"  onClick={()=>get('wedding')} >Wedding</button>
                    </li>
                    <li className="nav-item m-1">
                    <button className="nav-link text-white btn btn-warning"  onClick={()=>get('custom')} >Custom</button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show p-0 active">
                   
                        <div className="row g-3">
                    
                   {
                    
                   cat.map((val)=>(
                    
                    <div className="col-lg-6 col-sm-12">
                                <div className="d-flex">
                                    <div className="flex-shrink-1">
                                        <img className="img-fluid" src={"https://application-react.000webhostapp.com/Images/"+val.image} alt=""  style={{width: '150px', height: '85px'}}/>
                                        <h4 className="bg-dark text-primary p-2 m-0">{val.price}</h4>
                                    </div>
                                    <div className="d-flex flex-row justify-content-center text-start bg-secondary px-2">
                                       <div className="my-1 col"> <h5 className="text-uppercase mt-sm-1">{val.user_name}</h5>
                                        <div className="row"><span>{val.detail}</span></div>
                                      </div>
                                    </div>
                                </div>
                    </div>
                            ))
                            
                        }   
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
   
        </>
    )
}
export default Product;