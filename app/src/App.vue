<template>
  <div id="app">
    <farm></farm>
    <name></name>
    <menu></menu>
    <mask></mask>
    <storehouse></storehouse>
    <storehouse-icon></storehouse-icon>
    <sence></sence>
    <reclaim></reclaim>
    <center></center>
    <prop></prop>
    <house></house>
    <sow></sow>
    <nav1></nav1>
</template>

<script>
import farm from './components/farm/index'
import name from './components/name/index'
import nav1 from './components/nav/index'
import menu from './components/menu/index'
import mask from './components/mask/index'
import storehouse from './components/storehouse/index'
import storehouseIcon from './components/storehouse-icon/index'
import sence from './components/sence/index'
import reclaim from './components/reclaim/index'
import center from './components/center/index'
import prop from './components/prop/index'
import house from './components/house/index'
import sow from './components/sow/index'

export default {
  components: {
    farm,
    name,
    nav1,
    menu,
    mask,
    storehouse,
    storehouseIcon,
    sence,
    reclaim,
    center,
    prop,
    house,
    sow
  }
}
</script>

<style>
@import url(./base/normalize.css);
@import url(./base/base.css);
@import url(./base/layout.css);
body{
  background: url(img/bg.jpg) no-repeat;
}
</style>
