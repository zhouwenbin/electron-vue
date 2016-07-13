<template>
  <section class="storehouse dialog" :class="{ 'hide': isHideStorehouse }">
    <div class="dialog-close" @click="hideStorehouse()"></div>
    <header>
      <h1 class="storehouse-title">仓库</h1>
    </header>
    <div class="storehouse-r1">
      <div class="storehouse-r1c1">
        <ul class="storehouse-tab">
          <li v-for="item in data" v-text="item.name" @click="isActive = $index" :class="{'active': isActive == $index}"></li>
        </ul>
      </div>
      <div class="storehouse-r1c2">
        <ul class="storehouse-list">
          <li v-for="item in data[isActive].object"><div :class="item.img"></div><div class="storehouse-num">{{item.num}}</div></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { hideStorehouse } from '../../vuex/actions'

export default {
  vuex: {
    state: {
      isHideStorehouse: state => state.isHideStorehouse
    },
    actions: {
      hideStorehouse
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      isActive: 0,
      data: [
        {
          name: '水果',
          object: [
            {
              img: 'storehouse-img1',
              num: 18
            }, {
              img: 'storehouse-img2',
              num: 13
            }, {
              img: 'storehouse-img3',
              num: 14
            }, {
              img: 'storehouse-img4',
              num: 15
            }, {
              img: 'storehouse-img5',
              num: 16
            }, {
              img: 'storehouse-img6',
              num: 17
            }, {
              img: 'storehouse-img7',
              num: 18
            }, {
              img: 'storehouse-img8',
              num: 19
            }, {
              img: 'storehouse-img9',
              num: 18
            }, {
              img: 'storehouse-img10',
              num: 18
            }, {
              img: 'storehouse-img11',
              num: 18
            }, {
              img: 'storehouse-img12',
              num: 18
            }
          ]
        }, {
          name: '蔬菜',
          object: [
            {
              img: 'storehouse-img1',
              num: 18
            }, {
              img: 'storehouse-img2',
              num: 13
            }, {
              img: 'storehouse-img3',
              num: 14
            }, {
              img: 'storehouse-img4',
              num: 15
            }
          ]
        }, {
          name: '粮食',
          object: [
            {
              img: 'storehouse-img5',
              num: 16
            }, {
              img: 'storehouse-img6',
              num: 17
            }, {
              img: 'storehouse-img7',
              num: 18
            }, {
              img: 'storehouse-img8',
              num: 19
            }
          ]
        }, {
          name: '其他',
          object: [
            {
              img: 'storehouse-img9',
              num: 11
            }, {
              img: 'storehouse-img10',
              num: 12
            }, {
              img: 'storehouse-img11',
              num: 13
            }, {
              img: 'storehouse-img12',
              num: 14
            }
          ]
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
.storehouse{
  background-image: url(img/bg.png?__sprite);
  width: 1193px;
  height: 584px;
}
.storehouse-title{
  text-indent: -999em;
  width: 99px;
  height: 42px;
  display: inline-block;
  background-image: url(img/title.png?__sprite);
}
.storehouse-tab li{
  width: 180px;
  height: 64px;
  background-image: url(img/li.png?__sprite);
  margin-bottom: 11px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  padding-top: 16px;
  text-shadow: 0px 3px #b26d22,
         0px -3px #b26d22,
         3px 0px #b26d22,
         -3px 0px #b26d22;
  
}
.storehouse-tab li.active{
  background-image: url(img/li-active.png?__sprite);
  text-shadow: 0px 3px #b81b1d,
         0px -3px #b81b1d,
         3px 0px #b81b1d,
         -3px 0px #b81b1d;
}
.storehouse-r1{
  display: flex;
  padding-top: 81px;
  padding-left: 38px;
}
.storehouse-r1c2{
  width: 933px;
  height: 483px;
  background-image: url(img/main.png?__sprite);
  margin-left: 14px;
}
.storehouse-list{
  overflow: hidden;
  padding-left: 20px;
  padding-top: 17px;
}
.storehouse-list li{
  float: left;
  width: 108px;
  height: 108px;
  text-align: center;
  margin-right: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.storehouse-list img{
  display: block;
}
.storehouse-img1{
width: 63px;
height: 79px;
background: url(img/img1.png);
}
.storehouse-img2{
width: 77px;
height: 76px;
background: url(img/img2.png);
}
.storehouse-img3{
width: 79px;
height: 80px;
background: url(img/img3.png);
}
.storehouse-img4{
width: 78px;
height: 75px;
background: url(img/img4.png);
}
.storehouse-img5{
width: 91px;
height: 69px;
background: url(img/img5.png);
}
.storehouse-img6{
width: 73px;
height: 77px;
background: url(img/img6.png);
}
.storehouse-img7{
width: 83px;
height: 79px;
background: url(img/img7.png);
}
.storehouse-img8{
width: 92px;
height: 51px;
background: url(img/img8.png);
}
.storehouse-img9{
width: 79px;
height: 85px;
background: url(img/img9.png);
}
.storehouse-img10{
width: 93px;
height: 69px;
background: url(img/img10.png);
}
.storehouse-img11{
width: 80px;
height: 78px;
background: url(img/img11.png);
}
.storehouse-img12{
width: 91px;
height: 56px;
background: url(img/img12.png);
}
.storehouse-num{
  position: absolute;
  bottom:10px;
  right: 7px;
  color: #ae3123;
  font-style: 18px;
  text-shadow: 0px 2px #fff,
         0px -2px #fff,
         2px 0px #fff,
         -2px 0px #fff;
}
  
</style>
