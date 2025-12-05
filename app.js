// === 실제 데이터 반영 (요청 기반) ===
const eventsData = [
  // WEEKLY RANKING
  {
    id: "c-rank-1",
    title: "WEEKLY RANKING #1 - 임영웅",
    category: "WEEKLY RANKING",
    subcategory: "WEEKLY RANKING",
    agency: "물고기뮤직",
    artist: "임영웅",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25017491",
    openAt: "2025-12-10T20:00:00",
    showAt: "2026-01-30T18:00:00",
    note: "인기순위 1위",
    highlight: "⭐",
  },
  {
    id: "c-rank-2",
    title: "WEEKLY RANKING #2 - 데이식스(DAY6)",
    category: "WEEKLY RANKING",
    subcategory: "WEEKLY RANKING",
    agency: "JYP",
    artist: "데이식스(DAY6)",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Special/55971",
    openAt: "2025-12-05T20:00:00",
    showAt: "2026-01-15T18:00:00",
    note: "인기순위 2위",
    highlight: "⭐",
  },
  {
    id: "c-rank-3",
    title: "WEEKLY RANKING #3 - 엑소(EXO)",
    category: "WEEKLY RANKING",
    subcategory: "WEEKLY RANKING",
    agency: "SM",
    artist: "엑소(EXO)",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=212218",
    openAt: "2025-12-06T20:00:00",
    showAt: "2026-02-20T18:00:00",
    note: "인기순위 3위",
    highlight: "⭐",
  },
  {
    id: "c-rank-4",
    title: "WEEKLY RANKING #4 - 세븐틴 SEVENTEEN",
    category: "WEEKLY RANKING",
    subcategory: "WEEKLY RANKING",
    agency: "HYBE",
    artist: "세븐틴 SEVENTEEN",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25010508",
    openAt: "2025-12-07T20:00:00",
    showAt: "2026-02-25T18:00:00",
    note: "인기순위 4위",
    highlight: "⭐",
  },

  // 콘서트 - 아이돌
  {
    id: "c-idol-1",
    title: "데이식스(DAY6)",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "JYP",
    artist: "데이식스(DAY6)",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Special/55971",
    openAt: "2025-12-10T20:00:00",
    showAt: "2026-01-20T18:00:00",
    note: "",
  },
  {
    id: "c-idol-2",
    title: "엑스디너리 히어로즈(Xdinary Heroes)",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "JYP",
    artist: "엑스디너리 히어로즈",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/csoon/detail.htm?csoonId=11386",
    openAt: "2025-12-11T20:00:00",
    showAt: "2026-02-05T18:00:00",
    note: "",
  },
  {
    id: "c-idol-3",
    title: "킥플립 (KickFlip)",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "JYP",
    artist: "킥플립 (KickFlip)",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25017536",
    openAt: "2025-12-12T20:00:00",
    showAt: "2026-02-10T18:00:00",
    note: "",
  },
  {
    id: "c-idol-4",
    title: "엑소(EXO)",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "SM",
    artist: "엑소(EXO)",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=212218",
    openAt: "2025-12-16T20:00:00",
    showAt: "2026-03-01T18:00:00",
    note: "",
  },
  {
    id: "c-idol-5",
    title: "세븐틴 SEVENTEEN",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "HYBE",
    artist: "세븐틴",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25010508",
    openAt: "2025-12-18T20:00:00",
    showAt: "2026-03-05T18:00:00",
    note: "",
  },
  {
    id: "c-idol-6",
    title: "투어스 TWS",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "HYBE",
    artist: "TWS",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25006220",
    openAt: "2025-12-19T20:00:00",
    showAt: "2026-03-12T18:00:00",
    note: "",
  },

  // 콘서트 - 발라드/R&B
  {
    id: "c-ballad-1",
    title: "브라운아이드소울",
    category: "콘서트",
    subcategory: "발라드/R&B",
    agency: "브아솔컴퍼니",
    artist: "브라운아이드소울",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=211978",
    openAt: "2025-12-08T20:00:00",
    showAt: "2026-01-28T18:00:00",
    note: "",
  },
  {
    id: "c-ballad-2",
    title: "성시경 콘서트",
    category: "콘서트",
    subcategory: "발라드/R&B",
    agency: "성시경컴퍼니",
    artist: "성시경",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25016342",
    openAt: "2025-12-09T20:00:00",
    showAt: "2026-01-22T18:00:00",
    note: "",
  },
  {
    id: "c-ballad-3",
    title: "정승환 콘서트",
    category: "콘서트",
    subcategory: "발라드/R&B",
    agency: "안테나",
    artist: "정승환",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25013763",
    openAt: "2025-12-13T20:00:00",
    showAt: "2026-02-02T18:00:00",
    note: "",
  },
  {
    id: "c-ballad-4",
    title: "케이윌 콘서트",
    category: "콘서트",
    subcategory: "발라드/R&B",
    agency: "스타쉽",
    artist: "케이윌",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=212100",
    openAt: "2025-12-14T20:00:00",
    showAt: "2026-02-08T18:00:00",
    note: "",
  },

  // 콘서트 - 힙합/EDM, 페스티벌 (예시 보충)
  {
    id: "c-hiphop-1",
    title: "힙합 페스티벌 : Night Groove",
    category: "콘서트",
    subcategory: "힙합/EDM",
    agency: "HipHop Live",
    artist: "다수 힙합 아티스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/",
    openAt: "2025-12-17T18:00:00",
    showAt: "2026-02-16T18:00:00",
    note: "임의 예시 데이터",
  },
  {
    id: "c-festival-1",
    title: "겨울 페스티벌 2026",
    category: "콘서트",
    subcategory: "페스티벌",
    agency: "Festival Co",
    artist: "Various",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/",
    openAt: "2025-12-18T18:00:00",
    showAt: "2026-02-24T18:00:00",
    note: "임의 예시 데이터",
  },

  // 콘서트 - 트로트
  {
    id: "c-trot-1",
    title: "임영웅 전국투어",
    category: "콘서트",
    subcategory: "트로트",
    agency: "물고기뮤직",
    artist: "임영웅",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25017491",
    openAt: "2025-12-07T20:00:00",
    showAt: "2026-01-30T18:00:00",
    note: "",
  },
  {
    id: "c-trot-2",
    title: "이찬원 콘서트",
    category: "콘서트",
    subcategory: "트로트",
    agency: "이찬원컴퍼니",
    artist: "이찬원",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Perf/56347?Gcode=009_217_001",
    openAt: "2025-12-10T20:00:00",
    showAt: "2026-02-14T18:00:00",
    note: "",
  },
  {
    id: "c-trot-3",
    title: "진성 콘서트",
    category: "콘서트",
    subcategory: "트로트",
    agency: "진성컴퍼니",
    artist: "진성",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Perf/56323?Gcode=009_307",
    openAt: "2025-12-11T20:00:00",
    showAt: "2026-02-18T18:00:00",
    note: "",
  },
  {
    id: "c-trot-4",
    title: "영탁 콘서트",
    category: "콘서트",
    subcategory: "트로트",
    agency: "영탁컴퍼니",
    artist: "영탁",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25016692",
    openAt: "2025-12-12T20:00:00",
    showAt: "2026-02-22T18:00:00",
    note: "",
  },

  // 콘서트 - 인디/록
  {
    id: "c-indie-1",
    title: "옥상달빛 콘서트",
    category: "콘서트",
    subcategory: "인디/록",
    agency: "옥상달빛컴퍼니",
    artist: "옥상달빛",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=212406",
    openAt: "2025-12-09T12:00:00",
    showAt: "2026-01-18T18:00:00",
    note: "",
  },
  {
    id: "c-indie-2",
    title: "네미시스 콘서트",
    category: "콘서트",
    subcategory: "인디/록",
    agency: "네미시스컴퍼니",
    artist: "네미시스",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25016638",
    openAt: "2025-12-10T12:00:00",
    showAt: "2026-01-25T18:00:00",
    note: "",
  },

  // 콘서트 - 내한
  {
    id: "c-visit-1",
    title: "마츠다 세이코 INSPIRE Concert Series#7",
    category: "콘서트",
    subcategory: "내한",
    agency: "글로벌",
    artist: "마츠다 세이코",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25017120",
    openAt: "2025-12-20T20:00:00",
    showAt: "2026-03-18T18:00:00",
    note: "",
  },
  {
    id: "c-visit-2",
    title: "호시노 겐 내한 공연",
    category: "콘서트",
    subcategory: "내한",
    agency: "글로벌",
    artist: "호시노 겐",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=212412",
    openAt: "2025-12-21T20:00:00",
    showAt: "2026-03-20T18:00:00",
    note: "",
  },
  {
    id: "c-visit-3",
    title: "tuki 내한",
    category: "콘서트",
    subcategory: "내한",
    agency: "글로벌",
    artist: "tuki",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Perf/55989?Gcode=009_300",
    openAt: "2025-12-22T20:00:00",
    showAt: "2026-03-22T18:00:00",
    note: "",
  },

  // 콘서트 - 그 외 장르
  {
    id: "c-etc-1",
    title: "스페셜 콘서트 (그 외 장르)",
    category: "콘서트",
    subcategory: "그 외 장르",
    agency: "Special Co",
    artist: "Special Lineup",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25015804",
    openAt: "2025-12-23T20:00:00",
    showAt: "2026-03-28T18:00:00",
    note: "",
  },

  // 뮤지컬/연극 - 뮤지컬
  {
    id: "m-mus-1",
    title: "뮤지컬 〈비틀쥬스〉",
    category: "뮤지컬/연극",
    subcategory: "뮤지컬",
    agency: "비틀쥬스 제작사",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/L0000127",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-25T19:30:00",
    note: "",
  },
  {
    id: "m-mus-2",
    title: "뮤지컬 〈한복 입은 남자〉",
    category: "뮤지컬/연극",
    subcategory: "뮤지컬",
    agency: "인터파크 뮤지컬",
    artist: "전 캐스트",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=211984",
    openAt: "2025-12-06T10:00:00",
    showAt: "2026-02-01T19:30:00",
    note: "",
  },

  // 뮤지컬/연극 - 연극
  {
    id: "m-play-1",
    title: "연극 〈엘리펀트 송〉",
    category: "뮤지컬/연극",
    subcategory: "연극",
    agency: "엘리펀트제작사",
    artist: "전 캐스트",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Perf/55851&Gcode=009_306",
    openAt: "2025-12-07T10:00:00",
    showAt: "2026-02-08T19:30:00",
    note: "",
  },
  {
    id: "m-play-2",
    title: "연극 〈타지마할의 근위병〉",
    category: "뮤지컬/연극",
    subcategory: "연극",
    agency: "타지마할 제작사",
    artist: "전 캐스트",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Perf/55481?Gcode=009_500",
    openAt: "2025-12-08T10:00:00",
    showAt: "2026-02-15T19:30:00",
    note: "",
  },
  {
    id: "m-play-3",
    title: "로코 연극 <러브액츄얼리> 크리스마스 특별공연",
    category: "뮤지컬/연극",
    subcategory: "연극",
    agency: "러브액츄얼리 제작사",
    artist: "전 캐스트",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/bridge.htm?brgId=100467",
    openAt: "2025-12-09T10:00:00",
    showAt: "2026-02-20T19:30:00",
    note: "",
  },

  // 스포츠 (축구/야구/E스포츠)
  {
    id: "s-soccer-1",
    title: "축구 K리그 홈 개막전",
    category: "스포츠",
    subcategory: "축구",
    sportClub: "FC서울",
    agency: "K리그",
    artist: "FC서울",
    site: "인터파크 스포츠",
    siteUrl: "https://ticket.interpark.com/Contents/Sports/Bridge/Soccer",
    openAt: "2025-12-15T11:00:00",
    showAt: "2026-03-02T14:00:00",
    note: "구단별 예매 페이지 연결",
  },
  {
    id: "s-base-1",
    title: "야구 시즌 홈 개막전",
    category: "스포츠",
    subcategory: "야구",
    sportClub: "두산 베어스",
    agency: "KBO",
    artist: "두산 베어스",
    site: "인터파크 스포츠",
    siteUrl: "https://ticket.interpark.com/Contents/Sports/Bridge/baseball",
    openAt: "2026-02-25T11:00:00",
    showAt: "2026-03-30T18:30:00",
    note: "구단별 예매 페이지 연결",
  },
  {
    id: "s-base-2",
    title: "야구 시즌 홈 경기(티켓링크)",
    category: "스포츠",
    subcategory: "야구",
    sportClub: "티켓링크-예시",
    agency: "KBO",
    artist: "KBO 구단",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/63",
    openAt: "2026-02-26T11:00:00",
    showAt: "2026-04-01T18:30:00",
    note: "야구 구단 리스트 참고",
  },
  {
    id: "s-es-1",
    title: "LCK 시즌 결승",
    category: "스포츠",
    subcategory: "E스포츠",
    sportClub: "LCK",
    agency: "라이엇",
    artist: "결승팀",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/contents/bridge/25017551",
    openAt: "2025-12-28T18:00:00",
    showAt: "2026-01-15T18:00:00",
    note: "레드불 PC방 테이크오버 포함",
  },

  // 클래식
  {
    id: "cl-1",
    title: "신년 클래식 갈라",
    category: "클래식",
    subcategory: "클래식",
    agency: "서울시향",
    artist: "서울시향",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-01T19:30:00",
    note: "학생 할인 30%",
  },

  // 가족/어린이
  {
    id: "fam-1",
    title: "패밀리 콘서트",
    category: "가족/어린이",
    subcategory: "패밀리",
    agency: "Family Ent",
    artist: "전 연령",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/",
    openAt: "2025-12-18T10:00:00",
    showAt: "2026-02-10T14:00:00",
    note: "전 연령 관람가",
  },

  // 팝업스토어
  {
    id: "popup-1",
    title: "팝업스토어 아이돌 1",
    category: "팝업스토어",
    subcategory: "아이돌",
    agency: "팝업스토어",
    artist: "아이돌",
    site: "네이버 예약",
    siteUrl: "https://booking.naver.com/booking/12/bizes/581926/items/7191828?startDateTime=2025-12-05T00%3A00%3A00%2B09%3A00",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-05T10:00:00",
    note: "",
  },
  {
    id: "popup-2",
    title: "팝업스토어 아이돌 2",
    category: "팝업스토어",
    subcategory: "아이돌",
    agency: "팝업스토어",
    artist: "아이돌",
    site: "네이버 예약",
    siteUrl: "https://booking.naver.com/booking/12/bizes/1091186/items/7213860?startDateTime=2025-12-05T00%3A00%3A00%2B09%3A00&utm_campaign=nmixx_popup_episode1_zerofrontier_naver_booking&utm_medium=sns&utm_source=twitter",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-05T10:00:00",
    note: "",
  },
  {
    id: "popup-3",
    title: "팝업스토어 시즌",
    category: "팝업스토어",
    subcategory: "시즌",
    agency: "팝업스토어",
    artist: "시즌",
    site: "네이버 예약",
    siteUrl: "https://m.booking.naver.com/booking/12/bizes/1529548/items/7216347?area=bmp&startDateTime=2025-12-05T00%3A00%3A00%2B09%3A00",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-05T10:00:00",
    note: "",
  },
  {
    id: "popup-4",
    title: "팝업스토어 기타 1",
    category: "팝업스토어",
    subcategory: "기타",
    agency: "팝업스토어",
    artist: "기타",
    site: "네이버 예약",
    siteUrl: "https://m.booking.naver.com/booking/6/bizes/1510139/items/7107356?area=bmp&startDate=2025-12-05",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-05T10:00:00",
    note: "",
  },
  {
    id: "popup-5",
    title: "팝업스토어 기타 2",
    category: "팝업스토어",
    subcategory: "기타",
    agency: "팝업스토어",
    artist: "기타",
    site: "네이버 예약",
    siteUrl: "https://booking.naver.com/booking/13/bizes/1185210/items/7207891?startDate=2025-12-05",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-05T10:00:00",
    note: "",
  },
  {
    id: "popup-6",
    title: "팝업스토어 기타 3",
    category: "팝업스토어",
    subcategory: "기타",
    agency: "팝업스토어",
    artist: "기타",
    site: "네이버 예약",
    siteUrl: "https://m.booking.naver.com/booking/6/bizes/1543589/items/7227353",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-05T10:00:00",
    note: "",
  },
];

