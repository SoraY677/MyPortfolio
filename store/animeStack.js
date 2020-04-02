export const state = () => ({
  animeStack: {}
});

export const mutations = {
  /**
   * 指定のアニメーションを
   * 指定のDOMのアニメーション終了後に
   * 発動するように設定
   * @param {*} state
   * @param {*} param1
   */
  pushAnime(state, { regist, anime, dom }) {

    // アニメーション終了後にDOMの可視化状態を維持
    dom.style.opacity = "0";
    dom.addEventListener("animationend", function() {dom.style.opacity = "1";})
    //スタックされていない状態
    if (state.animeStack[regist] === void 0) {
      state.animeStack[regist] = [];
      dom.style.animationName = anime.name;
    }
    //一つ以上のスタックがある場合 
    else {
      state.animeStack[regist][
        state.animeStack[regist].length - 1
      ].addEventListener("animationend", function() {
        dom.style.animationName = anime.name;
      });
    }
    dom.style.animationDuration = anime.duration+"s";
    state.animeStack[regist].push(dom);
  }
};
