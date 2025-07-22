import { useTranslation } from 'react-i18next';

export default function Solution() {
  const { t } = useTranslation();
  return (
    <div className="section solution-section">
      <h2 className="section-title">{t('solution.title')}</h2>
      <p className="section-desc">{t('solution.desc1')}<br/>{t('solution.desc2')}</p>
      <div className="solution-features">
        <div className="feature-card">
          <h3>3D Motion Synthesis</h3>
          <p>{t('solution.feature1.desc')}</p>
        </div>
        <div className="feature-card">
          <h3>Custom AI Dataset</h3>
          <p>{t('solution.feature2.desc')}</p>
        </div>
        <div className="feature-card">
          <h3>API & Automation</h3>
          <p>{t('solution.feature3.desc')}</p>
        </div>
      </div>
    </div>
  );
} 