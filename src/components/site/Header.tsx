"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { useModal } from "./ModalProvider";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const NAV = [
  { label: "맞춤 학교 찾기", href: "/match" },
  { label: "전체 대학 보기", href: "/universities" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { openModal } = useModal();
  const supabase = React.useMemo(() => createClient(), []);
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    let active = true;
    supabase.auth.getUser().then(({ data }) => {
      if (active) setUser(data.user);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, [supabase]);

  async function logout() {
    await supabase.auth.signOut();
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/90 backdrop-blur-[8px]">
      <div className="container-page flex h-[68px] items-center gap-9">
        <Link href="/" aria-label="K-Study Match 홈" className="flex">
          <Logo size={22} />
        </Link>
        <nav className="hidden md:flex items-center gap-7 h-full">
          {NAV.map((item) => {
            const on = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "h-full flex items-center text-[15px] border-b-[2.5px] transition-colors",
                  on
                    ? "font-semibold text-brand border-brand"
                    : "font-medium text-fg border-transparent hover:text-brand",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          {user ? (
            <Button variant="ghost" size="sm" onClick={logout}>
              로그아웃
            </Button>
          ) : (
            <>
              <Button variant="ghost" size="sm" onClick={() => openModal("login")}>
                로그인
              </Button>
              <Button variant="primary" size="sm" onClick={() => openModal("signup")}>
                무료 프로필 만들기
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
