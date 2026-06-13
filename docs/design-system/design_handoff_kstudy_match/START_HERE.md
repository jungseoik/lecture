# START HERE — K-Study Match 개발 패키지 (Claude Code)

이 폴더는 **개발 착수용 빠른 시작 안내**입니다. 실제 디자인 시스템·UI 킷·매핑 문서는 **상위 폴더(저장소 루트)** 에 있습니다.

## 1) VS Code + Claude Code로 시작하기
```bash
# 1. 다운로드한 zip 압축 해제 후
code k-study-match-design-system/      # VS Code로 폴더 열기

# 2. (선택) Git 시작 — 병행 개발용
git init && git add -A && git commit -m "chore: import design system"

# 3. Claude Code 실행 (확장 또는 CLI)
claude            # 통합 터미널에서. CLAUDE.md를 자동으로 읽습니다.
```

## 2) Claude Code에 줄 첫 프롬프트(예시)
```
이 저장소는 K-Study Match 디자인 시스템 + UI 킷이야.
CLAUDE.md → readme.md → HANDOFF.md 순으로 읽고,
Next.js + Supabase(PostgreSQL)로 사용자용 3개 화면(메인/맞춤 학교 찾기/전체 대학 보기)을
실제 앱으로 구현해줘. tokens/의 디자인 토큰을 그대로 쓰고,
components/의 props 계약을 유지해서 재구현해. 먼저 구현 계획과 폴더 구조를 제안해줘.
```

## 3) 병행 개발 가이드
- **공유 기준 = 이 디자인 시스템.** 프론트/백엔드를 동시에 진행 가능.
  - 프론트 담당: `components/`, `ui_kits/marketing-website/`, `tokens/`
  - 백엔드 담당: `HANDOFF.md` §2(DB·API 매핑), §4(DB 스키마)
- Git 브랜치로 작업 분리(예: `feat/match-page`, `feat/api-consultations`).
- Claude Code를 VS Code 터미널에서 돌리면서 사람이 동시에 편집해도 됩니다(커밋 단위로 정리).

## 4) 어디에 무엇이 있나 (루트 기준)
| 경로 | 내용 |
|---|---|
| `CLAUDE.md` | Claude Code 자동 로드 지침(필독) |
| `readme.md` | 브랜드·콘텐츠·비주얼·아이코노그래피 가이드 |
| `HANDOFF.md` | 화면→컴포넌트→필드→DB→API 매핑, 산식, 유효성 |
| `SKILL.md` | Agent Skill 진입점(디자인 규칙 요약) |
| `tokens/` | 디자인 토큰 CSS 변수 |
| `components/` | 재사용 컴포넌트 + props(`.d.ts`) + 사용법(`.prompt.md`) |
| `ui_kits/marketing-website/` | 3개 화면 + 모달(인터랙티브) |

## 5) 주의
- 번들/매니페스트(`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`)는 디자인 시스템 도구가 만든 산출물 — 프로덕션 앱에선 참고만, 직접 의존하지 않아도 됩니다.
- 폰트/아이콘/이미지는 현재 CDN 링크 → 프로덕션은 셀프호스팅·라이선스 에셋으로 교체.
