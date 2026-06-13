-- ============================================================================
-- K-Study Match — 시드 데이터
-- 출처: docs/design-system/ui_kits/marketing-website/data.js (window.KSM_DATA)
-- 수치는 시안 기준의 예시값입니다(실데이터로 교체 예정).
-- `supabase db reset` / 최초 `supabase start` 시 자동 적용됩니다.
-- ============================================================================

-- ---- 7. living_costs (지역별 주거 유형 월 기준액, 보통형 기준) ----
insert into public.living_costs
  (region, dormitory_monthly_cost, rent_monthly_cost, gosiwon_monthly_cost, food_cost, transportation_cost) values
  ('서울',      720000, 1050000, 880000, 400000, 70000),
  ('경기·인천',  650000,  880000, 760000, 380000, 80000),
  ('충청권',    560000,  720000, 640000, 350000, 60000),
  ('전라권',    540000,  690000, 610000, 340000, 55000),
  ('경상권',    580000,  760000, 670000, 350000, 60000),
  ('강원권',    530000,  680000, 600000, 330000, 55000),
  ('제주',      600000,  800000, 700000, 360000, 65000);

-- ---- 3. universities ----
insert into public.universities
  (id, name, name_en, region, region_group, type, initial, foreign_student_ratio, intro, image_url, contact_phone, contact_email, contact_web) values
  ('cbnu','충북대학교','Chungbuk National University','청주, 충청북도','충청권','국립대','충북',8.2,
   '충북대학교는 1951년에 설립된 충청북도 대표 국립대학교로, 9개 단과대학과 다수의 대학원을 운영하며 지역 거점 국립대학입니다.',
   'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80&auto=format&fit=crop','043-261-2114','oia@chungbuk.ac.kr','oia.chungbuk.ac.kr'),
  ('jbnu','전북대학교','Jeonbuk National University','전주, 전라북도','전라권','국립대','전북',10.5,
   '전북대학교는 1947년에 설립된 전라북도 대표 국립대학교로, 11개의 단과대학과 전문대학원을 운영하며 지역 거점 국립대학입니다.',
   'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80&auto=format&fit=crop','063-270-3641','oia@jbnu.ac.kr','oia.jbnu.ac.kr'),
  ('kmu','계명대학교','Keimyung University','대구, 경상북도','경상권','사립대','계명',9.1,
   '계명대학교는 대구 지역의 대표 사립대학으로, 아름다운 캠퍼스와 활발한 국제교류 프로그램으로 잘 알려져 있습니다.',
   'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&q=80&auto=format&fit=crop','053-580-5114','intl@kmu.ac.kr','international.kmu.ac.kr'),
  ('hyu-erica','한양대학교 ERICA','Hanyang University ERICA','안산, 경기도','경기·인천','사립대','한양',12.3,
   '한양대학교 ERICA는 산학협력 중심의 캠퍼스로, 수도권 접근성과 풍부한 현장 실습 기회를 제공합니다.',
   'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=600&q=80&auto=format&fit=crop','031-400-4114','oia@hanyang.ac.kr','erica.hanyang.ac.kr'),
  ('pnu','부산대학교','Pusan National University','부산, 부산광역시','경상권','국립대','부산',11.7,
   '부산대학교는 부산·경남 지역 거점 국립대학으로, 폭넓은 전공과 활발한 국제교류를 자랑합니다.',
   'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80&auto=format&fit=crop','051-510-1199','intl@pusan.ac.kr','ie.pusan.ac.kr'),
  ('knu','경북대학교','Kyungpook National University','대구, 경상북도','경상권','국립대','경북',7.8,
   '경북대학교는 대구·경북 지역 거점 국립대학으로, 우수한 이공계 연구 역량을 갖추고 있습니다.',
   'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&q=80&auto=format&fit=crop','053-950-5114','oia@knu.ac.kr','oia.knu.ac.kr');

-- ---- 4. university_programs (대표 전공 + 학기 등록금) ----
insert into public.university_programs (university_id, major, degree, language, tuition_per_semester, topik_requirement) values
  ('cbnu','경영학과','학부','영어트랙',2980000,'TOPIK 3급'),
  ('cbnu','컴퓨터공학부','학부','한국어',2980000,'TOPIK 3급'),
  ('cbnu','전자공학부','학부','한국어',2980000,'TOPIK 3급'),
  ('jbnu','경영학과','학부','영어트랙',2850000,'TOPIK 3급'),
  ('jbnu','컴퓨터공학부','학부','한국어',2850000,'TOPIK 3급'),
  ('kmu','국제통상학과','학부','영어트랙',3120000,'TOPIK 3급'),
  ('kmu','시각디자인학과','학부','한국어',3120000,'TOPIK 3급'),
  ('hyu-erica','소프트웨어학부','학부','영어트랙',3400000,'TOPIK 3급'),
  ('pnu','기계공학부','학부','한국어',3060000,'TOPIK 3급'),
  ('knu','IT대학','학부','한국어',2890000,'TOPIK 4급');

-- ---- 5. scholarships (대표 외국인 장학) ----
insert into public.scholarships (university_id, name, reduction_rate, description) values
  ('cbnu','외국인 성적우수장학금',70,'성적우수장학 최대 70%, 외국인특별장학 40~60%'),
  ('jbnu','외국인 성적우수장학금',80,'성적우수장학 최대 80%, 외국인특별장학 40~60%'),
  ('kmu','외국인 신입생 장학',75,'외국인 신입생 장학 최대 75%, 성적우수장학 별도'),
  ('hyu-erica','외국인 장학',60,'외국인 장학 최대 60%, 어학성적 우수자 추가 감면'),
  ('pnu','외국인 신입생 장학',70,'외국인 신입생 장학 최대 70%, 성적장학 별도'),
  ('knu','외국인 장학',65,'외국인 장학 최대 65%, 성적우수 추가 감면');

-- ---- 6. dormitories (월 환산 기준, dormInfo 참고) ----
insert into public.dormitories (university_id, room_types, monthly_cost, meal_included, notes) values
  ('cbnu','1인실/2인실/4인실',125000,false,'학기당 약 750,000원~, 식비 별도, 도보 통학 가능'),
  ('jbnu','1인실/2인실/4인실',142000,false,'학기당 약 850,000원~, 식비 별도, 도보 통학 가능'),
  ('kmu','2인실/4인실',150000,true,'학기당 약 900,000원~, 식사 포함 옵션'),
  ('hyu-erica','2인실 위주',158000,false,'학기당 약 950,000원~, 기숙사 신청 경쟁 있음'),
  ('pnu','1인실/2인실',133000,false,'학기당 약 800,000원~, 식비 별도'),
  ('knu','2인실/4인실',130000,false,'학기당 약 780,000원~');
