import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {  useNavigate, useParams } from "react-router-dom";


const Edit=()=>
{   
    const [file, setFile] = useState();

    const {eid}=useParams();
    const nav=useNavigate();
    const[edit,setEdit]=useState([]);
    const {register,handleSubmit,formState:{errors},reset}=useForm({
        defaultValues : edit
    });

    const handleFileChange = (e) => {
        
        setFile(e.target.files[0]);
      
    };

    useEffect(()=>{
        getdata();
    },[])
    const getdata=async ()=>
    {
        const editdata=await axios.get("https://application-react.000webhostapp.com/getval.php?id="+eid);
        setEdit(editdata.data);
        reset(editdata.data);
        
    }
    

   const onsubmit=async (data)=>
   {


    const formData = new FormData();
   
    if(file == undefined)
    {

        formData.append('fileName', "");
    }
    else
    {
        formData.append('file', file);
        formData.append('fileName', file.name);
    }
    
    formData.append('username',data.user_name)
    formData.append('price',data.price)
    formData.append('detail',data.detail)
    formData.append('occasion',data.occasion)
    formData.append('fid',data.fid)
    const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

        
        const result=await axios.post("https://application-react.000webhostapp.com/edit.php",formData);
        console.log(result.data)  

       if(result.data.result==="Data update")
        {
            nav('/Masterchef')
        }
        
   }
    return(
        <>

<div className="container-fluid py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: '600px'}}>
                <h1 className="display-4 text-uppercase">Edit Your Data</h1>
            </div>
            
            <div className="row m-auto">
                <div className="col-12 border-2 m-auto">
                <form onSubmit={handleSubmit(onsubmit)}>
                         
                    <table className="table-bordered" align="center" cellPadding={20} cellSpacing={10} border='2'>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Occasion</th>
                            <th>Detail</th>
                            <th>Price</th>
                            <th>Edit</th>
                        </tr>

                        <tr>
                        <td>
                        <label className="text-warning">Photo</label>
                        <input type="file" defaultValue={edit.image} onChange={handleFileChange} className="form-control" />
                        <br/>
                        <img className="img-fluid" src={"https://application-react.000webhostapp.com/Images/"+edit.image} alt=""  style={{width: '150px', height: '85px'}}/>
                        </td>

                         <td> 
                         <label className="text-warning">Enter Name</label>
                        <input type="text" className="form-control"   placeholder="Enter your name" {...register('user_name',{required:true})}/>
                        {errors.user_name ?.type==="required" && "enter name"}
                         </td>

                         <td>
                        
                            <input className="form-check-input" type="radio" value="birthday" {...register('occasion',{required:true})} />
                            <label className="form-check-label">Birthday</label>
                            
                    
                            <input className="form-check-input" type="radio" value="wedding" {...register('occasion',{required:true})}/>
                            <label className="form-check-label">Wedding</label>
                            
                        
                            <input className="form-check-input" type="radio" value="custom" {...register('occasion',{required:true})}/>
                            <label className="form-check-label">Custom</label>
                          
                         </td>

                         <td>
                         <label className="text-warning">Enter details</label>
                        <textarea className="form-control"  rows="3"  {...register('detail',{required:true})} ></textarea>
                        {errors.detail ?.type==="required" && "enter details"}
                         </td>

                         <td>
                         <label className="text-warning">Enter Price</label>
                        <input type="number" className="form-control"  placeholder="Enter Amount" {...register('price',{required:true})}/>
                        {errors.price ?.type==="required" && "enter price"}
                         </td>
                         <td><input type='submit' value='Edit' className="btn btn-info"/></td>
                     </tr>
                    </table>
                    </form>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Edit;