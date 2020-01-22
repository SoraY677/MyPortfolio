import skillJsonData from "~/assets/json/skill.json"
import productJsonData from "~/assets/json/product.json"

export const state = () => ({
  skillJson :skillJsonData,
  productJson :productJsonData
});

export const getters = {
  getSkillJson(state){
    return state.skillJson
  },
  getProductJson(state){
    return state.productJson
  }
}
