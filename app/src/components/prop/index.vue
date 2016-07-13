<template>
  <section class="prop dialog" :class="{ 'hide': isHideProp }">
    <div class="dialog-close" @click="hideProp()"></div>
    <header>
      <h1 class="prop-title">道具列表</h1>
    </header>
    <ul class="prop-list">
      <li v-for="item in data" @click="changeProp(item.big)"><img :src="item.thumb" alt=""></li>
    </ul>
  </section>
  
</template>

<script>
import { hideProp, changeProp } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      isHideProp: state => state.isHideProp
    },
    actions: {
      hideProp,
      changeProp
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
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/7b3f7b80-a9c3-4d18-a43e-36c0257e30a8.png',
          big: 'house1'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/4d8564ac-4ff5-4bec-bc4e-e795ab5457d0.png',
          big: 'house2'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/f0423e06-a5f2-4e20-8e59-1b57f932218c.png',
          big: 'house3'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/d75ac78a-709d-4d81-9f04-5c42083fb8f5.png',
          big: 'house4'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/0267ce27-b39b-44df-a1c9-ba59610239be.png',
          big: 'house5'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/49675c79-e240-4ce9-b728-559b2b822d7d.png',
          big: 'house6'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/59a1b9a0-56ed-40c9-ba08-b751e316bc22.png',
          big: 'house7'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/e6190458-f8a4-4455-b157-578a19ea8c3b.png',
          big: 'house8'
        },
        {
          thumb: 'http://img0.fengqucdn.com/cmsres/20160620/cc043bf1-6f3f-4cb9-9e41-70b3254c1b90.png',
          big: 'house9'
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
