export default ({ app }, inject) => {

  inject('pushAnimeStack',stackCategory => {
    console.log(animeStack[stackCategory]);
  })
}