# CLAUDE.md — K-Study Match

> 이 파일은 Claude Code(및 에이전트)가 이 저장소에서 작업할 때 **자동으로 읽는 프로젝트 지침**입니다.
> 새 에이전트/개발자는 이 문서 → `README.md` → `docs/design-system/HANDOFF.md` 순으로 읽으면 됩니다.

## 1. 이 프로젝트가 무엇인가
**K-Study Match** — 외국인 유학생을 위한 **한국 대학 비교·추천·상담 플랫폼**.
Next.js(App Router) + Supabase 풀스택 웹앱. 3개 사용자 화면(메인 / 맞춤 학교 찾기 / 전체 대학 보기)과
인증·유학 상담요청을 제공합니다. 상세 소개·구조·API는 `README.md` 참고.

## 2. 기술 스택 (버전 고정)
- Next.js **16** (App Router, Turbopack) · React **19** · TypeScript
- Tailwind CSS **v4** (CSS-first `@theme`, `tailwind.config.js` 없음)
- Supabase (PostgreSQL · Auth · RLS) — 로컬은 Supabase CLI + Docker
- 패키지 매니저 **pnpm** (Node 20+; 개발은 Node 24 기준)

## 3. 명령어 치트시트
```bash
pnpm install            # 의존성
pnpm dev                # 개발 서버 → http://localhost:3000
pnpm build / pnpm start # 프로덕션 빌드 / 실행
pnpm lint               # ESLint (docs/, supabase/ 는 제외 설정)
pnpm db:start           # supabase start (로컬 DB, 마이그레이션+시드 자동 적용)
pnpm db:stop            # supabase stop
pnpm db:reset           # DB 초기화 후 마이그레이션+시드 재적용
```
- Supabase Studio: http://localhost:54323
- **데모 모드**: `.env.local` 없이 `pnpm dev` 하면 샘플 데이터로 UI가 뜸(아래 §7).

