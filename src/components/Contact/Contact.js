import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact () {
//   const form = useRef();

function onSubmit(e){
    e.preventDefault();
    
}

  return (
    // action="https://formsubmit.co/your@email.com" method="POST"
    <form action="https://formsubmit.co/maf256@gmail.com" method="POST" onSubmit={onSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};


