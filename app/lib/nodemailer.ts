import nodemailer from 'nodemailer';

import { Form } from '@/api/mail/route';

const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASS;

export async function sendMail({ name, email, message }: Form) {
  return new Promise<void>((resolve, reject) => {
    try {
      const transporter = nodemailer.createTransport(
        {
          service: 'gmail',
          auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD,
          },
        },
        { from: email, to: EMAIL }
      );

      transporter.sendMail(
        {
          subject: 'Portfolio Mail',
          sender: name,
          text: `From ${name}\n\n${message}`,
          html: template({ name, email, message }),
        },
        (err, info) => {
          if (err) reject(new Error(err?.message));
          else resolve();
        }
      );
    } catch (error: any) {
      reject(Error(error?.message ?? 'nodemailer exception'));
    }
  });
}

const template = ({ name, message }: Form) => `
  <h4>Sender: ${name}</h4>
  <br/>
  <div>${message.replace(/\n/g, '<br>')}</div>
`;
