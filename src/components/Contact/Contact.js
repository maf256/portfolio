import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

export default function Contact () {
  const form = useRef();
  
  function onSubmit(e){
      e.preventDefault();
      emailjs.sendForm('service_p5nloe9', 'template_4f1qfpu', form.current, 'A6zWxwdubwFpZ1fy0')
        .then((result) => {
          form.current.name.value = '';
          form.current.email.value = '';
          form.current.message.value = '';            
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };  

  return (
    <FormContainer>
      <form ref={form} onSubmit={onSubmit}>
        <div>
          <h1>Contact Us</h1>
          <p>Let's send us email</p>
        </div>
        <input id='contact' type="text" name="name"  placeholder='Your Name' required />
        <input type="email" name="email" placeholder='Your Email' required/>      
        <textarea name="message" placeholder='Your Massage' rows="10" cols="50"/>    
        <input type="submit" value="Send" />
      </form>
    </FormContainer>
    
  );
};


const FormContainer = styled.div`
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: #0A2640;
    width: 600px;
    height: 600px;
    border-radius: 5px;
    h1 {
      font-size: 36px;
      color: white;
      font-weight: bold;
      letter-spacing: 2px;
      text-align: center;
      text-transform: uppercase;
  }
  p {
    font-size: 26px;
    color: white;
    font-weight: 600;
    text-align: center;
  }

    input[type=text], input[type=email], textarea {
      width: 400px;
      height: 50px;
      font-size: 16px;
      color: #eee;
      font-weight: 600;
      background-color: #303245;
      border: none;
      border-radius: 12px;
      padding: 10px;
      margin: 0 4px;
    }
    textarea {
      height:120px;
    }

    input[type=submit] {
      width: 400px;
      height: 50px;
      font-size: 16px;
      background-color: #08d;
      color: white;
      border: none;
      border-radius: 12px;
      padding: 10px;
      text-align: center;
      margin: 0 4px;
    }
  
  }
  @media (max-width: 600px) {
    width: 100%;    
  }
 
`



