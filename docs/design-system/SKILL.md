---
name: k-study-match-design
description: Use this skill to generate well-branded interfaces and assets for K-Study Match (외국인 유학생을 위한 한국 대학 비교·추천·상담 플랫폼), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — link this one file to get all tokens + fonts (Pretendard via CDN).
- `tokens/` — color, type, spacing, effects, base CSS variables.
- `components/` — React primitives (`core/`, `forms/`, `data-display/`). Read each `*.prompt.md` for usage. After compilation they live on `window.KStudyMatchDesignSystem_624b2d`.
- `ui_kits/marketing-website/` — interactive recreation of the 3 user pages (메인 / 맞춤 학교 찾기 / 전체 대학 보기).
- `guidelines/` — foundation specimen cards.

## Brand in one breath
Trustworthy edu/fintech SaaS. One royal blue (`--brand` #1F5BDB) for every primary action and key number; clean white + soft blue-grey surfaces; pastel icon chips (green/purple/blue/orange/sky) for concepts. Pretendard, heavy tight headings. Soft 14px-rounded cards, low cool shadows. Korean 해요체 권유 copy, no emoji, honest specific numbers. Phosphor icons (fill in chips, regular inline).
