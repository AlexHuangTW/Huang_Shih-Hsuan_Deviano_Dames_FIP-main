document.addEventListener("DOMContentLoaded", function () {
    const productImages = {
      lager: "images/beer-lager_dgpp25_c_scale,w_3300.png",
      ale: "images/beer-stout_m85boz_c_scale,w_3300.png",
      stout: "images/beer-ale_zxysmg_c_scale,w_3300.png",
      wheat: "images/beer-wheat_olkgdv_c_scale,w_3300.png"
    };
  
    const productInfos = {
      lager: `
        <h2 class="center-text">Billy's Premium Lager</h2>
        <div class="center-text">
            <span>A smooth and clean taste inherited from Billy’s Premium Lager.</span>
        </div>
      `,
      ale: `
        <h2 class="center-text">Billy's Premium Ale</h2>
        <div class="center-text">
            <span>A rich and full-bodied taste inherited from Billy’s Premium Ale.</span>
        </div>
      `,
      stout: `
        <h2 class="center-text">Billy's Premium Stout</h2>
        <div class="center-text">
            <span>A dark and intense taste inherited from Billy’s Premium Stout.</span>
        </div>
      `,
      wheat: `
        <h2 class="center-text">Billy's Premium Wheat</h2>
        <div class="center-text">
            <span>A light and refreshing taste inherited from Billy’s Premium Wheat.</span>
        </div>
      `
    };
  
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxInfo = document.getElementById("lightbox-info");
    const closeBtn = document.querySelector(".close");
  
    function showLightbox(event, imageSrc, info) {
      event.preventDefault();
  
      lightboxImg.src = imageSrc;
      lightboxInfo.innerHTML = info;
  
      lightbox.style.display = "block";
    }
  
    function closeLightbox() {
      lightbox.style.display = "none";
    }
  
    const productIds = ["product-lager", "product-ale", "product-stout", "product-wheat"];
    productIds.forEach((id) => {
      const product = document.getElementById(id);
      const img = product.querySelector(".product-image a");
      const btn = product.querySelector(".lightbox-btn");

      const productId = id.split("-")[1]; // get product ID（for example：lager, ale, stout, wheat）
  
      // set events for images and button, then, it will shows information
      img.addEventListener("click", (event) => {
        showLightbox(event, productImages[productId], productInfos[productId]);
      });
  
      btn.addEventListener("click", (event) => {
        showLightbox(event, productImages[productId], productInfos[productId]);
      });
    });
  
    closeBtn.addEventListener("click", closeLightbox);
  
    // close lightbox
    window.onclick = function (event) {
      if (event.target == lightbox) {
        closeLightbox();
      }
    };
  });
  

    
  