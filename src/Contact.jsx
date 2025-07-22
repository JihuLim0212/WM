import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="section">
      <h2>{t('contact')}</h2>
      <form className="contact-form">
        <input type="text" placeholder={t('fullname')} />
        <input type="email" placeholder={t('workemail')} />
        <input type="text" placeholder={t('companysize')} />
        <textarea placeholder={t('help')} />
        <button type="submit">{t('send')}</button>
      </form>
    </div>
  );
} 