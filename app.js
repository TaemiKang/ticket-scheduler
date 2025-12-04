// === 예시 데이터 (나중에 실제 티켓팅 사이트 & 공연으로 바꾸면 됨) ===
const eventsData = [
  {
    id: "1",
    title: "ABC 페스티벌 2025",
    category: "콘서트",
    agency: "ABC 엔터",
    artist: "ABC ALL",
    site: "인터파크 티켓",
    siteUrl: "https://ticket.interpark.com",
    openAt: "2025-12-10T20:00:00",
    showAt: "2026-02-01T18:00:00",
    note: "1인 4매 한정 / 선예매 19:00",
  },
  {
    id: "2",
    title: "뮤지컬 〈별의 노래〉",
    category: "뮤지컬/연극",
    agency: "스타뮤지컬컴퍼니",
    artist: "전 캐스트",
    site: "멜론티켓",
    siteUrl: "https://ticket.melon.com",
    openAt: "2025-12-08T14:00:00",
    showAt: "2026-01-10T15:00:00",
    note: "VIP 예매 시 사인 포스터 증정",
  },
  {
    id: "3",
    title: "2026 시즌 홈 개막전",
    category: "스포츠",
    agency: "K리그 FC서울",
    artist: "FC서울",
    site: "티켓링크",
    siteUrl: "https://www.ticketlink.co.kr",
    openAt: "2025-12-20T11:00:00",
    showAt: "2026-03-02T14:00:00",
    note: "시즌권 선예매 1일 전 오픈",
  },
  {
    id: "4",
    title: "신년 클래식 갈라",
    category: "클래식",
    agency: "서울시립교향악단",
    artist: "서울시향",
    site: "예스24 티켓",
    siteUrl: "https://ticket.yes24.com",
    openAt: "2025-12-05T10:00:00",
    showAt: "2026-01-01T19:30:00",
    note: "학생 할인 30%",
  },
  {
    id: "5",
    title: "XYZ WORLD TOUR in SEOUL",
    category: "콘서트",
    agency: "XYZ 엔터테인먼트",
    artist: "XYZ",
    site: "위메프 티켓",
    siteUrl: "https://ticket.wemakeprice.com",
    openAt: "2025-12-15T20:00:00",
    showAt: "2026-04-05T18:00:00",
    note: "팬클럽 선예매 12/14 20:00",
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
  const lastDayOfMonth = new Date(year, month + 1, 0);

  currentMonthEl.textContent = `${year}년 ${month + 1}월`;

  // 달력 그리기에 필요한 시작일(해당 달의 첫째 주 일요일) 계산
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
    eventsTitleEl.textContent = "전체 일정";
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
