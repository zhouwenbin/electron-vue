<template>
  <section class="prop dialog" :class="{ 'hide': isHideSow }">
    <div class="dialog-close" @click="hideSow()"></div>
    <header>
      <h1 class="prop-title">道具列表</h1>
    </header>
    <ul class="prop-list">
      <li v-for="item in data" @click="changeSow(item)"><img :src="item.thumb" alt=""></li>
    </ul>
  </section>
</template>

<script>
import { hideSow, changeSow } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      isHideSow: state => state.isHideSow,
      sowItem: state => state.sowItem
    },
    actions: {
      hideSow,
      changeSow
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: [
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/a71df434-8698-4c9a-8f85-5c8955323b7f.png',
          name: '橙子'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
          name: '卷心菜'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
          name: '玉米'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/e477d71b-6bd7-41c5-b4a9-e9a24a6c3db1.png',
          name: '水蜜桃'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/5adf27be-5320-4c01-be8f-5408cd8200f9.png',
          name: '蓝莓'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/cf086a98-d200-40bf-aa9b-faf5481073be.png',
          name: '蘑菇'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/de7c19d0-bdc3-4d1e-9e82-949beda6daad.png',
          name: '橘子'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/eb13e171-f739-432e-8f93-4aa4621eae6f.png',
          name: '南瓜'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/4bb1c585-1cbd-4095-acf7-3840e8efce03.png',
          name: '胡萝卜'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/fcc11565-53c6-4541-ab71-ccbb527d6653.png',
          name: '柿子'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/4ddf4e2f-d437-45de-aa21-19a50b976b66.png',
          name: '辣椒'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/690c4d5b-e416-4c28-94d6-f4e9510ea88d.png',
          name: '花'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog{
  width: 1133px;
  height: 570px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 999;
  transform: translate(-50%,-50%);
  background-image: url(img/dialog.png?__sprite);
}
.dialog-close{
  width: 64px;
  height: 64px;
  background-image: url(img/close.png?__sprite);
  right: -12px;
  top: -12px;
  position: absolute;
}
.dialog header{
  width: 283px;
  height: 70px;
  color: #fff;
  font-size: 36px;
  background-image: url(img/header.png?__sprite);
  text-align: center;
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translate(-50%,0);
  text-align: center;
  padding-top:11px;
}
.prop-title{
  text-indent: -999em;
  width: 151px;
  height: 43px;
  display: inline-block;
  background-image: url(img/title.png?__sprite);
}

.prop-list{
  overflow: hidden;
  margin-left: 61px;
  margin-top: 105px;
  background-image: url(img/ul.png?__sprite);
  width: 999px;
  height: 387px;
}
.prop-list li{
  float: left;
  width: 152px;
  height: 122px;
  margin-right: 17px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.prop-list li:nth-child(6n+6){
  margin-right: 0;
}
.prop-list img{
  display: block;
}


</style>
