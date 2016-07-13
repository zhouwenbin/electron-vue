<template>
  <section class="name">
    <div class="name-sum"></div>
    <img class="name-photo" :src="data.photo" alt="">
    <div class="name-main">
      <p>{{data.area}}</p>
      <h1>{{data.name}}</h1>
      <ul class="name-star">
        <li v-for="stars in data.star"></li>
      </ul>
    </div>
    <div class="name-icon" @click="hideReclaim()"></div>
  </section>
</template>

<script>
import { hideReclaim } from '../../vuex/actions'
export default {
  vuex: {
    actions: {
      hideReclaim
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: {
        photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/name/img/photo.png',
        name: '黑土地农场',
        area: '¥160/亩',
        star: 4
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.name{
  color: #682b18;
  background: url(img/bg.png) no-repeat 22px 6px;
  font-weight: bold;
  display: flex;
  width: 291px;
  position: absolute;
  left: 21px;
  top: 26px;
  text-shadow: 0px 3px #fff,
         0px -3px #fff,
         3px 0px #fff,
         -3px 0px #fff;
}
.name h1{
  font-size: 24px;
  margin-bottom: 6px;
}
.name p{
  font-size: 19px;
  margin-bottom: 8px;
  margin-right: -4px;
}
.name-star{
  display: flex;
  justify-content: flex-end;
}
.name-star li{
  margin-left: 3px;
  width: 23px;
  height: 26px;
  background-image: url(img/star.png?__sprite);
}
.name-sum{
  width: 45px;
  height: 48px;
  background-image: url(img/sum.png?__sprite);
  position: absolute;
  left: 51px;
  top: -10px;
}
.name-photo{
  width:86px;
  height: 86px;
  border-radius: 50%;
  border:3px solid #fff;
  margin-right: 6px;
}
.name-icon{
  width: 57px;
  height: 55px;
  background-image: url(img/icon.png?__sprite);
  margin-top: 10px;
}
.name-main{
  margin-right: 12px;
  text-align: right;
  margin-top: -2px;
  flex:1;
}
</style>
