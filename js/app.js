const IMAGES = {
  logo: "assets/logo.jpg",
  "camel-navy": "assets/products/camel-navy.jpg",
  "teal-olive": "assets/products/teal-olive.jpg",
  "pink-cream": "assets/products/pink-cream.jpg",
  "mint-navy": "assets/products/mint-navy.jpg",
  "black-olive": "assets/products/black-olive.jpg",
  "navy-brown": "assets/products/navy-brown.jpg",
  "maroon-white": "assets/products/maroon-white.jpg",
  "rust-black": "assets/products/rust-black.jpg",
  "orange-navy": "assets/products/orange-navy.jpg",
  "green-cream": "assets/products/green-cream.jpg",
  "taupe-navy": "assets/products/taupe-navy.jpg"
};
document.getElementById("logo-img").src = IMAGES.logo;

const SIZES = ["S", "M", "L", "XL", "XXL"];

/* ---------- Language ---------- */
let LANG = localStorage.getItem("ozel_lang") || "en";

const T = {
  en: {
    "nav.home": "Home", "nav.shop": "Shop", "nav.shirts": "Shirts", "nav.pants": "Pants", "nav.cart": "Cart",
    "hero.eyebrow": "Bahrain · Linen menswear",
    "hero.title": "Built<br>for the<br>Gulf heat.",
    "hero.lede": "Garment-washed linen shirts and drawstring pants, cut for warm days and made to move. Designed in Bahrain, for the region.",
    "hero.shopBtn": "Shop the collection",
    "hero.shirtsBtn": "Shirts",
    "hero.tag": "Rust — new colourway",
    "cat.title": "Shop by category", "cat.viewAll": "View everything",
    "cat.shirts": "Shirts", "cat.pants": "Pants", "cat.full": "Full collection",
    "arrivals.title": "New arrivals", "arrivals.viewAll": "View all",
    "story.title": "Quietly made.<br>Confidently worn.",
    "story.body": "Ozel Boutique works in linen and linen-cotton blends chosen for how they breathe — soft against the skin, structured enough to hold a clean line. Every piece is sized S through XXL and finished for daily wear across the Gulf.",
    "footer.tagline": "Linen menswear designed in Bahrain, made for the Gulf climate.",
    "footer.shop": "Shop", "footer.allProducts": "All products", "footer.support": "Support",
    "footer.sizeGuide": "Size guide", "footer.shippingReturns": "Shipping &amp; returns", "footer.contact": "Contact us",
    "footer.follow": "Follow", "footer.instagram": "Instagram", "footer.whatsapp": "WhatsApp",
    "footer.copyright": "© 2026 Ozel Boutique, Bahrain.", "footer.priceNote": "Prices in Bahraini Dinar (BD)",
    "shop.title": "Shop the collection", "shop.subtitle": "Linen shirts and pants, S–XXL.",
    "shop.category": "Category", "shop.allProducts": "All products", "shop.colour": "Colour",
    "shop.item": "item", "shop.items": "items",
    "pd.colour": "Colour", "pd.size": "Size", "pd.sizeGuide": "Size guide", "pd.quantity": "Quantity",
    "pd.addToCart": "Add to cart", "pd.added": "Added ✓", "pd.selectSize": "Please select a size.",
    "pd.fabricFit": "Fabric &amp; fit", "pd.care": "Care instructions", "pd.shipReturns": "Shipping &amp; returns",
    "pd.shipReturnsBody": "Delivered across Bahrain and the GCC. Free returns within 14 days, unworn and with tags attached.",
    "pd.related": "You may also like",
    "cart.title": "Your cart", "cart.empty": "Your cart is empty",
    "cart.emptyDesc": "Add a few linen pieces and they'll show up here.", "cart.continue": "Continue shopping",
    "cart.remove": "Remove", "cart.summary": "Order summary", "cart.subtotal": "Subtotal",
    "cart.shipping": "Shipping", "cart.total": "Total", "cart.checkout": "Checkout",
    "cart.deliveryPayment": "Delivery &amp; payment", "cart.firstName": "First name", "cart.lastName": "Last name",
    "cart.phone": "Phone number", "cart.address": "Address", "cart.city": "City", "cart.governorate": "Governorate",
    "cart.select": "Select", "cart.capital": "Capital", "cart.muharraq": "Muharraq", "cart.northern": "Northern",
    "cart.southern": "Southern", "cart.paymentMethod": "Payment method", "cart.card": "Credit / debit card",
    "cart.applepay": "Apple Pay", "cart.benefitpay": "Benefit Pay",
    "cart.placeOrder": "Send order via WhatsApp", "cart.note": "You'll be sent to WhatsApp to confirm your order and arrange payment (Card, Apple Pay or Benefit Pay).",
    "cart.prototypeAlert": "This is a design prototype — connect a real payment gateway (Benefit Pay / Tap / MyFatoorah) to process orders."
  },
  ar: {
    "nav.home": "الرئيسية", "nav.shop": "المتجر", "nav.shirts": "قمصان", "nav.pants": "بناطيل", "nav.cart": "السلة",
    "hero.eyebrow": "البحرين · ملابس رجالية كتانية",
    "hero.title": "صُنع لحرارة<br>الخليج.",
    "hero.lede": "قمصان وبناطيل كتانية مغسولة مسبقًا، مصممة للأيام الحارة وحرية الحركة. صُممت في البحرين، لأجل المنطقة.",
    "hero.shopBtn": "تسوّق المجموعة",
    "hero.shirtsBtn": "قمصان",
    "hero.tag": "صدئي — لون جديد",
    "cat.title": "تسوّق حسب الفئة", "cat.viewAll": "عرض الكل",
    "cat.shirts": "قمصان", "cat.pants": "بناطيل", "cat.full": "المجموعة الكاملة",
    "arrivals.title": "وصل حديثًا", "arrivals.viewAll": "عرض الكل",
    "story.title": "صُنع بهدوء.<br>يُلبس بثقة.",
    "story.body": "تعمل أوزيل بوتيك بأقمشة الكتان ومزيج الكتان والقطن المختارة لقدرتها على التهوية — ناعمة على البشرة، ومتماسكة بما يكفي لإطلالة أنيقة. كل قطعة متوفرة بمقاسات من S إلى XXL ومناسبة للارتداء اليومي في أجواء الخليج.",
    "footer.tagline": "ملابس رجالية كتانية مصممة في البحرين، لأجواء الخليج.",
    "footer.shop": "التسوّق", "footer.allProducts": "جميع المنتجات", "footer.support": "الدعم",
    "footer.sizeGuide": "دليل المقاسات", "footer.shippingReturns": "الشحن والإرجاع", "footer.contact": "تواصل معنا",
    "footer.follow": "تابعنا", "footer.instagram": "إنستغرام", "footer.whatsapp": "واتساب",
    "footer.copyright": "© 2026 أوزيل بوتيك، البحرين.", "footer.priceNote": "الأسعار بالدينار البحريني",
    "shop.title": "تسوّق المجموعة", "shop.subtitle": "قمصان وبناطيل كتانية، مقاسات S إلى XXL.",
    "shop.category": "الفئة", "shop.allProducts": "جميع المنتجات", "shop.colour": "اللون",
    "shop.item": "منتج", "shop.items": "منتجات",
    "pd.colour": "اللون", "pd.size": "المقاس", "pd.sizeGuide": "دليل المقاسات", "pd.quantity": "الكمية",
    "pd.addToCart": "أضف إلى السلة", "pd.added": "أُضيف ✓", "pd.selectSize": "الرجاء اختيار المقاس.",
    "pd.fabricFit": "القماش والمقاس", "pd.care": "تعليمات العناية", "pd.shipReturns": "الشحن والإرجاع",
    "pd.shipReturnsBody": "يتم التوصيل داخل البحرين ودول الخليج. إرجاع مجاني خلال 14 يومًا للقطع غير المستخدمة وبطاقاتها الأصلية.",
    "pd.related": "قد يعجبك أيضًا",
    "cart.title": "سلتك", "cart.empty": "سلتك فارغة",
    "cart.emptyDesc": "أضف بعض القطع الكتانية وستظهر هنا.", "cart.continue": "متابعة التسوق",
    "cart.remove": "إزالة", "cart.summary": "ملخص الطلب", "cart.subtotal": "المجموع الفرعي",
    "cart.shipping": "الشحن", "cart.total": "الإجمالي", "cart.checkout": "إتمام الشراء",
    "cart.deliveryPayment": "التوصيل والدفع", "cart.firstName": "الاسم الأول", "cart.lastName": "اسم العائلة",
    "cart.phone": "رقم الهاتف", "cart.address": "العنوان", "cart.city": "المدينة", "cart.governorate": "المحافظة",
    "cart.select": "اختر", "cart.capital": "العاصمة", "cart.muharraq": "المحرق", "cart.northern": "الشمالية",
    "cart.southern": "الجنوبية", "cart.paymentMethod": "طريقة الدفع", "cart.card": "بطاقة ائتمان / خصم",
    "cart.applepay": "آبل باي", "cart.benefitpay": "بنفت باي",
    "cart.placeOrder": "إرسال الطلب عبر واتساب", "cart.note": "سيتم تحويلك إلى واتساب لتأكيد طلبك وترتيب الدفع (بطاقة، آبل باي، أو بنفت باي).",
    "cart.prototypeAlert": "هذا نموذج تصميم أولي — يلزم ربط بوابة دفع حقيقية (بنفت باي / Tap / MyFatoorah) لمعالجة الطلبات فعليًا."
  }
};

