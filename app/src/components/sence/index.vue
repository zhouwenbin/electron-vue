<template>
  <section class="sence dialog" v-if="!isHideSence">
    <div class="dialog-close" @click="hideSence()"></div>
    <header>
      <h1>庄园实景</h1>
    </header>
    <ul>
      <li v-for="item in data.sence"><iframe height="173" width="252" :src="item.video" frameborder=0 allowfullscreen></iframe></li>
    </ul>
  </section>
</template>

<script>
import { hideSence } from '../../vuex/actions'

export default {
  vuex: {
    state: {
      isHideSence: state => state.isHideSence
    },
    actions: {
      hideSence
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      data: {
        sence: [
          {
            img: 'http://ww4.sinaimg.cn/mw690/6c81de07gw1f4d6296j5cj207004tq3j.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww2.sinaimg.cn/mw690/6c81de07gw1f4d6296i1aj207004t0tn.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww3.sinaimg.cn/mw690/6c81de07gw1f4d6296u4hj207004tq3j.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww3.sinaimg.cn/mw690/6c81de07gw1f4d6294xmbj207004tjrv.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww4.sinaimg.cn/mw690/6c81de07gw1f4d6297hpoj207004tt97.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww3.sinaimg.cn/mw690/6c81de07gw1f4d6295so2j207004tq3j.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww1.sinaimg.cn/mw690/6c81de07gw1f4d629dfgvj207004tq3o.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }, {
            img: 'http://ww2.sinaimg.cn/mw690/6c81de07gw1f4d629e6jhj207004taan.jpg',
            video: 'http://player.youku.com/embed/XMTU5ODQ2NDYwOA=='
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.sence h1{
  text-indent: -999em;
  width: 150px;
  height: 41px;
  display: inline-block;
  background-image: url(img/title.png?__sprite);
}
.sence ul{
  overflow: hidden;
  padding-left: 63px;
  padding-top: 122px;
}
.sence li{
  float: left;
  margin-right: 7px;
  margin-bottom: 8px;
}
</style>
