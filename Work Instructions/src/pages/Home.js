import { Link , useHistory} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { setApiLink } from '../Redux/Action';
import "./Edit.css";
const Home = () => {
  const dispatch = useDispatch();
  const apiLink = useSelector((state) => state.apiLink.apiLink);
  //const apiLink = '';
  const [data, setData] = useState(null);
  const history = useHistory();

  const getData = async () => {
    try {
      const res = await fetch(apiLink); // Use apiLink from Redux store
      if (!res.ok) {
        throw new Error('API request failed'); // Handle non-2xx responses
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error); // Handle errors gracefully (e.g., display error message to user)
    }
  };

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, [apiLink]); 


  const handleDelete = async (rowIndex) => {
    try {
      const res = await fetch(`${apiLink}/${rowIndex}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        const updatedData = data.filter((_, i) => i !== rowIndex);
        setData(updatedData);
        console.log(`Updated data`, { updatedData });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setApiLink(e.target.elements.apiLink.value)); // Update Redux store with new apiLink
    getData(); // Re-fetch data based on the updated apiLink
  };
  /*const handleSubmit = (e) => {
    e.preventDefault();
    getData(); // Re-fetch data based on the updated apiLink
    history.push(`/edit/0?apiLink=${encodeURIComponent(apiLink)}`); // Navigate to Edit.js
  };
*/
 return (
 <div className="accordion" id="accordionExample">
 <h1>Work Insructions</h1>
 <form onSubmit={handleSubmit}>
 
        <label htmlFor="apiLink">Enter API Link:</label>
        <input type="text" id="apiLink" name="apiLink" /> {/* Add name attribute for form submission */}
        <button type="submit">Submit</button>
      </form>

 {data?.map((item, i) => (
 <div className="accordion-item" key={i}>
 <h2 className="accordion-header" id={`heading${i}`}>
 <button
 className="accordion-button"
 type="button"
 data-bs-toggle="collapse"
 data-bs-target={`#collapse${i}`}
 aria-expanded="true"
 aria-controls={`collapse${i}`}
 >
 Step {item.step_number} : {item.steps}
 </button>
 </h2>
 <div
 id={`collapse${i}`}
 className="accordion-collapse collapse"
 aria-labelledby={`heading${i}`}
 data-bs-parent="#accordionExample"
 >
 <div className="accordion-body">
 <div className="d-flex justify-content-between align-items-center">
 <span>
 <strong className="display-6"> {item.date} </strong> 
 </span>
 <img src={item.images} alt="No Image" height="80px" width="100px" />
 <span>
 <Link to={`/edit/${i}`} style={{ textDecoration: "none" }}>
 Update
 </Link>
 <button
 className="btn btn-sm btn-danger ms-1"
 onClick={() => handleDelete(i)}
 >
 X
 </button>
 </span>
 </div>
 <p>{item.message}</p>
 </div>
 </div>
 </div>
 ))}
 </div>
 );
};
export default Home;