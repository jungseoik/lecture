---
description: K-Study Match 개발 환경을 부트스트랩하고 동작을 검증한다
---

이 저장소(K-Study Match)의 개발 환경을 처음부터 세팅하고 검증해줘. `CLAUDE.md`를 먼저 읽고 그 지침을 따를 것.

절차:
1. `pnpm install` (실패 시 `pnpm-workspace.yaml`의 `allowBuilds` 확인 — CLAUDE.md §9).
2. UI 확인(데모 모드, Supabase 불필요): `pnpm build`가 `.env.local` 없이도 통과하는지 확인.
3. 실데이터까지 필요하면:
   - `.env.example`을 `.env.local`로 복사
   - Docker 데몬 확인 후 `pnpm db:start` (로컬 Supabase, 마이그레이션+시드 자동 적용)
   - `pnpm exec supabase status`로 URL/키가 `.env.local`과 일치하는지 확인
4. `pnpm dev`로 서버 기동 후 `/`, `/match`, `/universities`가 200인지, 생활비/추천 API가 동작하는지 curl로 검증.
5. `pnpm lint`, `pnpm build` 통과 확인.

주의: `docs/design-system/`은 수정하지 말 것(레퍼런스). 결과(무엇이 되고 무엇이 데모 모드인지)를 요약 보고.
