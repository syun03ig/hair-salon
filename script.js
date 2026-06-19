// メニューごとの詳細テキストと画像のパスを設定
const menuDetails = {
  "CUT": {
    text: "一人ひとりの骨格や髪質、生え癖を見極め、エッジの効いたストリートスタイルに仕上げます。ご自宅での再現性も抜群です。",
    image: "images/menu-cut.png" 
  },
  "BANG CUT": {
    text: "印象を大きく左右する前髪を、ミリ単位でこだわってカットします。メンテナンスや、ちょっとしたイメチェンに。",
    image: "images/menu-bang.png" 
  },
 "COLOR": {
    text: "髪へのダメージを最小限に抑えつつ、深みのあるクールな発色を叶えます。根元のリタッチカラーです。",
    image: "images/menu-color.png" 
  },
  "DESIGN COLOR": {
    text: "ハイブリーチ、バレイヤージュ、インナーカラーなど、周囲と差がつくトリッキーで鮮やかなデザインカラーを提案します。",
    image: "images/menu-design.png" 
  },
  "PERM": {
    text: "無造作なストリート感を演出するデザインパーマ。ツイストやスパイラルなど、強めの特殊パーマもご相談ください。",
    image: "images/menu-perm.jpg"
  },
  "DIGITAL PERM": {
    text: "コテで巻いたような立体的なカールが長持ちするパーマ。縮毛矯正がかかっている髪にも対応可能です。",
    image: "images/menu-digital-perm.jpg"
  },
  "TREATMENT": {
    text: "繰り返すブリーチやカラーで傷んだ髪を、芯から補修して芯のある強い髪へ。髪の質感を極限まで高めます。",
    image: "images/menu-treatment.jpg"
  },
  "HEAD SPA": {
    text: "頭皮のディープクレンジングと極上のマッサージ。日頃のストレスや頭皮のコリをほぐし、髪の土台を整えます。",
    image: "images/menu-spa.jpg"
  }
};

// 要素の取得
const modal = document.getElementById("menu-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image"); // 💡 追加したimgタグを取得
const closeBtn = document.getElementById("modal-close");
const body = document.body;

// すべてのメニュー項目にクリックイベントを設定
document.querySelectorAll(".menu-item").forEach(item => {
  item.style.cursor = "pointer";

  item.addEventListener("click", () => {
    const menuNameElement = item.querySelector(".menu-name");
    
    // smallタグを除外して純粋なメニュー名を取得
    let fullText = "";
    if (menuNameElement) {
      const clone = menuNameElement.cloneNode(true);
      const smallTag = clone.querySelector("small");
      if (smallTag) smallTag.remove();
      fullText = clone.textContent.trim();
    }

    // タイトルを設定
    modalTitle.textContent = fullText;

    // クリックされたメニューのデータを取得
    const currentMenu = menuDetails[fullText];

    if (currentMenu) {
      modalDesc.textContent = currentMenu.text;
      modalImage.src = currentMenu.image; // 💡 画像のパスを設定
      modalImage.alt = fullText + "のイメージ画像";
      modalImage.style.display = "block"; // 画像を表示する
    } else {
      modalDesc.textContent = "詳細はお問い合わせください。";
      modalImage.style.display = "none";  // データがない場合は画像を隠す
    }
    
    // モダールを表示してスクロールを固定
    modal.classList.add("is-show");
    body.style.overflow = "hidden";
  });
});

// モダールを閉じる処理
const closeModal = () => {
  modal.classList.remove("is-show");
  body.style.overflow = "";
};

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
