# K-Study Match

> 외국인 유학생을 위한 **한국 대학 비교·추천·상담 플랫폼**.
> 등록금·장학금·기숙사·생활비를 한눈에 비교하고, 내 조건에 맞는 한국 대학을 추천받아
> 학교에 **유학 상담을 요청**할 수 있는 웹 애플리케이션입니다.

Next.js(App Router) + Supabase로 만든 **풀스택** 앱이며, `docs/`에 디자인 시스템과 기획 문서가 함께 들어 있습니다.

---

## ✨ 핵심 기능

| 화면 | 기능 |
|---|---|
| 메인 `/` | 서비스 소개 + **생활비 계산기**(지역·주거·생활방식 → 월/6개월/1년, DB 연동) |
| 맞춤 학교 찾기 `/match` | 단계형 프로필 폼 → **규칙기반 맞춤 추천(100점 산식)** → 추천 카드 + 학교별 생활비 계산기 |
| 전체 대학 보기 `/universities` | 대학 **검색·필터·정렬** + 펼침형 상세(학과/입학조건/장학/기숙사/연락처) |
| 공통 | 이메일 **회원가입·로그인**, **유학 상담요청**(로그인 필요) |

---

## 🛠 기술 스택

- **프레임워크**: Next.js 16 (App Router) · React 19 · TypeScript
- **스타일**: Tailwind CSS v4 (`@theme` + CSS 변수로 디자인 토큰 이식) · Pretendard · Phosphor Icons
- **백엔드/DB**: Supabase (PostgreSQL · Auth · RLS) — 로컬은 Supabase CLI + Docker
- **패키지 매니저**: pnpm

---

## 🚀 빠른 시작

**사전 요구**: Node 20+ · pnpm · Docker(데몬 실행 중, Supabase 로컬용)

```bash
# 1) 의존성 설치
pnpm install

# 2) 로컬 Supabase 기동 (Postgres·Auth + 마이그레이션·시드 자동 적용)
pnpm db:start            # = supabase start  (최초 1회 Docker 이미지 다운로드)

# 3) 환경변수: .env.local 이 로컬 기본값으로 채워져 있음
#    값이 다르면 `pnpm exec supabase status` 출력으로 갱신
cp .env.example .env.local   # (없을 때만)

# 4) 개발 서버
pnpm dev                 # → http://localhost:3000
```

### 스크립트

