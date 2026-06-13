# K-Study Match — 개발 핸드오프 문서 (HANDOFF)

이 문서는 **디자인 → 기능 → DB → API**를 개발자가 1:1로 따라갈 수 있도록 매핑한 핸드오프 가이드입니다.
디자인 시스템(`styles.css`, `components/`, `ui_kits/`)과 기획 문서(개발기획서·화면설계서·메뉴구조도)를 잇는 역할을 합니다.

> ⚠️ 이 저장소는 **프론트/디자인 기준(소스 오브 트루스)** 입니다. 실제 백엔드·DB·인증은 포함돼 있지 않으며,
> 아래 매핑을 기준으로 개발자가 구현합니다. 권장 스택(기획서 기준): **React/Next.js + Node(NestJS) 또는 Supabase + PostgreSQL**.

---

## 0. 이 저장소를 코드에서 쓰는 법

| 무엇 | 어디 | 개발 적용 |
|---|---|---|
| 디자인 토큰(색·타입·여백·그림자) | `styles.css` → `tokens/*.css` | CSS 변수 그대로 import, 또는 Tailwind theme/SCSS 변수로 이식 |
| UI 컴포넌트 | `components/<group>/<Name>.jsx` + `.d.ts`(props) + `.prompt.md`(사용법) | 동일 props 계약으로 프로덕션 컴포넌트 재구현 |
| 화면 레퍼런스 | `ui_kits/marketing-website/` | 레이아웃·인터랙션·상태 기준 화면 |
| 컴파일된 런타임 | `_ds_bundle.js` (자동 생성) | 프로토타입에서 `window.KStudyMatchDesignSystem_624b2d`로 사용 |

폰트(Pretendard)·아이콘(Phosphor)·이미지(Unsplash 대체)는 **CDN 링크**입니다. 프로덕션에서는 셀프호스팅/브랜드 에셋으로 교체 권장.

---

## 1. 화면 ↔ 메뉴 ↔ 라우트

| 화면 | 파일 | 라우트 | 접근 권한 |
|---|---|---|---|
| 메인페이지 | `Landing.jsx` | `/` | 비회원 가능 |
| 맞춤 학교 찾기 | `Match.jsx` | `/match` | 입력·추천 비회원 가능 / 저장·상담요청은 로그인 필요 |
| 전체 대학 보기 | `Universities.jsx` | `/universities` | 비회원 가능 / 관심저장은 로그인 |
| 로그인·회원가입·상담요청 | `Modals.jsx` | 모달(보조 화면) | — |

---

## 2. 화면 → 컴포넌트 → 입력 필드 → DB → API 매핑

### 2-1. 메인페이지 — 간단 생활비 계산기
- **UI:** `Select`(희망 지역 / 주거 방식 / 생활 방식) → 결과 패널(예상 월 / 6개월 / 1년)
- **DB:** `living_costs(region, city, dormitory_monthly_cost, rent_monthly_cost, gosiwon_monthly_cost, food_cost, transportation_cost, communication_cost, insurance_cost, etc_cost)`
- **API:** `GET /living-costs?region=&housing=&life=` → `{ monthly, semester, annual }`
- **로직(비회원):** `월 = baseCost(region, housing) × lifeMultiplier(life)` · `6개월 = 월×6` · `1년 = 월×12`
- **비고:** 비회원도 사용. 결과 하단 CTA → `/match` 이동.

### 2-2. 맞춤 학교 찾기 — 학생 정보 입력 폼 (단계형 5스텝)
`StepIndicator` + `FormField`/`Input`/`Select`/`RadioGroup`/`Checkbox`

| 입력 필드(UI) | DB: `student_profiles` 컬럼 | 필수 | 유효성 |
|---|---|---|---|
| 이름 | `users.name` | ✔ | 1자 이상 |
| 성별 | `gender` | ✔ | enum: 남성/여성/기타/미응답 |
| 생년월일 | `birth_date` | ✔ | 날짜 |
| 국적 | `users.nationality` | ✔ | 국가코드 |
| 현재 거주 국가 | `residence_country` | ✔ | 국가코드 |
| 이메일 | `users.email` | ✔ | email 형식 |
| 전화번호 | `users.phone` | ✔ | 국가번호 포함 |
| WhatsApp 가능 | `whatsapp_available` | | boolean |
| Telegram ID | `telegram_id` | | text |
| 희망 학위 | `desired_degree` | ✔ | enum: 어학연수/학부/석사/박사 |
| 희망 전공 | `desired_major` | ✔ | 검색형 선택 |
| 희망 지역 | `desired_region` | | 복수 선택 |
| 희망 입학 시기 | `desired_semester` | | 연도/학기 |
| 기숙사 희망 | `dormitory_preference` | | 희망/비희망/상관없음 |
| 월 생활비 예산 | (예산 범위) | | 금액 범위 |
| 최종학력 | `current_education` | ✔ | enum |
| 졸업 여부 | `graduation_status` | ✔ | 졸업/졸업예정/재학중 |
| GPA | `gpa` | ✔ | 숫자 |
| GPA 기준 | `gpa_scale` | ✔ | 4.0/4.3/4.5/5.0/100 |
| TOPIK 등급 | `topik_level` | | 없음/1~6급 |
| IELTS 점수 | `ielts_score` | | 숫자 |
| TOEFL 점수 | `toefl_score` | | 숫자 |
| 재정증명 가능 | `financial_proof_status` | ✔ | 가능/준비중/불가능 |
| 장학금 필요 | `scholarship_need` | ✔ | 매우필요/필요/상관없음 |
| 동의 체크박스 | (동의 로그) | ✔ | 필수 동의 통과 시에만 제출 |

- **API:** `POST /students/profile` (프로필 저장) → `GET /universities/recommend?profileId=` (추천 산출)

