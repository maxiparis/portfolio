import express = require("express");
import axios from "axios";

import { config } from 'dotenv';
config()

// @ts-ignore
import cors = require('cors');

const app = express();
const PORT = 3001;

// Serve up the static content
app.use(cors());
//make sure to parse the body from json
app.use(express.json());
app.use(express.static('dist'));


const apiRouter = express.Router();
app.use('/api', apiRouter);

/**
 * Contacts the EmailJS api to send the email.
 *
 * Expecting a body like:
 * {
 *   name: string,
 *   email: string,
 *   message: string,
 * }
 *
 */
apiRouter.post('/sendemail', async (req, res) => {
  let {name, email, message} = req.body;
  if (!name || !email || !message) {
    res.status(400).json({message: 'Missing required fields'})
    return
  }

  let service_id = process.env.EMAILJS_SERVICE_ID
  let template_id = process.env.EMAILJS_TEMPLATE_ID
  let public_key = process.env.EMAILJS_PUBLIC_KEY

  if (!service_id || !template_id || !public_key) {
    console.log('Missing required env variables')
    console.log(service_id, template_id, public_key)
    res.status(500).json({message: 'Missing required env variables'})
    return
  }

  try {
    let data = {
      service_id,
      template_id,
      user_id: public_key,
      template_params: {
        name,
        message,
        email,
      }
    }

    await axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    res.status(200).send({ message: 'Email sent' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error sending email' })
  }
})







// ------------------------------------------
// ---------------- Start the server ----------------
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});