import { Resend } from 'resend';

const resend = new Resend('re_DdXniUKg_CVm1hY8dCrDuR13U4tn41qyw');

export const useResend = async ({ email, purpose, phone_number, message }: { email: string | undefined; purpose: string | undefined; message: string | undefined; phone_number: string | undefined; }) => {
  if(!email) return;
  else{

    await resend.emails.send({
      from: email,
      to: 'mariomark407@gmail.com',
      subject: `${(!purpose) ? "Help Wanted!" : purpose}`,
      html: `<p>${(!message) ? "A new position just opened up and we need your asistance!" : message}</p>
      <p>${(!phone_number) ? "No-Number" : phone_number}</p>`
    });
  }  
}