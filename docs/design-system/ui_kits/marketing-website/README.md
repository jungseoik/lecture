# Marketing Website — UI Kit

High-fidelity recreation of the **K-Study Match** user-facing site, built from
the development spec (개발기획서 / 화면설계서 / 메뉴구조도) and the three approved
design mockups (메인페이지 / 맞춤 학교 찾기 / 전체 대학 보기).

## Screens
| File | Screen | Spec ID |
|---|---|---|
| `Landing.jsx` | 메인페이지 — hero, 기능 안내, 간단 생활비 계산기, 추천 유도 배너 | U-01 |
| `Match.jsx` | 맞춤 학교 찾기 — 단계형 프로필 폼, 추천 결과 요약, 추천 카드 + 학교별 생활비 계산기 | U-02 |
| `Universities.jsx` | 전체 대학 보기 — 검색 필터, 정렬, 펼침형 대학 리스트(상세) | U-03 |
| `Header.jsx` | 공통 헤더(로고/내비/로그인/무료 프로필 만들기) + 푸터 | — |
| `shared.jsx` | HeroBand, HeroVisual, FloatCard, InfoStat, CampusThumb 등 시각 헬퍼 |
| `data.js` | 샘플 대학/지역/생활비 데이터 (`window.KSM_DATA`) |

## Running
Open `index.html`. It loads React + Babel, the compiled design-system bundle
(`../../_ds_bundle.js`), Phosphor icons, then the screen modules. The header nav
switches between the three pages (state persisted to `localStorage`). The living-cost
estimator, the multi-step form radios, the sort tabs and the expandable university /
recommendation rows are all interactive.

## Notes on assets
The hero student/campus artwork and per-university campus photos are **external image
assets the team supplies**. They are shown here as on-brand placeholders
(`HeroVisual`, `CampusThumb`). Drop real images in to finish the visuals. All other
visuals (floating data cards, pastel icon chips, badges, stat tiles) are real components.

## Composition
Screens compose the design-system primitives — `Button`, `Input`, `Select`,
`Checkbox`, `RadioGroup`, `FormField`, `StepIndicator`, `Badge`, `StatCard`,
`FeatureCard`, `IconChip`, `IconButton`, `Logo` — rather than re-implementing them.
