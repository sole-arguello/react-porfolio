import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const EmailForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      const serviceID = 'service_6rw8msp';
      const templateID = 'template_h702pog';
      const publicKey = 'm7rc6U19mLnZlRbAO';
  
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    );
    
}

export default EmailForm