// === 상태 ===
let currentView = "all"; // 'all' | 'my'
let currentMonth = new Date(); // 오늘이 포함된 달
let currentCategory = "전체";
let currentSubcategory = "전체";
let currentAgency = "all";
let currentArtist = "all";
let currentArtistSearch = "";
let currentSoccerClub = "all";
let currentBaseballClub = "all";
let myCalendar = loadMyCalendar(); // 객체 형태: { eventId: { icon: "", memo: "" } }

// === DOM 요소 ===
const categoryChips = document.getElementById("category-chips");
const subcategoryChips = document.getElementById("subcategory-chips");
const subcategoryWrap = document.getElementById("subcategory-wrap");
const agencySelect = document.getElementById("agency-select");
const agencyWrap = document.getElementById("agency-wrap");
const sportsWrap = document.getElementById("sports-wrap");
const soccerSelect = document.getElementById("soccer-select");
const baseballSelect = document.getElementById("baseball-select");
const artistSelect = document.getElementById("artist-select");
const artistSearchInput = document.getElementById("artist-search");
const resetFiltersBtn = document.getElementById("reset-filters");
const enableNotiBtn = document.getElementById("enable-noti");

const navButtons = document.querySelectorAll(".nav-btn");
const calendarEl = document.getElementById("calendar");
const currentMonthEl = document.getElementById("current-month");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const eventsTitleEl = document.getElementById("events-title");
const eventsListEl = document.getElementById("events-list");
const rankingSection = document.getElementById("ranking-section");
const rankingListEl = document.getElementById("ranking-list");
const calendarHeader = document.getElementById("calendar-header");

