// === 예시 데이터 (카테고리/세부 카테고리 구조 반영) ===
const eventsData = [
  // 공연 랭킹 (Weekly Ranking)
  {
    id: "rank-1",
    title: "WEEKLY RANKING #1 - 글로벌 팝 내한",
    category: "공연 랭킹",
    subcategory: "주간",
    agency: "Global Live",
    artist: "Pop Star",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/",
    openAt: "2025-12-05T12:00:00",
    showAt: "2026-01-20T19:30:00",
    note: "주간 랭킹 1위 공연",
  },
  {
    id: "rank-2",
    title: "WEEKLY RANKING #2 - 뮤지컬 메가히트",
    category: "공연 랭킹",
    subcategory: "주간",
    agency: "뮤지컬컴퍼니",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/",
    openAt: "2025-12-06T10:00:00",
    showAt: "2026-02-01T19:30:00",
    note: "주간 랭킹 2위",
  },

  // 콘서트 (세부: 아이돌, 발라드, 트로트, 인디, 내한, 기타)
  {
    id: "c-1",
    title: "아이돌 페스티벌 2026",
    category: "콘서트",
    subcategory: "아이돌",
    agency: "JYP",
    artist: "다수 아이돌",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Special/55971",
    openAt: "2025-12-10T20:00:00",
    showAt: "2026-01-15T18:00:00",
    note: "팬클럽 선예매 별도",
  },
  {
    id: "c-2",
    title: "발라드 콘서트 : 겨울밤",
    category: "콘서트",
    subcategory: "발라드",
    agency: "Ballad Ent",
    artist: "발라더즈",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/",
    openAt: "2025-12-12T20:00:00",
    showAt: "2026-02-01T18:00:00",
    note: "",
  },
  {
    id: "c-3",
    title: "트로트 빅쇼",
    category: "콘서트",
    subcategory: "트로트",
    agency: "트롯컴퍼니",
    artist: "트롯스타",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/",
    openAt: "2025-12-14T20:00:00",
    showAt: "2026-02-10T18:00:00",
    note: "",
  },
  {
    id: "c-4",
    title: "인디 나이트",
    category: "콘서트",
    subcategory: "인디",
    agency: "페포니뮤직",
    artist: "잔나비",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/product/60145",
    openAt: "2025-12-24T20:00:00",
    showAt: "2026-04-01T18:00:00",
    note: "",
  },
  {
    id: "c-5",
    title: "글로벌 내한 투어",
    category: "콘서트",
    subcategory: "내한",
    agency: "Global Live",
    artist: "XYZ World Tour",
    site: "위메프 티켓",
    siteUrl: "https://ticket.wemakeprice.com",
    openAt: "2025-12-15T20:00:00",
    showAt: "2026-04-05T18:00:00",
    note: "내한 투어 서울",
  },

  // 뮤지컬/연극 (세부: 뮤지컬, 연극)
  {
    id: "m-1",
    title: "뮤지컬 〈한복 입은 남자〉",
    category: "뮤지컬/연극",
    subcategory: "뮤지컬",
    agency: "인터파크 뮤지컬",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/contents/notice/detail/11949",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-05T19:30:00",
    note: "",
  },
  {
    id: "m-2",
    title: "뮤지컬 〈킹키부츠〉",
    category: "뮤지컬/연극",
    subcategory: "뮤지컬",
    agency: "킹키부츠 제작사",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25014553",
    openAt: "2025-12-07T10:00:00",
    showAt: "2026-01-20T19:30:00",
    note: "",
  },
  {
    id: "m-3",
    title: "연극 〈라이프 오브 파이〉",
    category: "뮤지컬/연극",
    subcategory: "연극",
    agency: "Life of Pi 제작사",
    artist: "전 캐스트",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/",
    openAt: "2025-12-09T10:00:00",
    showAt: "2026-02-10T19:30:00",
    note: "",
  },

  // 스포츠 (세부: 축구, 야구, E스포츠, 기타) - 구단 필터용 필드 추가
  {
    id: "s-1",
    title: "축구 홈 개막전",
    category: "스포츠",
    subcategory: "축구",
    sportClub: "FC서울",
    agency: "K리그",
    artist: "FC서울",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/63",
    openAt: "2025-12-20T11:00:00",
    showAt: "2026-03-02T14:00:00",
    note: "축구 구단 예매 페이지",
  },
  {
    id: "s-2",
    title: "야구 시즌 홈 개막전",
    category: "스포츠",
    subcategory: "야구",
    sportClub: "KIA 타이거즈",
    agency: "KBO",
    artist: "KIA 타이거즈",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/58",
    openAt: "2026-02-20T11:00:00",
    showAt: "2026-03-30T18:30:00",
    note: "야구 구단 예매 페이지",
  },
  {
    id: "s-3",
    title: "E스포츠 결승전",
    category: "스포츠",
    subcategory: "E스포츠",
    sportClub: "LCK Finals",
    agency: "E-스포츠 리그",
    artist: "결승팀",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/",
    openAt: "2026-01-05T18:00:00",
    showAt: "2026-02-12T18:00:00",
    note: "",
  },

  // 클래식/무용
  {
    id: "cl-1",
    title: "신년 클래식 갈라",
    category: "클래식/무용",
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

  // 팝업스토어 (아이돌/시즌/기타)
  {
    id: "p-1",
    title: "팝업스토어 - 아이돌 A",
    category: "팝업스토어",
    subcategory: "아이돌",
    agency: "아이돌팝업",
    artist: "아이돌 A",
    site: "네이버 예약",
    siteUrl:
      "https://booking.naver.com/booking/12/bizes/581926/items/7191828?startDateTime=2025-12-05T00%3A00%3A00%2B09%3A00",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-20T20:00:00",
    note: "아이돌 팝업스토어 예시",
  },
  {
    id: "p-2",
    title: "팝업스토어 - 아이돌 B (NMIXX EP.1)",
    category: "팝업스토어",
    subcategory: "아이돌",
    agency: "아이돌팝업",
    artist: "NMIXX",
    site: "네이버 예약",
    siteUrl:
      "https://booking.naver.com/booking/12/bizes/1091186/items/7213860?startDateTime=2025-12-05T00%3A00%3A00%2B09%3A00&utm_campaign=nmixx_popup_episode1_zerofrontier_naver_booking&utm_medium=sns&utm_source=twitter",
    openAt: "2025-12-05T10:00:00",
    showAt: "2025-12-25T20:00:00",
    note: "NMIXX 팝업스토어",
  },
  {
    id: "p-3",
    title: "팝업스토어 - 시즌 에디션",
    category: "팝업스토어",
    subcategory: "시즌",
    agency: "Seasonal Pop",
    artist: "Seasonal Line",
    site: "네이버 예약",
    siteUrl:
      "https://m.booking.naver.com/booking/12/bizes/1529548/items/7216347?area=bmp&startDateTime=2025-12-05T00%3A00%3A00%2B09%3A00",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-10T20:00:00",
    note: "시즌 한정 팝업",
  },
  {
    id: "p-4",
    title: "팝업스토어 - 기타 1",
    category: "팝업스토어",
    subcategory: "기타",
    agency: "기타팝업",
    artist: "기타 브랜드 1",
    site: "네이버 예약",
    siteUrl: "https://m.booking.naver.com/booking/6/bizes/1510139/items/7107356?area=bmp&startDate=2025-12-05",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-05T20:00:00",
    note: "",
  },
  {
    id: "p-5",
    title: "팝업스토어 - 기타 2",
    category: "팝업스토어",
    subcategory: "기타",
    agency: "기타팝업",
    artist: "기타 브랜드 2",
    site: "네이버 예약",
    siteUrl: "https://booking.naver.com/booking/13/bizes/1185210/items/7207891?startDate=2025-12-05",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-12T20:00:00",
    note: "",
  },
  {
    id: "p-6",
    title: "팝업스토어 - 기타 3",
    category: "팝업스토어",
    subcategory: "기타",
    agency: "기타팝업",
    artist: "기타 브랜드 3",
    site: "네이버 예약",
    siteUrl: "https://m.booking.naver.com/booking/6/bizes/1543589/items/7227353",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-15T20:00:00",
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
let currentSoccerClub = "all";
let currentBaseballClub = "all";
let myCalendar = loadMyCalendar();

// === DOM 요소 ===
const categoryChips = document.getElementById("category-chips");
const subcategoryChips = document.getElementById("subcategory-chips");
const agencySelect = document.getElementById("agency-select");
const agencyWrap = document.getElementById("agency-wrap");
const sportsWrap = document.getElementById("sports-wrap");
const soccerSelect = document.getElementById("soccer-select");
const baseballSelect = document.getElementById("baseball-select");
const artistSelect = document.getElementById("artist-select");
const resetFiltersBtn = document.getElementById("reset-filters");
const enableNotiBtn = document.getElementById("enable-noti");

const navButtons = document.querySelectorAll(".nav-btn");
const navPopupstoreBtn = document.getElementById("nav-popupstore");
const calendarEl = document.getElementById("calendar");
const currentMonthEl = document.getElementById("current-month");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const eventsTitleEl = document.getElementById("events-title");
const eventsListEl = document.getElementById("events-list");

const modalBackdrop = document.getElementById("event-modal-backdrop");
const modalCloseBtn = document.getElementById("modal-close");
const modalContentEl = document.getElementById("modal-content");

// 세부 카테고리 정의
const subcategoriesByCategory = {
  전체: ["전체"],
  "공연 랭킹": ["전체", "주간"],
  콘서트: ["전체", "아이돌", "발라드", "트로트", "인디", "내한", "기타"],
  "뮤지컬/연극": ["전체", "뮤지컬", "연극"],
  스포츠: ["전체", "축구", "야구", "E스포츠", "기타"],
  "클래식/무용": ["전체", "클래식", "무용", "기타"],
  "가족/어린이": ["전체", "패밀리", "어린이", "기타"],
  팝업스토어: ["전체", "아이돌", "시즌", "기타"],
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

function formatDate(iso) {
  const d = new Date(iso);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function isSameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

// === 로컬스토리지 ===
function loadMyCalendar() {
  try {
    const raw = localStorage.getItem("my-ticket-calendar");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveMyCalendar() {
  localStorage.setItem("my-ticket-calendar", JSON.stringify(myCalendar));
}

function isInMyCalendar(id) {
  return myCalendar.includes(id);
}

function toggleMyCalendar(id) {
  if (isInMyCalendar(id)) {
    myCalendar = myCalendar.filter((x) => x !== id);
  } else {
    myCalendar.push(id);
  }
  saveMyCalendar();
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

    if (currentArtist !== "all" && ev.artist !== currentArtist) return false;
    if (currentView === "my" && !isInMyCalendar(ev.id)) return false;
    return true;
  });
}

function buildFilterOptions() {
  // 기획사 (콘서트용)
  const agencies = new Set();
  eventsData.forEach((ev) => {
    if (ev.category === "콘서트") agencies.add(ev.agency);
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
}

// === 캘린더 렌더링 ===
function renderCalendar() {
  calendarEl.innerHTML = "";

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

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

    const dotsWrap = document.createElement("div");
    dotsWrap.className = "calendar-dots";

    const dateStr = formatDate(cellDate.toISOString());
    const hasUpcoming = filtered.some(
      (ev) => formatDate(ev.openAt) === dateStr
    );
    const hasMine = filtered.some(
      (ev) => formatDate(ev.openAt) === dateStr && isInMyCalendar(ev.id)
    );

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
    dayEl.appendChild(dotsWrap);
    calendarEl.appendChild(dayEl);
  }
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
    title.textContent = ev.title;

    const meta = document.createElement("div");
    meta.className = "event-meta";
    meta.textContent = `${ev.agency} · ${ev.artist}`;

    const tags = document.createElement("div");
    tags.className = "event-tags";

    const cat = document.createElement("span");
    cat.className = "tag category";
    cat.textContent = ev.category;

    const site = document.createElement("span");
    site.className = "tag site";
    site.textContent = ev.site;

    tags.appendChild(cat);
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
      toggleMyCalendar(ev.id);
      renderCalendar();
      renderEventsList();
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
  modalContentEl.innerHTML = `
    <h3>${ev.title}</h3>
    <div class="meta">${ev.agency} · ${ev.artist}</div>
    <p><strong>카테고리:</strong> ${ev.category}</p>
    <p><strong>티켓 오픈:</strong> ${formatDateTime(ev.openAt)}</p>
    <p><strong>공연 일시:</strong> ${formatDateTime(ev.showAt)}</p>
    <p><strong>예매처:</strong> ${ev.site}</p>
    ${
      ev.note
        ? `<p style="margin-top:4px;"><strong>비고:</strong> ${ev.note}</p>`
        : ""
    }
    <a class="link" href="${ev.siteUrl}" target="_blank" rel="noopener noreferrer">
      예매 페이지 열기 ↗
    </a>
  `;
  modalBackdrop.classList.add("show");
}

function closeEventModal() {
  modalBackdrop.classList.remove("show");
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

artistSelect.addEventListener("change", () => {
  currentArtist = artistSelect.value;
  renderCalendar();
  renderEventsList();
});

resetFiltersBtn.addEventListener("click", () => {
  currentCategory = "전체";
  currentSubcategory = "전체";
  currentAgency = "all";
  currentArtist = "all";
  currentSoccerClub = "all";
  currentBaseballClub = "all";
  categoryChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  categoryChips.querySelector('[data-category="전체"]').classList.add("active");
  buildSubcategoryChips();
  updateFilterVisibility();
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

if (navPopupstoreBtn) {
  navPopupstoreBtn.addEventListener("click", () => {
    // view는 전체로 유지, 카테고리만 팝업스토어로 바로 이동
    navButtons.forEach((b) => b.classList.remove("active"));
    currentView = "all";
    currentCategory = "팝업스토어";
    currentSubcategory = "전체";
    // 카테고리 칩도 동기화
    categoryChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    const target = categoryChips.querySelector('[data-category="팝업스토어"]');
    if (target) target.classList.add("active");
    buildSubcategoryChips();
    updateFilterVisibility();
    renderCalendar();
    renderEventsList();
  });
}

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


