"use client";

import * as React from "react";
import {
  CurrencyKrw,
  SealPercent,
  Buildings,
  Wallet,
  GraduationCap,
  Money,
  PiggyBank,
  ChatCircleDots,
  BookmarkSimple,
  CaretUp,
  CaretDown,
  ArrowRight,
} from "@phosphor-icons/react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { FormField } from "@/components/ui/FormField";
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioGroup } from "@/components/ui/Radio";
import { StepIndicator } from "@/components/ui/StepIndicator";
import { Badge } from "@/components/ui/Badge";
import { StatCard } from "@/components/ui/StatCard";
import { IconButton } from "@/components/ui/IconButton";
import { InfoStat, CampusThumb } from "@/components/site/visual";
import { useModal } from "@/components/site/ModalProvider";
import { won, comma } from "@/lib/format";
import { KSM_IMG } from "@/lib/images";
import type { Recommendation } from "@/lib/recommend";

const STEPS = [
  "기본 정보",
  "유학 희망 정보",
  "학업 정보",
  "어학 정보",
  "재정 및 서류 정보",
];

const REGIONS = [
  "서울",
  "경기·인천",
  "충청권",
  "전라권",
  "경상권",
  "강원권",
  "제주",
];

interface Summary {
  count: number;
  scholarshipCount: number;
  dormCount: number;
  avgMonthly: number;
}

function summarize(recs: Recommendation[]): Summary {
  return {
    count: recs.length,
    scholarshipCount: recs.filter((r) => r.scholarship >= 50).length,
    dormCount: recs.filter((r) => r.dorm).length,
    avgMonthly: recs.length
      ? Math.round(recs.reduce((a, r) => a + r.monthlyCost, 0) / recs.length)
      : 0,
  };
}

