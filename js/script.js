// script.js
document.addEventListener("mousemove", (e) => {
  let mouseX = e.pageX + 10; // document의 x좌표값
  let mouseY = e.pageY + 10; // document의 y좌표값

  let cursor = document.querySelector(".cursor");
  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});
let isScrolling = false;
const viewportHeight = window.innerHeight;

function scrollToPage(pageIndex) {
  window.scrollTo({
    top: pageIndex * viewportHeight,
    behavior: "smooth",
  });
}

function handleScroll() {
  const scrollTop = window.scrollY;
  const currentPage = Math.round(scrollTop / viewportHeight);

  if (currentPage < 0) return; // negative page index 방지
  if (currentPage > document.querySelectorAll(".page").length - 1) return; // 페이지 범위 체크
  scrollToPage(currentPage);
}

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      handleScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

// 처음 로드 시 첫 페이지로 이동
window.addEventListener("load", () => {
  scrollToPage(0);
});

// script.js

const page2 = document.getElementById("page2");
let isDragging = false;
let startX;
let scrollLeft;

page2.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - page2.offsetLeft;
  scrollLeft = page2.scrollLeft;
});

page2.addEventListener("mouseleave", () => {
  isDragging = false;
});

page2.addEventListener("mouseup", () => {
  isDragging = false;
});

page2.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.pageX - page2.offsetLeft;
  const walk = (x - startX) * 2; // 2는 스크롤 속도 조정 값
  page2.scrollLeft = scrollLeft - walk;
});

document.addEventListener("DOMContentLoaded", () => {
  let scrollTimeout;
  const sections = document.querySelectorAll(".page");
  let currentSection = 0;

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: "smooth" });
      currentSection = index;
    }
  };

  const handleScroll = (event) => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (event.deltaY > 0) {
        // Scrolling down
        scrollToSection(currentSection + 1);
      } else {
        // Scrolling up
        scrollToSection(currentSection - 1);
      }
    }, 150); // Debounce time
  };

  window.addEventListener("wheel", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  // 페이지 5를 확인하는 조건 (예: 특정 URL 또는 페이지 내용에 따라)
  if (window.location.pathname === "/page5") {
    // 로고 색상 변경
    const logoLink = document.querySelector(".logo a");
    if (logoLink) {
      logoLink.style.color = "#fff";
    }
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const graphic1 = document.querySelector('.graphic1');
  const sections = document.querySelectorAll('section');
  
  function scrollToNextSection() {
    const scrollLeft = graphic1.scrollLeft;
    const sectionWidth = graphic1.scrollWidth / sections.length;
    let nextSectionIndex = Math.floor(scrollLeft / sectionWidth) + 1;

    if (nextSectionIndex < sections.length) {
      sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  }

  // graphic1.addEventListener('scroll', function() {
  //   if (graphic1.scrollLeft + graphic1.clientWidth >= graphic1.scrollWidth) {
  //     scrollToNextSection();
  //   }
  // });
});