function t(key) { return (T[LANG] && T[LANG][key]) || T.en[key] || key; }

let PRODUCTS = [];

async function loadProducts() {
  const res = await fetch("data/products.json");
  const data = await res.json();
  PRODUCTS = data.products.map(p => ({
    id: p.id,
    category: p.category,
    swatch: p.swatch,
    price: p.price,
    image: p.image,
    name: { en: p.name_en, ar: p.name_ar },
    color: { en: p.color_en, ar: p.color_ar },
    fabric: { en: p.fabric_en, ar: p.fabric_ar },
    care: { en: p.care_en, ar: p.care_ar }
  }));
}

function pName(p) { return p.name[LANG] || p.name.en; }
function pColor(p) { return p.color[LANG] || p.color.en; }
function pFabric(p) { return p.fabric[LANG] || p.fabric.en; }
function pCare(p) { return p.care[LANG] || p.care.en; }
function formatBD(n) { return LANG === "ar" ? n.toFixed(3) + " د.ب" : "BD " + n.toFixed(3); }
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function categoryLabel(cat) { return cat === "shirts" ? t("nav.shirts") : t("nav.pants"); }

/* ---------- Cart ---------- */
const CART_KEY = "ozel_cart";
function readCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e) { return []; } }
function writeCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); }
function addToCart(id, size, qty) {
  const cart = readCart();
  const existing = cart.find(l => l.id === id && l.size === size);
  if (existing) existing.qty += qty; else cart.push({ id, size, qty });
  writeCart(cart);
}
function removeFromCart(i) { const cart = readCart(); cart.splice(i,1); writeCart(cart); }
function updateCartQty(i, qty) { const cart = readCart(); if (!cart[i]) return; cart[i].qty = Math.max(1, qty); writeCart(cart); }
function cartCount() { return readCart().reduce((s,l) => s + l.qty, 0); }
function cartSubtotal() { return readCart().reduce((s,l) => { const p = getProduct(l.id); return p ? s + p.price*l.qty : s; }, 0); }
function updateCartCount() { document.querySelectorAll("[data-cart-count]").forEach(el => el.textContent = cartCount()); }

