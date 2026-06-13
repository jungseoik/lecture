"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MagnifyingGlass,
  ArrowCounterClockwise,
  ArrowsDownUp,
  CurrencyKrw,
  SealPercent,
  Buildings,
  Wallet,
  UsersThree,
  GraduationCap,
  BookmarkSimple,
  CaretUp,
  CaretDown,
  CaretRight,
  ArrowRight,
  Phone,
  EnvelopeSimple,
  Globe,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";
import { IconButton } from "@/components/ui/IconButton";
import { InfoStat, CampusThumb } from "@/components/site/visual";
import { won } from "@/lib/format";
import { KSM_IMG } from "@/lib/images";
import type { UniversitySummary } from "@/lib/universities";

const TYPE_OPTIONS = ["전체", "국립대", "사립대", "전문대", "대학원대학"];
const DEGREE_OPTIONS = ["전체", "어학연수", "학부", "석사", "박사"];
const MAJOR_OPTIONS = [
  "전체 전공",
  "경영·경제",
  "공학·IT",
  "자연과학",
  "예체능",
  "인문·사회",
];
const LANG_OPTIONS = ["전체", "한국어", "영어", "혼합"];
const SCHOLARSHIP_OPTIONS = ["전체", "있음", "없음"];
const REDUCTION_OPTIONS = ["전체", "30% 이상", "50% 이상", "100%"];
const DORM_OPTIONS = ["전체", "제공", "미제공"];
const TOPIK_OPTIONS = ["전체", "없음", "3급 이하", "4급 이상"];
const IELTS_OPTIONS = ["전체", "5.5 이상", "6.0 이상"];

const SORTS = [
  "등록금 낮은순",
  "장학금 높은순",
  "생활비 낮은순",
  "외국인학생 비율 높은순",
  "최신 등록순",
] as const;
type Sort = (typeof SORTS)[number];

const LOW_COST_THRESHOLD = 600000;

/** 대학별 강조 태그 생성 (기숙사·장학금·영어트랙·TOPIK). */
function buildTags(u: UniversitySummary): string[] {
  const tags: string[] = [];
  if (u.dorm) tags.push("기숙사 제공");
  if (u.scholarship > 0) tags.push("장학금 있음");
  if (u.languages.includes("영어")) tags.push("영어트랙");
  if (u.topik) tags.push(u.topik);
  return tags;
}

function FilterField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-semibold text-fg-heading">
        {label}
      </label>
      {children}
    </div>
  );
}

function DetailCol({
  title,
  link,
  children,
}: {
  title: string;
  link?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h5 className="text-[14px] font-bold text-fg-heading mb-2.5">{title}</h5>
      {children}
      {link ? (
        <span className="mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-link">
          {link}
          <CaretRight className="text-[11px]" />
        </span>
      ) : null}
    </div>
  );
}

