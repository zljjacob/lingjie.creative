// 当页面滚动时显示或隐藏按钮
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// 平滑滚动到页面顶部
function scrollToTop() {
  // 计算滚动距离，使滚动更平滑
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 16); // 调整除数来控制滚动速度，这里的 8 是速度因子
    }
  };
  scrollToTop();
}