export function MatchClient({ initialRecs }: { initialRecs: Recommendation[] }) {
  const [recs, setRecs] = React.useState<Recommendation[]>(initialRecs);
  const [summary, setSummary] = React.useState<Summary>(() =>
    summarize(initialRecs),
  );
  const [expanded, setExpanded] = React.useState<string | null>(
    initialRecs[0]?.id ?? null,
  );
  const [loading, setLoading] = React.useState(false);

  // 폼 입력 상태
  const [desiredMajor, setDesiredMajor] = React.useState("경영학");
  const [desiredRegion, setDesiredRegion] = React.useState("충청권");
  const [topik, setTopik] = React.useState("TOPIK 3급");
  const [ielts, setIelts] = React.useState("5.5");
  const [gpa, setGpa] = React.useState("3.4");
  const [gpaScale, setGpaScale] = React.useState("4.5 만점");
  const [financialProof, setFinancialProof] = React.useState("가능");
  const [scholarshipNeed, setScholarshipNeed] = React.useState("필요");

  async function handleRecommend() {
    setLoading(true);
    try {
      const res = await fetch("/api/universities/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          desiredMajor,
          desiredRegion,
          topik,
          ielts,
          gpa,
          gpaScale,
          financialProof,
          scholarshipNeed: scholarshipNeed === "필요" ? "필요" : "불필요",
        }),
      });
      if (res.ok) {
        const data = (await res.json()) as {
          summary: Summary;
          recommendations: Recommendation[];
        };
        setRecs(data.recommendations);
        setSummary(data.summary);
        setExpanded(data.recommendations[0]?.id ?? null);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container-page pb-20 -mt-2">
      {/* 프로필 입력 폼 */}
      <div className="bg-surface border border-border-subtle rounded-xl shadow-sm p-7">
        <div className="mb-6">
          <StepIndicator steps={STEPS} current={2} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FormField label="이름">
            <Input defaultValue="홍길동" />
          </FormField>
          <FormField label="성별">
            <Select defaultValue="남성">
              <option>남성</option>
              <option>여성</option>
              <option>기타</option>
            </Select>
          </FormField>
          <FormField label="국적">
            <Select defaultValue="베트남">
              <option>베트남</option>
              <option>몽골</option>
              <option>중국</option>
              <option>네팔</option>
            </Select>
          </FormField>
          <FormField label="현재 거주 국가">
            <Select defaultValue="베트남">
              <option>베트남</option>
              <option>한국</option>
            </Select>
          </FormField>

          <FormField label="이메일">
            <Input defaultValue="gildong.hong@email.com" />
          </FormField>
          <FormField label="전화번호">
            <Input defaultValue="+84 912 345 678" />
          </FormField>
          <FormField label="희망 학위">
            <Select defaultValue="학부">
              <option>어학연수</option>
              <option>학부</option>
              <option>석사</option>
              <option>박사</option>
            </Select>
          </FormField>
          <FormField label="희망 전공">
            <Select
              value={desiredMajor}
              onChange={(e) => setDesiredMajor(e.target.value)}
            >
              <option>경영학</option>
              <option>컴퓨터공학</option>
              <option>전자공학</option>
            </Select>
          </FormField>

          <FormField label="희망 지역">
            <Select
              value={desiredRegion}
              onChange={(e) => setDesiredRegion(e.target.value)}
            >
              {REGIONS.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </Select>
          </FormField>
          <FormField label="희망 입학 시기">
            <Select defaultValue="2025년 9월 (가을학기)">
              <option>2025년 3월 (봄학기)</option>
              <option>2025년 9월 (가을학기)</option>
            </Select>
          </FormField>
          <FormField label="최종학력">
            <Select defaultValue="고등학교 졸업">
              <option>고등학교 졸업</option>
              <option>전문대 졸업</option>
              <option>대학교 졸업</option>
            </Select>
          </FormField>
          <div className="grid grid-cols-2 gap-2.5">
            <FormField label="GPA">
              <Input value={gpa} onChange={(e) => setGpa(e.target.value)} />
            </FormField>
            <FormField label="GPA 기준">
              <Select
                value={gpaScale}
                onChange={(e) => setGpaScale(e.target.value)}
              >
                <option>4.0 만점</option>
                <option>4.3 만점</option>
                <option>4.5 만점</option>
                <option>100점 만점</option>
              </Select>
            </FormField>
          </div>

          <FormField label="TOPIK 등급">
            <Select value={topik} onChange={(e) => setTopik(e.target.value)}>
              <option>없음</option>
              <option>TOPIK 2급</option>
              <option>TOPIK 3급</option>
              <option>TOPIK 4급</option>
            </Select>
          </FormField>
          <FormField label="IELTS 점수">
            <Input value={ielts} onChange={(e) => setIelts(e.target.value)} />
          </FormField>
          <FormField label="재정증명 가능 여부">
            <div className="pt-2.5">
              <RadioGroup
                options={["가능", "불가능"]}
                value={financialProof}
                onChange={setFinancialProof}
                name="fin"
              />
            </div>
          </FormField>
          <FormField label="장학금 필요 여부">
            <div className="pt-2.5">
              <RadioGroup
                options={["필요", "불필요"]}
                value={scholarshipNeed}
                onChange={setScholarshipNeed}
                name="sch"
              />
            </div>
          </FormField>
        </div>

        <div className="flex flex-col gap-5 mt-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-2.5">
              <Checkbox
                label="개인정보 수집 및 이용에 동의합니다."
                required
                defaultChecked
              />
              <a
                href="#"
                className="text-[12.5px] text-fg-secondary border border-border-subtle rounded-sm px-2 py-0.5"
              >
                자세히 보기
              </a>
            </div>
            <Checkbox
              label="맞춤 대학 추천을 위해 내 정보를 활용하는 것에 동의합니다."
              required
              defaultChecked
            />
            <Checkbox label="이벤트 및 유학 정보 수신에 동의합니다. (선택)" />
          </div>
          <Button
            variant="primary"
            size="lg"
            iconRight={<ArrowRight weight="bold" />}
            disabled={loading}
            onClick={handleRecommend}
          >
            {loading ? "추천 계산 중…" : "내 조건으로 학교 추천받기"}
          </Button>
        </div>
      </div>

      {/* 결과 요약 */}
      <div className="flex flex-col gap-4 mt-10 mb-4 xl:flex-row xl:items-center xl:justify-between">
        <h2 className="t-h2 text-fg-display shrink-0">맞춤 추천 결과</h2>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            icon={<GraduationCap weight="fill" />}
            color="purple"
            label="추천 가능 대학"
            value={comma(summary.count)}
            unit="개"
          />
          <StatCard
            icon={<Money weight="fill" />}
            color="orange"
            label="장학금 검토 가능"
            value={comma(summary.scholarshipCount)}
            unit="개"
          />
          <StatCard
            icon={<Buildings weight="fill" />}
            color="blue"
            label="기숙사 제공 대학"
            value={comma(summary.dormCount)}
            unit="개"
          />
          <StatCard
            icon={<PiggyBank weight="fill" />}
            color="green"
            label="평균 예상 월 생활비"
            value={comma(summary.avgMonthly)}
            unit="원"
          />
        </div>
      </div>

      {/* 추천 카드 리스트 */}
      <div className="flex flex-col gap-3.5">
        {recs.slice(0, 6).map((u) => (
          <RecCard
            key={u.id}
            u={u}
            expanded={expanded === u.id}
            onToggle={() =>
              setExpanded((cur) => (cur === u.id ? null : u.id))
            }
          />
        ))}
      </div>

      {/* 하단 CTA */}
      <BottomCta />
    </div>
  );
}

