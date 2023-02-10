import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import { useLocation, useNavigate } from 'react-router-dom'
import '../css/FirstPage.css'

interface IFormInputValues {
	name: string;
	phoneNumber: string;
	email: string;
}

export default function FirstPage(){
    const [formData, setFormData] = React.useState<IFormInputValues>({
        name: "",
        phoneNumber: "",
        email:""
    });

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/SecondPage`; 
        navigate(path);
  }

    useEffect(() => { 
        localStorage.setItem('form',JSON.stringify(formData))
    }, [formData]);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target
        setFormData({ ...formData,[name] : value})
    }

    function handleSubmit(event :React.FormEvent<HTMLFormElement>){
        event.preventDefault()
    }

    function SubmitButton(){
        if (formData.name && formData.phoneNumber && formData.email){
          return <Button variant="contained" size="large" type="submit" onClick={routeChange}>Submit</Button>
        } else {
          return <Button variant="contained" size="large" type="submit" color='secondary' disabled>Submit</Button>
        };
      };
      const {state} = useLocation();
    
    return(
        <div className='page1'>
            <form className="first-form" onSubmit={handleSubmit}>
                <h1 className='form-heading'>Fill the form to proceed</h1>
                <TextField variant="outlined" size="small" label="Name" type="text" name="name" value = {formData.name} onChange={handleChange} required/><br/>
                <TextField variant="outlined" size="small" label="Phone Number" type="text" name='phoneNumber' value = {formData.phoneNumber} onChange={handleChange} required/><br/>
                <TextField variant="outlined" size="small" label="Email" type="text" name='email' value={formData.email} onChange={handleChange} required/><br/>
                <SubmitButton />
                {state && <Alert className='login-alert-msg' severity="error">{state}</Alert>}
            </form>
        </div>
    )
}