### 2-3. 맞춤 추천 결과 + 추천 대학 카드
- **요약 `StatCard`:** 추천 가능 대학 수 / 장학금 검토 가능 / 기숙사 제공 / 평균 예상 월 생활비
- **카드:** `Badge`(추천도 점수·매칭 사유), `InfoStat`(등록금/장학금/기숙사/생활비)
- **DB:** `universities`, `university_programs`, `scholarships`, `dormitories` 조인 + `consultation_requests.match_score`
- **API:** `GET /universities/recommend` → `[{ universityId, score, scoreLabel, matchReasons[], tuition, scholarshipRate, dorm, monthlyCost }]`

#### 추천 점수 산식 (1차 MVP = 규칙 기반, 총 100점)
| 평가 항목 | 배점 |
|---|---|
| 희망학과 ↔ 대학 학과 일치도 | 25 |
| TOPIK 또는 영어성적 조건 충족 | 20 |
| GPA 조건 충족 | 15 |
| 재정증명 가능 여부 | 15 |
| 등록금·생활비 예산 적합도 | 10 |
| 장학금 가능성 | 10 |
| 희망 지역 일치 | 5 |

**등급:** `80+` 추천도 높음 · `60–79` 추천 가능 · `40–59` 보완 필요 · `<40` 추천 낮음

### 2-4. 학교별 생활비 계산기 (추천 카드 내부)
- **UI:** `Select`(주거/식비) + `Input`(교통·통신·보험·기타) → 결과 패널
- **DB:** `living_costs`, `dormitories.monthly_cost`, `universities.region`, `university_programs.tuition_per_semester` → 이용 기록 `cost_calculation_logs`
- **API:** `POST /cost/calc` `{ universityId, housing, food, transport, comm, insurance, etc }` → `{ monthly, semester, annual, withTuition, withScholarship }`
- **산식:**
  - `월 합계 = 주거 + 식비 + 교통 + 통신 + 보험 + 기타`
  - `1학기 = 월×6` · `1년 = 월×12`
  - `등록금 포함 1학기 = 학기 등록금 + 월×6`
  - `장학금 반영 = 학기등록금×(1 − 감면율) + 월×6`

### 2-5. 전체 대학 보기 — 검색·필터·정렬·리스트
- **필터 `Select`/`Input`:** 대학명/지역/학교유형/학위과정/전공/수업언어/등록금범위/장학금여부/감면율/기숙사/TOPIK/IELTS
- **정렬:** 등록금 낮은순 / 장학금 높은순 / 생활비 낮은순 / 외국인학생 비율 높은순 / 최신 등록순
- **카드 펼침 상세:** 학교 소개·주요 전공·입학 조건·장학금 정보·기숙사 정보·국제교류처
- **DB:** `universities` + `university_programs` + `scholarships` + `dormitories` + `living_costs`
- **API:** `GET /universities?filters…&sort=&page=` → 페이지네이션 리스트 / `GET /universities/:id` → 상세

---

## 3. 인증 · 회원 (모달)

| 모달 | 필드 | DB / API |
|---|---|---|
| 로그인 | 이메일·비밀번호 / Google | `POST /auth/login`, `POST /auth/google` → `users` |
| 회원가입(무료 프로필) | 이름·이메일·비밀번호·국적·전화·동의 | `POST /auth/signup` → `users` (role=student) → 이후 `/match` |
| 유학 상담요청 | 학교·학과·추천도·예상 생활비·연락수단·동의 | `POST /consultations` → `consultation_requests` |
| 상담 완료 | (확인 화면) | — |

**회원가입 유도 시점:** 추천결과 저장 / 관심학교 저장 / 유학 상담요청 / 상담내역 확인 / 마이페이지.

---

## 4. DB 스키마 참조 (기획서 기준, 12 테이블)

`users` · `student_profiles` · `universities` · `university_programs` · `scholarships` · `dormitories` ·
`living_costs` · `saved_universities` · `cost_calculation_logs` · `consultation_requests` ·
`consultation_transfer_logs` · `consultation_notes`

상세 컬럼은 `개발기획서.pdf` 15장(DB 구조 초안) 참조. 핵심 흐름 테이블 = `consultation_requests`
(student_id, university_id, program_id, match_score, monthly_living_cost, status, assigned_admin_id, …).

상담요청 상태값: `신규 → 상담확인중 → 학생연락중 → 상담완료 → 학교이관준비 → 학교이관완료 → 학교검토중 → 지원진행 → 상담종료 / 보류 / 취소`.

---

## 5. 폼 유효성 · 동의 규칙 (요약)
- 필수 동의(개인정보 수집·정보 활용)가 체크돼야만 추천/상담 제출 가능.
- 상담요청 시: 프로필 제공 동의 + 연락 수단 동의(필수), 학교 관계자 정보 제공(선택).
- 숫자 필드(GPA/IELTS/TOEFL)는 범위 검증, 통화는 천단위 콤마 + `원`.

---

## 6. 완료된 것 vs 개발자가 채울 것

| 완료 (디자인 기준) | 개발 필요 |
|---|---|
| 토큰·컴포넌트·3개 화면 UI/UX, 모달 흐름 | API 명세·구현, DB 마이그레이션 |
| 추천 점수/생활비 산식 정의 | 산식의 서버 구현 + 실데이터 |
| 폼 필드·유효성·동의 UX | 인증(이메일/Google), 세션 |
| 관리자 화면 정보구조(기획서) | 관리자 CRM 화면 개발(이 킷 범위 밖) |

---

## 7. 다국어
1차 한국어/영어. UI 문자열은 i18n 키로 분리 권장(`개발기획서.pdf` 19.3). 추후 몽골어·베트남어·러시아어·네팔어 확장.