| 명령 | 설명 |
|---|---|
| `pnpm dev` | 개발 서버 (http://localhost:3000) |
| `pnpm build` / `pnpm start` | 프로덕션 빌드 / 실행 |
| `pnpm lint` | ESLint |
| `pnpm db:start` / `pnpm db:stop` | Supabase 로컬 기동 / 중지 |
| `pnpm db:reset` | DB 초기화(마이그레이션 + 시드 재적용) |

- **Supabase Studio**: http://localhost:54323 (로컬 DB 뷰어)
- **환경변수**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`(클라이언트), `SUPABASE_SERVICE_ROLE_KEY`(서버 전용). `.env.local`은 git에 올라가지 않습니다.

---

## 📂 프로젝트 구조

```
lecture/
├── app/                          # ▣ Next.js App Router (프론트 라우트 + 백엔드 API 한 곳)
│   ├── layout.tsx                #   루트 레이아웃(폰트·ModalProvider)
│   ├── globals.css               #   디자인 토큰(Tailwind @theme + CSS 변수)
│   ├── page.tsx                  #   [FE] 메인페이지 (/)
│   ├── match/page.tsx            #   [FE] 맞춤 학교 찾기 (/match)
│   ├── universities/page.tsx     #   [FE] 전체 대학 보기 (/universities)
│   └── api/                      #   [BE] API 라우트 핸들러
│       ├── living-costs/route.ts          #   생활비 계산
│       ├── universities/route.ts          #   대학 목록
│       ├── universities/[id]/route.ts     #   대학 상세
│       ├── universities/recommend/route.ts#   맞춤 추천(점수 산식)
│       └── consultations/route.ts         #   유학 상담요청 생성
│
├── src/
│   ├── components/
│   │   ├── ui/                   # [FE] 디자인 시스템 컴포넌트(프레젠테이션)
│   │   │   └── Button · Card · Input · Select · Checkbox · Radio · FormField
│   │   │       · StepIndicator · Badge · IconChip · StatCard · FeatureCard
│   │   │       · IconButton · Modal · Logo
│   │   └── site/                 # [FE] 페이지 섹션·도메인 UI
│   │       ├── Header.tsx · Footer.tsx
│   │       ├── visual.tsx        #   HeroBand · HeroVisual · FloatCard · InfoStat · CampusThumb
│   │       ├── ModalProvider.tsx #   로그인/회원가입/상담 모달 + 인증
│   │       ├── LivingCostEstimator.tsx
│   │       ├── MatchClient.tsx   #   /match 폼·추천결과(클라이언트)
│   │       └── UniversitiesClient.tsx
│   └── lib/                      # [BE/공용] 서버 로직 · 데이터 · 유틸
│       ├── supabase/             #   Supabase 클라이언트
│       │   ├── admin.ts          #     서버 전용(service_role, RLS 우회)
│       │   ├── server.ts         #     서버(쿠키 세션)
│       │   └── client.ts         #     브라우저(anon)
│       ├── universities.ts       #   대학 조회·평탄화 (server-only)
│       ├── recommend.ts          #   추천 점수 산식(100점 규칙기반)
│       ├── living-cost.ts        #   생활비 상수·계산
│       ├── format.ts · cn.ts · images.ts   # 통화 포맷 · className · 이미지 URL
│
├── proxy.ts                      # [BE] 세션 갱신 미들웨어(Next 16 proxy)
│
├── supabase/                     # ▣ 데이터베이스 (DB)
│   ├── config.toml
│   ├── migrations/               #   01 스키마(12테이블) · 02 권한 · 03 인증/RLS
│   └── seed.sql                  #   샘플 데이터(대학·학과·장학·기숙사·생활비)
│
├── docs/                         # ▣ 문서 · 디자인 레퍼런스 (앱 코드 아님)
│   ├── design-system/            #   원본 디자인 시스템(토큰·컴포넌트·UI킷·가이드라인) — 수정 금지
│   ├── planning/                 #   기획 PDF · 승인 시안 PNG
│   └── _archive/                 #   원본 디자인 시스템 zip
│
├── public/                       # 정적 에셋
├── .env.example                  # 환경변수 템플릿
├── next.config.ts · tsconfig.json · eslint.config.mjs · postcss.config.mjs
└── package.json · pnpm-workspace.yaml
```

### Frontend / Backend / DB 한눈에

| 영역 | 위치 | 무엇 |
|---|---|---|
| **Frontend** | `app/*/page.tsx`, `app/layout.tsx`, `app/globals.css`, `src/components/**` | 페이지·UI·디자인 컴포넌트 |
| **Backend** | `app/api/**`, `src/lib/**`(`server.ts`/`admin.ts`/`universities.ts`/`recommend.ts`), `proxy.ts` | API 핸들러·서버 로직·세션 |
| **Database** | `supabase/migrations`, `supabase/seed.sql` | 스키마·권한·RLS·시드 |
| **Docs** | `docs/**` | 디자인 시스템·기획 문서(구현 레퍼런스) |

> 클라이언트에서 쓰는 `src/lib`는 `cn.ts`·`format.ts`·`living-cost.ts`·`images.ts`·`supabase/client.ts`. 나머지(`admin.ts`·`server.ts`·`universities.ts`)는 **서버 전용**입니다.

---

## 🧭 아키텍처 · 데이터 흐름

```
브라우저(페이지/컴포넌트)
   │  fetch / Server Component
   ▼
app/api/* (route handler)  ──►  src/lib (recommend·universities·living-cost)
   │                                   │
   ▼                                   ▼
Supabase 클라이언트(admin/server)  ──►  PostgreSQL (RLS)
```

- 카탈로그 읽기(대학/생활비)는 서버에서 `service_role`로 조회.
- 사용자 데이터(상담요청 등) 쓰기는 로그인 세션 기준으로 처리하고, RLS 정책으로 본인 데이터만 접근하도록 보호.
- 회원가입 시 `auth.users` 생성 → 트리거로 `public.users`(role=student) 자동 생성.

### API 라우트

| 메서드 · 경로 | 설명 |
|---|---|
| `GET /api/living-costs?region=&housing=&life=` | 월/6개월/1년 생활비 |
| `POST /api/universities/recommend` | 프로필 → 점수순 추천 목록 |
| `GET /api/universities` · `GET /api/universities/:id` | 대학 목록 / 상세 |
| `POST /api/consultations` | 유학 상담요청 생성(로그인 필요) |

### DB 테이블 (12개)

`users` · `student_profiles` · `universities` · `university_programs` · `scholarships` · `dormitories` ·
`living_costs` · `saved_universities` · `cost_calculation_logs` · `consultation_requests` ·
`consultation_transfer_logs` · `consultation_notes`

### 추천 점수 산식 (100점, 규칙기반)

희망학과 25 · 어학(TOPIK/IELTS) 20 · GPA 15 · 재정증명 15 · 예산 적합 10 · 장학금 가능성 10 · 희망지역 5
→ 등급: `80+` 높음 · `60–79` 가능 · `40–59` 보완 필요 · `<40` 낮음

---

## 🎨 디자인 시스템 (docs/)

`docs/design-system/`은 이 앱의 **시각/컴포넌트 기준(소스 오브 트루스)**입니다. 토큰·컴포넌트 계약을
실제 코드(`app/globals.css`, `src/components`)로 이식했습니다. 정적 미리보기:

```bash
cd docs/design-system && python3 -m http.server 8000
#   http://localhost:8000/ui_kits/marketing-website/index.html
```

기획 문서·승인 시안은 `docs/planning/`에 있습니다.

---

## ⏭ 다음 단계

- Google 소셜 로그인(현재 버튼/설정만 준비)
- 마이페이지 · 관심학교 저장 · 상담 내역
- 관리자 CRM(상담 배정/이관) — 기획서 IA 참조

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
