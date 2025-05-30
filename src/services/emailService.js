// src/emailService.js
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_defs57l";
const TEMPLATE_ID = "template_f6k3oy4";
const USER_ID = "iP81wysJmLPKiDHrl";

export function sendAppointmentEmail(toEmail, date, time) {
  const templateParams = {
    to_email: toEmail,
    appointment_date: date,
    appointment_time: time
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
}
