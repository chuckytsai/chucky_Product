import { ADD_PERSON } from '../constant'

//創見增加一個人的action動作對象
export const addPerson = (personObj) => ({
  type: ADD_PERSON,
  data: personObj,
})
