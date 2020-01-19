import skillJsonData from "~/assets/json/skill.json"

export const state = () => ({
  skillJson :skillJsonData
});

export const getters = {
  getSkillJson(state){
    return state.skillJson
  }
}
