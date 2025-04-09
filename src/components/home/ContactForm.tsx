import {useTheme} from "../ThemeSetter.tsx";
import {Button, Container, Form} from "react-bootstrap";
import {useRef, useState} from "react";

export default function ContactForm() {
  const { getStyle } = useTheme();

  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Contact backend
  };

  return (
    <Container className={`${getStyle.contactFormBackground} py-3 mb-5 mt-3`}>
      <Form
        className="px-md-5 px-xs-1"
        ref={form}
        onSubmit={handleSubmit}
      >
        <Form.Group controlId="formName" className="text-start mb-3">
          <Form.Label className={getStyle.contactForm}>Name</Form.Label>
          <Form.Control
            className={`${getStyle.contactForm} border-0 rounded-4`}
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="text-start mb-3">
          <Form.Label className={getStyle.contactForm}>Email</Form.Label>
          <Form.Control
            className={`${getStyle.contactForm} border-0 rounded-4`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
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
            required
          />
        </Form.Group>

        <div className="d-flex flex-row justify-content-center mt-3">
          <Button
            className="mt-3"
            variant="primary"
            size={"lg"}
            type="submit"
          >
            <i className="bi bi-envelope-fill me-2"></i>
            Send Me A Message
          </Button>
        </div>
      </Form>
    </Container>
  )
}