const modalBackdrop = document.getElementById("event-modal-backdrop");
const modalCloseBtn = document.getElementById("modal-close");
const modalContentEl = document.getElementById("modal-content");

// 세부 카테고리 정의
const subcategoriesByCategory = {
  전체: ["전체"],
  콘서트: ["전체", "아이돌", "발라드/R&B", "힙합/EDM", "페스티벌", "인디/록", "내한", "그 외 장르"],
  "뮤지컬/연극": ["전체", "뮤지컬", "연극"],
  스포츠: ["전체", "축구", "야구", "E스포츠"],
  클래식: ["전체", "클래식"],
  "가족/어린이": ["전체", "패밀리", "어린이", "기타"],
  팝업스토어: ["전체", "아이돌", "시즌", "기타"],
  "WEEKLY RANKING": ["전체"],
};

// === 유틸 함수 ===
function formatDateTime(iso) {
  const d = new Date(iso);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const date = `${d.getDate()}`.padStart(2, "0");
  const hour = `${d.getHours()}`.padStart(2, "0");
  const min = `${d.getMinutes()}`.padStart(2, "0");
  const weekday = "일월화수목금토"[d.getDay()];
  return `${d.getFullYear()}.${month}.${date} (${weekday}) ${hour}:${min}`;
}

function formatDate(dateOrIso) {
  const d = dateOrIso instanceof Date ? dateOrIso : new Date(dateOrIso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function formatDateLabel(dateOrIso) {
  const d = dateOrIso instanceof Date ? dateOrIso : new Date(dateOrIso);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  const weekday = "일월화수목금토"[d.getDay()];
  return `${year}년 ${month}월 ${date}일 (${weekday})`;
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function addHours(date, hours) {
  const d = new Date(date);
  d.setHours(d.getHours() + hours);
  return d;
}

function buildGoogleCalendarLink(ev) {
  if (!ev.showAt) return "#";
  const start = new Date(ev.showAt);
  const end = addHours(start, 2);
  const fmt = (dt) =>
    dt
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: ev.title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: `${ev.note || ""}\n예매: ${ev.siteUrl || ""}`,
    location: ev.site || "",
  });
  return `https://calendar.google.com/calendar/u/0/r/eventedit?${params.toString()}`;
}

function buildDeviceCalendarLink(ev) {
  // 단순 안내용: 실제 캘린더 스킴 대신 텍스트 페이지로 연결
  return ev.siteUrl || "#";
}

// 예매처별 색상 반환
function getSiteColor(site) {
  if (!site) return "#a29bff"; // 기본 보라색
  if (site.includes("놀티켓")) return "#9b59b6"; // 보라색
  if (site.includes("멜론티켓") || site.includes("멜론")) return "#2ecc71"; // 초록색
  if (site.includes("예스24") || site.includes("YES24")) return "#ffffff"; // 흰색
  if (site.includes("티켓링크") || site.includes("ticketlink")) return "#e74c3c"; // 빨간색
  if (site.includes("인터파크")) return "#3498db"; // 파란색 (기본)
  return "#a29bff"; // 기본 보라색
}

// === 로컬스토리지 ===
function loadMyCalendar() {
  try {
    const raw = localStorage.getItem("my-ticket-calendar");
    if (!raw) return {};
    const data = JSON.parse(raw);
    // 기존 배열 형식 호환성 처리
    if (Array.isArray(data)) {
      const obj = {};
      data.forEach(id => {
        obj[id] = { icon: "", memo: "" };
      });
      return obj;
    }
    return data;
  } catch {
    return {};
  }
}

function saveMyCalendar() {
  localStorage.setItem("my-ticket-calendar", JSON.stringify(myCalendar));
}

function isInMyCalendar(id) {
  return myCalendar.hasOwnProperty(id);
}

function getMyCalendarItem(id) {
  return myCalendar[id] || { icon: "", memo: "" };
}

function addToMyCalendar(id, icon = "", memo = "") {
  myCalendar[id] = { icon, memo };
  saveMyCalendar();
}

function removeFromMyCalendar(id) {
  delete myCalendar[id];
  saveMyCalendar();
}

function toggleMyCalendar(id) {
  if (isInMyCalendar(id)) {
    removeFromMyCalendar(id);
  } else {
    // 모달로 아이콘/메모 입력 받기
    openAddToCalendarModal(id);
  }
}

// === 필터 처리 ===
function applyFilters(data) {
  return data.filter((ev) => {
    if (currentCategory !== "전체" && ev.category !== currentCategory) return false;
    if (currentSubcategory !== "전체" && ev.subcategory !== currentSubcategory) return false;

    // 콘서트: 기획사 필터
    if (currentCategory === "콘서트" && currentAgency !== "all" && ev.agency !== currentAgency)
      return false;

    // 스포츠: 구단 필터
    if (currentCategory === "스포츠") {
      if (currentSubcategory === "축구" && currentSoccerClub !== "all" && ev.sportClub !== currentSoccerClub)
        return false;
      if (currentSubcategory === "야구" && currentBaseballClub !== "all" && ev.sportClub !== currentBaseballClub)
        return false;
    }

    // 아티스트 필터: 검색어가 있으면 검색어로 필터링, 없으면 드롭다운 선택값으로 필터링
    if (currentArtistSearch.trim() !== "") {
      if (!ev.artist || !ev.artist.toLowerCase().includes(currentArtistSearch.toLowerCase())) return false;
    } else {
      if (currentArtist !== "all" && ev.artist !== currentArtist) return false;
    }
    if (currentView === "my" && !isInMyCalendar(ev.id)) return false;
    return true;
  });
}

function buildFilterOptions() {
  // 기획사 (콘서트용)
  const agencies = new Set();
  eventsData.forEach((ev) => {
    if (ev.category === "콘서트" && ev.agency) agencies.add(ev.agency);
  });
  agencySelect.innerHTML = '<option value="all">전체 기획사</option>';
  [...agencies]
    .sort()
    .forEach((agency) => {
      const opt = document.createElement("option");
      opt.value = agency;
      opt.textContent = agency;
      agencySelect.appendChild(opt);
    });

  // 스포츠 구단 (축구/야구)
  const soccerClubs = new Set();
  const baseballClubs = new Set();
  eventsData.forEach((ev) => {
    if (ev.category === "스포츠" && ev.subcategory === "축구" && ev.sportClub) {
      soccerClubs.add(ev.sportClub);
    }
    if (ev.category === "스포츠" && ev.subcategory === "야구" && ev.sportClub) {
      baseballClubs.add(ev.sportClub);
    }
  });
  soccerSelect.innerHTML = '<option value="all">축구 구단 전체</option>';
  [...soccerClubs]
    .sort()
    .forEach((club) => {
      const opt = document.createElement("option");
      opt.value = club;
      opt.textContent = club;
      soccerSelect.appendChild(opt);
    });
  baseballSelect.innerHTML = '<option value="all">야구 구단 전체</option>';
  [...baseballClubs]
    .sort()
    .forEach((club) => {
      const opt = document.createElement("option");
      opt.value = club;
      opt.textContent = club;
      baseballSelect.appendChild(opt);
    });

  // 아티스트 전체
  const artists = new Set(eventsData.map((ev) => ev.artist));
  artistSelect.innerHTML = '<option value="all">전체 아티스트</option>';
  [...artists]
    .sort()
    .forEach((artist) => {
      const opt = document.createElement("option");
      opt.value = artist;
      opt.textContent = artist;
      artistSelect.appendChild(opt);
    });
}

function buildSubcategoryChips() {
  const subs = subcategoriesByCategory[currentCategory] || ["전체"];
  subcategoryChips.innerHTML = "";
  subs.forEach((sub, idx) => {
    const btn = document.createElement("button");
    btn.className = "chip" + (idx === 0 ? " active" : "");
    btn.dataset.subcategory = sub;
    btn.textContent = sub;
    subcategoryChips.appendChild(btn);
  });
  currentSubcategory = "전체";
}

function updateFilterVisibility() {
  agencyWrap.style.display = currentCategory === "콘서트" ? "block" : "none";
  sportsWrap.style.display = currentCategory === "스포츠" ? "block" : "none";
  soccerSelect.style.display = currentCategory === "스포츠" && currentSubcategory === "축구" ? "block" : "none";
  baseballSelect.style.display = currentCategory === "스포츠" && currentSubcategory === "야구" ? "block" : "none";
  
  // WEEKLY RANKING 카테고리 선택 시 랭킹 리스트 표시, 캘린더 숨김, 세부 카테고리 숨김
  const isRanking = currentCategory === "WEEKLY RANKING";
  rankingSection.style.display = isRanking ? "block" : "none";
  calendarHeader.style.display = isRanking ? "none" : "flex";
  calendarEl.style.display = isRanking ? "none" : "grid";
  subcategoryWrap.style.display = isRanking ? "none" : "block";
  
  if (isRanking) {
    renderRankingList();
  }
}

// === 캘린더 렌더링 ===
function renderCalendar() {
  calendarEl.innerHTML = "";

  // 요일 표시 추가
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const weekdayRow = document.createElement("div");
  weekdayRow.className = "calendar-weekdays";
  weekdayRow.style.display = "grid";
  weekdayRow.style.gridTemplateColumns = "repeat(7, minmax(0, 1fr))";
  weekdayRow.style.gap = "6px";
  weekdayRow.style.marginBottom = "4px";
  weekdayRow.style.position = "absolute";
  weekdayRow.style.top = "-17px";
  weekdayRow.style.left = "0";
  weekdayRow.style.width = "100%";
  weekdayRow.style.fontSize = "11px";
  weekdayRow.style.color = "var(--text-muted)";
  weekdayRow.style.pointerEvents = "none";
  
  weekdays.forEach(day => {
    const dayEl = document.createElement("div");
    dayEl.textContent = day;
    dayEl.style.textAlign = "center";
    weekdayRow.appendChild(dayEl);
  });
  
  calendarEl.appendChild(weekdayRow);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  currentMonthEl.textContent = `${year}년 ${month + 1}월`;

  const firstDayOfMonth = new Date(year, month, 1);
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay()); // 0=일요일

  const totalCells = 42; // 7일 * 6주
  const today = new Date();

  const filtered = applyFilters(eventsData);

  for (let i = 0; i < totalCells; i++) {
    const cellDate = new Date(startDate);
    cellDate.setDate(startDate.getDate() + i);

    const dayEl = document.createElement("div");
    dayEl.className = "calendar-day";

    if (cellDate.getMonth() !== month) {
      dayEl.classList.add("inactive");
    }

    if (isSameDay(cellDate, today)) {
      dayEl.classList.add("today");
    }

    const numSpan = document.createElement("div");
    numSpan.className = "calendar-day-number";
    numSpan.textContent = cellDate.getDate();

    const dateStr = formatDate(cellDate);
    const eventsOfDay = filtered.filter((ev) => formatDate(ev.openAt) === dateStr);
    const hasUpcoming = eventsOfDay.length > 0;
    const hasMine = eventsOfDay.some((ev) => isInMyCalendar(ev.id));

    // 이벤트 목록 표시
    const eventsList = document.createElement("div");
    eventsList.className = "calendar-events";
    eventsList.style.display = "flex";
    eventsList.style.flexDirection = "column";
    eventsList.style.gap = "3px";
    eventsList.style.marginTop = "4px";
    eventsList.style.maxHeight = "50px";
    eventsList.style.overflowY = "auto";
    eventsList.style.fontSize = "9px";

    eventsOfDay.slice(0, 3).forEach((ev) => {
      const eventItem = document.createElement("div");
      eventItem.style.display = "flex";
      eventItem.style.alignItems = "center";
      eventItem.style.gap = "4px";
      eventItem.style.overflow = "hidden";
      eventItem.style.textOverflow = "ellipsis";
      eventItem.style.whiteSpace = "nowrap";

      // 내 캘린더 아이콘 표시
      const myItem = isInMyCalendar(ev.id) ? getMyCalendarItem(ev.id) : null;
      if (myItem && myItem.icon) {
        const iconSpan = document.createElement("span");
        iconSpan.textContent = myItem.icon;
        iconSpan.style.fontSize = "10px";
        iconSpan.style.flexShrink = "0";
        eventItem.appendChild(iconSpan);
      }

      // 예매처별 색상 점
      const siteDot = document.createElement("span");
      siteDot.style.width = "6px";
      siteDot.style.height = "6px";
      siteDot.style.borderRadius = "50%";
      siteDot.style.flexShrink = "0";
      siteDot.style.backgroundColor = getSiteColor(ev.site);
      if (ev.site && (ev.site.includes("예스24") || ev.site.includes("YES24"))) {
        siteDot.style.border = "1px solid rgba(255,255,255,0.3)";
      }

      // 제목
      const titleSpan = document.createElement("span");
      titleSpan.textContent = ev.title.length > 12 ? ev.title.substring(0, 12) + "..." : ev.title;
      titleSpan.style.color = "var(--text-muted)";
      titleSpan.style.flex = "1";
      titleSpan.style.minWidth = "0";
      titleSpan.style.overflow = "hidden";
      titleSpan.style.textOverflow = "ellipsis";

      eventItem.appendChild(siteDot);
      eventItem.appendChild(titleSpan);
      eventsList.appendChild(eventItem);
    });

    if (eventsOfDay.length > 3) {
      const moreItem = document.createElement("div");
      moreItem.textContent = `+${eventsOfDay.length - 3}개 더`;
      moreItem.style.fontSize = "8px";
      moreItem.style.color = "var(--text-muted)";
      moreItem.style.opacity = "0.7";
      eventsList.appendChild(moreItem);
    }

    // 기존 dots (하위 호환성)
    const dotsWrap = document.createElement("div");
    dotsWrap.className = "calendar-dots";
    dotsWrap.style.display = "flex";
    dotsWrap.style.gap = "2px";
    dotsWrap.style.marginTop = "2px";

    if (hasUpcoming) {
      const dot = document.createElement("div");
      dot.className = "dot upcoming";
      dotsWrap.appendChild(dot);
    }

    if (hasMine) {
      const dot = document.createElement("div");
      dot.className = "dot mine";
      dotsWrap.appendChild(dot);
    }

    dayEl.appendChild(numSpan);
    if (eventsOfDay.length > 0) {
      dayEl.appendChild(eventsList);
    }
    dayEl.appendChild(dotsWrap);

    if (eventsOfDay.length > 0) {
      dayEl.style.cursor = "pointer";
      dayEl.addEventListener("click", () => openDayEventsModal(eventsOfDay, formatDateLabel(cellDate)));
    }

    calendarEl.appendChild(dayEl);
  }
}

