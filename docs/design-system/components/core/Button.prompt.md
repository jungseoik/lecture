Solid royal-blue call-to-action; use it for the single most important action in any view and reach for `secondary`/`subtle`/`ghost` for supporting actions.

```jsx
<Button variant="primary" size="lg" iconRight={<i className="ph ph-arrow-right" />}>
  내 조건에 맞는 학교 찾기
</Button>
<Button variant="secondary">전체 대학 정보 보기</Button>
```

Variants: `primary` (blue fill — one per section), `secondary` (white + blue border), `subtle` (light-blue fill), `ghost` (transparent, for toolbars), `link` (inline text link). Sizes `sm` / `md` / `lg`. `full` stretches to container width; pass icons via `iconLeft` / `iconRight`.
