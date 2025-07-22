import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next';
import './App.css'
import westmoonLogo from './assets/westmoonlogowhite.png';
import reactLogo from './assets/react.svg';
import westmoonLogoWhite from './assets/westmoonlogowhite.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Solution from './Solution';
import Contact from './Contact';
import homeBg from './assets/Home.png';
import nvidiaLogo from './assets/NVIDIA.png';
import roadImg from './assets/road.png';
import roadengImg from './assets/roadeng.png';
const homeBgUrl = homeBg + '?v=' + Date.now();
const nvidiaLogoUrl = nvidiaLogo + '?v=' + Date.now();

const sections = [
  { id: 'home', key: 'menu.home', path: '/' },
  { id: 'about', key: 'menu.about', path: '/about' },
  { id: 'solution', key: 'menu.solution', path: '/solution' },
  { id: 'contact', key: 'menu.contact', path: '/contact' },
];

// Animation hook for section titles
function useSectionTitleAnimation() {
  const refs = useRef([]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-title');
          }
        });
      },
      { threshold: 0.5 }
    );
    refs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    return () => {
      refs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return refs;
}

function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'KR');
  const sectionTitleRefs = useSectionTitleAnimation();

  const handleLangChange = () => {
    const nextLang = lang === 'KR' ? 'EN' : 'KR';
    setLang(nextLang);
    i18n.changeLanguage(nextLang);
  };

  return (
    <Router basename="/WM">
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
                {/* Intro Section */}
                <section id="intro" className="section" style={{
                  backgroundImage: `url(${homeBgUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  width: '100vw',
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    background: 'rgba(0,0,0,0.55)',
                    borderRadius: '24px',
                    padding: '4rem 3rem',
                    maxWidth: '900px',
                    textAlign: 'center',
                  }}>
                    <h1 className="intro-title" style={{fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.13, letterSpacing: '-1px'}}>
                      Smarter AI Starts with<br/>Better Human Motion Data
                    </h1>
                    <p className="intro-desc">
                      We provide high-quality 3D motion datasets and synthetic data solutions for AI innovation.<br/>
                      Boost your competitiveness with data optimized for AI research and industry.
                    </p>
                  </div>
                </section>

                {/* 기업 소개 Section */}
                <section id="about-company" className="section">
                  <h2 ref={el => sectionTitleRefs.current[0] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>ABOUT WESTMOON</h2>
                  <p style={{fontSize: '1.5rem', fontWeight: 600, textAlign: 'center', marginBottom: '2.2rem'}}>{t('home.company.desc')}</p>
                  <div style={{marginTop: '2rem'}}>
                    {/* Enterprise Keywords box */}
                    <div style={{display:'flex',justifyContent:'center',margin:'1.5rem 0'}}>
                      <div style={{background:'linear-gradient(135deg, #011133 0%, #1520B6 100%)',color:'#fff',padding:'0.7rem 2.2rem',borderRadius:'12px',fontWeight:'bold',fontSize:'1.1rem',boxShadow:'0 2px 8px #0002',letterSpacing:'1px'}}>
                        Enterprise Keywords
                      </div>
                    </div>
                    {/* Keywords horizontal row with dividers */}
                    <div style={{display:'flex',justifyContent:'center',alignItems:'stretch',gap:0,flexWrap:'wrap',margin:'0 0 1.5rem 0',maxWidth:'1100px',minWidth:'320px',width:'100%',marginLeft:'auto',marginRight:'auto',background:'none',borderRadius:'10px',overflow:'hidden',boxShadow:'none'}}>
                      <div style={{flex:'1 1 0',padding:'2.2rem 2.2rem',color:'#fff',textAlign:'center',fontSize:'1.25rem',fontWeight:'600',background:'none',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minWidth:'220px'}}>
                        <div style={{fontWeight:'800',marginBottom:'0.7rem',fontSize:'2rem'}}>{t('home.company.keyword1.title')}</div>
                        <div style={{fontSize:'1.1rem'}}>{t('home.company.keyword1.desc')}</div>
                      </div>
                      <div style={{width:'2px',background:'#333',margin:'0 1.5rem'}}></div>
                      <div style={{flex:'1 1 0',padding:'2.2rem 2.2rem',color:'#fff',textAlign:'center',fontSize:'1.25rem',fontWeight:'600',background:'none',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minWidth:'220px'}}>
                        <div style={{fontWeight:'800',marginBottom:'0.7rem',fontSize:'2rem'}}>{t('home.company.keyword2.title')}</div>
                        <div style={{fontSize:'1.1rem'}}>{t('home.company.keyword2.desc')}</div>
                      </div>
                      <div style={{width:'2px',background:'#333',margin:'0 1.5rem'}}></div>
                      <div style={{flex:'1 1 0',padding:'2.2rem 2.2rem',color:'#fff',textAlign:'center',fontSize:'1.25rem',fontWeight:'600',background:'none',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',minWidth:'220px'}}>
                        <div style={{fontWeight:'800',marginBottom:'0.7rem',fontSize:'2rem',display:'flex',justifyContent:'center',alignItems:'center',height:'2.2rem'}}>
                          <img src={nvidiaLogoUrl} alt="NVIDIA" style={{height:'2.2rem',width:'auto',objectFit:'contain',display:'block'}} />
                        </div>
                        <div style={{fontSize:'1.1rem'}}>{t('home.company.keyword3.desc')}</div>
                      </div>
                    </div>
                    <div style={{marginTop: '1.5rem'}}>
                      <b>{t('home.company.usageTitle')}</b> <br/>
                      {t('home.company.usage')}
                    </div>
                  </div>
                </section>

                {/* 솔루션 Section */}
                <section id="solution" className="section">
                  <h2 ref={el => sectionTitleRefs.current[1] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>SOLUTION</h2>
                  <p>{t('home.solution.desc')}</p>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'center',flexWrap:'wrap',marginTop:'2rem'}}>
                    <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',minWidth:'220px',color:'#fff'}}>{t('home.solution.imgPlaceholder')}</div>
                    <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',minWidth:'220px',color:'#fff'}}>{t('home.solution.featurePlaceholder')}</div>
                  </div>
                </section>

                {/* 제품 소개 Section */}
                <section id="product" className="section">
                  <h2 ref={el => sectionTitleRefs.current[2] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>PRODUCT</h2>
                  <div style={{display:'flex',alignItems:'center',gap:'2rem',justifyContent:'center',flexWrap:'wrap'}}>
                    <img src={reactLogo} alt="Product Example" style={{width:'120px',height:'120px'}} />
                    <img src={westmoonLogoWhite} alt="Product Example2" style={{width:'120px',height:'120px',background:'#222',borderRadius:'12px'}} />
                    <div style={{maxWidth:'400px',textAlign:'left'}}>
                      <h4>{t('home.product.datasetTitle')}</h4>
                      <p>{t('home.product.datasetDesc')}</p>
                    </div>
                  </div>
                </section>

                {/* 고객 사례 Section */}
                <section id="cases" className="section">
                  <h2 ref={el => sectionTitleRefs.current[3] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>CUSTOMER CASES</h2>
                  <div style={{display:'flex',gap:'2rem',justifyContent:'center',flexWrap:'wrap'}}>
                    <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',minWidth:'220px',color:'#fff'}}>{t('home.cases.case1')}</div>
                    <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',minWidth:'220px',color:'#fff'}}>{t('home.cases.case2')}</div>
                  </div>
                </section>

                {/* 시장 분석 Section */}
                <section id="market" className="section">
                  <h2 ref={el => sectionTitleRefs.current[4] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>MARKET ANALYSIS</h2>
                  <p>{t('home.market.desc')}</p>
                  <div style={{background:'#181818',padding:'2rem',borderRadius:'12px',margin:'2rem auto',maxWidth:'600px',color:'#fff'}}>
                    <b>{t('home.market.graphTitle')}</b><br/>
                    <div style={{height:'120px',background:'#333',borderRadius:'8px',marginTop:'1rem',display:'flex',alignItems:'center',justifyContent:'center',color:'#aaa'}}>
                      [{t('home.market.graphPlaceholder')}]
                    </div>
                  </div>
                </section>

                {/* 기술 차별성 Section */}
                <section id="tech" className="section">
                  <h2 ref={el => sectionTitleRefs.current[5] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>TECHNICAL DIFFERENTIATION</h2>
                  <p>{t('home.tech.desc')}</p>
                  <div style={{background:'#181818',padding:'1.2rem 2rem',borderRadius:'12px',margin:'1.5rem auto',maxWidth:'400px',color:'#fff'}}>
                    <b>{t('home.tech.certTitle')}</b><br/>[{t('home.tech.certPlaceholder')}]
                  </div>
                </section>

                {/* 수익 모델 Section */}
                <section id="revenue" className="section">
                  <h2 ref={el => sectionTitleRefs.current[6] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>REVENUE MODEL</h2>
                  <ul style={{textAlign:'left',maxWidth:'600px',margin:'0 auto'}}>
                    <li>{t('home.revenue.item1')}</li>
                    <li>{t('home.revenue.item2')}</li>
                    <li>{t('home.revenue.item3')}</li>
                  </ul>
                </section>

                {/* 연혁 및 성과 Section */}
                <section id="history" className="section">
                  <h2 ref={el => sectionTitleRefs.current[7] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>HISTORY & ACHIEVEMENTS</h2>
                  <img
                    src={lang === 'EN' ? roadengImg : roadImg}
                    alt="History Roadmap"
                    style={{
                      display: 'block',
                      margin: '2rem auto',
                      width: '100%',
                      maxWidth: '1920px',
                      height: 'auto',
                      borderRadius: '18px',
                      boxShadow: '0 2px 16px #0005',
                      objectFit: 'contain'
                    }}
                  />
                </section>

                {/* 팀 소개 Section */}
                <section id="team" className="section">
                  <h2 ref={el => sectionTitleRefs.current[8] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>ORGANIZATION</h2>
                  <p style={{fontSize: '1.2rem', fontWeight: 500, textAlign: 'center', marginBottom: '2.2rem', color: '#ccc'}}>웨스트문은 AI, 그래픽스, 볼류매트릭 캡처, 글로벌 시장 전략 분야의 전문가가 함께하는 팀입니다.</p>
                  <div style={{display:'flex',gap:'3.5rem',justifyContent:'center',flexWrap:'wrap',marginTop:'2.5rem'}}>
                    {/* CEO */}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'260px'}}>
                      <img src="https://ui-avatars.com/api/?name=Huh+Myunghyun&background=011133&color=fff&rounded=true&size=128" alt="CEO 허명현" style={{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover',marginBottom:'1.1rem',boxShadow:'0 2px 12px #0007'}} />
                      <div style={{fontWeight:700,fontSize:'1.15rem',marginBottom:'0.5rem'}}>CEO 허 명 현</div>
                      <div style={{fontSize:'1rem',color:'#ccc',textAlign:'center',whiteSpace:'pre-line'}}>
                        스포츠공학 박사<br/>
                        한국스포츠개발원 연구원<br/>
                        XR,AI 융합 제품 기획 및 연구
                      </div>
                    </div>
                    {/* Director of R&D */}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'260px'}}>
                      <img src="https://ui-avatars.com/api/?name=Kim+Jinwoo&background=011133&color=fff&rounded=true&size=128" alt="Director of R&D 김진우" style={{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover',marginBottom:'1.1rem',boxShadow:'0 2px 12px #0007'}} />
                      <div style={{fontWeight:700,fontSize:'1.15rem',marginBottom:'0.5rem'}}>Director of R&D 김 진 우</div>
                      <div style={{fontSize:'1rem',color:'#ccc',textAlign:'center',whiteSpace:'pre-line'}}>
                        컴퓨터 비전&AI 전문가<br/>
                        AI공학 석사, 박사 과정 중<br/>
                        합성데이터 최적화 및 AI 성능 새건 담당
                      </div>
                    </div>
                    {/* CTO */}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'260px'}}>
                      <img src="https://ui-avatars.com/api/?name=Kim+Dongho&background=011133&color=fff&rounded=true&size=128" alt="CTO 김동호" style={{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover',marginBottom:'1.1rem',boxShadow:'0 2px 12px #0007'}} />
                      <div style={{fontWeight:700,fontSize:'1.15rem',marginBottom:'0.5rem'}}>CTO 김 동 호</div>
                      <div style={{fontSize:'1rem',color:'#ccc',textAlign:'center',whiteSpace:'pre-line'}}>
                        그래픽스 분야 30년 경력<br/>
                        삼성전자 연구원<br/>
                        한국컴퓨터그래픽스학회 회장
                      </div>
                    </div>
                    {/* Global Sales */}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'260px'}}>
                      <img src="https://ui-avatars.com/api/?name=Brett+Haslett+Lendrio&background=011133&color=fff&rounded=true&size=128" alt="Brett Haslett Lendrio" style={{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover',marginBottom:'1.1rem',boxShadow:'0 2px 12px #0007'}} />
                      <div style={{fontWeight:700,fontSize:'1.15rem',marginBottom:'0.5rem'}}>Brett Haslett Lendrio<br/>Global Sales</div>
                      <div style={{fontSize:'1rem',color:'#ccc',textAlign:'center',whiteSpace:'pre-line'}}>
                        AI 솔루션의 APAC EMEA 진출 전략 수립 및 실행 경험<br/>
                        유통망, 파트너십, 인증 전략 구축 전문가
                      </div>
                    </div>
                    {/* Volumetric Production */}
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',maxWidth:'260px'}}>
                      <img src="https://ui-avatars.com/api/?name=Ji+Myunggu&background=011133&color=fff&rounded=true&size=128" alt="지명구" style={{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover',marginBottom:'1.1rem',boxShadow:'0 2px 12px #0007'}} />
                      <div style={{fontWeight:700,fontSize:'1.15rem',marginBottom:'0.5rem'}}>지명구<br/>Volumetric Production</div>
                      <div style={{fontSize:'1rem',color:'#ccc',textAlign:'center',whiteSpace:'pre-line'}}>
                        IOFXMMC / SM Realive CTO 및 CEO<br/>
                        150여 개 이상 프로젝트 수행
                      </div>
                    </div>
                  </div>
                </section>

                {/* CONTACT Section */}
                <section id="contact" className="section">
                  <h2 ref={el => sectionTitleRefs.current[9] = el} className="section-title-anim" style={{fontSize: '2.8rem', fontWeight: 800, textAlign: 'center', marginBottom: '1.2rem'}}>CONTACT US</h2>
                  <form className="contact-form" style={{marginTop: '2rem'}}>
                    <input type="text" placeholder={t('fullname')} />
                    <input type="email" placeholder={t('workemail')} />
                    <input type="text" placeholder={t('companysize')} />
                    <textarea placeholder={t('help')} />
                    <button type="submit">{t('send')}</button>
                  </form>
                </section>
                {/* Footer */}
                <footer style={{width:'100vw',padding:'1.2rem 0 1.2rem 2.5rem',background:'none',color:'#888',fontSize:'1rem',position:'relative',textAlign:'left',boxSizing:'border-box'}}>
                  Westmoon Inc. All Rights Reserved.
                </footer>
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
