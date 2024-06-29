// ----------Scramble------------
$(document).ready(function () {
    // ELEMENTS
    var $scramble = $(".scramble");
  
    $scramble.scramble(3000, 20, "alphabet", true);
  });
  
  // ----------scrambleEnd--------------
  


  
  var tl = gsap.timeline();
  tl.to(".Loading", {
    opacity: 0,
    delay: 2.5,
  })
    .to(".loader", {
      // y: "-100%",
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    })
    .to(
      ".loader",
      {
        y: "-100%",
        // opacity:0,
        duration: 1,
        // ease: "Expo.easeInOut"
      },
      "up"
    )
    .to(
      ".svgwaala",
      {
        opacity: 1,
        delay: -1.7,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    .to(
      "#dotted",
      {
        opacity: 1,
        delay: -1.8,
        ease: "Expo.easeInOut",
      },
      "donut"
    )
    // .to(
    //   "#donut",
    //   {
    //     opacity: 1,
    //     scale: 2,
    //     delay: -1.4,
    //     ease: "Expo.easeInOut",
    //     rotationY: "+=15",
    //     duration: 3,
    //     rotationX: "+=15",
    //     rotationZ: "+=15",
    //   },
    //   "up"
    // )
  
    // .from(
    //   "#kothik-k, #kothik-o, #kothik-t, #kothik-h, #kothik-k2, #kothik-i",
    //   {
    //     opacity: 0,
    //     duration: 1,
    //     scale: 0,
    //     top: "40%",
    //     left: "47%",
    //   },
    //   "up"
    // );
  
  // var tl2 = gsap.timeline();
  
  // document.querySelectorAll("#explore").forEach(function (elem) 
  //   elem.addEventListener("click", function () {
  //     tl2
  //       .to(
  //         "#kothik-k",
  //         {
  //           left: "-15%",
  //           top: "-15%",
  //           scale: "2",
  //           rotate: "25deg",
  //           ease: "ease.out",
  //           duration: 1,
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to(
  //         "#kothik-o",
  //         {
  //           top: "-20%",
  //           scale: "2",
  //           rotate: "25deg",
  //           ease: "ease.out",
  //           duration: 1,
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to(
  //         "#kothik-t",
  //         {
  //           left: "115%",
  //           top: "-20%",
  //           scale: "2",
  //           rotate: "25deg",
  //           ease: "ease.out",
  //           duration: 1,
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to(
  //         "#kothik-h",
  //         {
  //           left: "115%",
  //           top: "110%",
  //           scale: "2",
  //           rotate: "25deg",
  //           ease: "ease.out",
  //           duration: 1,
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to(
  //         "#kothik-i",
  //         {
  //           left: "35%",
  //           top: "120%",
  //           scale: "2",
  //           rotate: "25deg",
  //           ease: "ease.out",
  //           duration: 1,
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to(
  //         "#kothik-k2",
  //         {
  //           left: "-15%",
  //           top: "80%",
  //           scale: "2",
  //           rotate: "25deg",
  //           ease: "ease.out",
  //           duration: 1,
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to("#donut", {
  //         width: "80vw",
  //         top: "-10%",
  //         rotate: "360deg",
  //         ease: "ease.out",
  //         duration: 1,
  //         opacity: 0,
  //         delay: "-1",
  //       })
  //       .to(
  //         "#dotted",
  //         {
  //           opacity: 0,
  //         },
  //         "sw"
  //       )
  //       .to(".svgwaala", {
  //         opacity: 0,
  //       });
  //   });
  // });
  
  function example() {
    window.location.href = "again.html";
  }
  
  // video 3 --------------
  
  var tl7 = gsap.timeline();
  tl7.from(
    ".main-abhishek",
    {
      opacity: "0",
      ease: "expo.inout",
      duration: 1,
    },
    "anim3"
  );
  tl7
    .from(
      ".front-page-img",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-3",
      {
        opacity: "0",
        ease: "expo.inout",
        duration: 1,
      },
      "anim3"
    )
    .from(
      "#line-effect-1",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 2,
      },
      "anim1"
    )
    .from(
      "#line-effect-2",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    )
    .from(
      ".img-one",
      {
        height: "0%",
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit",
      {
        width: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".mandit-2",
      {
        height: "0%",
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim1"
    )
    .from(
      ".main-txt-front",
      {
        opacity: 0,
        ease: "expo.inout",
        delay: -0.5,
        duration: 1,
      },
      "anim2"
    )
    .from(
      "#circle",
      {
        opacity: 0,
        ease: "expo.inout",
        duration: 2,
      },
      "anim2"
    )
    .from(
      "#nav",
      {
        top: -50,
        opacity: 0,
        ease: "expo.inout",
        duration: 1,
      },
      "anim2"
    );
  
  document
    .querySelector("#cntr-nav .ri-menu-line")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "0%";
      document.querySelector(".upar-menu .ri-close-fill").style.display =
        "initial";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "none";
    });
  
  document
    .querySelector(".upar-menu .ri-close-fill")
    .addEventListener("click", function () {
      document.querySelector(".upar-menu").style.top = "-100%";
      document.querySelector(".upar-menu .ri-close-fill").style.display = "none";
      document.querySelector("#cntr-nav .ri-menu-line").style.display = "initial";
    });
  
  document.querySelector("#abhishek").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "0%";
    document.querySelector("#abhishek").style.cursor = "pointer";
  });
  document.querySelector("#amarjeet").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-50vh";
    document.querySelector("#amarjeet").style.cursor = "pointer";
  });
  document.querySelector("#rk").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-100vh";
    document.querySelector("#rk").style.cursor = "pointer";
  });
  document.querySelector("#ak").addEventListener("mousemove", function () {
    document.querySelector("#slider-upar-wala").style.marginTop = "-150vh";
    document.querySelector("#ak").style.cursor = "pointer";
  });
  
  
  // video 3 ----------------------------
  
  
  function dom(){
    const canvas = document.querySelector("#home>canvas");
    const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
//   function files(index) {
//     var data = `
// compressed/1.webp
// compressed/2 copy.webp
// compressed/3.webp
// compressed/4.webp
// compressed/5.webp
// compressed/6.webp
// compressed/7.webp
// compressed/8.webp
// compressed/9.webp
// compressed/10.webp
// compressed/11.webp
// compressed/12.webp
// compressed/13.webp
// compressed/14.webp
// compressed/15.webp
// compressed/16.webp
// compressed/17.webp
// compressed/18.webp
// compressed/19.webp
// compressed/20.webp
// compressed/21.webp
// compressed/22.webp
// compressed/23.webp
// compressed/24.webp
// compressed/25.webp
// compressed/26.webp
// compressed/26.webp
// compressed/27.webp
// compressed/28.webp
// compressed/29.webp
// compressed/30.webp
// compressed/31.webp
// compressed/32.webp
// compressed/33.webp
// compressed/34.webp
// compressed/35.webp
// compressed/36.webp
// compressed/37.webp
// compressed/38.webp
// compressed/39.webp
// compressed/40.webp
// compressed/41.webp
// compressed/42.webp
// compressed/43.webp
// compressed/44.webp
// compressed/45.webp
// compressed/46.webp
// compressed/47.webp
// compressed/48.webp
// compressed/49.webp
// compressed/50.webp
// compressed/51.webp
// compressed/52.webp
// compressed/53.webp
// compressed/54.webp
// compressed/55.webp
// compressed/56.webp
// compressed/57.webp
// compressed/58.webp
// compressed/59.webp
// compressed/60.webp
// compressed/61.webp
// compressed/62.webp
// compressed/63.webp
// compressed/64.webp
// compressed/65.webp
// compressed/66.webp
// compressed/67.webp
// compressed/68.webp
// compressed/69.webp
// compressed/70.webp
// compressed/71.webp
// compressed/72.webp
// compressed/73.webp
// compressed/74.webp
// compressed/75.webp
// compressed/76.webp
// compressed/77.webp
// compressed/78.webp
// compressed/79.webp
// compressed/80.webp
// compressed/81.webp
// compressed/82.webp
// compressed/83.webp
// compressed/84.webp
// compressed/85.webp
// compressed/86.webp
// compressed/87.webp
// compressed/88.webp
// compressed/89.webp
// compressed/90.webp
// compressed/91.webp
// compressed/92.webp
// compressed/93.webp
// compressed/94.webp
// compressed/95.webp
// compressed/97.webp
// compressed/98.webp
// compressed/99.webp
// compressed/100.webp
// compressed/101.webp
// compressed/102.webp
// compressed/103.webp
// compressed/104.webp
// compressed/105.webp
// compressed/106.webp
// compressed/107.webp
// compressed/108.webp
// compressed/109.webp
// compressed/110.webp
// compressed/111.webp
// compressed/112.webp
// compressed/113.webp
// compressed/114.webp
// compressed/115.webp
// compressed/116.webp
// compressed/117.webp
// compressed/118.webp
// compressed/119.webp
// compressed/120.webp
// compressed/121.webp
// compressed/122.webp
// compressed/123.webp
// compressed/124.webp
// compressed/125.webp
// compressed/126.webp
// compressed/127.webp
// compressed/128.webp
// compressed/129.webp
// compressed/130.webp
// compressed/131.webp
// compressed/132.webp
// compressed/133.webp
// compressed/134.webp
// compressed/135.webp
// compressed/136.webp
// compressed/137.webp
// compressed/138.webp
// compressed/139.webp
// compressed/140.webp
// compressed/141.webp
// compressed/142.webp
// compressed/143.webp
// compressed/144.webp
// compressed/145.webp
// compressed/146.webp
// compressed/147.webp
// compressed/148.webp
// compressed/149.webp
// compressed/150.webp
// compressed/151.webp
// compressed/152.webp
// compressed/153.webp
// compressed/154.webp
// compressed/155.webp
// compressed/156.webp
// compressed/157.webp
// compressed/158.webp
// compressed/159.webp
// compressed/160.webp
// compressed/161.webp
// compressed/162.webp
// compressed/163.webp
// compressed/164.webp
// compressed/165.webp
// compressed/166.webp
// compressed/167.webp
// compressed/168.webp
// compressed/169.webp
// compressed/170.webp
// compressed/171.webp
// compressed/172.webp
// compressed/173.webp
// compressed/174.webp
// compressed/175.webp
// compressed/176.webp
// compressed/177.webp
// compressed/178.webp
// compressed/179.webp
// compressed/180.webp
// compressed/181.webp
// compressed/182.webp
// compressed/183.webp
// compressed/184.webp
// compressed/185.webp
// compressed/186.webp
// compressed/187.webp
// compressed/188.webp
// compressed/189.webp
// compressed/190.webp

//     `;

function files(index) {
  var data = `
f/25.webp 
f/26.webp
f/27.webp
f/28.webp
f/29.webp 
f/30.webp
f/31.webp
f/32.webp
f/33.webp
f/34.webp
f/35.webp
f/36.webp
f/37.webp
f/38.webp
f/39.webp
f/40.webp
f/41.webp
f/42.webp
f/43.webp
f/44.webp
f/45.webp
f/46.webp
f/47.webp
f/48.webp
f/49.webp
f/50.webp
f/51.webp
f/52.webp
f/53.webp
f/54.webp
f/55.webp
f/56.webp
f/57.webp
f/58.webp
f/59.webp
f/60.webp
f/61.webp
f/62.webp
f/63.webp
f/64.webp
f/65.webp
f/66.webp
f/67.webp
f/68.webp
f/69.webp
f/70.webp
f/71.webp
f/72.webp
f/73.webp
f/74.webp
f/75.webp
f/76.webp
f/77.webp
f/78.webp
f/79.webp
f/80.webp
f/81.webp
f/82.webp
f/83.webp
f/84.webp
f/85.webp
f/86.webp
f/87.webp
f/88.webp
f/89.webp
f/90.webp
f/91.webp
f/92.webp
f/93.webp
f/94.webp
f/95.webp
f/96.webp
f/97.webp
f/98.webp
f/99.webp
f/100.webp
f/101.webp
f/102.webp
f/103.webp
f/104.webp
f/105.webp
f/106.webp
f/107.webp
f/108.webp
f/109.webp
f/112.webp
f/113.webp
f/114.webp
f/115.webp 
f/117.webp
f/116.webp
f/118.webp
f/119.webp
f/120.webp
f/121.webp
f/122.webp
f/123.webp
f/124.webp
f/125.webp
f/126.webp
f/127.webp
f/128.webp
f/129.webp
f/130.webp
f/131.webp
f/132.webp
f/133.webp
f/134.webp
f/135.webp
f/136.webp
f/137.webp
f/138.webp
f/139.webp
f/140.webp 
f/141.webp
f/142.webp 
f/143.webp 
f/144.webp 
f/145.webp 
f/146.webp 
f/147.webp 
f/148.webp 
f/149.webp 
f/150.webp 
f/151.webp 
f/152.webp 
f/153.webp 
f/154.webp 
f/155.webp 
f/156.webp 
f/157.webp 
f/158.webp 
f/159.webp 
f/160.webp 
f/161.webp 
f/162.webp 
f/163.webp
f/164.webp
f/165.webp
f/166.webp 
f/167.webp 
f/168.webp 
f/169.webp 
f/170.webp 
f/171.webp 
f/172.webp 
f/173.webp
f/174.webp 
f/175.webp
f/176.webp 
f/177.webp 
f/178.webp 
f/179.webp 
f/180.webp 
f/181.webp 
f/182.webp 
f/183.webp 
f/184.webp 
f/185.webp 
f/186.webp 
f/187.webp 
f/188.webp 
f/189.webp 
f/190.webp 
f/191.webp 
f/192.webp 
f/193.webp 
f/194.webp 
f/195.webp 
f/196.webp 
f/197.webp 
f/198.webp 
f/199.webp 
f/200.webp
f/201.webp 
f/202.webp 
f/204.webp 
f/205.webp 
f/206.webp 
f/207.webp 
f/208.webp 
f/209.webp 
f/210.webp 
f/211.webp 
f/212.webp 
f/213.webp 
f/214.webp 
f/216.webp 
f/217.webp 
f/218.webp 
f/219.webp 
f/220.webp 
f/221.webp 
f/222.webp 
f/223.webp 
f/224.webp 
f/225.webp 
f/226.webp 
f/227.webp
f/228.webp
f/229.webp 
f/230.webp 
f/231.webp 
f/232.webp 
f/233.webp 
f/234.webp 
f/235.webp 
f/236.webp 
f/237.webp 
f/238.webp 
f/239.webp 
f/240.webp 
f/241.webp 
f/242.webp 
f/243.webp 
f/244.webp 
f/245.webp 
f/246.webp 
f/247.webp 
f/248.webp 
f/249.webp 
f/251.webp 
f/252.webp 
f/253.webp 
f/254.webp 
f/255.webp 
f/256.webp 
f/257.webp 
f/258.webp 
f/259.webp 
f/260.webp 
f/261.webp 
f/262.webp 
f/263.webp 
f/264.webp 
f/265.webp 
f/266.webp 
f/267.webp 
f/268.webp 
f/269.webp 
f/270.webp 
f/271.webp 
f/272.webp 
f/273.webp 
f/274.webp 
f/275.webp 
f/276.webp 
f/277.webp 
f/278.webp 
f/279.webp 
f/280.webp 
f/281.webp 
f/282.webp 
f/283.webp 
f/284.webp 
f/285.webp 
f/286.webp 
f/287.webp 
f/289.webp 
f/290.webp 
f/291.webp 
f/292.webp 
f/293.webp 
f/294.webp 
f/295.webp 
f/296.webp 
f/297.webp 
f/298.webp 
f/299.webp 
f/300.webp 
f/301.webp 
f/302.webp 
f/303.webp
f/304.webp 
f/305.webp 
f/306.webp 
f/307.webp 
f/308.webp 
f/309.webp 
f/310.webp 
f/311.webp 
f/312.webp 
f/313.webp 
f/314.webp 
f/315.webp 
f/316.webp 
f/317.webp 
f/318.webp 
f/319.webp 
f/320.webp 
f/321.webp 
f/322.webp 
f/323.webp 
f/324.webp 
f/325.webp 
f/326.webp 
f/327.webp 
f/328.webp 
f/331.webp 
f/332.webp 
f/333.webp 
f/335.webp 
f/336.webp 
f/337.webp 
f/338.webp 
f/339.webp 
f/341.webp 
f/343.webp 
f/344.webp 
f/346.webp 
f/347.webp 
f/348.webp 
f/349.webp 
f/350.webp 
f/351.webp 
f/352.webp 
f/353.webp 
f/354.webp 
f/355.webp 
f/356.webp 
f/357.webp 
f/358.webp 
f/359.webp 
f/360.webp 
f/361.webp 
f/362.webp 
f/363.webp 
f/364.webp 
f/365.webp 
f/366.webp 
f/367.webp 
f/368.webp 
f/369.webp
f/370.webp 
f/371.webp 
f/372.webp 
f/373.webp 
f/374.webp 
f/375.webp 
f/376.webp 
f/377.webp 
f/378.webp 
f/379.webp 
f/380.webp 
f/381.webp 
f/382.webp 
f/383.webp 
f/384.webp 
f/385.webp 
f/387.webp 
f/388.webp 
f/389.webp 
f/390.webp 
f/391.webp 
f/392.webp 
f/393.webp 
f/394.webp 
f/395.webp 
f/396.webp 
f/397.webp 
f/398.webp 
f/399.webp 
f/400.webp 
f/401.webp 
f/402.webp 
f/403.webp 
f/404.webp 
f/405.webp 
f/406.webp 
f/407.webp 
f/408.webp 
f/409.webp 
f/410.webp 
f/411.webp 
f/412.webp 
f/413.webp 
f/414.webp 
f/415.webp 
f/416.webp 
f/417.webp 
f/418.webp 
f/419.webp 
f/420.webp 
f/421.webp 
f/422.webp 
f/423.webp 
f/424.webp 
f/425.webp 
f/426.webp

`;
    return data.split("\n")[index];
  }
  
  const frameCount = 358;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub:2,
        pin:true,
        trigger:"#home",
    },
    onUpdate: render
  });
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  gsap.to("#home canvas",{
    scale:1,
    scrollTrigger:{
        scrub:1.5,
        trigger:"#home",
        start:"bottom 100%",
        markers:true,
    },
  })
  ScrollTrigger.create({
    trigger:"#home",
    pin:true,
    start:"bottom 100%",
  })
  
  }
  
  dom()