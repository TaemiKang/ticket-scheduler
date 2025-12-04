function loadEvents() {
  const list = document.getElementById("eventList");
  let events = JSON.parse(localStorage.getItem("tikit-events")) || [];

  const selectedAgency = document.getElementById("agencyFilter").value;

  if (selectedAgency !== "all") {
    events = events.filter(ev => ev.agency === selectedAgency);
  }

  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  list.innerHTML = "";

  events.forEach((ev, index) => {
    const li = document.createElement("li");
    li.className = "event-item";

    li.innerHTML = `
      <div class="info-box">
        <strong>${ev.title}</strong> (${ev.agency})<br>
        <span>오픈: ${ev.date}</span><br>
        <a href="${ev.link}" target="_blank">예매처 이동</a>
      </div>
      <button class="delete-btn" onclick="deleteEvent(${index})">삭제</button>
    `;

    list.appendChild(li);
  });
}

function addEvent() {
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const link = document.getElementById("link").value;
  const agency = document.getElementById("agency").value;

  if (!title || !date || !link) {
    alert("모든 항목을 입력해주세요!");
    return;
  }

  const events = JSON.parse(localStorage.getItem("tikit-events")) || [];
  events.push({ title, date, link, agency });

  localStorage.setItem("tikit-events", JSON.stringify(events));
  alert("등록 완료!");
  loadEvents();
}

function deleteEvent(index) {
  const events = JSON.parse(localStorage.getItem("tikit-events")) || [];
  events.splice(index, 1);
  localStorage.setItem("tikit-events", JSON.stringify(events));
  loadEvents();
}

function filterByAgency() {
  loadEvents();
}

window.onload = loadEvents;
