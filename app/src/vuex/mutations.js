import {
  HIDESTOREHOUSE,
  HIDESENCE,
  HIDERECLAIM,
  HIDECENTER,
  HIDEPROP,
  HIDESOW,
  CHANGEMENU,
  CHANGEPROP,
  CHANGESOW
}
from './mutation-types'

export
default {
  [HIDESTOREHOUSE] (state) {
    state.isHideStorehouse = !state.isHideStorehouse
    state.isHideMask = !state.isHideMask
  },
  [HIDESENCE] (state) {
    state.isHideSence = !state.isHideSence
    state.isHideMask = !state.isHideMask
  },
  [HIDERECLAIM] (state) {
    state.isHideReclaim = !state.isHideReclaim
    state.isHideMask = !state.isHideMask
  },
  [HIDECENTER] (state) {
    state.isHideCenter = !state.isHideCenter
    state.isHideMask = !state.isHideMask
  },
  [HIDEPROP] (state) {
    state.isHideProp = !state.isHideProp
    state.isHideMask = !state.isHideMask
  },
  [HIDESOW] (state) {
    state.isHideSow = !state.isHideSow
    state.isHideMask = !state.isHideMask
  },
  [CHANGEMENU] (state, item, index) {
    if (index === state.isActive) {
      state.isActive = -1
      state.isBasket = false
      state.isChemical = false
      state.isPickaxe = false
      state.isCollect = false
      state.isSow = false
      return
    } else {
      state.isActive = index
      if (item.type === 'sow') {
        state.isBasket = false
        state.isChemical = false
        state.isPickaxe = false
        state.isCollect = false
        state.isSow = true
        state.isHideSow = !state.isHideSow
        state.isHideMask = !state.isHideMask
      }
      if (item.type === 'collect') {
        state.isBasket = false
        state.isChemical = false
        state.isPickaxe = false
        state.isCollect = true
        state.isSow = false
      }
      if (item.type === 'basket') {
        state.isCollect = false
        state.isChemical = false
        state.isPickaxe = false
        state.isBasket = true
        state.isSow = false
      }
      if (item.type === 'chemical') {
        state.isCollect = false
        state.isBasket = false
        state.isPickaxe = false
        state.isChemical = true
        state.isSow = false
      }
      if (item.type === 'pickaxe') {
        state.isCollect = false
        state.isBasket = false
        state.isChemical = false
        state.isPickaxe = true
        state.isSow = false
      }
    }
  },
  [CHANGEPROP] (state, img) {
    state.house = img
    state.isHideProp = !state.isHideProp
    state.isHideMask = !state.isHideMask
  },
  [CHANGESOW] (state, src) {
    state.sowItem = src
    state.isHideSow = !state.isHideSow
    state.isHideMask = !state.isHideMask
  }
}
