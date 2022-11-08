import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  const[state, setState] = React.useState({
    firstname:"",
    lastname:"",
    email: "",
    message:"",
    checked: false
  })
  const handleChange = (e)=>{
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state, [e.target.name]: value
     })
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    const newUser = JSON.stringify(state);
    localStorage.getItem('newUser') === null && localStorage.setItem('newUser', newUser);
    navigate('/Redirect')
  }
  return (
    <>
        <div className='contact' id='contact'>
            <div className='contact_header' id='contact_header'>
                <h1 className='contact_heading'>Contact Me</h1>
                <p className= "contact_paragraph">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form className='contact_form' id='contact_form' onSubmit={handleSubmit}>              
                <div className='box1'>
                  <label htmlFor='firstname' className='label-firstname'>First name</label>
                  <input type="text" name='firstname' className='first_name' id='first_name' placeholder='Enter your first name' value={state.firstname} onChange={handleChange} required/> 
                  <label htmlFor='lastname' className='label-lastname'>Lastname</label>
                  <input type="text" name='lastname' className='last_name' id='last_name' placeholder='Enter your last name' value={state.lastname} onChange={handleChange} required/>
                </div>    
                <label htmlFor='Email'>Email</label>
                <input type="text" name='email' className='email' id='email' placeholder='yourname@email.com' value={state.email} onChange={handleChange} required/>             
                <label htmlFor='Message'>Message</label>
                <textarea className="message" id="message"name='message' placeholder="Send me a message and I'll reply you as soon as possible..." value={state.message} onChange={handleChange}></textarea>
                <div className='check-para'>
                  <input type="checkbox" className='checkbox' id='checkbox' name='checked' checked={state.checked} onChange={handleChange}/>
                  <p className='input_paragraph' id='input_paragragph'>You agree to providing your data to name who may contact you.</p>
                </div>
                <button className='message_btn' id='message_btn'>Send message</button>
            </form>
        </div>
    </>
  )
}

export default Contact