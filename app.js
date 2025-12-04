// === 예시 데이터 (나중에 실제 티켓팅 일정으로 교체 가능) ===
const eventsData = [
  // ===== JYP 소속 아티스트 =====
  {
    id: "1",
    title: "DAY6 콘서트 (예시)",
    category: "콘서트",
    agency: "JYP",
    artist: "데이식스(DAY6)",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com/Special/55971",
    openAt: "2025-12-10T20:00:00",
    showAt: "2026-01-15T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },
  {
    id: "2",
    title: "Xdinary Heroes 콘서트 (예시)",
    category: "콘서트",
    agency: "JYP",
    artist: "엑스디너리 히어로즈(Xdinary Heroes)",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/csoon/detail.htm?csoonId=11386",
    openAt: "2025-12-12T20:00:00",
    showAt: "2026-02-01T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },
  {
    id: "3",
    title: "KickFlip 콘서트 (예시)",
    category: "콘서트",
    agency: "JYP",
    artist: "킥플립 (KickFlip)",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25017536",
    openAt: "2025-12-14T20:00:00",
    showAt: "2026-02-10T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },

  // ===== SM 소속 아티스트 =====
  {
    id: "4",
    title: "EXO 콘서트 (예시)",
    category: "콘서트",
    agency: "SM",
    artist: "엑소(EXO)",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com/performance/index.htm?prodId=212218",
    openAt: "2025-12-16T20:00:00",
    showAt: "2026-03-01T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },

  // ===== 개별 아티스트 검색 =====
  {
    id: "5",
    title: "임영웅 콘서트 (예시)",
    category: "콘서트",
    agency: "물고기뮤직",
    artist: "임영웅",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25017491",
    openAt: "2025-12-18T20:00:00",
    showAt: "2026-03-10T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },
  {
    id: "6",
    title: "AHOF 1st FAN-CON",
    category: "콘서트",
    agency: "AHOF",
    artist: "아홉",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/product/60307",
    openAt: "2025-12-20T20:00:00",
    showAt: "2026-03-20T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },
  {
    id: "7",
    title: "god 콘서트 (예시)",
    category: "콘서트",
    agency: "JYP",
    artist: "지오디(god)",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/product/58697",
    openAt: "2025-12-22T20:00:00",
    showAt: "2026-03-25T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },
  {
    id: "8",
    title: "잔나비 콘서트 (예시)",
    category: "콘서트",
    agency: "페포니뮤직",
    artist: "잔나비",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/product/60145",
    openAt: "2025-12-24T20:00:00",
    showAt: "2026-04-01T18:00:00",
    note: "실제 일정에 맞게 날짜/시간 수정 필요",
  },

  // ===== 뮤지컬 / 연극 =====
  {
    id: "9",
    title: "뮤지컬 〈한복 입은 남자〉",
    category: "뮤지컬/연극",
    agency: "인터파크 뮤지컬",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/contents/notice/detail/11949",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-05T19:30:00",
    note: "",
  },
  {
    id: "10",
    title: "뮤지컬 〈킹키부츠〉",
    category: "뮤지컬/연극",
    agency: "킹키부츠 제작사",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25014553",
    openAt: "2025-12-07T10:00:00",
    showAt: "2026-01-20T19:30:00",
    note: "",
  },
  {
    id: "11",
    title: "[라이프 오브 파이] 한국 초연 (Life of Pi)",
    category: "뮤지컬/연극",
    agency: "Life of Pi 제작사",
    artist: "전 캐스트",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/63",
    openAt: "2025-12-09T10:00:00",
    showAt: "2026-02-10T19:30:00",
    note: "",
  },
  {
    id: "12",
    title: "뮤지컬 데스노트(The Musical Death Note)",
    category: "뮤지컬/연극",
    agency: "데스노트 제작사",
    artist: "전 캐스트",
    site: "인터파크 티켓",
    siteUrl: "https://tickets.interpark.com/goods/25012652",
    openAt: "2025-12-11T10:00:00",
    showAt: "2026-02-20T19:30:00",
    note: "",
  },

  // ===== 스포츠 (야구 구단) =====
  {
    id: "13",
    title: "KIA 타이거즈 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "KIA 타이거즈",
    artist: "KIA 타이거즈",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/58",
    openAt: "2026-02-20T11:00:00",
    showAt: "2026-03-30T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "14",
    title: "삼성 라이온즈 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "삼성 라이온즈",
    artist: "삼성 라이온즈",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/57",
    openAt: "2026-02-21T11:00:00",
    showAt: "2026-03-31T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "15",
    title: "LG 트윈스 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "LG 트윈스",
    artist: "LG 트윈스",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/59",
    openAt: "2026-02-22T11:00:00",
    showAt: "2026-04-01T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "16",
    title: "kt wiz 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "kt wiz",
    artist: "kt wiz",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/62",
    openAt: "2026-02-23T11:00:00",
    showAt: "2026-04-02T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "17",
    title: "SSG 랜더스 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "SSG 랜더스",
    artist: "SSG 랜더스",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/476",
    openAt: "2026-02-24T11:00:00",
    showAt: "2026-04-03T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "18",
    title: "한화 이글스 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "한화 이글스",
    artist: "한화 이글스",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr/sports/137/63",
    openAt: "2026-02-25T11:00:00",
    showAt: "2026-04-04T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "19",
    title: "두산 베어스 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "두산 베어스",
    artist: "두산 베어스",
    site: "인터파크 티켓",
    siteUrl:
      "https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07001&TeamCode=PB004",
    openAt: "2026-02-26T11:00:00",
    showAt: "2026-04-05T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
  {
    id: "20",
    title: "키움 히어로즈 2026 시즌 홈 경기 (예시)",
    category: "스포츠",
    agency: "키움 히어로즈",
    artist: "키움 히어로즈",
    site: "인터파크 티켓",
    siteUrl:
      "https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07001&TeamCode=PB003",
    openAt: "2026-02-27T11:00:00",
    showAt: "2026-04-06T18:30:00",
    note: "정규 시즌 홈 경기 예매 페이지",
  },
];

// === 상태 ===
let currentView = "all"; // 'all' | 'my'
let currentMonth = new Date(); // 오늘이 포함된 달
let currentCategory = "all";
let currentAgency = "all";
let currentArtist = "all";
let myCalendar = loadMyCalendar();

// === DOM 요소 ===
const categoryChips = document.getElementById("category-chips");
const agencySelect = document.getElementById("agency-select");
const artistSelect = document.getElementById("artist-select");
const resetFiltersBtn = document.getElementById("reset-filters");
const enableNotiBtn = document.getElementById("enable-noti");

const navButtons = document.querySelectorAll(".nav-btn");
const calendarEl = document.getElementById("calendar");
const currentMonthEl = document.getElementById("current-month");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");
const eventsTitleEl = document.getElementById("events-title");
const eventsListEl = document.getElementById("events-list");

const modalBackdrop = document.getElementById("event-modal-backdrop");
const modalCloseBtn = document.getElementById("modal-close");
const modalContentEl = document.getElementById("modal-content");

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
    if (currentCategory !== "all" && ev.category !== currentCategory) return false;
    if (currentAgency !== "all" && ev.agency !== currentAgency) return false;
    if (currentArtist !== "all" && ev.artist !== currentArtist) return false;
    if (currentView === "my" && !isInMyCalendar(ev.id)) return false;
    return true;
  });
}

function buildAgencyAndArtistOptions() {
  const agencies = new Set();
  const artistsByAgency = {};

  eventsData.forEach((ev) => {
    agencies.add(ev.agency);
    if (!artistsByAgency[ev.agency]) artistsByAgency[ev.agency] = new Set();
    artistsByAgency[ev.agency].add(ev.artist);
  });

  // 기획사 옵션
  agencySelect.innerHTML = '<option value="all">전체 기획사</option>';
  [...agencies]
    .sort()
    .forEach((agency) => {
      const opt = document.createElement("option");
      opt.value = agency;
      opt.textContent = agency;
      agencySelect.appendChild(opt);
    });

  // 아티스트 옵션 (현재 선택된 기획사 기준)
  buildArtistOptions(artistsByAgency);
}

function buildArtistOptions(artistsByAgency) {
  artistSelect.innerHTML = '<option value="all">전체 아티스트</option>';

  if (currentAgency === "all") {
    // 전체 기획사일 때는 전체 아티스트를 묶어서 보여줌
    const allArtists = new Set();
    Object.values(artistsByAgency).forEach((set) => {
      set.forEach((a) => allArtists.add(a));
    });

    [...allArtists]
      .sort()
      .forEach((artist) => {
        const opt = document.createElement("option");
        opt.value = artist;
        opt.textContent = artist;
        artistSelect.appendChild(opt);
      });
  } else {
    const artists = artistsByAgency[currentAgency] || new Set();
    [...artists]
      .sort()
      .forEach((artist) => {
        const opt = document.createElement("option");
        opt.value = artist;
        opt.textContent = artist;
        artistSelect.appendChild(opt);
      });
  }
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

  currentMonthEl.textContent = `${year}년 ${month + 1}월`;
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
    eventsTitleEl.textContent = "전체 일정";
  }

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "조건에 맞는 티켓팅 일정이 없습니다.";
    li.style.fontSize = "12px";
    li.style.color = "#a76a8a";
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
  renderCalendar();
  renderEventsList();
});

agencySelect.addEventListener("change", () => {
  currentAgency = agencySelect.value;
  currentArtist = "all";
  // 기획사 선택에 맞춰 아티스트 옵션 다시 구성
  const agencies = new Set();
  const artistsByAgency = {};
  eventsData.forEach((ev) => {
    agencies.add(ev.agency);
    if (!artistsByAgency[ev.agency]) artistsByAgency[ev.agency] = new Set();
    artistsByAgency[ev.agency].add(ev.artist);
  });
  buildArtistOptions(artistsByAgency);
  renderCalendar();
  renderEventsList();
});

artistSelect.addEventListener("change", () => {
  currentArtist = artistSelect.value;
  renderCalendar();
  renderEventsList();
});

resetFiltersBtn.addEventListener("click", () => {
  currentCategory = "all";
  currentAgency = "all";
  currentArtist = "all";
  categoryChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  categoryChips.querySelector('[data-category="all"]').classList.add("active");
  buildAgencyAndArtistOptions();
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
  buildAgencyAndArtistOptions();
  renderCalendar();
  renderEventsList();
}

document.addEventListener("DOMContentLoaded", init);
