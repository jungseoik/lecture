# CLAUDE.md — K-Study Match

> 이 파일은 Claude Code가 이 저장소에서 작업할 때 자동으로 읽는 프로젝트 지침입니다.

## 프로젝트
**K-Study Match** — 외국인 유학생을 위한 한국 대학 비교·추천·상담 플랫폼.
이 저장소는 **디자인 시스템 + 마케팅 웹사이트 UI 킷(디자인 레퍼런스)** 입니다.
HTML/JSX 파일들은 **프로덕션 코드가 아니라, 의도된 모양·동작을 보여주는 레퍼런스**입니다.
목표는 이 디자인을 **실제 코드베이스(React/Next.js 권장)로 재구현**하는 것입니다.

## 먼저 읽을 것 (순서대로)
1. `readme.md` — 브랜드/콘텐츠/비주얼 파운데이션, 아이코노그래피, 파일 인덱스
2. `HANDOFF.md` — 화면→컴포넌트→입력 필드→**DB 테이블·컬럼→API** 매핑, 추천 점수·생활비 산식, 유효성 규칙
3. `ui_kits/marketing-website/` — 3개 화면(메인 / 맞춤 학교 찾기 / 전체 대학 보기) + 모달
4. `components/` — 재사용 컴포넌트(`*.d.ts` props 계약 + `*.prompt.md` 사용법)
5. `tokens/` — 디자인 토큰(색·타입·여백·그림자 CSS 변수)

## 권장 스택 (기획서 기준)
- 프론트: **React / Next.js**  ·  백엔드: **Node(NestJS) 또는 Supabase**  ·  DB: **PostgreSQL**
- 인증: 이메일 + Google  ·  파일: S3/Supabase Storage  ·  i18n: 한국어/영어(확장 대비)

## 구현 규칙
- **디자인 토큰을 그대로 이식**하세요(`tokens/*.css`의 CSS 변수 → 앱의 theme/Tailwind/SCSS). 색·폰트·여백을 새로 만들지 말 것.
- 폰트 **Pretendard**, 아이콘 **Phosphor**(칩 안=fill, 인라인=regular). 현재 CDN 링크 → 프로덕션은 셀프호스팅 권장.
- 컴포넌트는 `*.d.ts`의 **props 계약을 동일하게** 유지하며 앱 스택으로 재구현(HTML을 그대로 복붙하지 말 것).
- 한국어 카피는 **해요체 권유형**, 이모지 사용 안 함, 숫자는 천단위 콤마 + `원`(`readme.md` CONTENT FUNDAMENTALS 참고).
- 추천 점수·생활비 계산은 `HANDOFF.md`의 **산식을 서버에서 구현**.

## 작업 우선순위(MVP)
1. 3개 사용자 화면 + 단계형 프로필 폼  2. 추천 결과(규칙기반 점수)  3. 학교별 생활비 계산기
4. 로그인/회원가입  5. 유학 상담요청 → `consultation_requests` 생성  6. 기본 관리자 대시보드(이 킷 범위 밖, 기획서 참조)