/* ---------- Product card partial ---------- */
function bridgeArtSVG() {
  return `<svg class="bridge-art" viewBox="0 0 600 750" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="var(--ice-pale)"/>
    </linearGradient>
    <filter id="cardShadow" x="-40%" y="-40%" width="180%" height="180%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0D0D0F" flood-opacity="0.22"/>
    </filter>
    <clipPath id="clipShirt"><rect x="150" y="285" width="130" height="180" rx="6"/></clipPath>
    <clipPath id="clipPants"><rect x="320" y="285" width="130" height="180" rx="6"/></clipPath>
  </defs>

  <rect x="0" y="0" width="600" height="750" fill="url(#skyGrad)"/>

  <!-- water -->
  <rect x="0" y="520" width="600" height="230" fill="var(--ice-pale)" opacity="0.35"/>
  <path d="M0,545 Q15.0,539 30,545 Q45.0,551 60,545 Q75.0,539 90,545 Q105.0,551 120,545 Q135.0,539 150,545 Q165.0,551 180,545 Q195.0,539 210,545 Q225.0,551 240,545 Q255.0,539 270,545 Q285.0,551 300,545 Q315.0,539 330,545 Q345.0,551 360,545 Q375.0,539 390,545 Q405.0,551 420,545 Q435.0,539 450,545 Q465.0,551 480,545 Q495.0,539 510,545 Q525.0,551 540,545 Q555.0,539 570,545 Q585.0,551 600,545" fill="none" stroke="var(--ice-deep)" stroke-width="2" opacity="0.22"/>
<path d="M0,565 Q15.0,559 30,565 Q45.0,571 60,565 Q75.0,559 90,565 Q105.0,571 120,565 Q135.0,559 150,565 Q165.0,571 180,565 Q195.0,559 210,565 Q225.0,571 240,565 Q255.0,559 270,565 Q285.0,571 300,565 Q315.0,559 330,565 Q345.0,571 360,565 Q375.0,559 390,565 Q405.0,571 420,565 Q435.0,559 450,565 Q465.0,571 480,565 Q495.0,559 510,565 Q525.0,571 540,565 Q555.0,559 570,565 Q585.0,571 600,565" fill="none" stroke="var(--ice-deep)" stroke-width="2" opacity="0.22"/>
<path d="M0,585 Q15.0,579 30,585 Q45.0,591 60,585 Q75.0,579 90,585 Q105.0,591 120,585 Q135.0,579 150,585 Q165.0,591 180,585 Q195.0,579 210,585 Q225.0,591 240,585 Q255.0,579 270,585 Q285.0,591 300,585 Q315.0,579 330,585 Q345.0,591 360,585 Q375.0,579 390,585 Q405.0,591 420,585 Q435.0,579 450,585 Q465.0,591 480,585 Q495.0,579 510,585 Q525.0,591 540,585 Q555.0,579 570,585 Q585.0,591 600,585" fill="none" stroke="var(--ice-deep)" stroke-width="2" opacity="0.22"/>
<path d="M0,605 Q15.0,599 30,605 Q45.0,611 60,605 Q75.0,599 90,605 Q105.0,611 120,605 Q135.0,599 150,605 Q165.0,611 180,605 Q195.0,599 210,605 Q225.0,611 240,605 Q255.0,599 270,605 Q285.0,611 300,605 Q315.0,599 330,605 Q345.0,611 360,605 Q375.0,599 390,605 Q405.0,611 420,605 Q435.0,599 450,605 Q465.0,611 480,605 Q495.0,599 510,605 Q525.0,611 540,605 Q555.0,599 570,605 Q585.0,611 600,605" fill="none" stroke="var(--ice-deep)" stroke-width="2" opacity="0.22"/>

  <!-- skyline silhouette -->
  <g fill="var(--ink)" opacity="0.09">
    <rect x="70" y="500" width="6" height="20"/>
    <circle cx="96" cy="502" r="16"/>
    <rect x="93" y="486" width="3" height="18"/>
    <rect x="120" y="505" width="6" height="15"/>
    <rect x="486" y="500" width="6" height="20"/>
    <circle cx="512" cy="502" r="16"/>
    <rect x="509" y="486" width="3" height="18"/>
    <rect x="460" y="505" width="6" height="15"/>
  </g>

  <!-- bridge -->
  <line x1="150" y1="120" x2="40" y2="520" stroke="var(--ink)" stroke-width="2.5" opacity="0.7"/>
  <line x1="450" y1="120" x2="560" y2="520" stroke="var(--ink)" stroke-width="2.5" opacity="0.7"/>
  <line x1="190" y1="232" x2="190" y2="520" stroke="var(--ink)" stroke-width="1.5" opacity="0.55"/>
<line x1="230" y1="268" x2="230" y2="520" stroke="var(--ink)" stroke-width="1.5" opacity="0.55"/>
<line x1="270" y1="292" x2="270" y2="520" stroke="var(--ink)" stroke-width="1.5" opacity="0.55"/>
<line x1="330" y1="292" x2="330" y2="520" stroke="var(--ink)" stroke-width="1.5" opacity="0.55"/>
<line x1="370" y1="268" x2="370" y2="520" stroke="var(--ink)" stroke-width="1.5" opacity="0.55"/>
<line x1="410" y1="232" x2="410" y2="520" stroke="var(--ink)" stroke-width="1.5" opacity="0.55"/>
  <path d="M150,140 C260,300 340,300 450,140" fill="none" stroke="var(--ink)" stroke-width="3.5" stroke-linecap="round"/>
  <line x1="40" y1="520" x2="560" y2="520" stroke="var(--ink)" stroke-width="5" stroke-linecap="round"/>
  <line x1="150" y1="118" x2="150" y2="522" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/>
  <line x1="450" y1="118" x2="450" y2="522" stroke="var(--ink)" stroke-width="7" stroke-linecap="round"/>

  <!-- garments hanging from the main cable, like laundry on a line -->
  <line x1="230" y1="268" x2="215" y2="285" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="230" cy="268" r="3.5" fill="var(--ink)"/>
  <g filter="url(#cardShadow)">
    <rect x="150" y="285" width="130" height="180" rx="6" fill="var(--cream-2)"/>
    <g clip-path="url(#clipShirt)">
      <image href="${IMAGES["rust-black"]}" x="150" y="285" width="130" height="180" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <rect x="150" y="285" width="130" height="180" rx="6" fill="none" stroke="var(--white)" stroke-width="3"/>
  </g>

  <line x1="370" y1="268" x2="385" y2="285" stroke="var(--ink)" stroke-width="2"/>
  <circle cx="370" cy="268" r="3.5" fill="var(--ink)"/>
  <g filter="url(#cardShadow)">
    <rect x="320" y="285" width="130" height="180" rx="6" fill="var(--cream-2)"/>
    <g clip-path="url(#clipPants)">
      <image href="${IMAGES["camel-navy"]}" x="320" y="215" width="130" height="320" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <rect x="320" y="285" width="130" height="180" rx="6" fill="none" stroke="var(--white)" stroke-width="3"/>
  </g>
</svg>`;
}

