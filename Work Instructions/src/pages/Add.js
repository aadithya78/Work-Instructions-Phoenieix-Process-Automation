import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Edit.css"

const Adds = () => {
 const history = useHistory();
 const [data, setData] = useState({

 steps : "",
 operator : "",
 date: new Date().toString(),
 N00 : "",
 N10 : "",
 N20 : "",
 w00 : "" ,
 w10 : "",
 w60 : "",
 w70 : "",
 w80 :"",
 message: "", 
 });
 const handleChange = (e) =>
 setData({ ...data, [e.target.name]: e.target.value });


 const handleCChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // For checkboxes, set the value to "TRUE" if checked, "FALSE" if unchecked
    const newValue = type === 'checkbox' ? (checked ? "TRUE" : "FALSE") : value;
    
    setData({ ...data, [name]: newValue });
    console.log(`Applicability`, {name});
    console.log(`The new value is`, {newValue});
    };
    
 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 const res = await fetch(
 "https://sheet.best/api/sheets/e4049191-22fa-427b-8b43-aa1b4c1870aa",
 {
 method: "POST",
 headers: {
 "Content-Type": "application/json",
 },
 body: JSON.stringify(data),
 }
 );
 if (res.ok) {
 history.replace("/");
 }
 } catch (error) {
 console.log(error);
 }
 };



 return (
 <form style={{ maxWidth: 500, margin: "auto" }} onSubmit={handleSubmit}>
 <h1 className="text-muted text-center">Add</h1>

 <div className="mb-3">
 <label htmlFor="name" className="form-label">
 Date {/*date*/}
 </label>
 <input
 type="text"
 className="form-control"
 name="date"
 value={data.date}
 onChange={handleChange}
 />
 </div>
<div>
   <label>Upload Image URL</label>
<input 
type="link"
name="images"
value={data.images}
onChange={handleChange}
/>

</div>


<div className="container">

<div className="row align-items-start"> 
     <div className="mx-auto mt-5 fw-bold fs-4 col-md-6 text-start">
         <div>
           <label className="form-label">N00 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="n00" value={data.N00} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">N10 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="n10" value={data.N10} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">N20 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="n20" value={data.N20} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">W00 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="w00" value={data.w00} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">W10 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="w10" value={data.w10} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">W60 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="w60" value={data.w60} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">W70 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="w70" value={data.w70} onChange={handleCChange} />
         </div>
         <div>
           <label className="form-label">W80 - {/*Parameters*/}</label>
           <input className="ms-auto" type="checkbox" name="w80" value={data.w80} onChange={handleCChange} />
         </div>
     
     </div>

     {/* Second Column */}
     <div className="col-md-6">
       <div>
         <label className="form-label">Operation Key Point</label>
         <input className="ms-auto" type="text" name="Operation Key Point" value={data.okp} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Process Mark</label>
         <input className="ms-auto" type="text" name="Process Mark" value={data.process_mark} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Inspection Method</label>
         <input className="ms-auto" type="text" name="Inspection Method" value={data.inspection_method} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Control Item</label>
         <input className="ms-auto" type="text" name="Control Item" value={data.control_item} onChange={handleChange} />
       </div>
       <div>
         <label  className="form-label">Control Method</label>
         <input className="ms-auto"type="text" name="Control Method" value={data.control_method} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Characteristics</label>
         <input className="ms-auto" type="text" name="Characteristics" value={data.characteristics} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Criteria</label>
         <input className="ms-auto" type="text" name="Criteria" value={data.criteria} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Acceptance / Judgement</label>
         <input className="ms-auto" type="text" name="Acceptance / Judgement" value={data.accOrjudge} onChange={handleChange} />
       </div>
       <div>
         <label className="form-label">Reference Documents</label>
         <input className="ms-auto" type="text" name="Reference Documents" value={data.refdoc} onChange={handleChange} />
       </div>
     </div>
   </div>
</div>


 <div className="mb-3">
 <label htmlFor="message" className="form-label">
 Message
 </label>
 <input
 type="text"
 className="form-control"
 name="message"
 value={data.message}
 onChange={handleChange}
 />



 </div>
 <div className="text-center">
 <button className="btn btn-primary">Add</button>
 </div>
 </form>
 );
};
export default Adds;
