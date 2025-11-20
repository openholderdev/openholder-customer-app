import { Resend } from "resend";
import { IMailerManager } from "../domain/MailerManager";

export class MailerManagerController implements IMailerManager {
  private resend = new Resend(process.env.RESEND_API_KEY!);
  constructor() {}
  
  public async sendEmail(to: string, subject: string): Promise<void> {
    try {
      await this.resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: to,
        subject: subject,
        html: '<strong>Haz clic aquí para verificar</strong>',
      })
    } catch (error) { 
      console.error('Error sending email:', error);
    }
  }
}
