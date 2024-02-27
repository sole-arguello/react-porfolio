import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const EmailForm = () => {

  const [isSend, setIsSend] = useState(false)

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = 'service_6rw8msp';
    const templateID = 'template_h702pog';
    const publicKey = 'm7rc6U19mLnZlRbAO';

    emailjs
      .sendForm(serviceID, templateID, e.target, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Mostrar mensaje de e-mail enviado
          setIsSend(true)
          // Limpiar los campos después de enviar
          setFormData({
            user_name: '',
            user_email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className='content__emailForm'>
      {
      isSend 
      ? (
        <div className='content__emailForm-success'>
          <h1 className='content__emailForm-success-title'>Gracias por contactarme</h1>
          <Link className='content__emailForm-btn btn-link' to={'/'}>
            Volver
          </Link>
        </div>
        ) : (
          <div className='content__emailForm-container'>
            <h1 className='content__emailForm-title'>Dejame un mensaje, y me pondre en contacto</h1>
            <form className='content__emailForm-form' onSubmit={sendEmail}>
              
              <label className='content__emailForm-label'>Nombre</label>
              <input
                className='content__emailForm-input'
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
              />
              <label className='content__emailForm-label'>Email</label>
              <input
                className='content__emailForm-input'
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
              />
              <label className='content__emailForm-label'>Mensaje</label>
              <textarea
                className='content__emailForm-textarea'
                name="message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleInputChange}
              />
              <div className='content__emailForm-btn-container'>
                <Link className='content__emailForm-btn btn-link' to={'/'}>
                  Volver
                </Link>
                <input className='content__emailForm-btn' type="submit" value="Enviar" />
              </div>
            </form>
          </div>
      )
    }
    </section>
  );
};

export default EmailForm;


