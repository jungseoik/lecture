import * as React from "react";
import Image from "next/image";
import {
  Wallet,
  GraduationCap,
  CurrencyKrw,
  HouseLine,
} from "@phosphor-icons/react/dist/ssr";
import { IconChip, type AccentColor } from "@/components/ui/IconChip";
import { Badge } from "@/components/ui/Badge";
import { KSM_IMG } from "@/lib/images";
import { won } from "@/lib/format";

/** 히어로 영역 뒤 하늘색 밴드. decor 지정 시 우측에 흐려지는 캠퍼스 이미지. */
export function HeroBand({
  children,
  tall = false,
  decor,
}: {
  children: React.ReactNode;
  tall?: boolean;
  decor?: string;
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--bg-hero) 0%, #F3F7FD 55%, var(--neutral-0) 100%)",
        paddingTop: tall ? 56 : 44,
        paddingBottom: tall ? 60 : 40,
      }}
    >
      {decor ? (
        <div
          aria-hidden
          className="absolute top-0 right-0 bottom-0 w-[46%] opacity-90"
          style={{
            backgroundImage: `url(${decor})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.85) 100%)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 38%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      ) : null}
      <div className="container-page relative z-10">{children}</div>
    </div>
  );
}

/** 히어로 위 떠 있는 미니 스탯 카드. */
export function FloatCard({
  icon,
  color,
  label,
  value,
  className,
  style,
}: {
  icon: React.ReactNode;
  color: AccentColor;
  label: string;
  value: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`absolute flex items-center gap-2.5 bg-surface rounded-lg border border-border-subtle shadow-lg px-3.5 py-2.5 ${className ?? ""}`}
      style={style}
    >
      <IconChip icon={icon} color={color} size={34} />
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] text-fg-muted whitespace-nowrap">{label}</span>
        <span className="text-[14px] font-bold text-fg-display tnum whitespace-nowrap">{value}</span>
      </div>
    </div>
  );
}

/** 히어로 비주얼: 캠퍼스 사진 패널 + 그 위 플로팅 데이터 카드 4개. */
export function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[300px]">
      <div
        className="absolute inset-0 rounded-[20px] overflow-hidden shadow-md"
        style={{
          border: "1px solid rgba(47,107,230,0.12)",
          backgroundImage: `linear-gradient(180deg, rgba(20,40,90,0.04) 0%, rgba(20,40,90,0.16) 100%), url(${KSM_IMG.heroPanel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <FloatCard icon={<CurrencyKrw weight="fill" />} color="blue" label="등록금(연)" value={won(4200000)} style={{ top: 22, left: 6 }} />
      <FloatCard icon={<HouseLine weight="fill" />} color="orange" label="기숙사(월)" value={won(350000)} style={{ top: 8, right: 8 }} />
      <FloatCard icon={<GraduationCap weight="fill" />} color="purple" label="장학금(평균)" value={won(1850000)} style={{ bottom: 64, left: 0 }} />
      <FloatCard icon={<Wallet weight="fill" />} color="green" label="생활비(월)" value={won(650000)} style={{ bottom: 18, right: 12 }} />
    </div>
  );
}

/** 대학 행 내부의 아이콘+라벨+값 컬럼. */
export function InfoStat({
  icon,
  color,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  color: AccentColor;
  label: string;
  value: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <IconChip icon={icon} color={color} size={32} />
      <div className="flex flex-col gap-px min-w-0">
        <span className="text-[11.5px] text-fg-muted whitespace-nowrap">{label}</span>
        <span className="text-[14px] font-bold text-fg-heading tnum whitespace-nowrap">
          {value}
          {sub ? <span className="text-[11.5px] font-medium text-fg-secondary ml-1">{sub}</span> : null}
        </span>
      </div>
    </div>
  );
}

/** 대학 썸네일 — 캠퍼스 사진 + 좌상단 학교유형 배지. */
export function CampusThumb({
  src,
  alt,
  type,
  className,
}: {
  src?: string;
  alt?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shrink-0 ${className ?? ""}`}
      style={{ background: "linear-gradient(150deg, #E6EEFA 0%, #D7E6F8 100%)" }}
    >
      {src ? (
        <Image src={src} alt={alt ?? "campus"} fill sizes="160px" className="object-cover" />
      ) : null}
      {type ? (
        <Badge tone="solid" size="sm" className="absolute top-2 left-2 shadow">
          {type}
        </Badge>
      ) : null}
    </div>
  );
}
