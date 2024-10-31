//第一个旋转
const aliceTumbling1 = [
  { transform: 'rotate(0) scale(1)', opacity: 1 }, // 初始状态，旋转0度，缩放1倍，透明度为1
  { transform: 'rotate(360deg) scale(0.5)', opacity: 0.5 }, // 中间状态，旋转360度，缩放0.5倍，透明度为0.5
  { transform: 'rotate(720deg) scale(1)', opacity: 1 } // 结束状态，旋转720度，缩放1倍，透明度为1
];

//第二个平移
const aliceTumbling2 = [
  { transform: 'translateX(0) scale(1)', opacity: 1 },
  { transform: 'translateX(100px) scale(1.2)', opacity: 0.7 },
  { transform: 'translateX(0) scale(1)', opacity: 1 }
];

//第三个缩放
const aliceTumbling3 = [
  { transform: 'scale(1) translateY(0)', opacity: 1 },
  { transform: 'scale(0.8) translateY(-50px)', opacity: 0.3 },
  { transform: 'scale(1) translateY(0)', opacity: 1 }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards',
  easing: 'ease-in-out'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

async function playComplexSequence() {
  const animation1 = alice1.animate(aliceTumbling1, aliceTiming);
  await animation1.finished;  // 等待第一个动画完成

  const animation2 = alice2.animate(aliceTumbling2, aliceTiming);
  await animation2.finished;  // 等待第二个动画完成

  const animation3 = alice3.animate(aliceTumbling3, aliceTiming);
  await animation3.finished;  // 等待第三个动画完成
}

playComplexSequence();  // 启动动画序列
