<template>
  <section class="center dialog" :class="{ 'hide': isHideCenter }">
    <div class="dialog-close" @click="hideCenter()"></div>
    <div class="center-c1">
      <div class="center-person">
        <div class="center-photo">
          <img :src="data.photo" alt="">
        </div>
        <div class="center-text">
          <h2>{{data.name}}</h2>
          <p>等级:{{data.rank}}</p>
        </div>
      </div>
      <ul>
        <li v-for="item in tabs" v-text="item" @click="isActive = $index" :class="{'active': isActive == $index}"></li>
      </ul>
    </div>
    <div class="center-c2">
       <section class="center-focus" :class="{'hide': isActive != 0}">
          <ul>
            <li v-for="item in data.focus"><img :src="item" alt="" @click="hide()"></li>
          </ul>
        </section>
        <section class="center-infor center-bg" :class="{'hide': isActive != 1}">
          <ul>
            <li><span>账号昵称:</span>{{data.name}}</li>
            <li><span>账号ID:</span>{{data.id}}</li>
            <li><span>注册时间:</span>{{data.registerTime}}</li>
            <li><span>手机号:</span>{{data.phone}}</li>
            <li><span>拥有农场:</span>{{data.ownFarm}}</li>
          </ul>
        </section>
        <section class="center-notice center-bg" :class="{'hide': isActive != 2}">
          <ul>
            <li v-for="item in data.notice">
              <div class="center-notice-icon"></div>
              <div class="center-notice-text">
                <h2>{{item.title}}</h2>
                <p>{{item.detail}}</p>
              </div>
            </li>
          </ul>
        </section>
    </div>
  </section>
</template>

<script>
import { hideCenter } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      isHideCenter: state => state.isHideCenter
    },
    actions: {
      hideCenter
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      isActive: 0,
      tabs: [
        '我关注的',
        '个人信息',
        '系统公告'
      ],
      data: {
        photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center/img/photo.png',
        name: 'Mrs. 小水果',
        id: 'NC3841039',
        registerTime: '2016-01-01',
        phone: '1841759312',
        ownFarm: '3',
        rank: 40,
        focus: [
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon1.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon2.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon3.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon4.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon5.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon6.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon7.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon8.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon9.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/center-focus/img/icon10.png'
        ],
        notice: [
          {
            title: '您预定的农场可以收获了',
            detail: '恭喜~您预定的黑土地农场玉米已经成熟,可以将其收获了.'
          },
          {
            title: '如何玩转农场',
            detail: '想要体验农夫的生活吗，想要享受清新的空气和明媚的阳光吗，快来农场吧。'
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
.center-focus{
  background: url(img/center-focus.png?__sprite);
  width: 801px;
  height: 472px;
}
.center-focus ul{
  overflow: hidden;
  padding: 0 30px;
}
.center-focus li{
  float: left;
  width: 16.6%;
  height: 107px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.center-focus img{
  display: block;
}
.center-infor{
  padding: 13px 40px 0;
}
.center-infor li{
  color: #5e1f12;
  font-size: 24px;
  padding-bottom: 16px;
  padding-top: 31px;
  border-bottom: 3px solid rgba(16,14,10,0.2);
}
.center-infor li span{
  display: inline-block;
  width: 145px;
}
.center-notice{
  padding: 15px 5px 0;
}
.center-notice ul{
  max-height: 384px;
  overflow-y: auto;
}
.center-notice-icon{
  background: url(img/icon.png?__sprite);
  width: 88px;
  height: 66px;
  margin-left: 26px;
  margin-right: 19px;
}
.center-notice li{
  padding-top: 12px;
  padding-bottom: 18px;
  color: #5e1f12;
  display: flex;
  align-items: flex-end;
}
.center-notice li:nth-child(even){
  background: rgba(0,0,0,0.2);
}
.center-notice h2{
  font-size: 24px;
  margin-bottom: 16px;
}
.center-notice p{
  font-size: 16px;
}
.center{
  display: flex;
}

.center-photo{
  width: 76px;
  height: 77px;
  background-image: url(img/center-photo.png?__sprite);
  text-align: center;
  padding-top: 4px;
  margin-right: 12px;
}
.center-photo img{
  width: 68px;
  height: 68px;
  border-radius: 50%;
}
.center-person{
  display: flex;
  align-items: center;
  padding-top: 49px;
  padding-left: 41px;
  margin-bottom: 91px;
  text-shadow: 0px 2px #fff9e3,
         0px -2px #fff9e3,
         2px 0px #fff9e3,
         -2px 0px #fff9e3;
  
}
.center-text h2{
  font-size: 24px;
  margin-bottom: 11px;
}
.center-text p{
  font-size: 20px;
}
.center-c1 ul{
  padding-left: 64px;
}
.center-c1 li{
  width: 180px;
  height: 64px;
  margin-bottom: 11px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  padding-top: 16px;
  text-shadow: 0px 3px #b26d22,
         0px -3px #b26d22,
         3px 0px #b26d22,
         -3px 0px #b26d22;
  background-image: url(img/center-li.png?__sprite);
}
.center-c1 li.active{
  background-image: url(img/center-li-active.png?__sprite);
  text-shadow: 0px 3px #b81b1d,
         0px -3px #b81b1d,
         3px 0px #b81b1d,
         -3px 0px #b81b1d;
}


.center-c2{
  margin-left: 41px;
  padding-top: 56px;
}

.center-bg{
  background: url(img/center-bg.png?__sprite);
  width: 810px;
  height: 472px;
}
</style>
