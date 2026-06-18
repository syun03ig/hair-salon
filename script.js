// メニューごとの詳細テキストを設定
const menuDetails = {
  "CUT": "一人ひとりの骨格や髪質、生え癖を見極め、エッジの効いたストリートスタイルに仕上げます。ご自宅での再現性も抜群です。",
  "BANG CUT": "印象を大きく左右する前髪を、ミリ単位でこだわってカットします。メンテナンスや、ちょっとしたイメチェンに。",
  "COLOR": "髪へのダメージを最小限に抑えつつ、深みのあるクールな発色を叶えます。根元のリタッチカラーです。",
  "DESIGN COLOR": "ハイブリーチ、バレイヤージュ、インナーカラーなど、周囲と差がつくトリッキーで鮮やかなデザインカラーを提案します。",
  "PERM": "無造作なストリート感を演出するデザインパーマ。ツイストやスパイラルなど、強めの特殊パーマもご相談ください。",
  "DIGITAL PERM": "コテで巻いたような立体的なカールが長持ちするパーマ。縮毛矯正がかかっている髪にも対応可能です。",
  "TREATMENT": "繰り返すブリーチやカラーで傷んだ髪を、芯から補修して芯のある強い髪へ。髪の質感を極限まで高めます。",
  "HEAD SPA": "頭皮のディープクレンジングと極上のマッサージ。日頃のストレスや頭皮のコリをほぐし、髪の土台を整えます。"
};

const modal = document.getElementById("menu-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const closeBtn = document.getElementById("modal-close");

// すべてのメニュー項目にクリックイベントを設定
document.querySelectorAll(".menu-item").forEach(item => {
  item.style.cursor = "pointer";

  item.addEventListener("click", () => {
    const fullText = item.querySelector(".menu-name").childNodes[0].textContent.trim();
    modalTitle.textContent = fullText;
    modalDesc.textContent = menuDetails[fullText] || "詳細はお問い合わせください。";
    modal.classList.add("is-show");
  });
});

// 閉じるボタンを押したら閉じる
closeBtn.addEventListener("click", () => {
  modal.classList.remove("is-show");
});

// 背景の黒い部分を押しても閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("is-show");
  }
});