function productCard(p) {
  return `
    <a class="product-card" href="#/product?id=${p.id}">
      <div class="frame"><img src="${p.image}" alt="${pName(p)}" loading="lazy"></div>
      <div class="meta">
        <div>
          <div class="name">${pName(p)}</div>
          <div class="sub">${pColor(p)}</div>
        </div>
        <div class="price">${formatBD(p.price)}</div>
      </div>
    </a>
  `;
}

/* ---------- Views ---------- */
function heroTitleMarkup() {
  const lines = t("hero.title").split("<br>");
  return lines.map((line, i) =>
    `<span class="line-mask"><span class="line-inner" style="animation-delay:${(0.5 + i * 0.11).toFixed(2)}s">${line}</span></span>`
  ).join("");
}

function viewHome() {
  return `
    <section class="hero" style="padding:0;">
      <div class="wrap">
        <img class="hero-tiger" src="${IMAGES.logo}" alt="" aria-hidden="true" style="border-radius:50%;">
        <div class="hero-copy">
          <span class="eyebrow anim-in" style="animation-delay:0.1s">${t("hero.eyebrow")}</span>
          <h1 class="display-1 hero-title">${heroTitleMarkup()}</h1>
          <p class="lede anim-in" style="animation-delay:0.95s">${t("hero.lede")}</p>
          <div class="hero-actions anim-in" style="animation-delay:1.1s">
            <a href="#/shop" class="btn">${t("hero.shopBtn")}</a>
            <a href="#/shop?category=shirts" class="btn btn-outline">${t("hero.shirtsBtn")}</a>
          </div>
        </div>
        <div class="hero-image hero-image-reveal">
          ${bridgeArtSVG()}
          <img class="hero-image-tiger anim-in" style="animation-delay:1.3s" src="${IMAGES.logo}" alt="Ozel Boutique" aria-hidden="true">
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2 class="display-3">${t("cat.title")}</h2>
          <a href="#/shop" class="small" style="text-decoration:underline;">${t("cat.viewAll")}</a>
        </div>
        <div class="cat-strip">
          <a class="cat-tile" href="#/shop?category=shirts">
            <img src="${IMAGES["green-cream"]}" alt="Linen shirts">
            <span class="label">${t("cat.shirts")}</span>
          </a>
          <a class="cat-tile" href="#/shop?category=pants">
            <img src="${IMAGES["navy-brown"]}" alt="Linen pants">
            <span class="label">${t("cat.pants")}</span>
          </a>
          <a class="cat-tile" href="#/shop">
            <img src="${IMAGES["maroon-white"]}" alt="Full collection">
            <span class="label">${t("cat.full")}</span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="wrap">
        <div class="section-head">
          <h2 class="display-3">${t("arrivals.title")}</h2>
          <a href="#/shop" class="small" style="text-decoration:underline;">${t("arrivals.viewAll")}</a>
        </div>
        <div class="product-grid">${PRODUCTS.slice(0,6).map(productCard).join("")}</div>
      </div>
    </section>

    <section class="story">
      <div class="wrap">
        <div class="story-copy">
          <h2 class="display-2">${t("story.title")}</h2>
          <p class="lede" style="max-width:44ch;">${t("story.body")}</p>
        </div>
        <img src="${IMAGES["teal-olive"]}" alt="Ozel Boutique teal linen shirt detail">
      </div>
    </section>
  `;
}

