// ===== 設定 =====
// TODO: 本番公開前にどちらかを設定する
const FORM_ENDPOINT = "";   // 例: Formspree / Google Apps Script などの POST 先URL
const CONTACT_EMAIL = "";   // 例: info@example.jp（FORM_ENDPOINT 未設定時は mailto で送信）

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Header: スクロールで背景 =====
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== Mobile menu =====
const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");
function setMenu(open){
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  nav.classList.toggle("is-open", open);
  document.body.style.overflow = open ? "hidden" : "";
}
menuBtn.addEventListener("click", () => setMenu(menuBtn.getAttribute("aria-expanded") !== "true"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

// ===== Scroll reveal =====
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-in");
    io.unobserve(entry.target);
  });
}, { rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  io.observe(el);
});

// ===== Hero: 渡り鳥の群れ =====
function spawnFlock(){
  const flock = document.querySelector(".hero__flock");
  if (!flock || reduceMotion) return;
  const birdSvg = '<svg viewBox="0 0 40 24"><path d="M2 14 C10 4, 16 4, 20 12 C24 4, 30 4, 38 14 C30 9, 24 11, 20 18 C16 11, 10 9, 2 14 Z"/></svg>';
  const count = window.innerWidth < 700 ? 7 : 14;
  for (let i = 0; i < count; i++){
    const b = document.createElement("span");
    b.className = "bird";
    b.innerHTML = birdSvg;
    const y0 = 15 + Math.random() * 55;
    const scale = .6 + Math.random() * .9;
    b.style.setProperty("--x0", "-10vw");
    b.style.setProperty("--y0", `${y0}vh`);
    b.style.setProperty("--x1", "110vw");
    b.style.setProperty("--y1", `${y0 - 10 - Math.random() * 20}vh`);
    b.style.width = `${28 * scale}px`;
    b.style.height = `${16 * scale}px`;
    b.style.animationDuration = `${22 + Math.random() * 18}s`;
    b.style.animationDelay = `${-Math.random() * 40}s`;
    b.querySelector("svg").style.animationDelay = `${-Math.random()}s`;
    flock.appendChild(b);
  }
}
spawnFlock();

// ===== Contact form =====
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

form.addEventListener("submit", async e => {
  e.preventDefault();
  let firstInvalid = null;
  form.querySelectorAll("[required]").forEach(field => {
    const ok = field.checkValidity();
    field.setAttribute("aria-invalid", String(!ok));
    if (!ok && !firstInvalid) firstInvalid = field;
  });
  if (firstInvalid){
    note.textContent = "未入力または形式が正しくない項目があります。";
    firstInvalid.focus();
    return;
  }

  const data = Object.fromEntries(new FormData(form));

  if (FORM_ENDPOINT){
    note.textContent = "送信中…";
    try{
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      note.textContent = "送信しました。担当者より折り返しご連絡いたします。";
    } catch {
      note.textContent = "送信に失敗しました。時間をおいて再度お試しください。";
    }
    return;
  }

  if (CONTACT_EMAIL){
    const subject = `【お問い合わせ】${data.type}｜${data.name}`;
    const body = `お名前：${data.name}\n会社名：${data.company}\nメール：${data.email}\nご相談内容：${data.type}\n\n${data.message}`;
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  note.textContent = "（プレビュー版のため、送信先が未設定です）";
});

document.getElementById("year").textContent = new Date().getFullYear();
