import { useState } from 'react'
import './App.css'

function App() {

  const[formData, setFormData] = useState({
    firstName:"", lastName:"", email: "", country: "India", streetAddress:"", city:"", state:"", postalCode:"", comments:false , candidates:false, offers:false, pushNotifications:""

  })

  function changeHandelar(event){
    const {name, type, value, checked} = event.target
    setFormData((prev)=>({...prev, [name]:type === 'checkbox' ? checked : value}))
  }
  function submitHandeler(event){
    event.preventDefault();
    console.log("Final result is");
    console.log(formData);

  }
  return (
   <div>
      <h1>Student Data Form</h1>
      <form className='mt-5' onSubmit={submitHandeler}>
        <label htmlFor='firstName'>First Name</label>
        <input
        type='text'
        id='firstName'
        name='firstName'
        value={formData.firstName}
        onChange={changeHandelar}
        className='outline ml-2'  
      /><br></br><br></br>
        <label htmlFor='lastName'>Last Name</label>
        <input
        type='text'
        id='lastName'
        name='lastName'
        value={formData.lastName}
        onChange={changeHandelar}
        className='outline ml-2'  
      /><br></br><br></br>
        <label htmlFor='email'>Email</label>
        <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={changeHandelar}
        className='outline ml-2 '  
      /><br></br><br></br>
      <label htmlFor='country'>Country</label>
      <select
      id='country'
      name='country'
      value={formData.country}
      onChange={changeHandelar}
      className='outline ml-2 w-1/6'
      >
        <option>India</option>
        <option>Us</option>
        <option>Canada</option>
        <option>Maxico</option>
      </select><br></br><br></br>

      <label htmlFor='streetAddress'>Street address</label>
        <input
        type='text'
        id='streetAddress'
        name='streetAddress'
        value={formData.streetAddress}
        onChange={changeHandelar}
        className='outline ml-2'  
      /><br></br><br></br>
      <label htmlFor='city'>city</label>
        <input
        type='text'
        id='city'
        name='city'
        value={formData.city}
        onChange={changeHandelar}
        className='outline ml-2'  
      /><br></br><br></br>
      <label htmlFor='state'>State</label>
        <input
        type='text'
        id='state'
        name='state'
        value={formData.state}
        onChange={changeHandelar}
        className='outline ml-2'  
      /><br></br><br></br>
      <label htmlFor='postalCode'>Postal Code</label>
        <input
        type='text'
        id='postalCode'
        name='postalCode'
        value={formData.postalCode}
        onChange={changeHandelar}
        className='outline ml-2'  
      /><br></br><br></br>

      <fieldset>
        <legend>By Email</legend>
        <div className='flex justify-center'>
          
          <div className='flex items-center'>
          <input
            type='checkbox'
            id='comments'
            name='comments'
            checked={formData.comments}
            onChange={changeHandelar}
          />
          </div>
        <div className='flex flex-col items-start ml-2'>
          <label htmlFor='comments'>Comments</label>
          <p>Get notified when someones posts a comment on a posting.</p>
        </div>
      </div>
      <div className='flex justify-center'>
        
        <div className='flex items-center'>
          <div className='flex items-center'>
            <input
            type='checkbox'
            id='candidates'
            name='candidates'
            checked={formData.candidates}
            onChange={changeHandelar}
          />
          </div>
          
        </div>
        <div className='flex flex-col items-start ml-2'>
          <label htmlFor='candidates'>Candidates</label>
          <p>Get notified when a candidate applies for a job.</p>
        </div>
      </div>
      <div className='flex justify-center'>
          <div className='flex items-center'>
          <input
            type='checkbox'
            id='offers'
            name='offers'
            checked={formData.offers}
            onChange={changeHandelar}
          />
          </div>
        <div className='flex flex-col items-start ml-2'>
          <label htmlFor='offers'>Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>
      </div>
      </fieldset><br></br>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p>
        <div className='flex justify-center gap-2'>
        <input
          type='radio'
          id='everything'
          name='pushNotifications'
          value="everything"
          onChange={changeHandelar}
        />
        <label htmlFor='everything'>Everything</label>

        </div>
        <div className='flex justify-center gap-2'>
        <input
          type='radio'
          id='sameAsEmail'
          name='pushNotifications'
          value="same as email"
          onChange={changeHandelar}
        />
        <label htmlFor='sameAsEmail'>Same As Email</label>

        </div>
        <div className='flex justify-center gap-2'>
        <input
          type='radio'
          id='noPushNotifications'
          name='pushNotifications'
          value="no push notifications"
          onChange={changeHandelar}
        />
        <label htmlFor='noPushNotifications'>No Push Notifications</label>

        </div>
      </fieldset>
      <button className='bg-blue-500 text-white p-3 pl-5 pr-5 rounded-md'>Save</button>


      </form>
   </div>
  )
}

export default App
