


import Button from 'react-bootstrap/esm/Button';
import '../../assets/contact/ContactPlatforms.css'

import Form from 'react-bootstrap/Form';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



function ContactPlatforms() {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    
    useEffect(() => emailjs.init("ZgN--35fMFvll3cIj"), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_hcfgoav";
        const templateIdSent = "portfolio_sent";
        const templateIdSend = "portfolio_send";


        try {
          setLoading(true);
          await emailjs.send(serviceId, templateIdSend, {
            user_name: name,
            user_company:company,
            user_email: email,
            user_message: message
          });
          alert("email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }


        try {
            setLoading(true);
            await emailjs.send(serviceId, templateIdSent, {
              user_name: name,
              user_company:company,
              user_email: email,
              user_message: message
            });
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
  

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
            <Form className='formContainer' >
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control autoComplete='new-password' onChange={handleChangeName}  type="text" />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlInput2">
                    <Form.Label>Empresa u organización</Form.Label>
                    <Form.Control autoComplete='new-password' onChange={handleChangeCompany} size='lg' type="text"  />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlInput3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoComplete='new-password' onChange={handleChangeEmail} size='lg' type="email" />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control autoComplete='new-password' onChange={handleChangeMessage} as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <div className='sendMail'>
                <Button onClick={handleSubmit} className='sendMailButton' variant='primary' size='lg'>
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default ContactPlatforms