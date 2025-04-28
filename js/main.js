const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function(){
  showSlider("next");
}
prevDom.onclick = function () {
  showSlider("prev");
}
let timeRunning = 1000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextDom.onclick();
  }, timeAutoNext);;
function showSlider(type){
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item ");
    
    if(type === "next") {
      listItemDom.appendChild(itemSlider[0]);
      thumbnailDom.appendChild(itemThumbnail[0]);
      carouselDom.classList.add("next");
    }
    else {
      let positionLastItem = itemSlider.length - 1;
      listItemDom.prepend(itemSlider[positionLastItem]);
      thumbnailDom.prepend(itemThumbnail[positionLastItem]);
      carouselDom.classList.add("prev")
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
      carouselDom.classList.remove("next");
      carouselDom.classList.remove("prev");
    }, timeRunning)
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.onclick();
  }, timeAutoNext);
  }

const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation(); 
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true);

    const scrollerInner = scoller.querrySelector('.scroller__inner');
    const scrollerContent = Array.from(scrolllerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hideen', true);
      scrollerInner.appendChild(duplicatedItem);
    });
});
}