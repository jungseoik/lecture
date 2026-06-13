Icon-only square button for compact actions like bookmarking, expanding a row, or closing a modal. Always pass an accessible `label`.

```jsx
<IconButton icon={<i className="ph ph-bookmark-simple" />} label="관심 저장" variant="outline" />
<IconButton icon={<i className="ph ph-caret-down" />} label="펼치기" />
```

Variants: `ghost` (toolbars), `outline` (standalone), `soft` (blue-tinted). Use `active` for toggled state.
