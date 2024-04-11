import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Edit.css"
import { useHistory } from "react-router-dom";
import SMSForm from "../SMSForm";
import { useSelector } from 'react-redux';
const Edit = () => { 
  const apiLink = useSelector((state) => state.apiLink.apiLink);
  const { rowIndex } = useParams();
  const history = useHistory();
  const [currentRowIndex, setRowIndex] = useState(parseInt(rowIndex) || 0);

  const incrementIndex = () => {
    const newRowIndex = currentRowIndex + 1;
    setRowIndex(newRowIndex);
    updateUrl(newRowIndex);
  };

  const decrementIndex = () => {
    if (currentRowIndex > 0) {
      const newRowIndex = currentRowIndex - 1;
      setRowIndex(newRowIndex);
      updateUrl(newRowIndex);
    }
  };

  const updateUrl = (newRowIndex) => {
    history.push(`/edit/${newRowIndex}`);
    window.location.reload();
  };
  console.log("The API LINK IS");
  console.log(`${apiLink}/${rowIndex}`);
 const [data, setData] = useState({
 steps : "",
 step_number: "",
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
 okp: "", 
 process_mark : "",
 inspection_method : "",
 control_item: "",
 control_method : "",
 characteristics : "",
 criteria : "",
 accOrjudge : "",
 refdoc : "",
 message: "", 
 });

 const getData = async () => {
 try {
 const res = await fetch(
  `${apiLink}/${rowIndex}`,
 //`https://sheet.best/api/sheets/e4049191-22fa-427b-8b43-aa1b4c1870aa/${rowIndex}`,
 );
 const data = await res.json();
 setData(data[0]);
 console.log(data);
 } catch (error) {
 console.log(error);
 }
 };
 useEffect(() => {
 getData();
 }, [apiLink]);

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

 /*const handleClick = () => {
  setData(prevData => ({
    ...prevData,
    steps: prevData.steps + 1 
  }));
  return false;
 };
 */
 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 const res = await fetch(
  `${apiLink}/${rowIndex}`,
  //`https://sheet.best/api/sheets/e4049191-22fa-427b-8b43-aa1b4c1870aa/${rowIndex}`,
 {
 method: "PUT",
 headers: {
 "Content-Type": "application/json",
 },
 body: JSON.stringify(data),
 }
 );
 if (res.ok) {
 history.push(`home?apiLink=${encodeURIComponent(apiLink)}`);
 }
 } catch (error) {
 console.log(error);
 }
 };
 
 
 return (
  <div className="row flex-xl-nowrap mx-auto">  
<div style={{ maxWidth: 800 , margin:"auto"}} >
 <h2 className="text-center"> Update Applicability
 <h5 className="mt-3 mb-3 text-center"> Step {data.step_number} : {data.steps} </h5>
  </h2> 
  <div className="text-center">
<img className="rounded" src={data.images} alt="No Image" height="80px" width="120px"/> 
</div>

<div className="d-flex justify-content-between">
      <button onClick={decrementIndex} className="btn btn-primary">Previous</button>
      <button onClick={incrementIndex} className="btn btn-primary">Next</button>
    </div>

<div className="ps-5 ms-5">
<label htmlFor="name" className="text-end mt-3 my--5 fs-7 fw-bold">
 Date <input
 type="text"
 name="date"
 className="ms-2 w-50"
 value={data.date}
 onChange={handleChange}
 />
 </label> 

 {/*<button className="btn btn-primary" onClick={handleClick}> Next Step</button>*/}
</div>

<div className="Container2">
<div className="mt-2">
  <table className="">
    <thead >
      <tr>
        <th className="text-start">Applicability</th>
        <th className="text-center">Assurance & Check Items</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <label className="form-label">N00</label>
          <input className="ms-2" type="checkbox" name="n00" value={data.N00} onChange={handleCChange} />
        </td>
        <td>
        <div className="input-group ms-auto">
             <div className="input-group-prepend">
                <span className="input-group-text" id="">Operation Key Point</span>
             </div>
                <input type="text" className="form-control" name="Operation Key Point" value={data.okp} onChange={handleChange}/>
        </div>
        </td>
      </tr>
      <tr>
        <td>
          <label className="form-label">N10</label>
          <input className="ms-2" type="checkbox" name="n10" value={data.N10} onChange={handleCChange} />
        </td>
        <td>
        <div className="input-group">
           <div className="input-group-prepend">
          <span className="input-group-text" >Process Mark</span>
           </div>
          <input type="text" className="form-control" name="Process Mark" value={data.process_mark} onChange={handleChange}/>
        </div>
       </td>

      </tr>
      <tr>
        <td>
          <label className="form-label">N20</label>
          <input className="ms-2" type="checkbox" name="n20" value={data.N20} onChange={handleCChange} />
        </td>
        <td>
  <div className="input-group">
       <div className="input-group-prepend">
          <span className="input-group-text" >Inspection Method</span>
       </div>
          <input type="text" className="form-control" name="Inspection Method" value={data.inspection_method} onChange={handleChange}/>
  </div>
</td>
     </tr>
      <tr>
        <td>
          <label className="form-label">W00</label>
          <input className="ms-2" type="checkbox" name="w00" value={data.w00} onChange={handleCChange} />
        </td>
        <td>
  <div className="input-group">
       <div className="input-group-prepend">
          <span className="input-group-text" >Control Item</span>
       </div>
          <input type="text" className="form-control" name="Control Item" value={data.control_item} onChange={handleChange}/>
  </div>
</td>
      </tr>
      <tr>
        <td>
          <label className="form-label">W10</label>
          <input className="ms-2" type="checkbox" name="w10" value={data.w10} onChange={handleCChange} />
        </td>
        <td>
  <div className="input-group">
       <div className="input-group-prepend">
          <span className="input-group-text" >Control Method</span>
       </div>
          <input type="text" className="form-control" name="Control Method" value={data.control_method} onChange={handleChange}/>
  </div>
</td>
      </tr>
      <tr>
        <td>
          <label className="form-label">W60</label>
          <input className="ms-2" type="checkbox" name="w60" value={data.w60} onChange={handleCChange} />
        </td>
        <td>
  <div className="input-group">
       <div className="input-group-prepend">
          <span className="input-group-text">Characteristics</span>
       </div>
          <input type="text" className="form-control" name="Characteristics" value={data.characteristics} onChange={handleChange}/>
  </div>
</td>
      </tr>
      <tr>
        <td>
          <label className="form-label">W70</label>
          <input className="ms-2" type="checkbox" name="w70" value={data.w70} onChange={handleCChange} />
        </td>
        <td>
  <div className="input-group">
       <div className="input-group-prepend">
          <span className="input-group-text" >Criteria</span>
       </div>
          <input type="text" className="form-control" name="Crtiteria" value={data.criteria} onChange={handleChange}/>
  </div>
</td>
      </tr>
      <tr>
        <td>
          <label className="form-label">W80</label>
          <input className="ms-2" type="checkbox" name="w80" value={data.w80} onChange={handleCChange} />
        </td>
        <td>
  <div className="input-group">
       <div className="input-group-prepend">
          <span className="input-group-text" id="">Reference Documents</span>
       </div>
          <input type="text" className="form-control" name="Reference Documents" value={data.refdoc} onChange={handleChange}/>
  </div>
</td>
      </tr>
     
    </tbody>
  </table>
</div>

</div>
 <div className="mb-2">
 <label htmlFor="message" className="text-center mt-3 fs-6 form-label fw-bold">
 Message 
 </label>
 <input
 type="text"
 className="form-control w-600"
 name="message"
 value={data.message}
 onChange={handleChange}
 />
 <SMSForm message={data.message} number="+919344469081"/>
 </div>
 <div className="text-center">
 <button type="button" onClick={handleSubmit} className="btn btn-primary">Update</button>
 </div>
 </div>

 </div>

 );
};
export default Edit;