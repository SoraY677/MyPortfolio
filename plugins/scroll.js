// スクロールアニメーション用のカスタムディレクティブ
// ディレクティブ設定により"v-scroll"をタグに付与することができる
import Vue from "vue";

Vue.directive("scroll", {
  inserted: function(el,binding) {
    //アニメーションの遅延を決定する(指定なしの場合は0sスタート)
    const s = JSON.stringify
    const animDelay = (!s(binding.value)) ? 0 : s(binding.value);
    //あらかじめ透明にしておく
    el.style.opacity = 0;
    window.addEventListener("scroll", 
      function() {
        const elemTop = el.getBoundingClientRect().top;
        //スクロールで指定のDOMが近づいたら 
        if(elemTop < window.innerHeight){
          //アニメーション用css付加 + 遅延時間を決定 + 可視化
          el.classList.add("scroll-animation-layout");
          el.style.animationDelay = animDelay + "s";
          
        }
      });
      el.addEventListener('animationend', function() {
        el.style.opacity = 1;
      });
  }
});
