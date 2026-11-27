import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

export default function Register() {
  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{
      mobile:"7788665544",
      username:"Rahul"
    }
  });
  const [error, setError] = useState(null);
 
  function doRegister(formData){
    setError(null);
    console.log(formData); 
    if(formData.password === formData.confirmPassword){
      // backend request for regstration
    }  
    else{
      setError("Password and confirm password must be same");
    }    
    // navigate to login 
  }

  return (
    <div className='col-5 mx-auto my-3 border rounded shadow p-3'>
      <form onSubmit={handleSubmit(doRegister)}>
        <h3>Register</h3>
        {
          error &&
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        }
        <div className="mb-3">
          <label className="form-label">Username<strong style={{ color:"red" }}> *</strong></label>
          <input type="text" className="form-control"
          {...register(
            'username',
            {
              required:"Username is required",
              minLength: {
                value:"3",
                message:"Username must have atleast 3 characters"
              },
              pattern:{
                value: /^[A-Z][a-zA-Z]*$/,
                message:"Username must start with Capital "
              }
            }
          )}  />   
          { errors.username &&
            <div className="alert alert-danger" role="alert">
              {errors.username.message}
            </div>  
          }     
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" 
           {...register('email')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" 
           {...register('password')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" 
           {...register('confirmPassword')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile</label>
          <input type="text" className="form-control"
           {...register('mobile',
              {
                required:"Mobile is required",
                pattern:{
                    value:/^[6-9]\d{9}$/,
                    message:"Mobile no must have exact 10 digits, starting with 6 or 7 or 8 or 9"
                }
              }
           )}  />
           { errors.mobile &&
            <div className="alert alert-danger" role="alert">
              {errors.mobile.message}
            </div>  
          }
        </div>
        <button type="submit" className="btn btn-primary">Register</button> Already a user? Click <NavLink to={"/login"}>here</NavLink> to Sign-In
      </form>
    </div>
  )
}