function RecCard({
  u,
  expanded,
  onToggle,
}: {
  u: Recommendation;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { openModal } = useModal();
  const region = u.region ?? "";

  return (
    <div
      className={`bg-surface rounded-xl overflow-hidden border ${
        expanded
          ? "border-blue-200 shadow-md"
          : "border-border-subtle shadow-sm"
      }`}
    >
      <div className="flex flex-col gap-4 p-4 xl:flex-row xl:items-center xl:gap-5">
        <div className="relative shrink-0">
          <CampusThumb
            src={u.image ?? undefined}
            alt={u.name}
            className="w-[150px] h-[104px]"
          />
          <span className="absolute top-2 left-2 bg-brand text-white text-[12px] font-bold px-2.5 py-1 rounded-md tnum">
            추천도 {u.score}점
          </span>
        </div>

        <div className="shrink-0 xl:w-[220px]">
          <div className="flex items-baseline gap-2">
            <h4 className="t-h4 text-fg-display">{u.name}</h4>
            <span className="text-[12.5px] text-fg-muted">{region}</span>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {u.matchReasons.map((t) => (
              <Badge key={t} tone="green" size="sm">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-4 xl:justify-between xl:pl-1.5">
          <InfoStat
            icon={<CurrencyKrw weight="fill" />}
            color="blue"
            label="학기당 등록금"
            value={won(u.tuition)}
          />
          <InfoStat
            icon={<SealPercent weight="fill" />}
            color="purple"
            label="장학금 가능성"
            value={u.scholarship >= 70 ? "높음" : "중간"}
            sub={`(${u.scholarship}%)`}
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
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-1.5">
          <Button variant="secondary" size="sm">
            상세보기
          </Button>
          <Button variant="subtle" size="sm" onClick={onToggle}>
            생활비 계산
          </Button>
          <IconButton
            icon={<BookmarkSimple />}
            label="관심 저장"
            variant="outline"
          />
          <Button
            variant="primary"
            size="sm"
            iconLeft={<ChatCircleDots />}
            onClick={() =>
              openModal("consult", {
                id: u.id,
                name: u.name,
                majors: u.majors,
                score: u.score,
                monthlyCost: u.monthlyCost,
              })
            }
          >
            유학 상담요청
          </Button>
          <IconButton
            icon={expanded ? <CaretUp /> : <CaretDown />}
            label="펼치기"
            variant="ghost"
            onClick={onToggle}
          />
        </div>
      </div>

      {expanded ? <CostCalculator u={u} /> : null}
    </div>
  );
}

function SmallField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12.5px] font-semibold text-fg-heading">
        {label}
      </label>
      {children}
    </div>
  );
}

function CostCalculator({ u }: { u: Recommendation }) {
  const { openModal } = useModal();
  const [housing, setHousing] = React.useState(u.dorm ? "기숙사" : "월세");
  const [food, setFood] = React.useState("보통형");
  const [transport, setTransport] = React.useState(60000);
  const [comm, setComm] = React.useState(30000);
  const [insurance, setInsurance] = React.useState(30000);
  const [etc, setEtc] = React.useState(120000);

  const housingCost =
    housing === "기숙사" && u.dorm
      ? (u.dormMonthly ?? 250000)
      : housing === "기숙사"
        ? 250000
        : 450000;
  const foodCost = food === "절약형" ? 300000 : food === "여유형" ? 450000 : 350000;

  const monthly =
    housingCost + foodCost + transport + comm + insurance + etc;
  const semester = monthly * 6 + u.tuition;
  const annual = monthly * 12 + u.tuition * 2;
  const withSch =
    Math.round((semester - (u.tuition * u.scholarship) / 100) / 10000) * 10000;

  const num = (v: string) => {
    const n = Number(v.replace(/[^\d]/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const rows: Array<[string, number, boolean]> = [
    ["월 예상 생활비", monthly, false],
    ["1학기 예상 비용", semester, false],
    ["1년 예상 비용", annual, false],
    ["장학금 반영 시 예상 비용", withSch, true],
  ];

  return (
    <div className="grid grid-cols-1 gap-6 border-t border-border-subtle px-6 py-5 bg-surface-subtle lg:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="flex flex-wrap items-baseline gap-2.5 mb-4">
          <h4 className="t-h4 text-fg-display">학교별 생활비 계산기</h4>
          <span className="text-[12.5px] text-fg-muted">선택 학교</span>
          <span className="text-[13.5px] font-bold text-brand">
            {u.name} / {(u.region ?? "").split(",")[0]}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <SmallField label="주거 방식">
            <Select value={housing} onChange={(e) => setHousing(e.target.value)}>
              <option>기숙사</option>
              <option>월세</option>
              <option>고시원·원룸</option>
            </Select>
          </SmallField>
          <SmallField label="식비 수준">
            <Select value={food} onChange={(e) => setFood(e.target.value)}>
              <option>절약형</option>
              <option>보통형</option>
              <option>여유형</option>
            </Select>
          </SmallField>
          <SmallField label="교통비">
            <Input
              value={comma(transport)}
              onChange={(e) => setTransport(num(e.target.value))}
            />
          </SmallField>
          <SmallField label="통신비">
            <Input
              value={comma(comm)}
              onChange={(e) => setComm(num(e.target.value))}
            />
          </SmallField>
          <SmallField label="보험료">
            <Input
              value={comma(insurance)}
              onChange={(e) => setInsurance(num(e.target.value))}
            />
          </SmallField>
          <SmallField label="기타 생활비">
            <Input
              value={comma(etc)}
              onChange={(e) => setEtc(num(e.target.value))}
            />
          </SmallField>
        </div>
        <div className="flex items-start gap-2 mt-4 bg-blue-50 rounded-lg px-3 py-2.5">
          <span className="text-brand text-[16px] leading-none mt-px">
            <SealPercent weight="fill" />
          </span>
          <span className="text-[12.5px] text-fg-secondary leading-relaxed">
            계산 결과는 평균값을 기준으로 산출되며 개인 생활 패턴에 따라 달라질 수
            있어요.
          </span>
        </div>
      </div>

      <div className="bg-surface border border-border-subtle rounded-lg p-5 flex flex-col gap-3">
        {rows.map(([label, value, hl]) => (
          <div
            key={label}
            className="flex justify-between items-baseline pb-2 border-b border-border-subtle"
          >
            <span className="text-[13px] text-fg-secondary">{label}</span>
            <span
              className={`tnum font-bold ${
                hl
                  ? "text-[18px] text-success-strong"
                  : "text-[16px] text-fg-heading"
              }`}
            >
              {won(value)}
            </span>
          </div>
        ))}
        <Button
          variant="primary"
          full
          className="mt-1"
          onClick={() =>
            openModal("consult", {
              id: u.id,
              name: u.name,
              majors: u.majors,
              score: u.score,
              monthlyCost: u.monthlyCost,
            })
          }
        >
          이 학교 유학 상담요청
        </Button>
        <Button variant="secondary" full>
          관심학교 저장
        </Button>
      </div>
    </div>
  );
}

function BottomCta() {
  const { openModal } = useModal();
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl px-9 py-7 mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-[18px]">
        <div className="relative shrink-0 w-[92px] h-16 rounded-lg overflow-hidden border border-blue-100">
          <CampusThumb
            src={KSM_IMG.students}
            alt="캠퍼스의 학생들"
            className="w-full h-full"
          />
        </div>
        <div>
          <h3 className="t-h3 text-fg-display">
            추천 결과를 저장하고 상담을 받아보세요.
          </h3>
          <p className="t-body text-fg-secondary mt-1.5">
            내 조건과 추천 결과를 저장하면 나중에 다시 확인할 수 있고, 전문 상담을
            통해 더 자세한 유학 정보를 받아보실 수 있어요.
          </p>
        </div>
      </div>
      <Button
        variant="primary"
        size="lg"
        iconRight={<ArrowRight weight="bold" />}
        onClick={() => openModal("signup")}
      >
        무료 프로필 저장하기
      </Button>
    </div>
  );
}
