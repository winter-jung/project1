const marquee = () => {
  const marquee = document.querySelector('.sauce-top-bar.marquee-container')
  if (!marquee) {
    return;
  }
  const marqueeContent = document.querySelector('.sauce-top-bar .marquee-content');
  if (!marqueeContent) {
    return;
  }

  // 이미지 너비와 뷰포트 너비 계산
  const imageWidth = 360;
  const viewportWidth = window.innerWidth;
  const imageCount = Math.ceil(viewportWidth / imageWidth) + 2; // 여유분 +2개

  // 이미지들을 동적으로 생성
  for (let i = 0; i < imageCount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    const img = document.createElement('img');
    img.src = './image/sauce_flow.jpg';
    img.alt = '';
    box.appendChild(img);
    marqueeContent.appendChild(box);
  }

  // 복제본 생성
  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.appendChild(marqueeContentClone);

  // 전체 마퀴 너비 계산
  const totalWidth = imageWidth * imageCount;

  // 초기 위치 설정
  gsap.set(marqueeContent, { x: 0 });
  gsap.set(marqueeContentClone, { x: totalWidth });

  // 두 요소를 동시에 왼쪽으로 이동
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

  // 이미지 너비와 뷰포트 너비 계산
  const imageWidth = 296;
  const viewportWidth = window.innerWidth;
  const imageCount = Math.ceil(viewportWidth / imageWidth) + 2; // 여유분 +2개

  // 이미지들을 동적으로 생성
  for (let i = 0; i < imageCount; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    const img = document.createElement('img');
    // 이미지주소
    img.src = '../image/sauce_flow02.jpg';
    img.alt = '';
    
   
    
    box.appendChild(img);
    marqueeContent.appendChild(box);
  }

  // 복제본 생성
  const marqueeContentClone = marqueeContent.cloneNode(true);
  marquee.appendChild(marqueeContentClone);

  // 전체 마퀴 너비 계산
  const totalWidth = imageWidth * imageCount;

  // 초기 위치 설정
  gsap.set(marqueeContent, { x: 0 });
  gsap.set(marqueeContentClone, { x: totalWidth });

  // 두 요소를 동시에 왼쪽으로 이동
  const tl = gsap.timeline({ repeat: -1 });

  tl.to([marqueeContent, marqueeContentClone], {
    x: `-=${imageWidth}`,
    duration: 2,
    ease: "none"
  })
    .set(marqueeContent, { x: totalWidth })
    .set(marqueeContentClone, { x: 0 }, "<");

}

marquee()
marquee1()