// script.js
document.addEventListener('DOMContentLoaded', function () {
  const days = document.getElementById('days');

  // 우클릭 이벤트 핸들러
  days.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    showModal(e.clientX, e.clientY);
  });

  // 모달 닫기 이벤트 핸들러
  const modal = document.getElementById('modal');
  modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('close')) {
      closeModal();
    }
  });

  // 일정 추가 폼 제출 이벤트 핸들러
  const eventForm = document.getElementById('event-form');
  eventForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    addEvent(title, content);
    closeModal();
  });
});

// 모달 띄우기 함수
function showModal(x, y) {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  modal.style.left = x + 'px';
  modal.style.top = y + 'px';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// 일정 추가 함수 (간단히 console에 출력)
function addEvent(title, content) {
  console.log('제목:', title);
  console.log('내용:', content);
}
