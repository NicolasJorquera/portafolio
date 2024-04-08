


import Button from 'react-bootstrap/esm/Button';
import '../../assets/contact/ContactPlatforms.css'

import Form from 'react-bootstrap/Form';



function ContactPlatforms() {
    return(
        <div className='contactPlatformsContainer'>
            <Form className='formContainer'>
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control   type="email" />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Empresa u organización</Form.Label>
                    <Form.Control size='lg' type="email"  />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size='lg' type="email" />
                </Form.Group>
                <Form.Group  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <div className='sendMail'>
                <Button className='sendMailButton' variant='primary' size='lg'>
                    Enviar
                </Button>
            </div>
        </div>
    )
}

export default ContactPlatforms