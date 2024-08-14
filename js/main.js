const cursor = document.querySelector(".cursor");

// 커서 요소의 위치를 마우스 위치에 맞게 업데이트
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