// === 랭킹 리스트 렌더링 ===
function renderRankingList() {
  rankingListEl.innerHTML = "";

  const rankingEvents = eventsData
    .filter(ev => ev.category === "WEEKLY RANKING")
    .sort((a, b) => {
      // 제목에서 순위 추출 (#1, #2, #3)
      const rankA = parseInt(a.title.match(/#(\d+)/)?.[1] || 999);
      const rankB = parseInt(b.title.match(/#(\d+)/)?.[1] || 999);
      return rankA - rankB;
    });

  if (rankingEvents.length === 0) {
    rankingListEl.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-muted);">랭킹 데이터가 없습니다.</div>';
    return;
  }

  rankingEvents.forEach((ev, index) => {
    const rankCard = document.createElement("div");
    rankCard.className = "ranking-card";
    rankCard.style.cssText = `
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      margin-bottom: 12px;
      border-radius: var(--radius-md);
      background: rgba(11, 14, 36, 0.98);
      border: 1px solid rgba(37, 40, 76, 0.95);
      transition: transform 0.08s ease-out, box-shadow var(--transition-fast), border-color var(--transition-fast);
      cursor: pointer;
    `;

    // 순위 배지
    const rankBadge = document.createElement("div");
    rankBadge.style.cssText = `
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 800;
      flex-shrink: 0;
      background: ${index === 0 ? 'linear-gradient(135deg, #ffd700, #ffed4e)' : index === 1 ? 'linear-gradient(135deg, #c0c0c0, #e8e8e8)' : index === 2 ? 'linear-gradient(135deg, #cd7f32, #e6a857)' : 'rgba(108, 92, 231, 0.18)'};
      color: ${index < 3 ? '#000' : 'var(--accent-strong)'};
      border: ${index < 3 ? 'none' : '1px solid rgba(162, 155, 255, 0.7)'};
    `;
    rankBadge.textContent = index + 1;

    // 이벤트 정보
    const eventInfo = document.createElement("div");
    eventInfo.style.flex = "1";
    eventInfo.style.minWidth = "0";

    const title = document.createElement("div");
    title.style.cssText = "font-size: 16px; font-weight: 600; margin-bottom: 4px;";
    title.textContent = ev.title.replace("WEEKLY RANKING #" + (index + 1) + " - ", "");

    const meta = document.createElement("div");
    meta.style.cssText = "font-size: 12px; color: var(--text-muted); margin-bottom: 6px;";
    meta.textContent = `${ev.agency} · ${ev.artist}`;

    const tags = document.createElement("div");
    tags.style.cssText = "display: flex; gap: 6px; flex-wrap: wrap;";
    
    const siteTag = document.createElement("span");
    siteTag.className = "tag site";
    siteTag.textContent = ev.site;
    tags.appendChild(siteTag);

    eventInfo.appendChild(title);
    eventInfo.appendChild(meta);
    eventInfo.appendChild(tags);

    rankCard.appendChild(rankBadge);
    rankCard.appendChild(eventInfo);

    // 카드 전체 클릭 시 이벤트 모달 열기
    rankCard.addEventListener("click", () => {
      openEventModal(ev);
    });

    rankingListEl.appendChild(rankCard);
  });
}

// === 일정 리스트 렌더링 ===
function renderEventsList() {
  eventsListEl.innerHTML = "";

  let filtered = applyFilters(eventsData);
  filtered = filtered.sort(
    (a, b) => new Date(a.openAt) - new Date(b.openAt)
  );

  if (currentView === "my") {
    eventsTitleEl.textContent = "내 캘린더에 담은 일정";
  } else {
    eventsTitleEl.textContent = currentCategory === "전체" ? "전체 일정" : `${currentCategory} 일정`;
  }

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "조건에 맞는 티켓팅 일정이 없습니다.";
    li.style.fontSize = "12px";
    li.style.color = "#a3a7c2";
    li.style.padding = "12px 4px";
    eventsListEl.appendChild(li);
    return;
  }

  filtered.forEach((ev) => {
    const li = document.createElement("li");
    li.className = "event-card";

    const main = document.createElement("div");
    main.className = "event-main";

    const title = document.createElement("div");
    title.className = "event-title";
    const myItem = isInMyCalendar(ev.id) ? getMyCalendarItem(ev.id) : null;
    const iconText = myItem && myItem.icon ? myItem.icon + " " : "";
    title.textContent = `${ev.highlight ? ev.highlight + " " : ""}${iconText}${ev.title}`;

    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = `${ev.agency} · ${ev.artist}`;

    const tags = document.createElement("div");
    tags.className = "event-tags";

    const cat = document.createElement("span");
    cat.className = "tag category";
    cat.textContent = ev.category;

    const sub = document.createElement("span");
    sub.className = "tag category";
    sub.textContent = ev.subcategory || "전체";

    const site = document.createElement("span");
    site.className = "tag site";
    site.textContent = ev.site;

    tags.appendChild(cat);
    tags.appendChild(sub);
    tags.appendChild(site);

    main.appendChild(title);
    main.appendChild(meta);
    main.appendChild(tags);

    const timeDiv = document.createElement("div");
    timeDiv.className = "event-time";
    timeDiv.innerHTML = `
      <div>티켓 오픈</div>
      <strong>${formatDateTime(ev.openAt)}</strong>
    `;

    const actions = document.createElement("div");
    actions.className = "event-actions";

    const toMyBtn = document.createElement("button");
    toMyBtn.className = "secondary-btn" + (isInMyCalendar(ev.id) ? " mine" : "");
    toMyBtn.textContent = isInMyCalendar(ev.id) ? "내 캘린더에서 제거" : "내 캘린더에 담기";
    
    // 내 캘린더에 있는 경우 메모 표시
    if (isInMyCalendar(ev.id)) {
      const myItem = getMyCalendarItem(ev.id);
      if (myItem.memo) {
        const memoDiv = document.createElement("div");
        memoDiv.className = "event-memo";
        memoDiv.textContent = `💬 ${myItem.memo}`;
        memoDiv.style.fontSize = "10px";
        memoDiv.style.color = "#81ecec";
        memoDiv.style.marginTop = "4px";
        main.appendChild(memoDiv);
      }
    }

    const linkBtn = document.createElement("button");
    linkBtn.className = "outline-btn";
    linkBtn.textContent = "티켓팅 페이지 이동";

    actions.appendChild(toMyBtn);
    actions.appendChild(linkBtn);

    li.appendChild(main);
    li.appendChild(timeDiv);
    li.appendChild(actions);

    // 카드 전체 클릭 시 상세 모달
    main.addEventListener("click", () => openEventModal(ev));
    timeDiv.addEventListener("click", () => openEventModal(ev));

    // 내 캘린더 토글
    toMyBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (isInMyCalendar(ev.id)) {
        removeFromMyCalendar(ev.id);
        renderCalendar();
        renderEventsList();
      } else {
        openAddToCalendarModal(ev.id);
      }
    });

    // 사이트 이동
    linkBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(ev.siteUrl, "_blank");
    });

    eventsListEl.appendChild(li);
  });
}

