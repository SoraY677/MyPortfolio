import aboutJson from "@/assets/json/about.json";
import skillJson from "@/assets/json/skill.json";
import productJson from "@/assets/json/product.json";
import skillLevelJson from "@/assets/json/skillLevel.json";

export const state = () => ({
  about: aboutJson,
  skill: skillJson,
  skillLevel: skillLevelJson,
  product: productJson
});

export const getters = {
  about(state) {
    return state.about;
  },
  skill(state) {
    return state.skill;
  },
  skillLevel(state) {
    return state.skillLevel;
  },
  product(state) {
    return state.product;
  }
};
