import axios from "axios";
import React,{useState} from "react";
import { useForm } from "react-hook-form";
import {  useNavigate } from "react-router-dom";

const Booking=()=>
{   
    const [file, setFile] = useState();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const direct=useNavigate()

    
    const handleFileChange = (e) => {
        
          setFile(e.target.files[0]);
        
      };

    const onsubmit=(data)=>
   {    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    formData.append('username',data.username)
    formData.append('price',data.price)
    formData.append('detail',data.detail)
    formData.append('occasion',data.occasion)
    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

        
     let bookuser=async ()=>
        {
            const res = await axios.post("https://application-react.000webhostapp.com/adduser.php",formData,config);

            if(res.data.result=="Data Added")
            {
                direct('/Masterchef')
            }
        }
        
        bookuser();

       

      
   }
    return(
        <>
        
        <div className="container-fluid py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: '600px'}}>
                <h1 className="display-4 text-uppercase">Book Your Table</h1>
            </div>

            <div className="row justify-content-center">
                <div className="col-6">
                <form onSubmit={handleSubmit(onsubmit)}>
                    
                    <div className="form-group text-center mt-2">
                        <label className="text-warning">Photo</label>
                        <input type="file" onChange={handleFileChange} className="form-control" />
                    </div>
                    
                    <div className="form-group text-center mt-2">
                        <label className="text-warning">Enter Name</label>
                        <input type="text" className="form-control"  placeholder="Enter your name" {...register('username',{required:true})}/>
                        {errors.username ?.type==="required" && "enter name"}
                    </div>
                    <div className="form-group text-center mt-2">
                        <label className="text-warning">Enter Price</label>
                        <input type="number" className="form-control"  placeholder="Enter Amount" {...register('price',{required:true})}/>
                        {errors.price ?.type==="required" && "enter price"}
                    </div>
                    <div className="form-group text-center mt-2">
                        <label className="text-warning">Enter details</label>
                        <textarea className="form-control"  rows="3" {...register('detail',{required:true})} ></textarea>
                        {errors.detail ?.type==="required" && "enter details"}
                    </div>
                    <div className="text-center mt-2">
                    <label className="text-warning text-center">Choos occasion</label>
                    </div>
                    <div className="col-md-12 text-center m-auto">
                         <div className="form-check form-check-inline text-center mt-3">
                            <input className="form-check-input" type="radio" value="birthday" {...register('occasion',{required:true})} />
                            <label className="form-check-label">Birthday</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="wedding" {...register('occasion',{required:true})}/>
                            <label className="form-check-label">Wedding</label>
                            </div>
                            <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" value="custom" {...register('occasion',{required:true})}/>
                            <label className="form-check-label">Custom</label>
                          </div>
                     </div>
                     <div className="text-center mt-5">
                        <input type='submit' className="btn btn-warning" value='Book' />
                     </div>
                     
                    </form> 
                </div>
             </div>       
        </div>
        </div>
        </>
    )
}
export default Booking;