// === 모달 ===
function openEventModal(ev) {
  const myItem = isInMyCalendar(ev.id) ? getMyCalendarItem(ev.id) : null;
  const iconText = myItem && myItem.icon ? myItem.icon + " " : "";
  
  modalContentEl.innerHTML = `
    <h3>${ev.highlight ? ev.highlight + " " : ""}${iconText}${ev.title}</h3>
    <div class="meta">${ev.agency} · ${ev.artist}</div>
    ${myItem && myItem.memo ? `<p style="margin-top:6px; padding:8px; background:rgba(0, 206, 201, 0.1); border-radius:6px; border:1px solid rgba(0, 206, 201, 0.3);"><strong>💬 메모:</strong> ${myItem.memo}</p>` : ""}
    <p><strong>카테고리:</strong> ${ev.category}${ev.subcategory ? " / " + ev.subcategory : ""}</p>
    <p><strong>티켓 오픈:</strong> ${formatDateTime(ev.openAt)}</p>
    <p><strong>공연 일시:</strong> ${formatDateTime(ev.showAt)}</p>
    <p><strong>예매처:</strong> ${ev.site}</p>
    ${
      ev.note
        ? `<p style="margin-top:4px;"><strong>비고:</strong> ${ev.note}</p>`
        : ""
    }
    <div style="margin-top:16px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.1);">
      <button id="modal-add-calendar" class="${isInMyCalendar(ev.id) ? 'secondary-btn mine' : 'primary-btn'}" style="width:100%; padding:10px; margin-bottom:8px;">
        ${isInMyCalendar(ev.id) ? '내 캘린더에서 제거' : '내 캘린더에 담기'}
      </button>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <a class="link" href="${ev.siteUrl}" target="_blank" rel="noopener noreferrer">예매 페이지 열기 ↗</a>
        <a class="link" href="${buildGoogleCalendarLink(ev)}" target="_blank" rel="noopener noreferrer">🗓 Google 캘린더(모의)</a>
        <a class="link" href="${buildDeviceCalendarLink(ev)}" target="_blank" rel="noopener noreferrer">📱 휴대폰 캘린더(모의)</a>
      </div>
    </div>
  `;
  
  // 내 캘린더 추가/제거 버튼 이벤트
  const addCalendarBtn = document.getElementById("modal-add-calendar");
  if (addCalendarBtn) {
    addCalendarBtn.addEventListener("click", () => {
      if (isInMyCalendar(ev.id)) {
        removeFromMyCalendar(ev.id);
        closeEventModal();
        renderCalendar();
        renderEventsList();
        if (currentSubcategory === "WEEKLY RANKING") {
          renderRankingList();
        }
      } else {
        closeEventModal();
        openAddToCalendarModal(ev.id);
      }
    });
  }
  
  modalBackdrop.classList.add("show");
}

