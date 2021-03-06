import React from 'react';
import {Container} from "react-bootstrap";

const Contact = () => {
  
  return (
    
    <Container style={{margin: "5%"}}>
      <div className='content'>
        <h>Contact Me</h>
        <p>You can reach me via email: <strong>nicholaslatham1999@gmail.com</strong></p>
        <section>
          <h>Useful Links</h>
          <ul>
            <li><a href="https://github.com/nlatham1999">Github</a></li>
            <li><a href="https://www.linkedin.com/in/nicholas-latham-a5a06516a/">LinkedIn</a></li>
          </ul>
        </section>
      </div>
    </Container>
  );
}

export default Contact;