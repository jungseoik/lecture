"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { FormField } from "@/components/ui/FormField";
import { Checkbox } from "@/components/ui/Checkbox";
import { createClient } from "@/lib/supabase/client";
import { won } from "@/lib/format";

export interface ConsultUniversity {
  id: string;
  name: string;
  majors?: string[];
  score?: number;
  monthlyCost?: number;
  programId?: string;
}

type ModalType = "login" | "signup" | "consult" | "consultDone";
interface ModalState {
  type: ModalType;
  university?: ConsultUniversity;
}

interface ModalCtx {
  openModal: (type: ModalType, university?: ConsultUniversity) => void;
  close: () => void;
}

const Ctx = React.createContext<ModalCtx | null>(null);

export function useModal(): ModalCtx {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
}

const GoogleMark = () => (
  <svg width="17" height="17" viewBox="0 0 18 18" aria-hidden>
    <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 01-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.89 2.68-6.62z" />
    <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 009 18z" />
    <path fill="#FBBC05" d="M3.97 10.72A5.4 5.4 0 013.68 9c0-.6.1-1.18.29-1.72V4.95H.96A9 9 0 000 9c0 1.45.35 2.83.96 4.05l3.01-2.33z" />
    <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 00.96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z" />
  </svg>
);

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex justify-between items-baseline text-[14px]">
      <span className="text-fg-secondary">{k}</span>
      <span className="font-bold text-fg-heading">{v}</span>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 text-fg-muted text-[12.5px]">
      <span className="flex-1 h-px bg-border-subtle" />
      또는
      <span className="flex-1 h-px bg-border-subtle" />
    </div>
  );
}

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = React.useState<ModalState | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<string | null>(null);
  const router = useRouter();
  const supabase = React.useMemo(() => createClient(), []);

  // login form
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // signup extras
  const [name, setName] = React.useState("");
  const [nationality, setNationality] = React.useState("베트남");
  const [phone, setPhone] = React.useState("");

  const openModal = React.useCallback((type: ModalType, university?: ConsultUniversity) => {
    setError(null);
    setNotice(null);
    setModal({ type, university });
  }, []);
  const close = React.useCallback(() => setModal(null), []);

  async function handleLogin() {
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setError("이메일 또는 비밀번호를 확인해 주세요.");
    close();
    router.refresh();
  }

  async function handleSignup() {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, nationality, phone } },
    });
    setLoading(false);
    if (error) return setError(error.message);
    if (!data.session) {
      setNotice("가입 확인 메일을 보냈어요. 메일 인증 후 로그인해 주세요.");
      return;
    }
    close();
    router.push("/match");
    router.refresh();
  }

  async function handleConsult(u: ConsultUniversity) {
    setLoading(true);
    setError(null);
    const res = await fetch("/api/consultations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        universityId: u.id,
        programId: u.programId,
        matchScore: u.score,
        monthlyLivingCost: u.monthlyCost,
        contactMethod: "이메일 / WhatsApp",
      }),
    });
    setLoading(false);
    if (res.status === 401) {
      setError("로그인이 필요해요. 무료 프로필을 먼저 만들어 주세요.");
      openModal("signup");
      return;
    }
    if (!res.ok) {
      const j = await res.json().catch(() => ({}));
      return setError(j.error ?? "상담 요청에 실패했어요.");
    }
    openModal("consultDone", u);
  }

  const ctx = React.useMemo(() => ({ openModal, close }), [openModal, close]);

  return (
    <Ctx.Provider value={ctx}>
      {children}
      {renderModal()}
    </Ctx.Provider>
  );

  function ErrorLine() {
    if (error) return <p className="text-[13px] text-danger">{error}</p>;
    if (notice) return <p className="text-[13px] text-success-strong">{notice}</p>;
    return null;
  }

  function renderModal() {
    if (!modal) return <Modal open={false} onClose={close} />;
    const u = modal.university;

    if (modal.type === "login") {
      return (
        <Modal open onClose={close} title="로그인" subtitle="K-Study Match 계정으로 로그인하세요." width={420}>
          <div className="flex flex-col gap-3.5">
            <FormField label="이메일"><Input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /></FormField>
            <FormField label="비밀번호"><Input type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} /></FormField>
            <ErrorLine />
            <Button variant="primary" full size="lg" disabled={loading} onClick={handleLogin}>
              {loading ? "로그인 중…" : "로그인"}
            </Button>
            <Divider />
            <Button variant="secondary" full size="lg" iconLeft={<GoogleMark />} disabled>Google로 계속하기</Button>
            <p className="text-center text-[13.5px] text-fg-secondary mt-1">
              계정이 없으신가요?{" "}
              <button className="font-bold text-link" onClick={() => openModal("signup")}>회원가입</button>
            </p>
          </div>
        </Modal>
      );
    }

    if (modal.type === "signup") {
      return (
        <Modal open onClose={close} title="무료 프로필 만들기" subtitle="가입하면 맞춤 추천 결과 저장과 상담요청을 이용할 수 있어요." width={460}>
          <div className="flex flex-col gap-3.5">
            <FormField label="이름"><Input placeholder="이름 입력" value={name} onChange={(e) => setName(e.target.value)} /></FormField>
            <FormField label="이메일"><Input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} /></FormField>
            <FormField label="비밀번호" hint="6자 이상"><Input type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} /></FormField>
            <div className="grid grid-cols-2 gap-3">
              <FormField label="국적">
                <Select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                  <option>베트남</option><option>몽골</option><option>중국</option><option>네팔</option>
                </Select>
              </FormField>
              <FormField label="전화번호"><Input placeholder="+__ ___ ___" value={phone} onChange={(e) => setPhone(e.target.value)} /></FormField>
            </div>
            <Checkbox label="개인정보 수집 및 이용에 동의합니다." required defaultChecked />
            <ErrorLine />
            <Button variant="primary" full size="lg" iconRight={<ArrowRight weight="bold" />} disabled={loading} onClick={handleSignup}>
              {loading ? "가입 중…" : "가입하고 맞춤 학교 찾기"}
            </Button>
            <p className="text-center text-[13.5px] text-fg-secondary mt-1">
              이미 계정이 있으신가요?{" "}
              <button className="font-bold text-link" onClick={() => openModal("login")}>로그인</button>
            </p>
          </div>
        </Modal>
      );
    }

    if (modal.type === "consult" && u) {
      return (
        <Modal
          open
          onClose={close}
          title="이 학교에 대해 유학 상담을 요청하시겠습니까?"
          subtitle="상담을 요청하면 입력하신 유학 프로필 정보와 선택한 학교 정보가 플랫폼 관리자에게 전달됩니다."
          width={480}
          footer={
            <>
              <Button variant="ghost" className="border border-border-subtle" onClick={close}>취소</Button>
              <Button variant="primary" disabled={loading} onClick={() => handleConsult(u)}>
                {loading ? "요청 중…" : "상담 요청하기"}
              </Button>
            </>
          }
        >
          <div className="bg-surface-subtle rounded-xl px-4 py-3.5 flex flex-col gap-2.5 mb-4">
            <Row k="상담 요청 학교" v={u.name} />
            <Row k="상담 요청 학과" v={u.majors?.[0] ?? "희망학과"} />
            <Row k="추천도" v={u.score ? `${u.score}점` : "-"} />
            <Row k="예상 월 생활비" v={u.monthlyCost ? won(u.monthlyCost) : "-"} />
            <Row k="연락 예정 수단" v="이메일 / WhatsApp" />
          </div>
          <p className="text-[13px] text-fg-muted leading-relaxed mb-3.5">
            최종 입학 가능 여부와 장학금 수혜 여부는 각 대학의 심사 결과에 따라 달라질 수 있습니다.
          </p>
          <div className="flex flex-col gap-2.5">
            <Checkbox label="상담 진행을 위해 유학 프로필 정보를 관리자에게 제공하는 것에 동의합니다." required defaultChecked />
            <Checkbox label="이메일·전화·WhatsApp·Telegram으로 상담 안내를 받는 것에 동의합니다." required defaultChecked />
            <Checkbox label="필요한 경우 해당 학교 관계자에게 내 정보를 전달하는 것에 동의합니다. (선택)" />
          </div>
          <div className="mt-2"><ErrorLine /></div>
        </Modal>
      );
    }

    if (modal.type === "consultDone" && u) {
      return (
        <Modal
          open
          onClose={close}
          width={440}
          footer={
            <>
              <Button variant="secondary" className="flex-1" onClick={close}>다른 추천 학교 보기</Button>
              <Button variant="primary" className="flex-1" onClick={() => { close(); router.push("/match"); }}>내 상담 요청 보기</Button>
            </>
          }
        >
          <div className="text-center">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-soft text-success text-[34px] mb-4">
              <CheckCircle weight="fill" />
            </span>
            <h3 className="text-[20px] font-bold text-fg-display mb-2">상담 요청이 완료되었어요.</h3>
            <p className="text-[14px] text-fg-secondary leading-relaxed mb-5">
              관리자가 학생의 정보와 선택한 학교를 확인한 후<br />상담 안내를 드릴 예정입니다.
            </p>
            <div className="bg-surface-subtle rounded-xl px-4 py-3.5 flex flex-col gap-2.5 text-left">
              <Row k="상담 요청 학교" v={u.name} />
              <Row k="예상 월 생활비" v={u.monthlyCost ? won(u.monthlyCost) : "-"} />
              <Row k="연락 예정 수단" v="이메일 / WhatsApp" />
            </div>
          </div>
        </Modal>
      );
    }

    return <Modal open={false} onClose={close} />;
  }
}