function openDayEventsModal(events, dateLabel) {
  if (events.length === 0) return;
  
  modalContentEl.innerHTML = `
    <h3 style="margin-bottom:12px;">${dateLabel} 티켓팅 오픈 일정</h3>
    <div style="max-height:400px; overflow-y:auto;" id="day-events-list">
    </div>
  `;
  
  const eventsListEl = document.getElementById("day-events-list");
  
  events.forEach((ev, index) => {
    const myItem = isInMyCalendar(ev.id) ? getMyCalendarItem(ev.id) : null;
    const iconText = myItem && myItem.icon ? myItem.icon + " " : "";
    const isInMyCal = isInMyCalendar(ev.id);
    
    const eventDiv = document.createElement("div");
    eventDiv.style.padding = "10px 0";
    eventDiv.style.borderBottom = "1px solid rgba(255,255,255,0.08)";
    
    eventDiv.innerHTML = `
      <div style="font-weight:600; font-size:14px; margin-bottom:4px;">${ev.highlight ? ev.highlight + " " : ""}${iconText}${ev.title}</div>
      <div class="meta" style="margin-bottom:6px;">${ev.agency} · ${ev.artist}</div>
      ${myItem && myItem.memo ? `<div style="font-size:11px; color:#81ecec; margin-bottom:4px;">💬 ${myItem.memo}</div>` : ""}
      <div style="font-size:12px; color:#a3a7c2; margin-bottom:2px;">티켓 오픈: ${formatDateTime(ev.openAt)}</div>
      <div style="font-size:12px; color:#a3a7c2; margin-bottom:8px;">공연 일시: ${formatDateTime(ev.showAt)}</div>
      <div style="margin-top:8px; display:flex; gap:6px; flex-wrap:wrap;">
        <button class="outline-btn day-event-btn" data-action="site" data-url="${ev.siteUrl}">예매 페이지 ↗</button>
        <button class="outline-btn day-event-btn" data-action="google" data-url="${buildGoogleCalendarLink(ev)}">🗓 Google 캘린더(모의)</button>
        <button class="outline-btn day-event-btn" data-action="device" data-url="${buildDeviceCalendarLink(ev)}">📱 휴대폰 캘린더(모의)</button>
        <button class="secondary-btn day-event-btn ${isInMyCal ? 'mine' : ''}" data-action="calendar" data-event-id="${ev.id}">${isInMyCal ? '내 캘린더에서 제거' : '내 캘린더에 담기'}</button>
      </div>
    `;
    
    eventsListEl.appendChild(eventDiv);
  });
  
  // 버튼 이벤트 리스너
  eventsListEl.querySelectorAll(".day-event-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const action = btn.dataset.action;
      const url = btn.dataset.url;
      const eventId = btn.dataset.eventId;
      
      if (action === "site" || action === "google" || action === "device") {
        window.open(url, "_blank");
      } else if (action === "calendar") {
        if (isInMyCalendar(eventId)) {
          removeFromMyCalendar(eventId);
          closeEventModal();
          renderCalendar();
          renderEventsList();
          // 팝업 다시 열기
          setTimeout(() => {
            const dateStr = formatDate(events[0].openAt);
            const eventsOfDay = eventsData.filter((ev) => formatDate(ev.openAt) === dateStr);
            openDayEventsModal(eventsOfDay, dateLabel);
          }, 100);
        } else {
          closeEventModal();
          openAddToCalendarModal(eventId);
        }
      }
    });
  });
  
  modalBackdrop.classList.add("show");
}

