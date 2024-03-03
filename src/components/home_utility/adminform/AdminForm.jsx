import React from 'react'

const AdminForm = () => {
  return (
    <div>
        <Form>
        <title>Name</title>
<input placeholder='Enter Your Name' name='name'></input>
<input placeholder='Enter Your Age'></input>
<textarea placeholder='Enter Your Bio.....'></textarea>
<button>Submit</button>
        </Form>
    </div>
  )
}

export default AdminForm