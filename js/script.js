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
  const imageCount = Math.ceil(viewportWidth / imageWidth) + 2; // 여유분 +2개

 
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
  const imageCount = Math.ceil(viewportWidth / imageWidth) + 2; // 여유분 +2개

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

marquee()
marquee1()