export interface IMailerManager {
  sendEmail: (to: string, subject: string) => Promise<void>;
};
