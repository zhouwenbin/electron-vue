import { HIDESTOREHOUSE, HIDESENCE, HIDERECLAIM, HIDECENTER, HIDEPROP, HIDESOW, CHANGEMENU, CHANGEPROP, CHANGESOW } from './mutation-types'

export const hideStorehouse = ({ dispatch }) => dispatch(HIDESTOREHOUSE)
export const hideSence = ({ dispatch }) => dispatch(HIDESENCE)
export const hideReclaim = ({ dispatch }) => dispatch(HIDERECLAIM)
export const hideCenter = ({ dispatch }) => dispatch(HIDECENTER)
export const hideProp = ({ dispatch }) => dispatch(HIDEPROP)
export const hideSow = ({ dispatch }) => dispatch(HIDESOW)
export const changeMenu = ({ dispatch }, item, index) => {
  dispatch(CHANGEMENU, item, index)
}
export const changeProp = ({ dispatch }, img) => {
  dispatch(CHANGEPROP, img)
}
export const changeSow = ({ dispatch }, img) => {
  dispatch(CHANGESOW, img)
}
