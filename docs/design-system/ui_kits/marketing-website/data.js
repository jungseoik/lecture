/* K-Study Match — sample data for the marketing website UI kit.
   Figures are illustrative, mirroring the values shown in the design mockups. */
window.KSM_DATA = {
  regions: ["서울", "경기·인천", "충청권", "전라권", "경상권", "강원권", "제주"],
  universities: [
    {
      id: "cbnu", name: "충북대학교", nameEn: "Chungbuk National University",
      region: "청주, 충청북도", type: "국립대", initial: "충북",
      tuition: 2980000, scholarship: 70, dorm: true, monthlyCost: 840000, foreign: 8.2,
      score: 86, scoreLabel: "추천도 높음",
      tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
      matchTags: ["희망전공 일치", "기숙사 제공", "TOPIK 조건 충족"],
      majors: ["경영학과", "컴퓨터공학부", "전자공학부", "신소재공학부", "식품생명공학과"],
      intro: "충북대학교는 1951년에 설립된 충청북도 대표 국립대학교로, 9개 단과대학과 다수의 대학원을 운영하며 지역 거점 국립대학입니다.",
      admission: ["TOPIK 3급 이상 또는 IELTS 5.5 이상", "고등학교 졸업(예정)자", "학업성적 70% 이상"],
      scholarshipInfo: ["성적우수장학금: 최대 70%", "외국인특별장학: 40~60%", "재학 중 성적장학금 지급"],
      dormInfo: ["1인실, 2인실, 4인실 운영", "학기당 약 750,000원~", "식비 별도", "도보 통학 가능"],
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80&auto=format&fit=crop",
      contact: { phone: "043-261-2114", email: "oia@chungbuk.ac.kr", web: "oia.chungbuk.ac.kr" },
    },
    {
      id: "jbnu", name: "전북대학교", nameEn: "Jeonbuk National University",
      region: "전주, 전라북도", type: "국립대", initial: "전북",
      tuition: 2850000, scholarship: 80, dorm: true, monthlyCost: 760000, foreign: 10.5,
      score: 78, scoreLabel: "추천 가능",
      tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
      matchTags: ["희망전공 일치", "기숙사 제공", "IELTS 조건 충족"],
      majors: ["경영학과", "컴퓨터공학부", "전자공학부", "신소재공학부", "식품생명공학과"],
      intro: "전북대학교는 1947년에 설립된 전라북도 대표 국립대학교로, 11개의 단과대학과 전문대학원을 운영하고 있으며 연구와 교육 그리고 지역사회 발전에 기여하는 거점 국립대학입니다.",
      admission: ["TOPIK 3급 이상 또는 IELTS 5.5 이상", "고등학교 졸업(예정)자", "학업성적 70% 이상"],
      scholarshipInfo: ["성적우수장학금: 최대 80%", "외국인특별장학: 40~60%", "재학 중 성적장학금 지급"],
      dormInfo: ["1인실, 2인실, 4인실 운영", "학기당 약 850,000원~", "식비 별도", "도보 통학 가능"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&auto=format&fit=crop",
      contact: { phone: "063-270-3641", email: "oia@jbnu.ac.kr", web: "oia.jbnu.ac.kr" },
    },
    {
      id: "kmu", name: "계명대학교", nameEn: "Keimyung University",
      region: "대구, 경상북도", type: "사립대", initial: "계명",
      tuition: 3120000, scholarship: 75, dorm: true, monthlyCost: 820000, foreign: 9.1,
      score: 72, scoreLabel: "추천 가능",
      tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
      matchTags: ["희망전공 일치", "기숙사 제공", "TOPIK 조건 충족"],
      majors: ["경영학과", "국제통상학과", "컴퓨터공학과", "시각디자인학과", "관광경영학과"],
      intro: "계명대학교는 대구 지역의 대표 사립대학으로, 아름다운 캠퍼스와 활발한 국제교류 프로그램으로 잘 알려져 있습니다.",
      admission: ["TOPIK 3급 이상", "고등학교 졸업(예정)자", "학업성적 60% 이상"],
      scholarshipInfo: ["외국인 신입생 장학: 최대 75%", "성적우수장학금 별도 운영"],
      dormInfo: ["2인실, 4인실 운영", "학기당 약 900,000원~", "식사 포함 옵션"],
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=80&auto=format&fit=crop",
      contact: { phone: "053-580-5114", email: "intl@kmu.ac.kr", web: "international.kmu.ac.kr" },
    },
    {
      id: "hyu-erica", name: "한양대학교 ERICA", nameEn: "Hanyang University ERICA",
      region: "안산, 경기도", type: "사립대", initial: "한양",
      tuition: 3400000, scholarship: 60, dorm: true, monthlyCost: 780000, foreign: 12.3,
      score: 69, scoreLabel: "추천 가능",
      tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
      matchTags: ["희망전공 일치", "기숙사 제공"],
      majors: ["경영학부", "소프트웨어학부", "전자공학부", "디자인대학", "국제문화대학"],
      intro: "한양대학교 ERICA는 산학협력 중심의 캠퍼스로, 수도권 접근성과 풍부한 현장 실습 기회를 제공합니다.",
      admission: ["TOPIK 3급 이상 또는 영어 트랙 지원 가능", "고등학교 졸업(예정)자"],
      scholarshipInfo: ["외국인 장학: 최대 60%", "어학성적 우수자 추가 감면"],
      dormInfo: ["2인실 위주", "학기당 약 950,000원~", "기숙사 신청 경쟁 있음"],
      image: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&q=80&auto=format&fit=crop",
      contact: { phone: "031-400-4114", email: "oia@hanyang.ac.kr", web: "erica.hanyang.ac.kr" },
    },
    {
      id: "pnu", name: "부산대학교", nameEn: "Pusan National University",
      region: "부산, 부산광역시", type: "국립대", initial: "부산",
      tuition: 3060000, scholarship: 70, dorm: true, monthlyCost: 850000, foreign: 11.7,
      score: 75, scoreLabel: "추천 가능",
      tags: ["기숙사 제공", "TOPIK 3급", "영어트랙", "장학금 있음"],
      matchTags: ["희망전공 일치", "TOPIK 조건 충족"],
      majors: ["경영학과", "기계공학부", "전기컴퓨터공학부", "국어국문학과", "해양학과"],
      intro: "부산대학교는 부산·경남 지역 거점 국립대학으로, 폭넓은 전공과 활발한 국제교류를 자랑합니다.",
      admission: ["TOPIK 3급 이상 또는 IELTS 5.5 이상", "고등학교 졸업(예정)자"],
      scholarshipInfo: ["외국인 신입생 장학: 최대 70%", "성적장학 별도"],
      dormInfo: ["1인실, 2인실 운영", "학기당 약 800,000원~", "식비 별도"],
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80&auto=format&fit=crop",
      contact: { phone: "051-510-1199", email: "intl@pusan.ac.kr", web: "ie.pusan.ac.kr" },
    },
    {
      id: "knu", name: "경북대학교", nameEn: "Kyungpook National University",
      region: "대구, 경상북도", type: "국립대", initial: "경북",
      tuition: 2890000, scholarship: 65, dorm: true, monthlyCost: 800000, foreign: 7.8,
      score: 71, scoreLabel: "추천 가능",
      tags: ["기숙사 제공", "TOPIK 4급", "장학금 있음"],
      matchTags: ["희망전공 일치", "기숙사 제공"],
      majors: ["경상대학", "IT대학", "공과대학", "자연과학대학", "사회과학대학"],
      intro: "경북대학교는 대구·경북 지역 거점 국립대학으로, 우수한 이공계 연구 역량을 갖추고 있습니다.",
      admission: ["TOPIK 4급 이상 권장", "고등학교 졸업(예정)자"],
      scholarshipInfo: ["외국인 장학: 최대 65%", "성적우수 추가 감면"],
      dormInfo: ["2인실, 4인실 운영", "학기당 약 780,000원~"],
      image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&q=80&auto=format&fit=crop",
      contact: { phone: "053-950-5114", email: "oia@knu.ac.kr", web: "oia.knu.ac.kr" },
    },
  ],
  // simple living-cost lookup for the homepage estimator (KRW / month, 보통형)
  livingCost: {
    "서울":     { 기숙사: 720000, 월세: 1050000, "고시원·원룸": 880000 },
    "경기·인천": { 기숙사: 650000, 월세: 880000,  "고시원·원룸": 760000 },
    "충청권":   { 기숙사: 560000, 월세: 720000,  "고시원·원룸": 640000 },
    "전라권":   { 기숙사: 540000, 월세: 690000,  "고시원·원룸": 610000 },
    "경상권":   { 기숙사: 580000, 월세: 760000,  "고시원·원룸": 670000 },
    "강원권":   { 기숙사: 530000, 월세: 680000,  "고시원·원룸": 600000 },
    "제주":     { 기숙사: 600000, 월세: 800000,  "고시원·원룸": 700000 },
  },
  lifeMultiplier: { 절약형: 0.85, 보통형: 1, 여유형: 1.25 },
};
window.KSM_WON = (n) => n.toLocaleString("ko-KR") + "원";

/* Imagery — real stock photos (Unsplash) used as on-brand placeholders for the
   hero scene and CTA banners. Swap for licensed brand artwork when available. */
window.KSM_IMG = {
  heroPanel: "https://images.unsplash.com/photo-1538669715315-155098f0fb1d?w=1100&q=80&auto=format&fit=crop", // Seoul + cherry blossoms
  heroDecor: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80&auto=format&fit=crop",  // bright campus
  blossom:   "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=900&q=80&auto=format&fit=crop",
  students:  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80&auto=format&fit=crop",  // students on campus
  grads:     "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=700&q=80&auto=format&fit=crop",  // graduation
};
