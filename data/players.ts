export type Player = {
  slug: string;
  name: string;
  hangul: string;
  role: "Singles" | "Doubles" | "Singles / Doubles";
  roleLabel: string;
  tag: string;
  desc: string;
  photo: string;
  accent: string;
  age: number;
  birth: string;
  height: string;
  hand: string;
  weapon: string;
  affiliation: string;
  careerHigh?: string;
  strengths: string[];
  achievements: string[];
  bio: string;
  /**
   * Player-specific highlight reel URL. When empty/undefined, the
   * "하이라이트 릴스 보러가기" button falls back to the KTA Instagram.
   * Set this per player once each reel is uploaded.
   */
  reelUrl?: string;
};

/** Used when a player doesn't have their own reel uploaded yet. */
export const KTA_INSTAGRAM_URL =
  "https://www.instagram.com/official_kta?igsh=MWcyNDAybmMxbzl0";

export const players: Player[] = [
  {
    slug: "kwon-soonwoo",
    name: "Kwon Soon-woo",
    hangul: "권순우",
    role: "Singles",
    roleLabel: "단식",
    tag: "Powerful Forehand",
    desc: "강력한 포핸드와 공격적인 베이스라인 플레이로 한국 남자 단식을 이끄는 에이스.",
    photo: "/images/players/kwon-soonwoo.png",
    accent: "from-royal-500 to-royal-700",
    age: 28,
    birth: "1997. 12. 02.",
    height: "180 cm",
    hand: "오른손 / 양손 백핸드",
    weapon: "묵직한 포핸드 한 방, 빠른 코트 적응력",
    affiliation: "국군체육부대",
    careerHigh: "ATP 세계 52위 (2021. 11.)",
    strengths: [
      "포핸드 윈너 생산력 리그 최정상",
      "빠른 코트(하드/잔디) 적응 능력",
      "긴장 상황에서의 서브 정확도",
    ],
    achievements: [
      "ATP 카자흐스탄 누르술탄 오픈 우승 (2021)",
      "ATP 애들레이드 인터내셔널 2 우승 (2023)",
      "ATP 챌린저 6회 우승",
      "데이비스컵 9년 연속 출전 (2017–)",
    ],
    bio: "한국 남자 테니스의 ‘에이스’. 강력한 포핸드와 공격적인 베이스라인 플레이로 ATP 투어 두 차례 우승을 거두며 한국 선수 두 번째로 ATP 타이틀을 거머쥐었다. 부상과 군 복무를 거치며 더 단단해진 멘탈로 데이비스컵 무대를 9년째 책임지고 있다.",
  },
  {
    slug: "chung-hyeon",
    name: "Chung Hyeon",
    hangul: "정현",
    role: "Singles",
    roleLabel: "단식",
    tag: "Two-handed Backhand Wall",
    desc: "두 손 백핸드의 벽. 한국 테니스의 최고 기록을 가진 클래스가 다른 단식 자원.",
    photo: "/images/players/chung-hyeon.png",
    accent: "from-royal-400 to-royal-600",
    age: 29,
    birth: "1996. 05. 19.",
    height: "188 cm",
    hand: "오른손 / 양손 백핸드",
    weapon: "수비를 공격으로 바꾸는 양손 백핸드",
    affiliation: "한국 국가대표",
    careerHigh: "ATP 세계 19위 (2018. 04.)",
    strengths: [
      "긴 랠리에서 우위를 잡는 안정성",
      "180 cm 후반 장신에서 나오는 서브",
      "양손 백핸드 다운더라인 리턴",
    ],
    achievements: [
      "2018 호주오픈 4강 — 아시아 남자 선수 최초 그랜드슬램 4강",
      "2017 Next Gen ATP Finals 우승",
      "ATP 인디언웰스 / 마이애미 8강 (2018)",
      "ATP 세계 19위 — 한국 남자 단식 최고 순위",
    ],
    bio: "2018년 호주오픈에서 노박 조코비치를 꺾고 4강에 오르며 한국 테니스의 새 시대를 열었다. 부상으로 긴 공백기를 보냈지만, 데이비스컵 무대로 복귀해 결정적인 순간 ‘끝내는 사람’의 역할을 다시 맡고 있다.",
  },
  {
    slug: "nam-jisung",
    name: "Nam Ji-sung",
    hangul: "남지성",
    role: "Singles / Doubles",
    roleLabel: "복식 & 단식",
    tag: "Aggressive Net Play",
    desc: "공격적인 네트 플레이와 노련한 경기 운영. 한국 복식 라인의 중심.",
    photo: "/images/players/nam-jisung.png",
    accent: "from-royal-500 to-royal-800",
    age: 32,
    birth: "1993",
    height: "183 cm",
    hand: "오른손 / 양손 백핸드",
    weapon: "발리 / 리턴 위치 선정",
    affiliation: "당진시청",
    careerHigh: "ATP 복식 세계 140위",
    strengths: [
      "네트 앞 발리·스매시 마무리력",
      "두 사람 분의 코트를 커버하는 포지셔닝",
      "결정적인 상황에서의 멘탈리티",
    ],
    achievements: [
      "데이비스컵 한국 대표팀 8년 연속 발탁",
      "2024 데이비스컵 폴란드 전 복식 승리",
      "2026 베트남 ATP 챌린저 50 복식 우승 (with 박의성)",
    ],
    bio: "복식 전문 선수 출신답게 빈자리를 만들지 않는 코트 커버력이 일품. 신예 박의성과 새로운 복식 라인을 만들면서 단식 백업으로도 나설 수 있는 다재다능한 자원으로 자리잡았다.",
  },
  {
    slug: "park-uisung",
    name: "Park Ui-sung",
    hangul: "박의성",
    role: "Singles / Doubles",
    roleLabel: "신예 단식/복식",
    tag: "Rising Allrounder",
    desc: "단·복식 모두 가능한 신예. 빠르게 성장 중인 다재다능한 자원.",
    photo: "/images/players/park-uisung.png",
    accent: "from-royal-400 to-royal-700",
    age: 24,
    birth: "2001",
    height: "182 cm",
    hand: "오른손 / 양손 백핸드",
    weapon: "단·복식 겸용의 빠른 발과 리턴",
    affiliation: "대구광역시청",
    strengths: [
      "단·복식 모두 가능한 다용도 자원",
      "긴 매치를 끌고 가는 체력",
      "코트 전 영역을 빠르게 커버",
    ],
    achievements: [
      "2025 데이비스컵 카자흐스탄전 국가대표 데뷔, 데뷔전 승리",
      "2026 ATP 챌린저 첫 우승 (복식, with 남지성)",
      "ITF / ATP 챌린저 복식 11회 우승",
    ],
    bio: "신예지만 데이비스컵 데뷔전부터 무게감 있는 경기력을 보여줬다. 남지성과 만드는 복식 라인은 한국 대표팀의 새로운 무기. 단식 자원으로도 빠르게 성장 중.",
  },
  {
    slug: "shin-sanhee",
    name: "Shin San-hee",
    hangul: "신산희",
    role: "Singles / Doubles",
    roleLabel: "신예 단식/복식",
    tag: "Future Ace",
    desc: "꾸준한 랠리와 안정적인 스트로크. 다음 세대 한국 테니스의 기대주.",
    photo: "/images/players/shin-sanhee.png",
    accent: "from-royal-500 to-royal-700",
    age: 24,
    birth: "2001",
    height: "184 cm",
    hand: "오른손 / 양손 백핸드",
    weapon: "안정적인 베이스라인 스트로크",
    affiliation: "경산시청",
    careerHigh: "ATP 단식 357위 (2026. 01.)",
    strengths: [
      "긴 랠리 속에서 흔들리지 않는 스트로크",
      "고른 좌·우 풋워크",
      "국제대회 적응력",
    ],
    achievements: [
      "2025 데이비스컵 체코전 — 생애 첫 국가대표 발탁",
      "2026 데이비스컵 1차 최종본선진출전 한국 대표팀 선발",
      "ITF / ATP 챌린저 단식 본선 다수 진출",
    ],
    bio: "생애 처음 태극마크를 단 2025년부터 ‘다음을 책임질 선수’로 주목받기 시작했다. 또래의 박의성과 함께 한국 남자 단식의 다음 세대를 만들어 가는 핵심 자원.",
  },
];

export function getPlayer(slug: string): Player | undefined {
  return players.find((p) => p.slug === slug);
}
