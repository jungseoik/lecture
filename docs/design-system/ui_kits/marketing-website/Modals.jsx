/* Auth + consultation modals for the K-Study Match marketing site. */
(() => {
  const NS = window.KStudyMatchDesignSystem_624b2d;
  const { Modal, Button, Input, FormField, Select, Checkbox } = NS;
  const D = window.KSM_DATA, WON = window.KSM_WON;

  const GoogleMark = () => (
    <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z"/><path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.33z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/></svg>
  );

  function Row({ k, v }) {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 14 }}>
        <span style={{ color: "var(--text-secondary)" }}>{k}</span>
        <span style={{ fontWeight: 700, color: "var(--text-heading)" }}>{v}</span>
      </div>
    );
  }

  function LoginBody({ openModal }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <FormField label="이메일"><Input type="email" placeholder="you@email.com" /></FormField>
        <FormField label="비밀번호"><Input type="password" placeholder="비밀번호 입력" /></FormField>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: -4 }}>
          <a href="#" style={{ fontSize: 13, color: "var(--text-secondary)" }}>비밀번호 찾기</a>
        </div>
        <Button variant="primary" full size="lg">로그인</Button>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "var(--text-muted)", fontSize: 12.5 }}>
          <span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />또는<span style={{ flex: 1, height: 1, background: "var(--border-subtle)" }} />
        </div>
        <Button variant="secondary" full size="lg" iconLeft={<GoogleMark />}>Google로 계속하기</Button>
        <p style={{ textAlign: "center", fontSize: 13.5, color: "var(--text-secondary)", marginTop: 4 }}>
          계정이 없으신가요? <a href="#" onClick={(e) => { e.preventDefault(); openModal("signup"); }} style={{ fontWeight: 700 }}>회원가입</a>
        </p>
      </div>
    );
  }

  function SignupBody({ openModal, navigate, close }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <FormField label="이름"><Input placeholder="이름 입력" /></FormField>
        <FormField label="이메일"><Input type="email" placeholder="you@email.com" /></FormField>
        <FormField label="비밀번호" hint="8자 이상, 영문/숫자 조합"><Input type="password" placeholder="비밀번호 입력" /></FormField>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FormField label="국적"><Select placeholder="선택"><option>베트남</option><option>몽골</option><option>중국</option><option>네팔</option></Select></FormField>
          <FormField label="전화번호"><Input placeholder="+__ ___ ___" /></FormField>
        </div>
        <Checkbox label="개인정보 수집 및 이용에 동의합니다." required defaultChecked />
        <Button variant="primary" full size="lg" iconRight={<i className="ph ph-arrow-right" />}
          onClick={() => { close(); navigate("match"); }}>가입하고 맞춤 학교 찾기</Button>
        <p style={{ textAlign: "center", fontSize: 13.5, color: "var(--text-secondary)", marginTop: 4 }}>
          이미 계정이 있으신가요? <a href="#" onClick={(e) => { e.preventDefault(); openModal("login"); }} style={{ fontWeight: 700 }}>로그인</a>
        </p>
      </div>
    );
  }

  function ConsultBody({ u, openModal }) {
    return (
      <div>
        <div style={{ background: "var(--neutral-50)", borderRadius: 12, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, marginBottom: 16 }}>
          <Row k="상담 요청 학교" v={u.name} />
          <Row k="상담 요청 학과" v={(u.majors && u.majors[0]) || "희망학과"} />
          <Row k="추천도" v={u.score ? u.score + "점" : "-"} />
          <Row k="예상 월 생활비" v={WON(u.monthlyCost)} />
          <Row k="연락 예정 수단" v="이메일 / WhatsApp" />
        </div>
        <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 14 }}>
          최종 입학 가능 여부와 장학금 수혜 여부는 각 대학의 심사 결과에 따라 달라질 수 있습니다.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <Checkbox label="상담 진행을 위해 유학 프로필 정보를 관리자에게 제공하는 것에 동의합니다." required defaultChecked />
          <Checkbox label="이메일·전화·WhatsApp·Telegram으로 상담 안내를 받는 것에 동의합니다." required defaultChecked />
          <Checkbox label="필요한 경우 해당 학교 관계자에게 내 정보를 전달하는 것에 동의합니다. (선택)" />
        </div>
      </div>
    );
  }

  function DoneBody({ u, navigate, close }) {
    return (
      <div style={{ textAlign: "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: "50%", background: "var(--success-bg)", color: "var(--success-fg)", fontSize: 34, marginBottom: 16 }}>
          <i className="ph-fill ph-check-circle" />
        </span>
        <h3 style={{ fontSize: 20, fontWeight: 800, color: "var(--text-display)", marginBottom: 8 }}>상담 요청이 완료되었습니다.</h3>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 18 }}>
          관리자가 학생의 정보와 선택한 학교를 확인한 후<br />상담 안내를 드릴 예정입니다.
        </p>
        <div style={{ background: "var(--neutral-50)", borderRadius: 12, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10, marginBottom: 18, textAlign: "left" }}>
          <Row k="상담 요청 학교" v={u.name} />
          <Row k="예상 월 생활비" v={WON(u.monthlyCost)} />
          <Row k="연락 예정 수단" v="이메일 / WhatsApp" />
        </div>
      </div>
    );
  }

  // payload: { type, university }
  function AppModals({ modal, openModal, close, navigate }) {
    if (!Modal) return null; // design-system bundle not yet recompiled with Modal
    if (!modal) return <Modal open={false} onClose={close} />;
    const u = modal.university || (D.universities[0]);
    const map = {
      login:   { title: "로그인", subtitle: "K-Study Match 계정으로 로그인하세요.", width: 420, body: <LoginBody openModal={openModal} /> },
      signup:  { title: "무료 프로필 만들기", subtitle: "가입하면 맞춤 추천 결과 저장과 상담요청을 이용할 수 있어요.", width: 460, body: <SignupBody openModal={openModal} navigate={navigate} close={close} /> },
      consult: {
        title: "이 학교에 대해 유학 상담을 요청하시겠습니까?",
        subtitle: "상담을 요청하면 입력하신 유학 프로필 정보와 선택한 학교 정보가 플랫폼 관리자에게 전달됩니다.",
        width: 480, body: <ConsultBody u={u} openModal={openModal} />,
        footer: <>
          <Button variant="ghost" onClick={close} style={{ border: "1px solid var(--border-subtle)" }}>취소</Button>
          <Button variant="primary" onClick={() => openModal("consultDone", u)}>상담 요청하기</Button>
        </>,
      },
      consultDone: {
        width: 440, body: <DoneBody u={u} navigate={navigate} close={close} />,
        footer: <>
          <Button variant="secondary" onClick={close} style={{ flex: 1 }}>다른 추천 학교 보기</Button>
          <Button variant="primary" onClick={() => { close(); navigate("match"); }} style={{ flex: 1 }}>내 상담 요청 보기</Button>
        </>,
      },
    };
    const cfg = map[modal.type] || map.login;
    return (
      <Modal open={true} onClose={close} title={cfg.title} subtitle={cfg.subtitle} width={cfg.width} footer={cfg.footer}>
        {cfg.body}
      </Modal>
    );
  }

  window.AppModals = AppModals;
})();
