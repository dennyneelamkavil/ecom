import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Contact() {
  return (
    <Container>
      <Row>
        <Col md={6} className='d-flex justify-content-center'>
          <div>
            <form action="">
              <input type="text" name='fullname' placeholder='Please enter fullname ' />
              <input type="email" name='email' placeholder='Please enter email ' />
              <input type="number" name='phone' placeholder='Please enter phone number ' />
              <textarea type="text" rows={10} name='message' placeholder='Please enter message '>
                </textarea>
            </form>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact