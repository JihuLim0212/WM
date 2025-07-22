import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  KR: {
    translation: {
      menu: {
        home: '홈',
        about: '회사소개',
        solution: '솔루션',
        contact: '문의',
      },
      intro: {
        title1: 'AI 합성데이터의 미래,',
        title2: '웨스트문',
        desc1: 'AI 혁신을 위한 고품질 3D 모션 데이터셋과 합성데이터 솔루션을 제공합니다.',
        desc2: 'AI 연구와 산업 현장에 최적화된 데이터로 경쟁력을 높이세요.',
        cta1: '솔루션 알아보기',
        cta2: '문의하기',
      },
      solution: {
        title: 'AI 데이터 생성/공급 솔루션',
        desc1: '웨스트문은 AI 학습에 최적화된 합성데이터를 쉽고 빠르게 생성·공급합니다.',
        desc2: '3D 모션, 이미지, 텍스트 등 다양한 데이터 타입을 지원하며, 고객 맞춤형 데이터 파이프라인을 제공합니다.',
        feature1: {
          title: '3D Motion Synthesis',
          desc: '실제와 유사한 고품질 3D 모션 데이터 자동 생성',
        },
        feature2: {
          title: 'Custom AI Dataset',
          desc: '고객 요구에 맞춘 맞춤형 합성 데이터셋 설계 및 공급',
        },
        feature3: {
          title: 'API & 자동화',
          desc: 'API 기반 데이터 요청 및 자동화된 공급 시스템',
        },
      },
      product: {
        title: '3D 모션 데이터셋',
        example: '최신 3D 모션 캡처 기술을 활용한 고품질 데이터셋을 제공합니다. 연구, 엔터테인먼트, 헬스케어 등 다양한 분야에 활용 가능합니다.'
      },
      who: '우리는 누구인가',
      tech: '기술력',
      news: {
        title: '뉴스 & 미디어',
        example: '웨스트문이 참여한 주요 프로젝트, 언론 보도, 최신 소식을 확인하세요.'
      },
      contact: '문의하기',
      name: '이름',
      email: '이메일',
      message: '문의 내용',
      send: '문의하기',
      about: {
        title: '회사소개',
        example: '웨스트문은 AI 합성데이터 분야의 선도 기업으로, 혁신적인 데이터 솔루션을 제공합니다. 다양한 산업에서 신뢰받는 파트너로 성장하고 있습니다.'
      },
      technology: {
        title: '기술력',
        example: 'AI 기반 데이터 생성, 자동화 파이프라인, 고도화된 품질 관리 시스템 등 첨단 기술을 보유하고 있습니다.'
      },
      fullname: '이름(성명)',
      workemail: '업무용 이메일',
      companysize: '회사 규모',
      help: '무엇을 도와드릴까요?',
    },
  },
  EN: {
    translation: {
      menu: {
        home: 'HOME',
        about: 'ABOUT US',
        solution: 'SOLUTION',
        contact: 'CONTACT',
      },
      intro: {
        title1: 'The Future of AI Synthetic Data,',
        title2: 'WESTMOON',
        desc1: 'We provide high-quality 3D motion datasets and synthetic data solutions for AI innovation.',
        desc2: 'Boost your competitiveness with data optimized for AI research and industry.',
        cta1: 'See Solution',
        cta2: 'Contact Us',
      },
      solution: {
        title: 'AI Data Generation & Supply Solution',
        desc1: 'WESTMOON enables fast and easy generation & supply of synthetic data optimized for AI training.',
        desc2: 'Supports various data types such as 3D motion, image, and text, and provides custom data pipelines.',
        feature1: {
          title: '3D Motion Synthesis',
          desc: 'Automatically generate high-quality 3D motion data similar to real world',
        },
        feature2: {
          title: 'Custom AI Dataset',
          desc: 'Design and supply custom synthetic datasets tailored to client needs',
        },
        feature3: {
          title: 'API & Automation',
          desc: 'API-based data requests and automated supply system',
        },
      },
      product: {
        title: '3D Motion Datasets',
        example: 'We offer high-quality datasets using the latest 3D motion capture technology. Applicable to research, entertainment, healthcare, and more.'
      },
      who: 'Who We Are',
      tech: 'Technology',
      news: {
        title: 'News & Media',
        example: 'Check out major projects, press releases, and the latest news about WESTMOON.'
      },
      contact: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      about: {
        title: 'ABOUT US',
        example: 'WESTMOON is a leading company in AI synthetic data, providing innovative data solutions. We are a trusted partner across various industries.'
      },
      technology: {
        title: 'Technology',
        example: 'We possess advanced technologies such as AI-based data generation, automated pipelines, and sophisticated quality control systems.'
      },
      fullname: 'Full name',
      workemail: 'Work email',
      companysize: 'Company size',
      help: 'How can we help?',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'EN', // 기본 언어를 EN으로 변경
  fallbackLng: 'EN',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n; 