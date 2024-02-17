import { useEffect, useState } from "react"
import InputField from "../../Components/InputField"
import './Contact.css'
import axios from 'axios';


const ContactForm =() =>{
  const initialState= {fname: '', lname: '', email: '', description:'' ,phone: '', budget:500}
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [data, setData] = useState({})
    const [formValue, setFormValue] = useState(initialState)
    
    const changehandler = (e) =>{
      const {name, value} = e.target;
      console.log(name,value)
      setFormValue({...formValue, [name]: value})
      setIsSubmit(true)
    }
    const submitHandler =async (e) =>{
        e.preventDefault()
        setFormErrors(validate(formValue))
        setData(formValue)
        try{
          const response = await fetch('http://3.7.81.243:3253/api/contact/send',{
          method:'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
        })
        const result = await response.json();
        setData(result)
        } catch(errors){
          return errors
        }
        
    }
    const validate =(values)=>{
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values?.fname){
            errors.fname = "Enter the first name"
        }
        if(!values.lname){
          errors.lname = "Enter last name"
        }
        if(!values.email){
            errors.email = "please enter valid email"
          } else if(regex.test(values.email)){
            errors.email = "this is not a valid email"
          }
          if(!values.phone){
            errors.phone = "enter Phone Number"
          } else if(values.phone?.length >= 10 && values?.phone?.length<=13){
            errors.phone = "Enter valid mobile number"
          }
          if(!values.description){
            errors.description = "enter the description field"
          }
          return errors
    }
    return(
        <>
        <form onSubmit={submitHandler} className="form_container">
        <div className="input_filed">
        <InputField 
        title= 'First Name'
        types='text' 
        value={formValue?.fname} 
        name='fname'
        onChange={changehandler}
        className="input_all"
        errorMessage={formErrors.fname}
        />
        <InputField 
        title= 'Last Name'
        types='text' 
        value={formValue?.lname} 
        name={'lname'} 
        onChange={changehandler}
        errorMessage={formErrors.lname}
        />
        </div>
       <div className="input_filed">
       <InputField 
        title= 'Email'
        types='text' 
        value={formValue?.email} 
        name={'email'} 
        onChange={changehandler}
        errorMessage={formErrors.email}
        />
        <InputField 
        title= 'Phone'
        types='text' 
        value={formValue.phone} 
        name={'phone'} 
        onChange={changehandler}
        errorMessage={formErrors.phone}
        />
       </div>
        <div className="input_filed">
        <InputField 
        title= 'budget'
        types='text' 
        value={formValue?.budget} 
        name={'budget'} 
        onChange={changehandler}
        />
        <InputField 
        title= 'description'
        types='text' 
        value={formValue.description} 
        name={'description'} 
        onChange={changehandler}
        errorMessage={formErrors.description}
        />
        
        </div>
        <button type="submit" className="btn">Submit</button>
        </form>
        </>
    )
}
export default ContactForm