import {useTheme} from "../ThemeSetter.tsx";
import {Button, Container, Form, Toast, ToastContainer} from "react-bootstrap";
import {useRef, useState} from "react";
import axios from "axios";

export default function ContactForm() {
  const { getStyle } = useTheme();
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  const emptyForm = {
    name: '',
    email: '',
    message: '',
  }
  const [formData, setFormData] = useState(emptyForm);

  const form = useRef();


  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);

    axios.post('/api/sendemail', formData)
      .then((response) => {
        setShowToast(true);
        console.log('Message sent successfully:', response.data);
        setFormData(emptyForm);
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setShowErrorToast(true);
      });
  };

  return (
    <>
      <Container
        id="email-section"
        className={`${getStyle.contactFormBackground} py-3 mb-5 mt-3`}
      >
        <Form
          className="px-md-5 px-xs-1"
          // @ts-ignore
          ref={form}
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="formName" className="text-start mb-3">
            <Form.Label className={getStyle.contactForm}>Name</Form.Label>
            <Form.Control
              className={`${getStyle.contactForm} border-0 rounded-4`}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="formEmail" className="text-start mb-3">
            <Form.Label className={getStyle.contactForm}>Email</Form.Label>
            <Form.Control
              className={`${getStyle.contactForm} border-0 rounded-4`}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required/>
          </Form.Group>

          <Form.Group controlId="formMessage" className="text-start">
            <Form.Label className={getStyle.contactForm}>Message</Form.Label>
            <Form.Control
              className={`${getStyle.contactForm} border-0 rounded-4`}
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required/>
          </Form.Group>

          <div className="d-flex flex-row justify-content-center mt-3">
            <Button
              className="mt-3 shadow"
              variant="primary"
              type="submit"
            >
              <i className="bi bi-envelope-fill me-2"></i>
              Send Me A Message
            </Button>
          </div>
        </Form>

      </Container>

      {/* TODO: fix this container, right now it is being displayed in the wrong position. */}
      <ToastContainer
        position="bottom-end"
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={5000} autohide
        >
          <Toast.Header className="bg-primary text-light">
            <i className="bi bi-check-circle-fill text-white me-2"></i>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="bg-primary-subtle text-dark">
            Message sent successfully!
          </Toast.Body>
        </Toast>

        <Toast
          className="bg-danger text-light"
          show={showErrorToast}
          onClose={() => setShowErrorToast(false)}
          delay={5000} autohide
        >
          <Toast.Header className="bg-danger text-light">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            <strong className="me-auto">Oops!</strong>
          </Toast.Header>
          <Toast.Body className="bg-danger-subtle text-dark">
            An unexpected error occurred. Try again later!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}