export type MatchType = "단식" | "복식";

export type Match = {
  id: string;
  order: number;
  type: MatchType;
  label: string;
  day: "DAY1" | "DAY2";
  date: string;
  weekday: string;
};

/**
 * 2026 Davis Cup vs 인도 — 한국 대표팀 5경기
 * Day 1: 단식 2매치
 * Day 2: 복식 1매치 + 단식 2매치
 *
 * 경기 번호는 진행 순서대로 부여
 */
export const matches: Match[] = [
  {
    id: "s1",
    order: 1,
    type: "단식",
    label: "단식1",
    day: "DAY1",
    date: "9월 19일",
    weekday: "토",
  },
  {
    id: "s2",
    order: 2,
    type: "단식",
    label: "단식2",
    day: "DAY1",
    date: "9월 19일",
    weekday: "토",
  },
  {
    id: "d1",
    order: 3,
    type: "복식",
    label: "복식1",
    day: "DAY2",
    date: "9월 20일",
    weekday: "일",
  },
  {
    id: "s3",
    order: 4,
    type: "단식",
    label: "단식3",
    day: "DAY2",
    date: "9월 20일",
    weekday: "일",
  },
  {
    id: "s4",
    order: 5,
    type: "단식",
    label: "단식4",
    day: "DAY2",
    date: "9월 20일",
    weekday: "일",
  },
];

export const OPPONENT = {
  code: "IND",
  name: "인도",
  english: "India",
} as const;

export const HOME = {
  code: "KOR",
  name: "대한민국",
  english: "Korea",
} as const;

export type TeamPick = "KOR" | "IND";

export const STORAGE_KEY = "bleum.predictions.v1";
