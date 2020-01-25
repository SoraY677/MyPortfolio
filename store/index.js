import aboutJsonData from "~/assets/json/about.json"
import skillJsonData from "~/assets/json/skill.json"
import productJsonData from "~/assets/json/product.json"


export const state = () => ({
  aboutJson: aboutJsonData,
  skillJson :skillJsonData,
  productJson :productJsonData
});

export const getters = {
  getAboutJson(state){
    return state.aboutJson
  },
  getSkillJson(state){
    return state.skillJson
  },
  getProductJson(state){
    return state.productJson
  }
}
