// ==========================================
// 1. トップページ用：スクロール連動フェードイン
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-el');
  
  // 💡 安全な書き方に変更：要素がある時だけセンサーを起動（サボらない！）
  if (fadeElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px', // 画面の下端より少し手前で早めに反応させる設定
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-show');
          observer.unobserve(entry.target); // 一度見えたら監視終了
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => {
      observer.observe(el);
    });
  }
});

// ==========================================
// 2. メニューページ用：ポップアップ（モダール）の設定
// ==========================================
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
    image: "images/menu-perm.png" 
  },
  "DIGITAL PERM": {
    text: "コテで巻いたような立体的なカールが長持ちするパーマ。縮毛矯正がかかっている髪にも対応可能です。",
    image: "images/menu-digital-perm.png"
  },
  "TREATMENT": {
    text: "繰り返すブリーチやカラーで傷んだ髪を、芯から補修して芯のある強い髪へ。髪の質感を極限まで高めます。",
    image: "images/menu-treatment.png"
  },
  "HEAD SPA": {
    text: "頭皮のディープクレンジングと極上のマッサージ。日頃のストレスや頭皮のコリをほぐし、髪の土台を整えます。",
    image: "images/menu-spa.png"
  }
};

const modal = document.getElementById("menu-modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeBtn = document.getElementById("modal-close");
const body = document.body;

// 💡 メニューページでのみ確実に実行する設定
if (modal) {
  document.querySelectorAll(".menu-item").forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      const menuNameElement = item.querySelector(".menu-name");
      let fullText = "";
      if (menuNameElement) {
        const clone = menuNameElement.cloneNode(true);
        const smallTag = clone.querySelector("small");
        if (smallTag) smallTag.remove();
        fullText = clone.textContent.trim();
      }

      modalTitle.textContent = fullText;
      const currentMenu = menuDetails[fullText];

      if (currentMenu) {
        modalDesc.textContent = currentMenu.text;
        modalImage.src = currentMenu.image;
        modalImage.alt = fullText + "のイメージ画像";
        modalImage.style.display = "block";
      } else {
        modalDesc.textContent = "詳細はお問い合わせください。";
        modalImage.style.display = "none";
      }
      
      modal.classList.add("is-show");
      body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("is-show");
    body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}
