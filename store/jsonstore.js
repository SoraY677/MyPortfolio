import aboutJson from "@/assets/json/about.json";
import skillJson from "@/assets/json/skill.json";
import productJson from "@/assets/json/product.json";

export const state = () => ({
  about: aboutJson,
  skill: skillJson,
  product: productJson,
});

export const getters = {
  about(state) {
    return state.about;
  },
  skill(state) {
    return state.skill;
  },
  product(state) {
    return state.product;
  },
};