function DList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 p-0 list-none flex flex-col gap-1.5">
      {items.map((t, i) => (
        <li
          key={i}
          className="text-[13px] text-fg-secondary flex gap-1.5 leading-snug"
        >
          <span className="text-acc-blue shrink-0">•</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function UniversityRow({
  u,
  expanded,
  onToggle,
}: {
  u: UniversitySummary;
  expanded: boolean;
  onToggle: () => void;
}) {
  const tags = buildTags(u);
  return (
    <div
      className={`bg-surface rounded-xl overflow-hidden border transition-[border-color,box-shadow] ${
        expanded
          ? "border-border-strong shadow-md"
          : "border-border-subtle shadow-sm"
      }`}
    >
      {/* main row */}
      <div className="flex items-center gap-[18px] p-[18px]">
        <CampusThumb
          src={u.image ?? undefined}
          alt={u.name}
          type={u.type ?? undefined}
          className="w-[132px] h-24"
        />
        {/* logo + identity */}
        <div className="flex items-start gap-3 shrink-0 w-[230px]">
          <span className="shrink-0 w-[38px] h-[38px] rounded-full bg-surface-inset flex items-center justify-center text-[12px] font-extrabold text-fg-secondary">
            {u.initial}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="t-h4 text-fg-display">{u.name}</h4>
              {u.region ? (
                <span className="text-[12.5px] text-fg-muted">{u.region}</span>
              ) : null}
            </div>
            <div className="flex gap-1.5 flex-wrap mt-2">
              {u.type ? (
                <Badge tone="neutral" size="sm">
                  {u.type}
                </Badge>
              ) : null}
              {tags.slice(0, 4).map((t) => (
                <Badge
                  key={t}
                  tone={t.includes("장학") ? "green" : "blue"}
                  size="sm"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        {/* stats */}
        <div className="flex-1 flex gap-[18px] justify-between pl-1.5">
          <InfoStat
            icon={<CurrencyKrw weight="fill" />}
            color="blue"
            label="학기당 등록금"
            value={won(u.tuition)}
          />
          <InfoStat
            icon={<SealPercent weight="fill" />}
            color="purple"
            label="장학금 최대 감면율"
            value={`${u.scholarship}%`}
          />
          <InfoStat
            icon={<Buildings weight="fill" />}
            color="orange"
            label="기숙사"
            value={u.dorm ? "제공" : "미제공"}
          />
          <InfoStat
            icon={<Wallet weight="fill" />}
            color="green"
            label="예상 월 생활비"
            value={won(u.monthlyCost)}
          />
          <InfoStat
            icon={<UsersThree weight="fill" />}
            color="sky"
            label="외국인학생 비율"
            value={`${u.foreign ?? 0}%`}
          />
        </div>
        {/* actions */}
        <div className="shrink-0 flex flex-col gap-1.5 w-[130px]">
          <Button variant="secondary" size="sm" full>
            상세보기
          </Button>
          <Button
            variant="ghost"
            size="sm"
            full
            iconLeft={<BookmarkSimple />}
            className="border border-border-subtle"
          >
            관심 저장
          </Button>
          <Link href="/match" className="block">
            <Button variant="primary" size="sm" full>
              내 조건으로 확인
            </Button>
          </Link>
        </div>
        <IconButton
          icon={expanded ? <CaretUp /> : <CaretDown />}
          label="펼치기"
          variant="ghost"
          onClick={onToggle}
        />
      </div>
      {/* expanded detail */}
      {expanded ? (
        <div className="border-t border-border-subtle px-6 py-[22px] bg-surface-subtle grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-[26px]">
          <DetailCol title="학교 소개">
            <p className="text-[13px] text-fg-secondary leading-relaxed">
              {u.intro}
            </p>
          </DetailCol>
          <DetailCol title="주요 전공" link="전체 전공 보기">
            <DList items={u.majors.slice(0, 5)} />
          </DetailCol>
          <DetailCol title="입학 조건">
            <DList items={u.admission} />
          </DetailCol>
          <DetailCol title="장학금 정보" link="장학금 세부 정보 보기">
            <DList items={u.scholarshipInfo} />
          </DetailCol>
          <DetailCol title="국제교류처 연락처">
            <div className="flex flex-col gap-2 text-[13px] text-fg">
              {u.contact.phone ? (
                <span className="flex gap-2 items-center">
                  <Phone className="text-brand" />
                  {u.contact.phone}
                </span>
              ) : null}
              {u.contact.email ? (
                <span className="flex gap-2 items-center">
                  <EnvelopeSimple className="text-brand" />
                  {u.contact.email}
                </span>
              ) : null}
              {u.contact.web ? (
                <span className="flex gap-2 items-center">
                  <Globe className="text-brand" />
                  {u.contact.web}
                </span>
              ) : null}
            </div>
          </DetailCol>
        </div>
      ) : null}
    </div>
  );
}

export function UniversitiesClient({
  universities,
}: {
  universities: UniversitySummary[];
}) {
  // 검색/필터 입력 state
  const [query, setQuery] = React.useState("");
  const [region, setRegion] = React.useState("전체");
  const [type, setType] = React.useState("전체");
  const [degree, setDegree] = React.useState("전체");
  const [major, setMajor] = React.useState("전체 전공");
  const [lang, setLang] = React.useState("전체");
  const [scholarship, setScholarship] = React.useState("전체");
  const [reduction, setReduction] = React.useState("전체");
  const [dorm, setDorm] = React.useState("전체");
  const [topik, setTopik] = React.useState("전체");
  const [ielts, setIelts] = React.useState("전체");

  // 적용된 검색 조건 (검색 버튼 클릭 시 반영)
  const [applied, setApplied] = React.useState({
    query: "",
    region: "전체",
    type: "전체",
    dorm: "전체",
  });

  const [sort, setSort] = React.useState<Sort>(SORTS[0]);
  const [expanded, setExpanded] = React.useState<string | null>(
    universities[0]?.id ?? null,
  );

  // 지역 옵션: 데이터의 regionGroup 에서 추출
  const regionOptions = React.useMemo(() => {
    const set = new Set<string>();
    universities.forEach((u) => {
      if (u.regionGroup) set.add(u.regionGroup);
    });
    return ["전체", ...Array.from(set)];
  }, [universities]);

  function applySearch() {
    setApplied({ query, region, type, dorm });
  }

  function reset() {
    setQuery("");
    setRegion("전체");
    setType("전체");
    setDegree("전체");
    setMajor("전체 전공");
    setLang("전체");
    setScholarship("전체");
    setReduction("전체");
    setDorm("전체");
    setTopik("전체");
    setIelts("전체");
    setApplied({ query: "", region: "전체", type: "전체", dorm: "전체" });
  }

  // 실제 필터링 (대학명·지역·학교유형·기숙사)
  const filtered = React.useMemo(() => {
    return universities.filter((u) => {
      if (
        applied.query &&
        !u.name.toLowerCase().includes(applied.query.trim().toLowerCase())
      )
        return false;
      if (applied.region !== "전체" && u.regionGroup !== applied.region)
        return false;
      if (applied.type !== "전체" && u.type !== applied.type) return false;
      if (applied.dorm === "제공" && !u.dorm) return false;
      if (applied.dorm === "미제공" && u.dorm) return false;
      return true;
    });
  }, [universities, applied]);

  // 정렬
  const sorted = React.useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case "등록금 낮은순":
        arr.sort((a, b) => a.tuition - b.tuition);
        break;
      case "장학금 높은순":
        arr.sort((a, b) => b.scholarship - a.scholarship);
        break;
      case "생활비 낮은순":
        arr.sort((a, b) => a.monthlyCost - b.monthlyCost);
        break;
      case "외국인학생 비율 높은순":
        arr.sort((a, b) => (b.foreign ?? 0) - (a.foreign ?? 0));
        break;
      case "최신 등록순":
      default:
        break;
    }
    return arr;
  }, [filtered, sort]);

  // 카운터 (전체 데이터 기준)
  const scholarshipCount = universities.filter((u) => u.scholarship > 0).length;
  const dormCount = universities.filter((u) => u.dorm).length;
  const lowCostCount = universities.filter(
    (u) => u.monthlyCost <= LOW_COST_THRESHOLD,
  ).length;

  return (
    <div className="container-page pb-20 -mt-2">
      {/* Filter panel */}
      <div className="bg-surface border border-border-subtle rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-4 gap-[18px]">
          <FilterField label="대학명 검색">
            <Input
              placeholder="대학명을 입력하세요"
              iconLeft={<MagnifyingGlass />}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </FilterField>
          <FilterField label="지역">
            <Select value={region} onChange={(e) => setRegion(e.target.value)}>
              {regionOptions.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="학교 유형">
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              {TYPE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="학위과정">
            <Select value={degree} onChange={(e) => setDegree(e.target.value)}>
              {DEGREE_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="전공">
            <Select value={major} onChange={(e) => setMajor(e.target.value)}>
              {MAJOR_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="수업 언어">
            <Select value={lang} onChange={(e) => setLang(e.target.value)}>
              {LANG_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="등록금 범위 (학기당)">
            <div className="flex items-center gap-2">
              <Select defaultValue="">
                <option value="">최소 선택</option>
                <option>200만원</option>
                <option>300만원</option>
              </Select>
              <span className="text-fg-muted">~</span>
              <Select defaultValue="">
                <option value="">최대 선택</option>
                <option>400만원</option>
                <option>500만원</option>
              </Select>
            </div>
          </FilterField>
          <FilterField label="장학금 여부">
            <Select
              value={scholarship}
              onChange={(e) => setScholarship(e.target.value)}
            >
              {SCHOLARSHIP_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="장학금 감면율">
            <Select
              value={reduction}
              onChange={(e) => setReduction(e.target.value)}
            >
              {REDUCTION_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="기숙사 제공 여부">
            <Select value={dorm} onChange={(e) => setDorm(e.target.value)}>
              {DORM_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="TOPIK 조건">
            <Select value={topik} onChange={(e) => setTopik(e.target.value)}>
              {TOPIK_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
          <FilterField label="IELTS 조건">
            <Select value={ielts} onChange={(e) => setIelts(e.target.value)}>
              {IELTS_OPTIONS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </Select>
          </FilterField>
        </div>
        <div className="flex justify-between mt-[22px]">
          <Button
            variant="ghost"
            iconLeft={<ArrowCounterClockwise />}
            className="border border-border-subtle"
            onClick={reset}
          >
            초기화
          </Button>
          <Button
            variant="primary"
            iconLeft={<MagnifyingGlass />}
            className="min-w-[260px]"
            onClick={applySearch}
          >
            검색
          </Button>
        </div>
      </div>

      {/* Sort tabs */}
      <div className="flex items-center gap-4 bg-surface border border-border-subtle rounded-lg px-[18px] py-3 mt-[18px]">
        <span className="text-[14px] font-bold text-fg-heading shrink-0 flex items-center gap-1.5">
          <ArrowsDownUp />
          정렬 순서
        </span>
        <div className="flex gap-1.5 flex-wrap">
          {SORTS.map((s) => {
            const on = sort === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => setSort(s)}
                className={`cursor-pointer text-[13.5px] px-3.5 py-2 rounded-md ${
                  on
                    ? "bg-blue-50 text-brand font-bold"
                    : "bg-transparent text-fg-secondary font-medium"
                }`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>

      {/* List header + counters */}
      <div className="flex items-center justify-between mt-[30px] mb-4 gap-4">
        <h2 className="t-h2 text-fg-display flex items-baseline gap-3">
          전체 대학 리스트
          <span className="text-[15px] font-semibold text-fg-secondary">
            총 <span className="tnum">{sorted.length}</span>개 대학
          </span>
        </h2>
        <div className="flex gap-3">
          <StatCard
            icon={<GraduationCap weight="fill" />}
            color="purple"
            label="장학금 제공 대학"
            value={scholarshipCount}
            unit="개"
          />
          <StatCard
            icon={<Buildings weight="fill" />}
            color="orange"
            label="기숙사 제공 대학"
            value={dormCount}
            unit="개"
          />
          <StatCard
            icon={<Wallet weight="fill" />}
            color="green"
            label="생활비 낮은 지역 대학"
            value={lowCostCount}
            unit="개"
          />
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-3.5">
        {sorted.map((u) => (
          <UniversityRow
            key={u.id}
            u={u}
            expanded={expanded === u.id}
            onToggle={() => setExpanded(expanded === u.id ? null : u.id)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl px-9 py-[30px] flex items-center justify-between gap-6 mt-[26px]">
        <div className="flex items-center gap-[18px]">
          <div className="relative shrink-0 w-[92px] h-16 rounded-xl overflow-hidden border border-blue-100">
            <Image
              src={KSM_IMG.grads}
              alt=""
              fill
              sizes="92px"
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="t-h3 text-fg-display">
              내 조건으로 지원 가능한 학교를 추천받아보세요.
            </h3>
            <p className="t-sm text-fg-secondary mt-1.5">
              GPA, TOPIK, IELTS, 희망전공 정보를 입력하면 나에게 맞는 학교와
              장학금 가능성을 확인할 수 있어요.
            </p>
          </div>
        </div>
        <Link href="/match" className="shrink-0">
          <Button variant="primary" size="lg" iconRight={<ArrowRight />}>
            맞춤 학교 찾기
          </Button>
        </Link>
      </div>
    </div>
  );
}
