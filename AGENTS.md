# AGENTS.md

> 코딩 에이전트용 요약. 상세 지침은 **[`CLAUDE.md`](./CLAUDE.md)**, 사용법은 **[`README.md`](./README.md)** 참고.

## 프로젝트
**K-Study Match** — 외국인 유학생용 한국 대학 비교·추천·상담 플랫폼.
**Next.js 16(App Router) + React 19 + TypeScript + Tailwind v4 + Supabase(PostgreSQL/Auth)**, pnpm.

## 셋업 / 실행
```bash
pnpm install
pnpm dev            # http://localhost:3000 — Supabase 없어도 "데모 모드"(샘플 데이터)로 뜸
# 실데이터/인증까지:
cp .env.example .env.local && pnpm db:start   # Docker 필요
```

## 구조 (Frontend / Backend / DB)
- **Frontend**: `app/*/page.tsx`, `app/globals.css`(디자인 토큰), `src/components/ui`(디자인 컴포넌트)·`src/components/site`(섹션/헤더/푸터/모달)
- **Backend**: `app/api/**`(라우트 핸들러), `src/lib/**`(supabase 클라이언트·`universities`·`recommend`·유틸), `proxy.ts`(세션)
- **DB**: `supabase/migrations`·`seed.sql`
- **문서/레퍼런스**: `docs/design-system`(원본 디자인, **수정 금지**)·`docs/planning`(기획·시안)

## 규칙 (요약)
- 디자인 토큰만 사용(새 색/폰트 금지) · 타이포 `t-*` 클래스 · 숫자 `won()`+`tnum`
- 카피는 한국어 **해요체**, **이모지 금지**
- `docs/design-system/`는 레퍼런스 — 복붙 말고 이식 · 별칭 `@/* → ./src/*`
- DB 읽기 코드는 **미설정/오류 시 `src/lib/sample-data.ts`로 폴백**(데모 모드 유지)
- 변경 후 **`pnpm lint && pnpm build`** 통과 필수

## 함정 (CLAUDE.md §9 요약)
- `pnpm-workspace.yaml`의 `allowBuilds`(sharp/unrs-resolver) 유지 — 지우면 pnpm 에러
- 새 테이블은 `grant`/RLS 마이그레이션 필요(Supabase 새 CLI)
- 미들웨어는 `proxy.ts`(Next 16) · Tailwind 설정은 `globals.css @theme`(JS config 없음)

## 검증
`pnpm lint`, `pnpm build`(둘 다 `.env.local` 없이도 통과해야 함 = 데모 모드), `pnpm db:reset`(마이그레이션+시드).