function closeEventModal() {
  modalBackdrop.classList.remove("show");
}

// 내 캘린더에 추가 모달
function openAddToCalendarModal(eventId) {
  const ev = eventsData.find(e => e.id === eventId);
  if (!ev) return;
  
  const myItem = isInMyCalendar(eventId) ? getMyCalendarItem(eventId) : { icon: "", memo: "" };
  
  modalContentEl.innerHTML = `
    <h3>내 캘린더에 추가</h3>
    <div class="meta" style="margin-bottom:12px;">${ev.title}</div>
    
    <div style="margin-bottom:12px;">
      <label style="display:block; font-size:12px; margin-bottom:6px; color:var(--text-muted);">중요 표시 (이모지)</label>
      <div style="display:flex; gap:8px; margin-bottom:8px; flex-wrap:wrap;">
        <button class="icon-select-btn" data-icon="⭐" style="padding:6px 10px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); border-radius:6px; cursor:pointer; font-size:16px; transition:all 0.2s;">⭐</button>
        <button class="icon-select-btn" data-icon="❤️" style="padding:6px 10px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); border-radius:6px; cursor:pointer; font-size:16px; transition:all 0.2s;">❤️</button>
        <button class="icon-select-btn" data-icon="🔥" style="padding:6px 10px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); border-radius:6px; cursor:pointer; font-size:16px; transition:all 0.2s;">🔥</button>
        <button class="icon-select-btn" data-icon="✨" style="padding:6px 10px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); border-radius:6px; cursor:pointer; font-size:16px; transition:all 0.2s;">✨</button>
        <button class="icon-select-btn" data-icon="🎯" style="padding:6px 10px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); border-radius:6px; cursor:pointer; font-size:16px; transition:all 0.2s;">🎯</button>
        <button class="icon-select-btn" data-icon="" style="padding:6px 10px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); border-radius:6px; cursor:pointer; font-size:12px; transition:all 0.2s;">없음</button>
      </div>
      <input type="text" id="custom-icon-input" placeholder="직접 입력 (이모지)" value="${myItem.icon}" style="width:100%; padding:6px 8px; border-radius:6px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); color:var(--text); font-size:12px; outline:none;" />
    </div>
    
    <div style="margin-bottom:16px;">
      <label style="display:block; font-size:12px; margin-bottom:6px; color:var(--text-muted);">메모</label>
      <textarea id="memo-input" placeholder="메모를 입력하세요..." style="width:100%; padding:8px; border-radius:6px; border:1px solid var(--border); background:rgba(8, 9, 24, 0.95); color:var(--text); font-size:12px; outline:none; resize:vertical; min-height:60px; font-family:inherit;">${myItem.memo}</textarea>
    </div>
    
    <div style="display:flex; gap:8px; justify-content:flex-end;">
      <button id="cancel-add-calendar" class="outline-btn" style="padding:8px 14px;">취소</button>
      <button id="confirm-add-calendar" class="primary-btn" style="padding:8px 14px;">추가</button>
    </div>
  `;
  
  modalBackdrop.classList.add("show");
  
  let selectedIcon = myItem.icon;
  const iconInput = document.getElementById("custom-icon-input");
  
  // 아이콘 선택 버튼 이벤트
  document.querySelectorAll(".icon-select-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".icon-select-btn").forEach(b => {
        b.style.borderColor = "var(--border)";
        b.style.background = "rgba(8, 9, 24, 0.95)";
      });
      btn.style.borderColor = "var(--accent-strong)";
      btn.style.background = "var(--accent-soft)";
      selectedIcon = btn.dataset.icon || "";
      iconInput.value = selectedIcon;
    });
    
    if ((btn.dataset.icon || "") === myItem.icon) {
      btn.style.borderColor = "var(--accent-strong)";
      btn.style.background = "var(--accent-soft)";
    }
  });
  
  // 커스텀 아이콘 입력
  iconInput.addEventListener("input", (e) => {
    selectedIcon = e.target.value;
  });
  
  // 확인 버튼
  document.getElementById("confirm-add-calendar").addEventListener("click", () => {
    const memo = document.getElementById("memo-input").value.trim();
    addToMyCalendar(eventId, selectedIcon, memo);
    closeEventModal();
    renderCalendar();
    renderEventsList();
    
    // WEEKLY RANKING이 선택되어 있으면 랭킹 리스트도 다시 렌더링
    if (currentSubcategory === "WEEKLY RANKING") {
      renderRankingList();
    }
    
    // 캘린더 팝업이 열려있었다면 다시 열기
    const ev = eventsData.find(e => e.id === eventId);
    if (ev) {
      setTimeout(() => {
        const dateStr = formatDate(ev.openAt);
        const eventsOfDay = eventsData.filter((e) => formatDate(e.openAt) === dateStr);
        if (eventsOfDay.length > 0) {
          openDayEventsModal(eventsOfDay, formatDateLabel(new Date(ev.openAt)));
        }
      }, 200);
    }
  });
  
  // 취소 버튼
  document.getElementById("cancel-add-calendar").addEventListener("click", () => {
    closeEventModal();
  });
}

