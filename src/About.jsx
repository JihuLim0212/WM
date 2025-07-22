import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="section">
      <h2>{t('about.title')}</h2>
      <p>{t('about.example')}</p>
    </div>
  );
} 