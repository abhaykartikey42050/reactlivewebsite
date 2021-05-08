import React, {Fragment, useState} from 'react';

const Contact = () => {
  const [data, setData] = useState({ //we have to use object and intitialize this values with '' because we have multiple values and we are using same event (inputEvent) for it, this state new values can be accessed by data.name
    full_name: '',
    contact: '',
    email: '',
    message: ''
  });

  const[btn, setBtn] = useState(0); //react also checks data type by !==
  console.warn(data);
 
  const inputEvent = (e) => {
      //const name = e.target.name;
      //const value = e.target.value;
      const {name, value} = e.target; //object destructuring --> name is the field name of text box and values is its value (text box value)

      setData((prevData) => {  //when we have to update data in multiple fields, we also need old values (prevData), because at a time we are changing value of a single field,  when multiple values are updated it also needs to be returned  
        return {
          ...prevData, //spread operator contains all the values with key and values
          [name] : value // name -> text box name, value -> textbox value //[] brackets are used because it matches the key with ...prevData, so [name] replaces old ...prevData with new state value (value), if we dont use [name] then the last letter of a word  is added as field in state (you can inspect -> Components -> Contact (component)-> hooks (state values)) -->image attached in Information.docx
        }
      });
  }

  const submitForm = (e) => {
    e.preventDefault(); //so the page is not submitted after submit
  // alert(`${data.full_name} ${data.contact} ${data.email} ${data.message}`);
  //document.getElementById('final_values').innerHTML = '';
  //$('#final_values').val(data.full_name);
      setBtn(1);
  }

  return <Fragment>
    <div className='my-5'>
      <h1 className='text-center'>Contact Us</h1>
    </div>
    <div className='container contact_div'>
      <div className='row'>
        <form onSubmit={submitForm}>
        <div className='col-md-6 col-10 mx-auto'>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control"  name='full_name' value={data.full_name} onChange={inputEvent} placeholder="Full Name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact No.</label>
          <input type="number" className="form-control"  name='contact' value={data.contact} onChange={inputEvent} placeholder="Contact No." />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control"  name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="3" name='message' value={data.message} onChange={inputEvent}></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-outline-primary">Send Message</button>
        </div>
        <div id='final_values'>  {/*p tag is replaced by div, because i m getting error */}
        {btn !== 0 ? /*react also checks data type by !==*/
        <div> Your Name is: {data.full_name} <br/>
        Number: {data.contact} <br />
        Email: {data.email} <br />
        Message: {data.message} </div> : '' }
        </div>
        </div>
        </form>
      </div>
    </div>
  </Fragment>
}

export default Contact;