// === 알림 (기본 구조만, 실제 푸시는 추가 구현 필요) ===
async function requestNotificationPermission() {
  if (!("Notification" in window)) {
    alert("이 브라우저에서는 알림을 지원하지 않습니다.");
    return;
  }
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    alert("알림이 허용되었습니다. (실제 푸시는 추후 구현 가능)");
  } else {
    alert("알림이 허용되지 않았습니다.");
  }
}

// === 이벤트 바인딩 ===
categoryChips.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  categoryChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  currentCategory = btn.dataset.category;
  currentSubcategory = "전체";
  buildSubcategoryChips();
  updateFilterVisibility();
  renderCalendar();
  renderEventsList();
});

subcategoryChips.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  subcategoryChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  btn.classList.add("active");
  currentSubcategory = btn.dataset.subcategory;
  updateFilterVisibility();
  renderCalendar();
  renderEventsList();
});

agencySelect.addEventListener("change", () => {
  currentAgency = agencySelect.value;
  renderCalendar();
  renderEventsList();
});

soccerSelect.addEventListener("change", () => {
  currentSoccerClub = soccerSelect.value;
  renderCalendar();
  renderEventsList();
});

baseballSelect.addEventListener("change", () => {
  currentBaseballClub = baseballSelect.value;
  renderCalendar();
  renderEventsList();
});

artistSearchInput.addEventListener("input", (e) => {
  currentArtistSearch = e.target.value;
  if (currentArtistSearch.trim() !== "") {
    currentArtist = "all"; // 검색어가 있으면 드롭다운 선택 해제
    artistSelect.value = "all";
  }
  renderCalendar();
  renderEventsList();
});

artistSelect.addEventListener("change", () => {
  currentArtist = artistSelect.value;
  if (currentArtist !== "all") {
    currentArtistSearch = ""; // 드롭다운 선택 시 검색어 초기화
    artistSearchInput.value = "";
  }
  renderCalendar();
  renderEventsList();
});

resetFiltersBtn.addEventListener("click", () => {
  currentCategory = "전체";
  currentSubcategory = "전체";
  currentAgency = "all";
  currentArtist = "all";
  currentArtistSearch = "";
  currentSoccerClub = "all";
  currentBaseballClub = "all";
  categoryChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  categoryChips.querySelector('[data-category="전체"]').classList.add("active");
  buildSubcategoryChips();
  updateFilterVisibility();
  artistSearchInput.value = "";
  artistSelect.value = "all";
  renderCalendar();
  renderEventsList();
});

prevMonthBtn.addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
  renderCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
  renderCalendar();
});

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentView = btn.dataset.view;
    renderCalendar();
    renderEventsList();
  });
});

enableNotiBtn.addEventListener("click", requestNotificationPermission);

modalCloseBtn.addEventListener("click", closeEventModal);
modalBackdrop.addEventListener("click", (e) => {
  if (e.target === modalBackdrop) closeEventModal();
});

// === 초기화 ===
function init() {
  buildFilterOptions();
  buildSubcategoryChips();
  updateFilterVisibility();
  renderCalendar();
  renderEventsList();
}

document.addEventListener("DOMContentLoaded", init);