function viewShop(qs) {
  const params = new URLSearchParams(qs);
  const initialCategory = params.get("category") || "all";
  const colorSeen = new Set();
  const colors = [];
  PRODUCTS.forEach(p => { if (!colorSeen.has(p.color.en)) { colorSeen.add(p.color.en); colors.push(p.color); } });
  return `
    <section style="padding-bottom:0;">
      <div class="wrap">
        <h1 class="display-2" style="margin-bottom:8px;">${t("shop.title")}</h1>
        <p class="muted">${t("shop.subtitle")}</p>
      </div>
    </section>
    <section>
      <div class="wrap">
        <div class="shop-layout">
          <aside class="filters">
            <h4>${t("shop.category")}</h4>
            <div class="filter-group" id="filter-category">
              <label class="filter-option"><input type="radio" name="cat" value="all" ${initialCategory==="all"?"checked":""}> ${t("shop.allProducts")}</label>
              <label class="filter-option"><input type="radio" name="cat" value="shirts" ${initialCategory==="shirts"?"checked":""}> ${t("nav.shirts")}</label>
              <label class="filter-option"><input type="radio" name="cat" value="pants" ${initialCategory==="pants"?"checked":""}> ${t("nav.pants")}</label>
            </div>
            <h4>${t("shop.colour")}</h4>
            <div class="filter-group" id="filter-color">
              ${colors.map(c => `<label class="filter-option"><input type="checkbox" name="color" value="${c.en}"> ${c[LANG]||c.en}</label>`).join("")}
            </div>
          </aside>
          <div>
            <div class="results-bar"><span id="results-count" class="muted"></span></div>
            <div class="product-grid" id="shop-grid"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function initShop() {
  function activeFilters() {
    const cat = document.querySelector('input[name="cat"]:checked').value;
    const colorsChecked = [...document.querySelectorAll('input[name="color"]:checked')].map(el => el.value);
    return { cat, colorsChecked };
  }
  function render() {
    const { cat, colorsChecked } = activeFilters();
    let items = PRODUCTS.filter(p => cat === "all" || p.category === cat);
    if (colorsChecked.length) items = items.filter(p => colorsChecked.includes(p.color.en));
    document.getElementById("results-count").textContent = `${items.length} ${items.length===1 ? t("shop.item") : t("shop.items")}`;
    document.getElementById("shop-grid").innerHTML = items.map(productCard).join("");
  }
  document.querySelectorAll('input[name="cat"], input[name="color"]').forEach(el => el.addEventListener("change", render));
  render();
}

function viewProduct(qs) {
  const params = new URLSearchParams(qs);
  const product = getProduct(params.get("id")) || PRODUCTS[0];
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0,3);
  return `
    <section>
      <div class="wrap">
        <div class="product-detail">
          <div class="gallery">
            <div class="gallery-main"><img src="${product.image}" alt="${pName(product)}"></div>
            <div class="gallery-thumbs"><button class="active"><img src="${product.image}" alt=""></button></div>
          </div>
          <div class="pd-info">
            <span class="pd-eyebrow">${categoryLabel(product.category)}</span>
            <h1 class="display-3 pd-title">${pName(product)}</h1>
            <span class="pd-price">${formatBD(product.price)}</span>
            <div class="option-row">
              <div class="label"><span>${t("pd.colour")}</span><span class="muted">${pColor(product)}</span></div>
              <div class="swatches"><button class="swatch active" style="background:${product.swatch}" aria-label="${pColor(product)}"></button></div>
            </div>
            <div class="option-row">
              <div class="label"><span>${t("pd.size")}</span><a href="#" class="small" style="text-decoration:underline;">${t("pd.sizeGuide")}</a></div>
              <div class="sizes" id="size-row">${SIZES.map(s => `<button class="size-btn" data-size="${s}">${s}</button>`).join("")}</div>
            </div>
            <div class="qty-row">
              <span class="label" style="margin:0;">${t("pd.quantity")}</span>
              <div class="qty-control">
                <button id="qty-dec">−</button><span id="qty-val">1</span><button id="qty-inc">+</button>
              </div>
            </div>
            <div class="pd-actions"><button class="btn btn-block" id="add-btn" data-id="${product.id}">${t("pd.addToCart")}</button></div>
            <div class="accordion">
              <details class="accordion-item" open><summary>${t("pd.fabricFit")}</summary><div class="body">${pFabric(product)}</div></details>
              <details class="accordion-item"><summary>${t("pd.care")}</summary><div class="body">${pCare(product)}</div></details>
              <details class="accordion-item"><summary>${t("pd.shipReturns")}</summary><div class="body">${t("pd.shipReturnsBody")}</div></details>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="padding-top:0;">
      <div class="wrap">
        <div class="section-head"><h2 class="display-3">${t("pd.related")}</h2></div>
        <div class="product-grid">${related.map(productCard).join("")}</div>
      </div>
    </section>
  `;
}

function initProduct(qs) {
  const params = new URLSearchParams(qs);
  const product = getProduct(params.get("id")) || PRODUCTS[0];
  let selectedSize = null, qty = 1;

  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedSize = btn.dataset.size;
    });
  });
  document.getElementById("qty-dec").addEventListener("click", () => { qty = Math.max(1, qty-1); document.getElementById("qty-val").textContent = qty; });
  document.getElementById("qty-inc").addEventListener("click", () => { qty += 1; document.getElementById("qty-val").textContent = qty; });
  document.getElementById("add-btn").addEventListener("click", () => {
    if (!selectedSize) { alert(t("pd.selectSize")); return; }
    addToCart(product.id, selectedSize, qty);
    const btn = document.getElementById("add-btn");
    const original = btn.textContent;
    btn.textContent = t("pd.added");
    setTimeout(() => { btn.textContent = original; }, 1400);
  });
}

function viewCart() {
  return `<section><div class="wrap">
    <h1 class="display-2" style="margin-bottom:40px;">${t("cart.title")}</h1>
    <div id="cart-body"></div>
  </div></section>`;
}

function initCart() {
  const SHIPPING = 1.500;
  function renderCart() {
    const cart = readCart();
    const body = document.getElementById("cart-body");
    if (!cart.length) {
      body.innerHTML = `
        <div class="empty-state">
          <h3 class="display-3">${t("cart.empty")}</h3>
          <p>${t("cart.emptyDesc")}</p>
          <a href="#/shop" class="btn">${t("cart.continue")}</a>
        </div>`;
      return;
    }
    const subtotal = cartSubtotal();
    const total = subtotal + SHIPPING;
    const linesHtml = cart.map((line, i) => {
      const p = getProduct(line.id);
      if (!p) return "";
      return `
        <div class="cart-line">
          <img src="${p.image}" alt="${pName(p)}">
          <div>
            <div class="name">${pName(p)}</div>
            <div class="opts">${t("pd.size")} ${line.size} · ${pColor(p)}</div>
            <button class="remove" data-remove="${i}">${t("cart.remove")}</button>
          </div>
          <div class="qty-control">
            <button data-dec="${i}">−</button><span>${line.qty}</span><button data-inc="${i}">+</button>
          </div>
          <div class="line-price">${formatBD(p.price*line.qty)}</div>
        </div>`;
    }).join("");

    body.innerHTML = `
      <div class="cart-layout">
        <div>${linesHtml}</div>
        <div class="summary-box">
          <h3 class="display-3" style="margin-bottom:20px; font-size:20px;">${t("cart.summary")}</h3>
          <div class="summary-row"><span>${t("cart.subtotal")}</span><span>${formatBD(subtotal)}</span></div>
          <div class="summary-row"><span>${t("cart.shipping")}</span><span>${formatBD(SHIPPING)}</span></div>
          <div class="summary-row total"><span>${t("cart.total")}</span><span>${formatBD(total)}</span></div>
          <button class="btn btn-block" id="checkout-btn" style="margin-top:20px;">${t("cart.checkout")}</button>
        </div>
      </div>
      <div id="checkout-panel" style="display:none; margin-top:64px; max-width:640px;">
        <h2 class="display-3" style="margin-bottom:28px;">${t("cart.deliveryPayment")}</h2>
        <form id="checkout-form">
          <div class="form-grid">
            <div class="field"><label>${t("cart.firstName")}</label><input name="firstName" required></div>
            <div class="field"><label>${t("cart.lastName")}</label><input name="lastName" required></div>
            <div class="field full"><label>${t("cart.phone")}</label><input name="phone" type="tel" required placeholder="+973"></div>
            <div class="field full"><label>${t("cart.address")}</label><input name="address" required></div>
            <div class="field"><label>${t("cart.city")}</label><input name="city" required></div>
            <div class="field">
              <label>${t("cart.governorate")}</label>
              <select name="governorate" required>
                <option value="">${t("cart.select")}</option>
                <option>${t("cart.capital")}</option><option>${t("cart.muharraq")}</option><option>${t("cart.northern")}</option><option>${t("cart.southern")}</option>
              </select>
            </div>
          </div>
          <h3 class="display-3" style="font-size:18px; margin:28px 0 16px;">${t("cart.paymentMethod")}</h3>
          <div class="pay-options">
            <label class="pay-option"><input type="radio" name="pay" value="card" checked> ${t("cart.card")}</label>
            <label class="pay-option"><input type="radio" name="pay" value="applepay"> ${t("cart.applepay")}</label>
            <label class="pay-option"><input type="radio" name="pay" value="benefitpay"> ${t("cart.benefitpay")}</label>
          </div>
          <button class="btn btn-block" type="submit">${t("cart.placeOrder")} — ${formatBD(total)}</button>
          <p class="small muted" style="margin-top:14px; text-align:center;">${t("cart.note")}</p>
        </form>
      </div>
    `;

    body.querySelectorAll("[data-remove]").forEach(btn => btn.addEventListener("click", () => { removeFromCart(+btn.dataset.remove); renderCart(); }));
    body.querySelectorAll("[data-inc]").forEach(btn => btn.addEventListener("click", () => { const i = +btn.dataset.inc; updateCartQty(i, readCart()[i].qty+1); renderCart(); }));
    body.querySelectorAll("[data-dec]").forEach(btn => btn.addEventListener("click", () => { const i = +btn.dataset.dec; updateCartQty(i, readCart()[i].qty-1); renderCart(); }));
    document.getElementById("checkout-btn").addEventListener("click", () => {
      document.getElementById("checkout-panel").style.display = "block";
      document.getElementById("checkout-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    document.getElementById("checkout-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const fd = new FormData(form);
      const payLabel = { card: t("cart.card"), applepay: t("cart.applepay"), benefitpay: t("cart.benefitpay") }[fd.get("pay")];

      const itemLines = cart.map(line => {
        const p = getProduct(line.id);
        if (!p) return "";
        return `- ${pName(p)} (${t("pd.size")} ${line.size}) x${line.qty} — ${formatBD(p.price * line.qty)}`;
      }).join("\n");

      const message = [
        "*Ozel Boutique — New Order*",
        "",
        `${t("cart.firstName")}: ${fd.get("firstName")} ${fd.get("lastName")}`,
        `${t("cart.phone")}: ${fd.get("phone")}`,
        `${t("cart.address")}: ${fd.get("address")}, ${fd.get("city")}, ${fd.get("governorate")}`,
        "",
        itemLines,
        "",
        `${t("cart.subtotal")}: ${formatBD(subtotal)}`,
        `${t("cart.shipping")}: ${formatBD(SHIPPING)}`,
        `${t("cart.total")}: ${formatBD(total)}`,
        "",
        `${t("cart.paymentMethod")}: ${payLabel}`
      ].join("\n");

      const whatsappNumber = "97336655772";
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    });
  }
  renderCart();
}

/* ---------- Router ---------- */
function router() {
  const hash = location.hash.slice(1) || "/";
  const [path, qs] = hash.split("?");
  const app = document.getElementById("app");
  window.scrollTo(0, 0);

  teardownHeroParallax();
  document.querySelectorAll(".main-nav a").forEach(a => a.classList.remove("active"));

  if (path === "/" ) {
    app.innerHTML = viewHome();
    document.querySelector('.main-nav a[data-nav="home"]').classList.add("active");
    initHeroParallax();
  } else if (path === "/shop") {
    app.innerHTML = viewShop(qs);
    document.querySelector('.main-nav a[data-nav="shop"]').classList.add("active");
    initShop();
  } else if (path === "/product") {
    app.innerHTML = viewProduct(qs);
    initProduct(qs);
  } else if (path === "/cart") {
    app.innerHTML = viewCart();
    initCart();
  } else {
    app.innerHTML = viewHome();
    initHeroParallax();
  }
  updateCartCount();
}

/* ---------- Language switching ---------- */
function applyLangChrome() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-t]").forEach(el => { el.innerHTML = t(el.dataset.t); });
  document.querySelectorAll("#lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === LANG);
  });
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem("ozel_lang", lang);
  applyLangChrome();
  router();
}

document.getElementById("lang-toggle").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-lang]");
  if (btn) setLang(btn.dataset.lang);
});

window.addEventListener("hashchange", router);

/* ---------- Header scroll shrink ---------- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Tiger watermark scroll parallax ---------- */
let heroParallaxHandler = null;
function teardownHeroParallax() {
  if (heroParallaxHandler) {
    window.removeEventListener("scroll", heroParallaxHandler);
    heroParallaxHandler = null;
  }
}
function initHeroParallax() {
  const el = document.querySelector(".hero-tiger");
  if (!el) return;
  const startParallax = () => {
    el.style.animation = "none";
    const update = () => {
      const offset = window.scrollY * 0.15;
      el.style.transform = `translateY(calc(-50% + ${offset}px)) scale(1)`;
    };
    update();
    heroParallaxHandler = update;
    window.addEventListener("scroll", heroParallaxHandler, { passive: true });
  };
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) { startParallax(); return; }
  el.addEventListener("animationend", startParallax, { once: true });
}

document.addEventListener("DOMContentLoaded", async () => {
  applyLangChrome();
  await loadProducts();
  router();
  updateCartCount();
  initHeaderScroll();
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.style.display === "flex";
      nav.style.display = open ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "84px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background = "var(--cream)";
      nav.style.padding = "20px 24px";
      nav.style.borderBottom = "1px solid var(--line)";
      nav.style.gap = "18px";
      nav.style.zIndex = "60";
    });
  }
});
