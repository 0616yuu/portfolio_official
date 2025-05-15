// ハンバーガーメニュー
document.addEventListener("DOMContentLoaded", function () {
  const btnGNav = document.querySelector("#header_top .btn-gNav");
  const modalClass = document.querySelector(".modal_class");
  const links = document.querySelectorAll(".modal_class a");

  btnGNav.addEventListener("click", function () {
    btnGNav.classList.toggle("open");
    modalClass.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", function () {
      btnGNav.classList.remove("open");
      modalClass.classList.remove("open");
    });
  });
});

// slickスライダーの初期化
$(document).ready(function () {
  $(".slick").slick({
    arrows: true,
    appendArrows: $(".arrow_box"),
    prevArrow: '<div class="slide-arrow prev-arrow"></div>',
    nextArrow: '<div class="slide-arrow next-arrow"></div>',
  });
});

// モーダルウィンドウを開く
function openModal(modalId, audioId) {
  console.log("openModal called with modalId:", modalId); // デバッグ用のログ

  // すべての音楽を停止
  var audios = document.querySelectorAll("audio");
  audios.forEach(function (audio) {
    audio.pause();
    audio.currentTime = 0; // 再生位置をリセット
  });

  // 音楽を再生
  var audio = document.getElementById(audioId);
  if (audio) {
    audio.play().catch(function (error) {
      console.error("Error playing audio:", error);
    });
  }

  // モーダルを表示
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// モーダルウィンドウを閉じる
function closeModal(modalId) {
  console.log("closeModal called with modalId:", modalId); // デバッグ用のログ

  // モーダルを非表示にする
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }

  // 音楽を停止する
  var audios = document.querySelectorAll("audio");
  audios.forEach(function (audio) {
    audio.pause();
    audio.currentTime = 0;
  });
}

// モーダルウィンドウの外側をクリックすると閉じる機能
window.onclick = function (event) {
  var modals = document.querySelectorAll(".modal");
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";

      // 音楽を停止する
      var audios = document.querySelectorAll("audio");
      audios.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
      });
    }
  });
};



// logoの表示
$(window).on("load", function () {
  $("#splash").delay(1000).fadeOut("slow");
  $("#splash_logo").delay(1000).fadeOut("slow");
});


//同じ日付で2回目以降ならローディング画面非表示の設定

// var splash_text = $.cookie('accessdate'); //キーが入っていれば年月日を取得
// var myD = new Date();//日付データを取得
// var myYear = String(myD.getFullYear());//年
// var myMonth = String(myD.getMonth() + 1);//月
// var myDate = String(myD.getDate());//日
    
// if (splash_text != myYear + myMonth + myDate) {//cookieデータとアクセスした日付を比較↓
//         $("#splash").css("display", "block");//１回目はローディングを表示
//         setTimeout(function () {
//             $("#splash_logo").fadeIn(1000, function () {//1000ミリ秒（1秒）かけてロゴがフェードイン
//                 setTimeout(function () {
//             $("#splash_logo").fadeOut(1000);//1000ミリ秒（1秒）かけてロゴがフェードアウト
//                 }, 1000);//1000ミリ秒（1秒）後に処理を実行
//         setTimeout(function () {
//             $("#splash").fadeOut(1000, function () {//1000ミリ秒（1秒）かけて画面がフェードアウト
//             var myD = new Date();
//             var myYear = String(myD.getFullYear());
//             var myMonth = String(myD.getMonth() + 1);
//             var myDate = String(myD.getDate());
//             $.cookie('accessdate', myYear + myMonth + myDate); //accessdateキーで年月日を記録
//         });
//         }, 1700);//1700ミリ秒（1.7秒）後に処理を実行
//     });
// }, 1000);//1000ミリ秒（1秒）後に処理を実行
// }else {
//     $("#splash").css("display", "none");//同日2回目のアクセスでローディング画面非表示
// }  