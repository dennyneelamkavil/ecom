import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Contact.css";


function Contact() {
  const [contactFormData, setContactFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  });

  const validateForm = () => {

    let valid = true;

    const newErrors = {
      fullname: '',
      email: '',
      phone: '',
      message: ''
    }

    if (!contactFormData.fullname.trim()) { //checks if the fullname is empty, returns true if it is empty
      newErrors.fullname = 'Fullname is required';
      valid = false;
    }else if(contactFormData.fullname.length < 3){
      newErrors.fullname = "Fullname should contain minimum 3 characters";
      valid = false;
    }

    if (!contactFormData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }else if(/[]/){//Regular expression
      newErrors.email = "Enter a valid email!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;

  }


  const handleSubmit = (e) => {


    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted!", contactFormData);
    }

  }


  const onChangeHandler = (e) => {

    const { name, value } = e.target;

    setContactFormData({ ...contactFormData, [name]: value });

  }

  console.log("ContactFormData ==== ", contactFormData);



  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <div className='shadow bg-white p-4 m-4' onSubmit={handleSubmit}>
            <form className='form-container my-4'>
              <input type="text" name='fullname' placeholder='Please enter fullname ' onChange={onChangeHandler} />
              <span className='error'>{errors?.fullname ?? ''}</span> {/* Nullish coalescing */}
              <input type="email" name='email' placeholder='Please enter email ' onChange={onChangeHandler} />
              <span className='error'>{errors?.email ?? ''}</span>
              <input type="number" name='phone' placeholder='Please enter phone number ' onChange={onChangeHandler} />
              <span className='error'>{errors?.phone ?? ''}</span>
              <textarea type="text" rows={5} name='message' placeholder='Please enter message ' onChange={onChangeHandler} >
              </textarea>
              <span className='error'>{errors?.message ?? ''}</span>
              <button>Send Message</button>
            </form>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact