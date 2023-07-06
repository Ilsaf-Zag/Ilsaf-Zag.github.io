window.addEventListener("load",()=>{const t=document.querySelector(".illustrations__wrapper");new Masonry(t,{itemSelector:".illustrations__block",gutter:5,fitWidth:!0});const e=new class{constructor(t){this.slider=document.createElement("div"),this.slider.classList.add(t)}addItem(t){this.slider.innerHTML="",this.addActions(),this.crossTrigger(),this.illustrationsImgs=Array.from(document.querySelectorAll(".illustrations__img")),this.count=this.illustrationsImgs.indexOf(t.target.querySelector(".illustrations__img"));let e,s,i=this.illustrationsImgs[0].src.slice(0,this.illustrationsImgs[0].src.indexOf("preview/"));for(let r=0;r<this.illustrationsImgs.length;r++)s=this.illustrationsImgs[r].src.slice(this.illustrationsImgs[0].src.indexOf("preview/")+7),r!=this.illustrationsImgs.indexOf(t.target.querySelector(".illustrations__img"))?(e=document.createElement("div"),r<this.count?e.classList.add("slider__item","emergence-left"):r>this.count&&e.classList.add("slider__item","emergence-right"),e.innerHTML=`\n\t\t\t\t\t\t<img src='${i}zoom${s}' alt="${this.illustrationsImgs[r].alt}"\n\t\t\t\t\t\tclass="slider__img">\n\t\t\t\t`):((e=document.createElement("div")).classList.add("slider__item","slider__item_active"),e.innerHTML=`\n\t\t\t\t\t\t<img src='${i}zoom${s}' alt="${this.illustrationsImgs[r].alt}"\n\t\t\t\t\t\tclass="slider__img">\n\t\t\t\t`,0==r?this.slider.querySelector(".slider__arrow-left").classList.add("arrow-hidden"):r==this.illustrationsImgs.length-1&&this.slider.querySelector(".slider__arrow-right").classList.add("arrow-hidden")),this.slider.append(e)}addCross(){this.cross=document.createElement("div"),this.cross.classList.add("slider__cross"),this.slider.append(this.cross)}crossTrigger(){this.cross.addEventListener("click",this.hideSlider.bind(this))}addArrows(){let t=document.createElement("div");t.classList.add("slider__arrows"),t.innerHTML='\n\t\t\t\t\t<svg data-swipe="left" alt="arrow" class="slider__arrow-left">\n\t\t\t\t\t\t<use xlink:href="images/svg/sprite.svg#pages--illustrations--icons--arrow_left"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<svg data-swipe="right" alt="arrow" class="slider__arrow-right">\n\t\t\t\t\t\t<use xlink:href="images/svg/sprite.svg#pages--illustrations--icons--arrow_right"></use>\n\t\t\t\t\t</svg>\n\t\t\t',this.slider.append(t)}addActions(){this.addCross(),this.addArrows(),this.swipeRightDelay=!0,this.swipeLeftDelay=!0,this.swipeRightTrigger(),this.swipeLeftTrigger()}showSlider(t){document.body.append(this.slider),this.addItem(t),function(t="overlay",...e){const s=document.createElement("div"),i=document.body;e.length?s.classList.add(t,...e):s.classList.add(t),i.append(s),i.style.overflow="hidden"}("overlay","overlay_blur")}hideSlider(){this.slider.remove(),function(t=".overlay"){document.querySelector(t).remove(),document.body.style.overflow=""}()}swipeRight(){if(this.count<this.illustrationsImgs.length-1&&this.swipeRightDelay&&(setTimeout(()=>{this.swipeRightDelay=!0},250),this.swipeRightDelay)){let t=document.querySelector(".slider__item_active"),e=t.nextElementSibling;e.classList.remove("emergence-right"),e.classList.add("slider__item_active"),t.classList.remove("slider__item_active"),t.classList.add("emergence-left"),this.count++,this.count==this.illustrationsImgs.length-1?this.slider.querySelector(".slider__arrow-right").classList.add("arrow-hidden"):this.slider.querySelector(".arrow-hidden")&&this.slider.querySelector(".slider__arrow-left").classList.remove("arrow-hidden"),this.swipeRightDelay=!1}}swipeLeft(){if(this.count>0&&this.swipeLeftDelay&&(setTimeout(()=>{this.swipeLeftDelay=!0},250),this.swipeLeftDelay)){let t=document.querySelector(".slider__item_active"),e=t.previousElementSibling;e.classList.remove("emergence-left"),e.classList.add("slider__item_active"),t.classList.remove("slider__item_active"),t.classList.add("emergence-right"),this.count--,0==this.count?this.slider.querySelector(".slider__arrow-left").classList.add("arrow-hidden"):this.slider.querySelector(".arrow-hidden")&&this.slider.querySelector(".slider__arrow-right").classList.remove("arrow-hidden"),this.swipeLeftDelay=!1}}swipeRightTrigger(){this.slider.querySelector(".slider__arrow-right").addEventListener("click",()=>{this.swipeRight()})}swipeLeftTrigger(){this.slider.querySelector(".slider__arrow-left").addEventListener("click",()=>{this.swipeLeft()})}}("slider");t.addEventListener("click",t=>{t.target.classList.contains("illustrations__block")&&e.showSlider(t)}),document.addEventListener("keydown",t=>{"ArrowLeft"===t.code&&document.querySelector(".slider")?e.swipeLeft():"ArrowRight"===t.code&&document.querySelector(".slider")?e.swipeRight():"Escape"===t.code&&document.querySelector(".slider")&&e.hideSlider()});const s=document.documentElement.clientWidth/2;document.addEventListener("touchstart",t=>{document.querySelector(".slider")&&!t.target.classList.contains("slider__cross")&&(t.touches[0].clientX<=s?e.swipeLeft():e.swipeRight())})});