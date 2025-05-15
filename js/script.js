// message送信機能：テキスト入力して、その後真下にメッセージ追加
const form = document.getElementById("messageForm");
const messageList = document.createElement("ul");

form.after(messageList); //フォームにすぐ下に表示エリアを追加

form.addEventListener("submit", (e) => {
  e.preventDefault(); //ページリロード防止

  const name = form.name.value.trim();
  const message = form.message.value.trim();
  if (name && message) {
    const li = document.createElement("li");
    li.innerHTML = `名前：<strong>${name}</strong>メッセージ：<strong>${message}</strong>`;
    // ボタン作る
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<button>削除</button>`;
    deleteBtn.addEventListener("click", () => {
      li.remove(); // その li を削除！
    });

    li.appendChild(deleteBtn); // li にボタンを追加
    messageList.appendChild(li); // ul に li を追加
    form.reset();
  }
});

// ローディング画面
$(window).on("load", function () {
  $("#splash").delay(1000).fadeOut("slow");
  $("#splash_logo").delay(1000).fadeOut("slow");
});

// スクロールmain領域に入ったらフェードアウト
window.addEventListener("scroll", () => {
  const main = document.querySelector("main");
  const video = document.getElementById("bg-video");
  const mainTop = main.getBoundingClientRect().top;

  if (mainTop <= window.innerHeight / 2) {
    video.style.opacity = "0";
    video.style.transition = "opacity 0.5s";
  } else {
    video.style.opacity = "1";
  }
});

// ハンバーガーメニューのclickイベント
const btn = document.querySelector('.btn-gNav');
const nav = document.querySelector('.modal_nav');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('open');
});
