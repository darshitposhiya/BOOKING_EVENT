import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Modal,Button } from "react-bootstrap";
const Masterchef=()=>
{   
    const [editid,setEdimg]=useState("")
    const [show, setShow] = useState(false);
    const [img,setImg]=useState([]);
    const [datas,setData]=useState([]);
    const nav=useNavigate();

     useEffect(()=>{
        getdata();
    },[])

     async function getdata ()
    {
        const user=await axios.get("https://application-react.000webhostapp.com/showall.php")
        setData(user.data)

    }
    const deletebooking=async (id)=>
    {
        await axios.get("https://application-react.000webhostapp.com/delete.php?did="+id)
        .then((result)=>{
            getdata();
            console.log(result.data)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    const editbooking=async (eid)=>
    {
        nav(`/Edit/${eid}`)
    }
    const singleedit=(v)=>
    {
       
        setShow(true)

        setEdimg(v)
        
        
    }

    const updateimage=async ()=>
    {
       
        setShow(false)
        let nm=Math.round (Math.random() * 100000);
        const val=img["path"].split(".");
        let imgnm=nm+"."+val[1];
        //alert(imgnm)
       //alert(editid);
      //console.log(img["fileobj"])
      

       const formData = new FormData();

       formData.append('file',img["fileobj"]);
       formData.append('fileName', imgnm);
       formData.append('fid',editid)
       const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };

      const eddata=await axios.post("https://application-react.000webhostapp.com/editimage.php",formData);
    

      if(eddata.data.result==="Data update")
        {
            //window.location='/Masterchef'

            getdata()

            setImg("")
        }
        
    }

    const setCloce=()=>{

        setShow(false)
        setImg("")
    }

    return(
        <>
         <div className="container-fluid py-5">
        <div className="container">
            <div className="section-title position-relative text-center mx-auto mb-5 pb-3" style={{maxWidth: '600px'}}>
                <h2 className="text-primary font-secondary">Team Members</h2>
                <h1 className="display-4 text-uppercase">Our Master Chefs</h1>
            </div>
            
            <div className="row m-auto">
                <div className="col-8 border-2 m-auto">
                    <table className="table-bordered" align="center" cellPadding={20} cellSpacing={10} border='2'>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Occasion</th>
                            <th>Detail</th>
                            <th>Price</th>
                            <th colSpan={2} className='text-center'>Action</th>  
                        </tr>
                        {datas.map((val)=>
                         <tr>
                         <td>
                         <img src={"https://application-react.000webhostapp.com/Images/"+val.image}  height={100} width={100}
                         type='button'onClick={()=>singleedit(val.fid)}  /> </td>   


                       <td>{val.user_name}</td>
                         <td>{val.occasion}</td>
                         <td>{val.detail}</td>
                         <td>{val.price}</td>
                         <td><input type='submit' onClick={()=>deletebooking(val.fid)} value='Delete' className="btn btn-danger"/></td>
                         <td><input type='submit' onClick={()=>editbooking(val.fid)} value='Edit' className="btn btn-info"/></td>
                     </tr>
                        )}
                       
                    </table>
                </div>
            </div>
        </div>
    </div>
                            <form method="post">

                            
    <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Update Image</Modal.Title>
          <button type="button" class="btn-close" onClick={()=>setCloce()} aria-label="Close"></button>
        </Modal.Header>
        
        <Modal.Body>
          <>
          <input type='file'  onChange={(e)=>setImg({path : e.target.value, fileobj : e.target.files[0] , btn : true})} />
          </>
        </Modal.Body>
        <Modal.Footer>
            
          <input type='submit' onClick={(eve)=>updateimage()} disabled={img['btn'] === undefined ? true : false} value='update'/>
        </Modal.Footer>
        
        
      </Modal>     
      </form>
        </>
        
    )
}
export default Masterchef;