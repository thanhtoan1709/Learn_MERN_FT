import axios from 'axios'
import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Create() {
    const [values,setValues] = useState({
        name: '' ,
        email: '',
        age: '',
        gender: '',
    })
    const navigate  = useNavigate();
    function handleSubmit(e) {
        e.preventDefault()
        axios.post('/add_user',values)
            .then((res) => {
                navigate('/')
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });
    }
  return (
    <div className="container vh-100 vw-100 bg-primary">
        <div className="row">
            <h3>Add Student</h3>
            <div className="d-flex justify-content-end">
                <Link to='/' className='btn btn-success'>Home</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-3">
                    <label htmlFor="Name">  Name    </label>
                    <input type="text" name="name" id="" onChange={(e) => setValues({...values,name :e.target.value})} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Name">  Email    </label>
                    <input type="email" name="email" id="" onChange={(e) => setValues({...values,email :e.target.value})} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Name">  gender   </label>
                    <input type="text" name="gender" id="" onChange={(e) => setValues({...values,gender :e.target.value})} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="Name">  Age   </label>
                    <input type="text" name="age" id="" onChange={(e) => setValues({...values,age:e.target.value})} />
                </div>
               <div className="form-group my-3">
                <button type="submit" className='btn btn-success'>Submit</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default Create