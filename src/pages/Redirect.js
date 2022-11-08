import React from 'react'

const Redirect = () => {
  const [person,setPerson] = React.useState([])

  React.useEffect(()=> {
    const newUser = JSON.stringify('')
    const user = JSON.parse(localStorage.getItem("newUser"))
    if(user){
      setPerson(user)
    }
    else{
      localStorage.setItem("newUser", newUser)
    }
  }, [])

  return (
    <div className='redirect'>
        <h1> Form Submitted Successfully</h1>
        <h1> Welcome {person.lastname} - {person.firstname} </h1>
        <p> Please confirm your Email address {person.email} </p>
    </div>
  )
}

export default Redirect;