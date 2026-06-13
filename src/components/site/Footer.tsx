const LINKS = ["개인정보 처리방침", "이용약관", "문의하기"];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface mt-2">
      <div className="container-page py-[34px] text-center">
        <div className="flex justify-center items-center flex-wrap mb-3">
          {LINKS.map((l, i) => (
            <span key={l} className="inline-flex items-center">
              {i > 0 ? <span className="text-border-strong mx-3.5">|</span> : null}
              <a href="#" className="text-[13.5px] text-fg-secondary hover:text-brand">
                {l}
              </a>
            </span>
          ))}
        </div>
        <p className="text-[12.5px] text-fg-muted">© 2024 K-Study Match. All rights reserved.</p>
      </div>
    </footer>
  );
}
