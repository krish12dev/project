import { useState } from "react"
import InputField from "../../Components/InputField"

const ContactForm =() =>{
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const changehandler = (e) =>{
    }
    const submitHandler =(e) =>{
        e.preventDefault()
        setFormErrors(validate())
    }
    const validate =(values)=>{
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values?.fname){
            errors.fname = "Enter the first name"
        }
        if(!values.email){
            errors.email = "please enter valid email"
          } else if(regex.test(values.email)){
            errors.email = "this is not a valid email"
          }
          if(!values.phone){
            errors.phone = "enter Phone Number"
          } else if(values.phone?.length >= 10 && values?.phone?.length<=13)
          errors.phone = "Enter valid mobile number"
          return errors
    }
    return(
        <>
        <form onSubmit={submitHandler}>
        <InputField 
        title= 'First Name'
        types='text' 
        value={'fname'} 
        name={'fname'} 
        onChange={changehandler}
        />
        <InputField 
        title= 'Last Name'
        types='text' 
        value={'fname'} 
        name={'fname'} 
        onChange={changehandler}
        />
        <InputField 
        title= 'Email'
        types='text' 
        value={'email'} 
        name={'email'} 
        onChange={changehandler}
        />
        <InputField 
        title= 'Phone'
        types='text' 
        value={'phone'} 
        name={'phone'} 
        onChange={changehandler}
        />
        <InputField 
        title= 'budget'
        types='text' 
        value={'budget'} 
        name={'budget'} 
        onChange={changehandler}
        />
        <label>Description</label>
        <textarea value={'description'} name="description" onChange={changehandler}/>
        </form>
        </>
    )
}
export default ContactForm