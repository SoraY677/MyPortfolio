import skillJson from "@/assets/json/skill.json"
import productJson from "@/assets/json/product.json"

// 状態管理
export const state = () => ({
    skill:skillJson,
    product:productJson
})

// getters
export const getters = {
  skill (state){
        return state.skill
  },
  product(state){
    return state.product
  }
}