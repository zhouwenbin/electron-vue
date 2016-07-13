<template>
  <nav class="nav">
    <ul>
      <li @click="hideSence()" id="nav-sence">查看实景</li>
      <li><a href="http://114.55.128.3/home.html ">我要订餐</a></li>
      <li @click="hideCenter()" id="nav-center">个人中心</li>
    </ul>
  </nav>
</template>

<script>
import { hideSence, hideCenter } from '../../vuex/actions'
export default {
  vuex: {
    actions: {
      hideSence,
      hideCenter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav{
  position: absolute;
  left: 991px;
  top: 24px;
}
.nav ul{
  display: flex;
  align-items: flex-end;
}
.nav li{
  text-indent: -999em;
}
.nav li a{
  display: block;
}
.nav li:nth-child(1){
  width: 85px;
  height: 112px;
  background-image: url(img/icon1.png?__sprite);
  margin-right: 13px;
}
.nav li:nth-child(2) a{
  width: 96px;
  height: 110px;
  background-image: url(img/icon2.png?__sprite);
  margin-right: 33px;
}
.nav li:nth-child(3){
  width: 85px;
  height: 112px;
  background-image: url(img/icon3.png?__sprite);
}
</style>
