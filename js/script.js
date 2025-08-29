gsap.registerPlugin(ScrollTrigger);

// 마키 애니메이션은 그대로 유지
const marquee = () => {
  const marquee = document.querySelector('.sauce-top-bar.marquee-container')
  if (!marquee) {
    return;
  }
  const marqueeContent = document.querySelector('.sauce-top-bar .marquee-content');
  if (!marqueeContent) {
    return;
  }

  const imageWidth = 360;
  const viewportWidth = window.innerWidth;
  const imageCount = Math.ceil(viewportWidth / imageWidth) + 2;

  for (let i = 0; i < imageCount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    const img = document.createElement('img');
    img.src = './image/sauce_flow.jpg';
    img.alt = '';
    box.appendChild(img);
    marqueeContent.appendChild(box);
  }

  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.appendChild(marqueeContentClone);

  const totalWidth = imageWidth * imageCount;

  gsap.set(marqueeContent, { x: 0 });
  gsap.set(marqueeContentClone, { x: totalWidth });

  const tl = gsap.timeline({ repeat: -1 });

  tl.to([marqueeContent, marqueeContentClone], {
    x: `-=${imageWidth}`,
    duration: 2,
    ease: "none"
  })
    .set(marqueeContent, { x: totalWidth })
    .set(marqueeContentClone, { x: 0 }, "<");
}

const marquee1 = () => {
  const marquee = document.querySelector('.sauce-top-bar1.marquee-container')
  if (!marquee) {
    return;
  }
  const marqueeContent = document.querySelector('.sauce-top-bar1 .marquee-content');
  if (!marqueeContent) {
    return;
  }

  const imageWidth = 296;
  const viewportWidth = window.innerWidth;
  const imageCount = Math.ceil(viewportWidth / imageWidth) + 2;

  for (let i = 0; i < imageCount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    const img = document.createElement('img');
    img.src = './image/sauce_flow02.jpg';
    img.alt = '';
    box.appendChild(img);
    marqueeContent.appendChild(box);
  }

  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.appendChild(marqueeContentClone);

  const totalWidth = imageWidth * imageCount;

  gsap.set(marqueeContent, { x: 0 });
  gsap.set(marqueeContentClone, { x: totalWidth });

  const tl = gsap.timeline({ repeat: -1 });

  tl.to([marqueeContent, marqueeContentClone], {
    x: `-=${imageWidth}`,
    duration: 2,
    ease: "none"
  })
    .set(marqueeContent, { x: totalWidth })
    .set(marqueeContentClone, { x: 0 }, "<");
}

// 함수 호출
marquee();
marquee1();

// 메인 타임라인 애니메이션 (기존 코드와 동일)
const tl = gsap.timeline();

tl.from(".main-visual .title", {
  x: "-100%",
  scale: 0,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
});

tl.from(".main-visual .pizza", {
  y: "100%",
  scale: 0.5,
  opacity: 0,
  duration: 1.5,
  ease: "power2.out"
}, "-=1.2");

tl.from(".main-visual .deco1", {
  x: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "-=0.8");

tl.from(".main-visual .deco2", {
  x: "-100%",
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, "-=0.5"),

  gsap.to('.p_pieced', {
    y: '-526',
    opacity: 1,
    duration: 2,
    scrollTrigger: {
      trigger: '.edge-topping',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
    }

  });