## 4. 환경 세팅 (신규 서버에서 재현)
```bash
git clone <repo> && cd lecture
pnpm install
# (A) UI만 보기 — Supabase 불필요:
pnpm dev                          # 데모 모드(샘플 데이터)로 즉시 실행
# (B) 실데이터/인증까지:
cp .env.example .env.local        # 로컬 Supabase 기본값 채워 사용
pnpm db:start                     # Docker 필요. 최초 1회 이미지 다운로드
pnpm dev
```
- **환경변수**(`.env.local`): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`(클라), `SUPABASE_SERVICE_ROLE_KEY`(서버 전용). 로컬 값은 `pnpm exec supabase status`로 확인. `.env.local`은 git 제외.
- 로컬 Supabase 키는 모든 로컬 설치에서 동일한 **공개 데모 키**라 비밀이 아님(프로덕션 키만 비밀).

## 5. 저장소 구조 (어디에 뭐가 있나)
```
app/                      # Next.js App Router — 프론트 라우트 + 백엔드 API 한 곳
  page.tsx                #   [FE] 메인 /            globals.css = 디자인 토큰
  match/ · universities/  #   [FE] /match · /universities
  api/*/route.ts          #   [BE] living-costs · universities(+[id],recommend) · consultations
src/
  components/ui/          # [FE] 디자인 시스템 컴포넌트(프레젠테이션, 15종)
  components/site/        # [FE] 페이지 섹션·Header·Footer·Modal·계산기·MatchClient·UniversitiesClient
  lib/                    # [BE/공용] 로직·데이터·유틸
    supabase/             #   admin(service_role,서버전용) · server(쿠키세션) · client(브라우저) · config(설정감지)
    universities.ts       #   대학 조회·평탄화 (server-only)     recommend.ts = 추천 점수 산식
    sample-data.ts        #   데모 모드용 샘플 데이터            living-cost.ts/format.ts/cn.ts/images.ts = 유틸
proxy.ts                  # [BE] 세션 갱신 미들웨어 (Next 16 "proxy" 컨벤션, 구 middleware)
supabase/                 # [DB] config.toml · migrations/(01스키마 02권한 03인증RLS) · seed.sql
docs/                     # [문서] design-system(원본 디자인·수정금지) · planning(기획PDF·시안PNG) · _archive(zip)
```
**Frontend** = `app/*/page.tsx` + `src/components/**` · **Backend** = `app/api/**` + `src/lib/**`(서버) + `proxy.ts` · **DB** = `supabase/**`

## 6. 코딩 규칙 (반드시 준수)
- **디자인 토큰만 사용**: 색·폰트·여백은 `app/globals.css`의 CSS 변수/Tailwind 토큰만. 새 색/폰트 만들지 말 것. 브랜드 `--brand`=#1F5BDB, 파스텔 칩(green=생활비·purple=장학금·blue=등록금·orange=기숙사·sky=상담).
- **타이포는 헬퍼 클래스**: `t-display/t-h1/t-h2/t-h3/t-h4/t-lead/t-body/t-sm/t-xs`, 숫자는 `tnum`(tabular-nums).
- **카피**: 한국어 **해요체 권유형**, **이모지 금지**, 통화는 `won()`(천단위 콤마+"원").
- **`docs/design-system/`는 레퍼런스 — 절대 수정 금지.** HTML/JSX를 그대로 복붙하지 말고, props 계약·토큰을 실제 컴포넌트로 이식.
- 경로 별칭 **`@/*` → `./src/*`** (tsconfig). 컴포넌트=`@/components`, 로직=`@/lib`.
- 서버 전용 모듈(`src/lib/supabase/admin.ts`, `universities.ts`)은 `import "server-only"`. 클라이언트에서 import 금지.

## 7. 데모 모드 (Supabase 없이 동작)
`src/lib/supabase/config.ts`의 `isSupabaseConfigured()` / `isSupabaseAdminConfigured()`로 환경변수 유무를 감지.
미설정 시 서버 데이터 함수가 **`src/lib/sample-data.ts`로 폴백**(대학·생활비·지역), 인증/상담은 "데모 모드" 안내.
→ 새 코드에서 DB를 읽을 땐 **미설정/오류 시 샘플로 폴백**하는 패턴을 유지해 클론 직후에도 UI가 뜨게 할 것.

## 8. 확장 레시피
- **새 페이지**: `app/<route>/page.tsx`(서버 컴포넌트). 데이터는 `src/lib`의 서버 함수로 조회, 상호작용은 `src/components/site/<X>Client.tsx`(`"use client"`)로 분리.
- **새 API**: `app/api/<name>/route.ts`. 읽기=`createAdminClient()`(service_role), 인증필요 쓰기=`createServerSupabase()`(세션). **미설정 시 폴백/데모 응답** 추가.
- **새 컴포넌트**: `src/components/ui/`(프레젠테이션) 또는 `site/`(도메인). 토큰 클래스 사용.
- **DB 변경**: `supabase/migrations/`에 `<timestamp>_name.sql` 추가 → `pnpm db:reset`으로 적용/검증. RLS 정책·`grant` 잊지 말 것(§9).
- 변경 후 **반드시 `pnpm lint && pnpm build`** 통과 확인.

## 9. 함정 (이 프로젝트에서 실제로 겪은 것 — 재현 시 주의)
- **pnpm 11 빌드 스크립트**: `pnpm-workspace.yaml`에 `allowBuilds: {sharp: true, unrs-resolver: true}` + `onlyBuiltDependencies` 있어야 `pnpm install`/`pnpm exec`가 exit 1로 안 죽음. 지우지 말 것.
- **Supabase 새 CLI 권한**: 새로 만든 테이블은 API 롤에 자동 노출 안 됨 → `supabase/migrations/*_grants.sql`로 `grant`. 마이그레이션 추가 시 권한/ RLS 정책 필수.
- **미들웨어**: Next 16에서 `middleware.ts` → **`proxy.ts`**(함수명 `proxy`). 세션 쿠키 갱신 담당. 데모 모드에선 통과.
- **Tailwind v4**: 설정은 `app/globals.css`의 `@theme`(JS config 없음). 토큰은 CSS 변수.
- **이미지**: `next.config.ts`의 `images.remotePatterns`에 Unsplash 허용(시안 플레이스홀더). 프로덕션은 브랜드 에셋으로 교체.
- **.gitignore는 Next.js용**: 빌드산출물(`.next`)·`node_modules`·`.env*.local`·`.omc`는 커밋 금지, 소스는 전부 추적.

## 10. 로드맵 (다음 작업 후보)
Google 소셜 로그인(설정만 준비됨) · 마이페이지/관심학교 저장 · 상담 내역 · 관리자 CRM(상담 배정/이관, 기획서 IA 참조) · 다국어(i18n, 영어→몽골/베트남/러시아/네팔) · 프로덕션 배포(Vercel + Supabase Cloud, README 참고).

## 11. 참고 문서
- `README.md` — 사용법·구조·API·DB 요약
- `docs/design-system/HANDOFF.md` — 화면→컴포넌트→필드→**DB·API 매핑**, 추천/생활비 산식, 유효성
- `docs/design-system/readme.md` — 브랜드/콘텐츠/비주얼 파운데이션
- `docs/planning/` — 기획 PDF·승인 시안 PNG
- (선택) 이 저장소는 oh-my-claudecode 플러그인과 함께 개발됨. 필요 시 `/plugin marketplace add` 로 설치(없어도 앱은 정상).
