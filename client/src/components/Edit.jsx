import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';
function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const navigate  = useNavigate();
  function handleSubmit(e) {
      e.preventDefault()
      axios.post('/edit_user',data[0])
          .then((res) => {
              navigate('/')
              console.log(res);
          }).catch((err) => {
              console.log(err);
          });
  }
  return (
    data.map((student)=>{ return(
    <div className="container vh-100 vw-100 bg-primary">
        <div className="row">
            <h3>Add Student</h3>
            <div className="d-flex justify-content-end">
                <Link to='/' className='btn btn-success'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="Name">  Name    </label>
                    <input type="text" name="name" value={student.name} id="" onChange={(e) => setData({...data[0],name :e.target.value})} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Name">  Email    </label>
                    <input type="email" name="email" value={student.email} id="" onChange={(e) => setData({...data[0],email :e.target.value})} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Name">  gender   </label>
                    <input type="text" name="gender" value={student.gender} id="" onChange={(e) => setData({...data[0],gender :e.target.value})} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Name">  Age   </label>
                    <input type="text" name="age" value={student.age} id="" onChange={(e) => setData({...data[0],age:e.target.value})} />
                </div>
               <div className="form-group my-3">
                <button type="submit" className='btn btn-success'>Submit</button>
               </div>
            </form>
        </div>
    </div>)})
  
  )
}

export default Edit