import { useState } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'
import westmoonLogo from './assets/westmoonlogowhite.png';
import reactLogo from './assets/react.svg';
import westmoonLogoWhite from './assets/westmoonlogowhite.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Solution from './Solution';
import Contact from './Contact';

const sections = [
  { id: 'home', key: 'menu.home', path: '/' },
  { id: 'about', key: 'menu.about', path: '/about' },
  { id: 'solution', key: 'menu.solution', path: '/solution' },
  { id: 'contact', key: 'menu.contact', path: '/contact' },
];

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'KR');

  const handleLangChange = () => {
    const nextLang = lang === 'KR' ? 'EN' : 'KR';
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
  };

  return (
    <Router>
      <div className="app-dark-bg">
        <nav className="navbar">
          <Link to="/">
            <img src={westmoonLogo} alt="WESTMOON Logo" className="logo-img" />
          </Link>
          <div className="navbar-center">
            <ul className="nav-menu">
              <li><Link to="/">{t('menu.home')}</Link></li>
              <li><Link to="/about">{t('menu.about')}</Link></li>
              <li><Link to="/solution">{t('menu.solution')}</Link></li>
              <li><Link to="/contact">{t('menu.contact')}</Link></li>
            </ul>
          </div>
          <button className="lang-btn" onClick={handleLangChange}>{lang}</button>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                {/* 인트로 섹션 */}
                <section id="home" className="section intro-section">
                  <div className="intro-content">
                    <h1 className="intro-title">{t('intro.title1')} <span className="highlight">{t('intro.title2')}</span></h1>
                    <p className="intro-desc">{t('intro.desc1')}<br/>{t('intro.desc2')}</p>
                    <div className="intro-cta-group">
                      <Link to="/solution" className="intro-cta">{t('intro.cta1')}</Link>
                      <Link to="/contact" className="intro-cta secondary">{t('intro.cta2')}</Link>
                    </div>
                  </div>
                  <div className="intro-bg-graphic"></div>
                </section>
                {/* 솔루션 섹션 */}
                <section id="solution" className="section solution-section">
                  <div className="solution-content">
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
                </section>
                {/* 이하 기존 섹션 */}
                <section id="product" className="section">
                  <h2>{t('product.title')}</h2>
                  <div style={{display:'flex',alignItems:'center',gap:'2rem',justifyContent:'center',flexWrap:'wrap'}}>
                    <img src={reactLogo} alt="Product Example" style={{width:'120px',height:'120px'}} />
                    <img src={westmoonLogoWhite} alt="Product Example2" style={{width:'120px',height:'120px',background:'#222',borderRadius:'12px'}} />
                    <div style={{maxWidth:'400px',textAlign:'left'}}>
                      <h4>AI 3D Motion Dataset</h4>
                      <p>최신 3D 모션 캡처 기술로 수집된 10,000+ 고품질 동작 데이터. 연구, 엔터테인먼트, 헬스케어 등 다양한 분야에 활용 가능합니다.</p>
                    </div>
                  </div>
                </section>
                <section id="about" className="section">
                  <h2>{t('about.title')}</h2>
                  <p>{t('about.example')}</p>
                </section>
                <section id="technology" className="section">
                  <h2>{t('technology.title')}</h2>
                  <div style={{display:'flex',gap:'2rem',alignItems:'flex-start',flexWrap:'wrap',justifyContent:'center'}}>
                    <div style={{maxWidth:'400px',textAlign:'left'}}>
                      <h4>AI 기반 데이터 생성 엔진</h4>
                      <p>딥러닝 기반 합성 데이터 생성, 자동화 파이프라인, 품질 관리 시스템 등 첨단 기술을 보유하고 있습니다.</p>
                    </div>
                    <div style={{maxWidth:'400px',textAlign:'left'}}>
                      <h4>실시간 데이터 검증</h4>
                      <p>자동화된 검증 시스템으로 데이터의 신뢰성과 정확성을 보장합니다.</p>
                    </div>
                  </div>
                </section>
                <section id="news" className="section">
                  <h2>{t('news.title')}</h2>
                  <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',alignItems:'center'}}>
                    <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',maxWidth:'600px',width:'100%'}}>
                      <h4>2024.05.01 [보도자료]</h4>
                      <p>웨스트문, AI 합성데이터 솔루션 글로벌 컨퍼런스 참가</p>
                    </div>
                    <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',maxWidth:'600px',width:'100%'}}>
                      <h4>2024.04.15 [뉴스]</h4>
                      <p>AI 3D 모션 데이터셋, 국내외 연구기관에 공급 개시</p>
                    </div>
                  </div>
                </section>
                <section id="contact" className="section">
                  <h2>{t('contact')}</h2>
                  <form className="contact-form">
                    <input type="text" placeholder={t('fullname')} />
                    <input type="email" placeholder={t('workemail')} />
                    <input type="text" placeholder={t('companysize')} />
                    <textarea placeholder={t('help')} />
                    <button type="submit">{t('send')}</button>
                  </form>
                </section>
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
