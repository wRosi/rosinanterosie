(() => {
  const cursor = document.getElementById("spiralCursor");
  if (!cursor) return;

  cursor.innerHTML = `
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M40 14 C26 14 18 23 18 33 C18 45 28 52 39 52 C51 52 56 42 56 35
             C56 25 48 21 41 24 C35 27 36 34 41 35 C46 36 50 32 48 28
             C46 24 41 24 38 26"/>
    <path d="M48 10 L40 14 L46 22"/>
  </svg>`;

  // 跟随鼠标（无条件）
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  const clickableSel = "a, button, img, [role='button'], [data-view], .side-name, .side-links a";

  document.addEventListener("pointerover", (e) => {
    if (e.target.closest(clickableSel)) document.body.classList.add("cursor-active");
  });

  document.addEventListener("pointerout", (e) => {
    // 如果离开后鼠标不在任何可点击元素上，就关闭
    const toEl = e.relatedTarget;
    if (!toEl || !toEl.closest || !toEl.closest(clickableSel)) {
      document.body.classList.remove("cursor-active");
    }
  });
})();