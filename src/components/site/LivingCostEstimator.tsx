"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Info } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { won } from "@/lib/format";
import {
  HOUSING_OPTIONS,
  LIFE_OPTIONS,
  type CostResult,
} from "@/lib/living-cost";

interface Props {
  regions: string[];
}

interface ApiResult extends CostResult {
  region: string;
  housing: string;
  life: string;
  base: number;
}

/** 메인페이지 생활비 계산기 — living_costs(DB) 연동. */
export function LivingCostEstimator({ regions }: Props) {
  const [region, setRegion] = useState(regions[0] ?? "");
  const [housing, setHousing] = useState<string>(HOUSING_OPTIONS[0].value);
  const [life, setLife] = useState("보통형");
  const [result, setResult] = useState<ApiResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!region || !housing) return;
    const controller = new AbortController();

    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams({ region, housing, life });
        const res = await fetch(`/api/living-costs?${params}`, {
          signal: controller.signal,
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "계산에 실패했어요.");
        setResult(json as ApiResult);
      } catch (e: unknown) {
        if (e instanceof Error && e.name === "AbortError") return;
        setError(e instanceof Error ? e.message : "계산에 실패했어요.");
        setResult(null);
      } finally {
        setLoading(false);
      }
    };

    void run();
    return () => controller.abort();
  }, [region, housing, life]);

  const display = (value: number | undefined) =>
    result && value !== undefined ? won(value) : loading ? "계산 중…" : "—";

  const ROWS: { label: string; value: number | undefined }[] = [
    { label: "예상 월 생활비", value: result?.monthly },
    { label: "6개월 예상 생활비", value: result?.semester },
    { label: "1년 예상 생활비", value: result?.annual },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-border-subtle bg-surface shadow-sm">
      <div className="grid md:grid-cols-[1.25fr_1fr]">
        {/* 입력 */}
        <div className="p-8">
          <h3 className="t-h3">한국 유학 가면 한 달 생활비가 얼마나 들까?</h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <label className="t-sm font-semibold text-fg-heading">
                희망 지역
              </label>
              <Select value={region} onChange={(e) => setRegion(e.target.value)}>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="t-sm font-semibold text-fg-heading">
                주거 방식
              </label>
              <Select
                value={housing}
                onChange={(e) => setHousing(e.target.value)}
              >
                {HOUSING_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="t-sm font-semibold text-fg-heading">
                생활 방식
              </label>
              <Select value={life} onChange={(e) => setLife(e.target.value)}>
                {LIFE_OPTIONS.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-2.5 rounded-md bg-blue-50 px-3.5 py-3">
            <Info weight="fill" className="mt-0.5 shrink-0 text-brand" />
            <span className="t-sm text-fg-secondary">
              선택하신 조건({region} / {housing} / {life}) 기준으로 예상해
              드려요.
            </span>
          </div>
        </div>

        {/* 결과 */}
        <div className="flex flex-col justify-center gap-4 border-border-subtle bg-surface-subtle p-8 md:border-l">
          {error ? (
            <p className="t-sm text-danger">{error}</p>
          ) : (
            <>
              {ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between border-b border-border-subtle pb-3"
                >
                  <span className="t-body text-fg-secondary">{row.label}</span>
                  <span
                    className="t-h4 font-extrabold tnum text-brand"
                    aria-live="polite"
                  >
                    {display(row.value)}
                  </span>
                </div>
              ))}
              <Link href="/match" className="mt-2 block">
                <Button variant="primary" size="lg" full>
                  내 조건에 맞는 학교 찾기
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
