// ============================
// Language Toggle (EN / KO)
// ============================
const translations = {
  // ── Shared sidebar & nav ──
  'sidebar.tagline': {
    en: '🎓 NYU Tandon – MS Computer Engineering<br>🧠 Focus: Efficient AI Systems + Digital Hardware Design',
    ko: '🎓 NYU Tandon – 컴퓨터공학 석사<br>🧠 연구 분야: 효율적 AI 시스템 + 디지털 하드웨어 설계',
  },
  'nav.home': { en: 'Home', ko: '홈' },
  'nav.about': { en: 'About Me', ko: '소개' },
  'nav.bio': { en: 'Bio', ko: '이력' },
  'nav.projects': { en: 'Projects', ko: '프로젝트' },
  'nav.others': { en: 'Others', ko: '기타' },
  'sidebar.resumes': { en: '📄 Resumes', ko: '📄 이력서' },
  'sidebar.resume-ai': { en: 'Download Resume (AI)', ko: '이력서 다운로드 (AI)' },
  'sidebar.resume-ee': { en: 'Download Resume (EE)', ko: '이력서 다운로드 (EE)' },
  'footer': {
    en: '&copy; 2026 Jo Choi. Hosted on <a href="https://pages.github.com">GitHub Pages</a>.',
    ko: '&copy; 2026 Jo Choi. <a href="https://pages.github.com">GitHub Pages</a>에서 호스팅.',
  },

  // ── index.html ──
  'index.welcome': { en: 'Welcome!', ko: '환영합니다!' },
  'index.intro': {
    en: 'Hi, I\'m <strong>Jo Choi (YoungJo Choi)</strong> and I\'m a Computer Engineering M.S. student at <strong>New York University</strong>, expected to graduate in May 2026. My work sits at the intersection of <strong>AI/ML</strong> and <strong>hardware design</strong>, from building efficient multimodal models to designing hardware.',
    ko: '안녕하세요, 저는 <strong>최영조 (Jo Choi)</strong>입니다. <strong>뉴욕대학교 (NYU)</strong> 컴퓨터공학 석사과정에 재학 중이며, 2026년 5월 졸업 예정입니다. <strong>AI/ML</strong>과 <strong>하드웨어 설계</strong>의 교차점에서, 효율적인 멀티모달 모델 구축부터 하드웨어 설계까지 다양한 연구를 하고 있습니다.',
  },
  'index.passion': {
    en: 'I\'m passionate about bridging hardware and software to build efficient, scalable AI systems.',
    ko: '하드웨어와 소프트웨어를 연결하여 효율적이고 확장 가능한 AI 시스템을 구축하는 데 열정을 가지고 있습니다.',
  },
  'index.featured': { en: 'Featured Projects', ko: '주요 프로젝트' },
  'index.feat-vlm-title': { en: 'Efficient Vision-Language Model', ko: '효율적 시각-언어 모델 (VLM)' },
  'index.feat-vlm-desc': {
    en: 'Reproduced SparseVLM on LLaVA-1.5-7B, reducing visual tokens by 30% with minimal accuracy loss. Outperformed three weight-pruning baselines on VQAv2.',
    ko: 'LLaVA-1.5-7B에서 SparseVLM을 재현하여, 최소한의 정확도 손실로 시각 토큰을 30% 감소시켰습니다. VQAv2에서 세 가지 가중치 프루닝 기준선을 능가했습니다.',
  },
  'index.feat-soc-title': { en: 'OpenPOWER SoC + NN Accelerator', ko: 'OpenPOWER SoC + 신경망 가속기' },
  'index.feat-soc-desc': {
    en: 'FPGA/ASIC-ready INT8 systolic array accelerator for neural network inference on OpenPOWER systems.',
    ko: 'OpenPOWER 시스템에서 신경망 추론을 위한 FPGA/ASIC 대응 INT8 시스톨릭 어레이 가속기.',
  },
  'index.learn-more': { en: 'Learn more →', ko: '더 보기 →' },
  'index.quick-links': { en: 'Quick Links', ko: '빠른 링크' },
  'index.link-bio': { en: 'Bio — Education, Experience & Skills', ko: '이력 — 학력, 경력 & 기술' },
  'index.link-projects': { en: 'Projects — AI & Hardware', ko: '프로젝트 — AI & 하드웨어' },
  'index.link-others': { en: 'Others — Awards, Leadership & Contact', ko: '기타 — 수상, 리더십 & 연락처' },

  // ── about.html ──
  'about.title': { en: 'About Me', ko: '소개' },
  'about.journey-title': { en: '🌏 My Journey', ko: '🌏 나의 여정' },
  'about.journey-p1': {
    en: 'I grew up in Seoul, Korea, surrounded by the fast-paced energy of one of the world\'s most tech-driven cities. In 2022, I made the leap across the Pacific to Chicago, where I pursued a dual degree in Computer Engineering at Illinois Institute of Technology. Two years later, I moved to New York City to begin my M.S. at NYU Tandon — and I\'ve been thriving in the city\'s electric energy ever since.',
    ko: '저는 세계에서 가장 기술 중심적인 도시 중 하나인 서울에서 자랐습니다. 2022년에 태평양을 건너 시카고로 이주하여 일리노이 공과대학교(IIT)에서 컴퓨터공학 복수학위를 취득했습니다. 2년 후, NYU Tandon에서 석사 과정을 시작하기 위해 뉴욕으로 이동했으며, 이후로 이 도시의 활기찬 에너지 속에서 성장하고 있습니다.',
  },
  'about.journey-p2': {
    en: 'My academic passion lies at the intersection of <strong>efficient AI</strong> and <strong>digital hardware design</strong>. I believe the next frontier isn\'t just about building bigger models — it\'s about making them leaner, faster, and more accessible. From designing sparse Vision-Language Models to building neural network accelerators on FPGA/ASIC platforms, I\'m driven by the challenge of co-optimizing across the full stack, from algorithms down to silicon.',
    ko: '저의 학문적 열정은 <strong>효율적 AI</strong>와 <strong>디지털 하드웨어 설계</strong>의 교차점에 있습니다. 다음 프론티어는 단순히 더 큰 모델을 만드는 것이 아니라, 더 가볍고, 빠르고, 접근 가능하게 만드는 것이라고 믿습니다. 희소 시각-언어 모델 설계부터 FPGA/ASIC 플랫폼에서의 신경망 가속기 구축까지, 알고리즘에서 실리콘까지 전체 스택을 공동 최적화하는 도전에 매진하고 있습니다.',
  },
  'about.beyond-title': { en: '🤝 Beyond the Lab', ko: '🤝 연구실 밖에서' },
  'about.beyond-p1': {
    en: 'Engineering is what I do, but connecting with people is who I am. At Illinois Tech, I founded the <strong>Korean Student Association</strong> from scratch — rallying students, organizing cultural events, and building a community that didn\'t exist before. I also joined <strong>Triangle Fraternity</strong>, where I learned as much about leadership and teamwork as I did about engineering.',
    ko: '공학은 제가 하는 일이지만, 사람들과 소통하는 것이 저의 본질입니다. 일리노이 공대에서 <strong>한인학생회</strong>를 처음부터 창립하여 학생들을 모으고, 문화 행사를 기획하고, 이전에 없던 커뮤니티를 만들었습니다. 또한 <strong>Triangle Fraternity</strong>에 가입하여 공학만큼이나 리더십과 팀워크에 대해 많이 배웠습니다.',
  },
  'about.beyond-p2': {
    en: 'Whether it\'s rallying a student org, collaborating on a group project, or just grabbing coffee with a new friend, I thrive on bringing people together and making things happen.',
    ko: '학생 단체를 이끌든, 그룹 프로젝트에서 협업하든, 새로운 친구와 커피를 마시든, 저는 사람들을 모으고 일을 만들어내는 것에서 활력을 얻습니다.',
  },
  'about.fun-title': { en: '⚡ Fun Facts', ko: '⚡ 재미있는 사실' },
  'about.fun-quote': {
    en: '☕ "Yes, I\'m a certified barista, professionally caffeinated."',
    ko: '☕ "네, 저는 자격증 있는 바리스타입니다. 전문적으로 카페인 충전 중이죠."',
  },
  'about.fun-cappuccino': {
    en: 'My go-to is a good cappuccino — and yes, I can make one from scratch.',
    ko: '제가 즐겨 마시는 건 카푸치노예요 — 네, 직접 만들 수도 있습니다.',
  },
  'about.fun-sports': {
    en: 'Outside of work, I\'m a big <strong>soccer</strong> fan and love <strong>working out</strong>. Staying active keeps my mind sharp and my energy up! It\'s how I recharge between debugging sessions and hardware simulations.',
    ko: '일 외에는 <strong>축구</strong>를 좋아하고 <strong>운동</strong>을 즐깁니다. 활동적으로 지내는 것이 두뇌를 날카롭게 하고 에너지를 높여줍니다! 디버깅과 하드웨어 시뮬레이션 사이에 재충전하는 방법이죠.',
  },
  'about.travel-title': { en: '✈️ Travel', ko: '✈️ 여행' },
  'about.travel-intro': {
    en: 'I love discovering new places, immersing myself in different cultures, and seeing the world from new perspectives. Here\'s a glimpse of the places I\'ve explored so far:',
    ko: '새로운 장소를 발견하고, 다양한 문화에 몰입하며, 새로운 관점에서 세계를 바라보는 것을 좋아합니다. 지금까지 탐험한 장소들을 소개합니다:',
  },
  'about.travel-hint': {
    en: '💡 Click on a trip to add photos later!',
    ko: '💡 여행을 클릭하면 사진을 볼 수 있어요!',
  },

  // ── bio.html ──
  'bio.title': { en: 'Bio', ko: '이력' },
  'bio.toc-education': { en: 'Education', ko: '학력' },
  'bio.toc-work': { en: 'Work Experience', ko: '경력' },
  'bio.toc-research': { en: 'Research Experience', ko: '연구 경험' },
  'bio.toc-skills': { en: 'Skills', ko: '기술' },
  'bio.toc-coursework': { en: 'Relevant Coursework', ko: '관련 수업' },
  'bio.education': { en: 'Education', ko: '학력' },
  'bio.nyu-degree': { en: 'M.S. in Computer Engineering', ko: '컴퓨터공학 석사' },
  'bio.iit-degree': { en: 'B.S. in Computer Engineering, Minor in Artificial Intelligence', ko: '컴퓨터공학 학사, 인공지능 부전공' },
  'bio.inha-degree': { en: 'B.S. in Electronic Engineering', ko: '전자공학 학사' },
  'bio.work': { en: 'Work Experience', ko: '경력' },
  'bio.ta-title': { en: 'Teaching Assistant — New York University', ko: '조교 — 뉴욕대학교' },
  'bio.ta-1': {
    en: 'Teaching lab sections for ECE-UY 3114 Fundamentals of Electronics I',
    ko: 'ECE-UY 3114 전자공학 기초 I 실험 수업 담당',
  },
  'bio.ta-2': {
    en: 'Ran experiments across amplifiers, diodes, and transistor circuits',
    ko: '증폭기, 다이오드, 트랜지스터 회로 실험 진행',
  },
  'bio.intern-title': { en: 'Data Analyst Intern — C&B Trading, Seoul, Korea', ko: '데이터 분석 인턴 — C&B Trading, 서울' },
  'bio.intern-1': {
    en: 'Improved sales forecast accuracy to 90% with a predictive model',
    ko: '예측 모델로 매출 예측 정확도를 90%로 향상',
  },
  'bio.intern-2': {
    en: 'Built Excel reports and PowerBI dashboards identifying three key process bottlenecks for senior management',
    ko: '경영진을 위한 Excel 리포트 및 PowerBI 대시보드를 구축하여 3가지 핵심 프로세스 병목 현상 파악',
  },
  'bio.military-title': { en: 'Republic of Korea (ROK) Military', ko: '대한민국 군 복무' },
  'bio.military-1': {
    en: 'Honorably discharged as Sergeant and Squad Leader after 21 months of service',
    ko: '21개월 복무 후 병장 및 분대장으로 만기 전역',
  },
  'bio.research': { en: 'Research Experience', ko: '연구 경험' },
  'bio.skills': { en: 'Skills', ko: '기술' },
  'bio.coursework': { en: 'Relevant Coursework', ko: '관련 수업' },

  // Skill categories
  'skill.aiml': { en: 'AI / Machine Learning', ko: 'AI / 머신러닝' },
  'skill.hw': { en: 'Hardware / Chip Design', ko: '하드웨어 / 칩 설계' },
  'skill.sw': { en: 'Software Programming', ko: '소프트웨어 프로그래밍' },
  'skill.ee': { en: 'Electrical Engineering', ko: '전자공학' },

  // Skill group titles
  'skill.models': { en: 'Models', ko: '모델' },
  'skill.domains': { en: 'Domains', ko: '응용 분야' },
  'skill.frameworks': { en: 'Frameworks & Tools', ko: '프레임워크 & 도구' },
  'skill.design': { en: 'Design', ko: '설계' },
  'skill.protocols': { en: 'Protocols & Methodologies', ko: '프로토콜 & 방법론' },
  'skill.verification': { en: 'Verification & Testing', ko: '검증 & 테스트' },
  'skill.lang-tools': { en: 'Languages & Tools', ko: '언어 & 도구' },
  'skill.languages': { en: 'Languages', ko: '언어' },
  'skill.web-apis': { en: 'Web & APIs', ko: '웹 & API' },
  'skill.infrastructure': { en: 'Infrastructure', ko: '인프라' },
  'skill.circuit': { en: 'Circuit Design', ko: '회로 설계' },
  'skill.signal': { en: 'Signal Processing', ko: '신호 처리' },
  'skill.lab-sim': { en: 'Lab & Simulation', ko: '실험 & 시뮬레이션' },

  // Meta labels
  'meta.date': { en: 'Date', ko: '기간' },
  'meta.location': { en: 'Location', ko: '장소' },

  // ── projects.html ──
  'proj.title': { en: 'Projects', ko: '프로젝트' },
  'proj.toc-ai': { en: 'AI / Machine Learning', ko: 'AI / 머신러닝' },
  'proj.toc-hw': { en: 'Hardware / Chip Design', ko: '하드웨어 / 칩 설계' },
  'proj.ai-heading': { en: 'AI / Machine Learning', ko: 'AI / 머신러닝' },
  'proj.hw-heading': { en: 'Hardware / Chip Design', ko: '하드웨어 / 칩 설계' },

  // Gaze heatmap project
  'proj.gaze-title': {
    en: 'Multimodal Gaze Heatmap Prediction from Egocentric Video',
    ko: '1인칭 비디오에서의 멀티모달 시선 히트맵 예측',
  },
  'proj.gaze-1': {
    en: 'Predict where a person is looking (gaze heatmap) from egocentric cooking video frames and audio using a lightweight multimodal deep learning model designed for mobile deployment',
    ko: '모바일 배포를 위한 경량 멀티모달 딥러닝 모델을 사용하여 1인칭 요리 비디오 프레임과 오디오에서 시선 히트맵 예측',
  },
  'proj.gaze-2': {
    en: 'Built a compact 3.4M-parameter FiLM-based fusion model in PyTorch (~13 MB, ~2 GFLOPs, ~40ms CPU latency), trained on 110K+ samples from EGTEA Gaze+, achieving 7.94 px mean gaze prediction error on a 56×56 heatmap grid',
    ko: 'PyTorch로 3.4M 파라미터 FiLM 기반 융합 모델 구축 (~13 MB, ~2 GFLOPs, ~40ms CPU 지연), EGTEA Gaze+ 110K+ 샘플로 학습, 56×56 히트맵에서 7.94 px 평균 시선 예측 오차 달성',
  },

  // VLM project
  'proj.vlm-title': {
    en: 'Efficient Vision-Language Model (VLM) Design with Sparse Techniques',
    ko: '희소 기법을 활용한 효율적 시각-언어 모델 (VLM) 설계',
  },
  'proj.vlm-1': {
    en: 'Reproduced SparseVLM on LLaVA-1.5-7B, reducing visual tokens by 30% with minimal accuracy loss',
    ko: 'LLaVA-1.5-7B에서 SparseVLM을 재현하여, 최소한의 정확도 손실로 시각 토큰을 30% 감소',
  },
  'proj.vlm-2': {
    en: 'Outperformed three weight-pruning baselines on 500 VQAv2 samples',
    ko: '500개 VQAv2 샘플에서 세 가지 가중치 프루닝 기준선을 능가',
  },

  // Professor eval project
  'proj.prof-title': {
    en: 'Gender Bias & Rating Prediction in Higher Education Evaluations',
    ko: '고등교육 평가에서의 성별 편향 및 평점 예측',
  },
  'proj.prof-1': {
    en: 'Analyzed 90K professor records to assess gender bias in student evaluations using nonparametric testing and bootstrap effect size estimation',
    ko: '비모수 검정 및 부트스트랩 효과 크기 추정을 사용하여 학생 평가의 성별 편향을 분석 (교수 9만 건)',
  },
  'proj.prof-2': {
    en: 'Built Ridge regression and logistic regression pipelines achieving R² = 0.53 for rating prediction and ROC AUC = 0.77 for classification',
    ko: 'Ridge 회귀 및 로지스틱 회귀 파이프라인 구축, 평점 예측 R² = 0.53, 분류 ROC AUC = 0.77 달성',
  },
  'proj.prof-3': {
    en: 'Found statistically significant but practically small gender bias in ratings, with teaching-style tags being the strongest predictors of professor evaluations',
    ko: '평점에서 통계적으로 유의하지만 실질적으로 작은 성별 편향을 발견, 교수법 태그가 교수 평가의 가장 강력한 예측 변수임을 확인',
  },

  // Sales forecast
  'proj.sales-title': { en: 'Sales Forecasting Model', ko: '매출 예측 모델' },
  'proj.sales-1': {
    en: 'Built a predictive model that improved sales forecast accuracy to <strong>90%</strong>',
    ko: '매출 예측 정확도를 <strong>90%</strong>로 향상시키는 예측 모델 구축',
  },
  'proj.sales-2': {
    en: 'Created Excel reports and PowerBI dashboards for senior management',
    ko: '경영진을 위한 Excel 리포트 및 PowerBI 대시보드 제작',
  },

  // Mouse tracker
  'proj.mouse-title': { en: 'Mouse Motion Tracker using Deep Learning', ko: '딥러닝 기반 마우스 행동 추적기' },
  'proj.mouse-1': {
    en: 'Developed an RNN-based multimodal system using visual and audio data',
    ko: '시각 및 오디오 데이터를 활용한 RNN 기반 멀티모달 시스템 개발',
  },
  'proj.mouse-2': {
    en: 'Recognized six mouse behaviors with <strong>90% accuracy</strong>',
    ko: '6가지 마우스 행동을 <strong>90% 정확도</strong>로 인식',
  },

  // OpenPOWER
  'proj.soc-title': {
    en: 'OpenPOWER SoC Design with Microwatt CPU and Neural Network Accelerator',
    ko: 'Microwatt CPU 및 신경망 가속기를 활용한 OpenPOWER SoC 설계',
  },
  'proj.soc-1': {
    en: 'Designing a Quantized Neural Net Accelerator with the Microwatt OpenPOWER CPU on SKY130 process',
    ko: 'SKY130 공정에서 Microwatt OpenPOWER CPU와 양자화 신경망 가속기 설계',
  },
  'proj.soc-2': {
    en: 'Enabling efficient ML inference via memory-mapped I/O and custom instruction paths',
    ko: '메모리 맵 I/O 및 커스텀 명령어 경로를 통한 효율적 ML 추론 구현',
  },

  // Nanoribbon
  'proj.nano-title': { en: 'Superconducting Nanoribbon Device Fabrication', ko: '초전도 나노리본 소자 제작' },
  'proj.nano-1': {
    en: 'Developed superconducting nanoribbon wires on hBN substrate',
    ko: 'hBN 기판 위에 초전도 나노리본 와이어 개발',
  },
  'proj.nano-2': {
    en: 'Engineered recipes for E-beam lithography, Deep Reactive-Ion Etching, and Buffered Oxide Etching in a cleanroom environment',
    ko: '클린룸 환경에서 전자빔 리소그래피, 심층 반응성 이온 식각(DRIE), 완충 산화물 식각(BOE) 레시피 개발',
  },

  // DDR4 Memory Controller
  'proj.ddr4-title': {
    en: 'DDR4 Memory Controller',
    ko: 'DDR4 메모리 컨트롤러',
  },
  'proj.ddr4-1': {
    en: 'Designed a DDR4-2400 SDRAM memory controller from scratch in SystemVerilog with 7 modular RTL blocks: request queue, command scheduler, bank state machines (×16), timing enforcer, data path, refresh controller, and address decoder',
    ko: 'SystemVerilog로 DDR4-2400 SDRAM 메모리 컨트롤러를 처음부터 설계, 7개 모듈형 RTL 블록 구현: 요청 큐, 명령 스케줄러, 뱅크 상태 머신(×16), 타이밍 엔포서, 데이터 경로, 리프레시 컨트롤러, 주소 디코더',
  },
  'proj.ddr4-2': {
    en: 'Passed all 5 verification tests (single R/W, row hits, row conflicts, bank-group interleaving, multi-bank bursts) with zero timing violations in a behavioral DRAM model',
    ko: '동작 DRAM 모델에서 타이밍 위반 없이 5개 검증 테스트 전체 통과 (단일 R/W, 로우 히트, 로우 충돌, 뱅크 그룹 인터리빙, 멀티 뱅크 버스트)',
  },

  // Parkinson's detector
  'proj.parkinson-title': {
    en: 'Real-Time Parkinson\'s Tremor & Dyskinesia Detector',
    ko: '실시간 파킨슨병 떨림 및 이상운동 감지기',
  },
  'proj.parkinson-1': {
    en: 'Built a real-time embedded system on STM32L475 that detects Parkinson\'s tremor (3–5 Hz) and dyskinesia (5–7 Hz) using accelerometer data and FFT-based frequency analysis',
    ko: 'STM32L475에서 가속도계 데이터와 FFT 기반 주파수 분석을 활용하여 파킨슨병 떨림(3–5 Hz) 및 이상운동(5–7 Hz)을 감지하는 실시간 임베디드 시스템 구축',
  },
  'proj.parkinson-2': {
    en: 'Implemented a signal processing pipeline (DC offset removal, Hann windowing, 256-point FFT) capturing 156 samples at 52 Hz in 3-second analysis windows with real-time LED feedback',
    ko: '신호 처리 파이프라인 구현 (DC 오프셋 제거, 한 윈도우, 256포인트 FFT), 52 Hz에서 156개 샘플을 3초 분석 윈도우로 캡처하고 실시간 LED 피드백 제공',
  },

  // ── others.html ──
  'others.title': { en: 'Others', ko: '기타' },
  'others.awards': { en: 'Awards & Scholarships', ko: '수상 & 장학금' },
  'others.deans': { en: 'Dean\'s List', ko: '학장 명단 (Dean\'s List)' },
  'others.honor': { en: 'Honor Student & Merit Scholarship', ko: '우등생 & 성적우수 장학금' },
  'others.leadership': { en: 'Leadership', ko: '리더십' },
  'others.ksa-title': { en: 'President & Founder — Korean Student Association', ko: '회장 & 창립자 — 한인학생회' },
  'others.ksa-desc': {
    en: 'Founded and led the Korean Student Association, organizing cultural events and building community for Korean students at IIT.',
    ko: '한인학생회를 창립 및 이끌며, 문화 행사를 기획하고 IIT 한국 학생들을 위한 커뮤니티 구축.',
  },
  'others.frat-title': { en: 'Active Member — Triangle Fraternity (Armour Chapter)', ko: '활동 회원 — Triangle Fraternity (Armour Chapter)' },
  'others.contact': { en: 'Contact', ko: '연락처' },
  'others.contact-desc': {
    en: 'Feel free to reach out — I\'m always open to interesting conversations and collaborations.',
    ko: '편하게 연락 주세요 — 흥미로운 대화와 협업에 항상 열려있습니다.',
  },
};

// ── Language switching logic ──
function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  applyLang(lang);
}

function applyLang(lang) {
  // Update all elements with data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = translations[key];
    if (t && t[lang]) el.textContent = t[lang];
  });

  // Update all elements with data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const t = translations[key];
    if (t && t[lang]) el.innerHTML = t[lang];
  });

  // Update toggle button text
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? '한' : 'EN';

  // Update html lang attribute
  document.documentElement.lang = lang === 'en' ? 'en-US' : 'ko';
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyLang(lang);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = getLang();
      setLang(current === 'en' ? 'ko' : 'en');
    });
  }
});
