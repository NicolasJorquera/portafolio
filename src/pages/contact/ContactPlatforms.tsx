


import Button from 'react-bootstrap/Button';
import '../../assets/contact/ContactPlatforms.css'

import Form from 'react-bootstrap/Form';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';



function ContactPlatforms() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    
    useEffect(() => { emailjs.init("ZgN--35fMFvll3cIj"); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_hcfgoav";
        const templateIdSent = "portfolio_sent";
        const templateIdSend = "portfolio_send";
        const params = {
          user_name: name,
          user_company: company,
          user_email: email,
          user_message: message
        };

        setLoading(true);
        try {
          await emailjs.send(serviceId, templateIdSend, params);
        } catch (error) {
          console.error(error);
          alert("No se pudo enviar el mensaje, intenta nuevamente.");
          setLoading(false);
          return;
        }

        // Confirmación al remitente: si falla, el mensaje principal ya se envió
        try {
          await emailjs.send(serviceId, templateIdSent, params);
        } catch (error) {
          console.error(error);
        }

        setLoading(false);
        alert("email successfully sent check inbox");
        setName("")
        setCompany("")
        setEmail("")
        setMessage("")

      };

      const handleChangeName = (e) => {
        e.preventDefault(); 
        setName(e.target.value); 
      };

      const handleChangeCompany = (e) => {
        e.preventDefault(); 
        setCompany(e.target.value); 
      };

      const handleChangeEmail = (e) => {
        e.preventDefault(); 
        setEmail(e.target.value); 
      };

      const handleChangeMessage = (e) => {
        e.preventDefault(); 
        setMessage(e.target.value); 
      };

    return(
        <div className='contactPlatformsContainer'>
            <Form id='contactForm' className='formContainer' onSubmit={handleSubmit}>
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control autoComplete='new-password' required value={name} onChange={handleChangeName}  type="text" />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlInput2">
                    <Form.Label>Empresa u organización</Form.Label>
                    <Form.Control autoComplete='new-password' value={company} onChange={handleChangeCompany} size='lg' type="text"  />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlInput3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoComplete='new-password' required value={email} onChange={handleChangeEmail} size='lg' type="email" />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control autoComplete='new-password' required value={message} onChange={handleChangeMessage} as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <div className='sendMail'>
                <Button type='submit' form='contactForm' disabled={loading} className='sendMailButton' variant='primary' size='lg'>
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default ContactPlatforms