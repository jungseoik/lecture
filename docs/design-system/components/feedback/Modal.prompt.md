Centered dialog for login, signup, consultation requests, and confirmations. Animates in/out, closes on Esc / backdrop / ×, and locks body scroll while open.

```jsx
const [open, setOpen] = React.useState(false);
<Modal open={open} onClose={() => setOpen(false)}
  title="이 학교에 대해 유학 상담을 요청하시겠습니까?"
  subtitle="입력하신 유학 프로필 정보와 선택한 학교 정보가 관리자에게 전달됩니다."
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>취소</Button>
    <Button variant="primary" onClick={submit}>상담 요청하기</Button>
  </>}>
  …본문…
</Modal>
```

Keep it controlled (`open` + `onClose`). Put primary/secondary actions in `footer`; long bodies scroll inside the panel.
