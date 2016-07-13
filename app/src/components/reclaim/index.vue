<template>
  <section class="reclaim dialog" :class="{ 'hide': isHideReclaim }">
    <div class="dialog-close" @click="hideReclaim()"></div>
    <header>
      <h1 class="reclaim-estate-title" v-if="index != -1">庄园开垦</h1>
      <h1 class="reclaim-farm-title" v-if="index == -1">农场开垦</h1>
    </header>
    <div class="reclaim-r1">
      <div class="estate-r1c1">
        <ul>
          <li v-for="item in data.banner"><img :src="item" alt=""></li>
        </ul>
      </div>
      <div class="reclaim-r1c2">
        <section class="reclaim-farm" v-if="index == -1">
          <ul class="reclaim-farm-selects">
            <li>
              <select>
                <option value="">按照类型</option>
              </select>
            </li>
            <li>
              <select>
                <option value="">按照面积</option>
              </select>
            </li>
            <li>
              <select>
                <option value="">按照位置</option>
              </select>
            </li>
          </ul>
          <ul class="reclaim-farm-list">
            <li v-for="item in data.farm" @click="farmDetail($index)">
              <div class="reclaim-farm-list-c1">
                <img :src="item.photo" alt="">
              </div>
              <div class="reclaim-farm-list-c2">
                <h2>{{item.name}}</h2>
                <div class="reclaim-farm-star" v-for="star in item.star"></div>
              </div>
              <div class="reclaim-farm-list-c3">
                <div class="reclaim-farm-price">{{item.price}}</div>
                <div class="reclaim-farm-comment">{{item.comment}}评价</div>
              </div>
            </li>
          </ul>
        </section>
        <ul class="reclaim-estate" v-if="index != -1">
          <li><span>农场类型</span>{{data.farm[index].type}}<div class="reclaim-estate-focus">关注</div></li>
          <li><span>农场面积</span>{{data.farm[index].area}}</li>
          <li><span>出售数量</span>{{data.farm[index].num}}</li>
          <li><span>农场位置</span>{{data.farm[index].location}}</li>
          <li><span>宣传图片</span>
            <ul class="reclaim-estate-photo">
              <li v-for="item in data.farm[index].banners"><img :src="item" alt=""></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { hideReclaim } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      isHideReclaim: state => state.isHideReclaim
    },
    actions: {
      hideReclaim
    }
  },
  methods: {
    farmDetail (index) {
      this.index = index
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      index: -1,
      data: {
        banner: [
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim/img/img1.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim/img/img2.png',
          'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim/img/img3.png'
        ],
        farm: [
          {
            photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-farm/img/img1.png',
            name: '三只母鸡农场',
            price: '¥200/亩',
            comment: '4123',
            star: 5,
            type: '其他庄园',
            area: '24亩',
            num: 3,
            location: '上海市松江区',
            banners: [
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img1.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img2.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img3.png'
            ]

          }, {
            photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-farm/img/img2.png',
            name: '苹果妹妹农场',
            price: '¥180/亩',
            comment: '3481',
            star: 4,
            type: '水果庄园',
            area: '14亩',
            num: 2,
            location: '上海市长宁区',
            banners: [
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img1.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img2.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img3.png'
            ]
          }, {
            photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-farm/img/img3.png',
            name: '小麦田农场',
            price: '¥160/亩',
            comment: '3123',
            star: 3,
            type: '蔬菜庄园',
            area: '4亩',
            num: 1,
            location: '上海市普陀区',
            banners: [
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img1.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img2.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img3.png'
            ]
          }, {
            photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-farm/img/img1.png',
            name: '三只母鸡农场',
            price: '¥200/亩',
            comment: '4123',
            star: 5,
            type: '其他庄园',
            area: '24亩',
            num: 3,
            location: '上海市松江区',
            banners: [
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img1.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img2.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img3.png'
            ]

          }, {
            photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-farm/img/img2.png',
            name: '苹果妹妹农场',
            price: '¥180/亩',
            comment: '3481',
            star: 4,
            type: '水果庄园',
            area: '14亩',
            num: 2,
            location: '上海市长宁区',
            banners: [
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img1.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img2.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img3.png'
            ]
          }, {
            photo: 'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-farm/img/img3.png',
            name: '小麦田农场',
            price: '¥160/亩',
            comment: '3123',
            star: 3,
            type: '蔬菜庄园',
            area: '4亩',
            num: 1,
            location: '上海市普陀区',
            banners: [
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img1.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img2.png',
              'https://raw.githubusercontent.com/zhouwenbin/farm/gh-pages/modules/reclaim-estate/img/img3.png'
            ]
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.reclaim-r1{
  display: flex;
  justify-content: space-around;
  padding:60px 30px 0;
}
.reclaim-r1c2{
  background-image: url(img/bg.png?__sprite);
  width: 751px;
  height: 472px;
}
.reclaim-r1c1 li{
  margin-bottom: 10px;
}

.reclaim-farm-title{
  text-indent: -999em;
  width: 152px;
  height: 43px;
  display: inline-block;
  background-image: url(img/title2.png?__sprite);
}
.reclaim-farm-selects{
  display: flex;
  padding: 17px 0 17px 22px;
}
.reclaim-farm-selects select{
  appearance:none;
  width: 210px;
  display: inline-block;
  height: 47px;
  line-height: 47px;
  background-image: url(img/select.png?__sprite);
  background-color: transparent;
  border:none;
  font-size: 18px;
  color: #fff;
  padding-left: 21px;
  margin-right: 31px;
}
.reclaim-farm-list{
  padding: 0 7px;
  height: 348px;
  overflow-y: auto;
}
.reclaim-farm-list li{
  display: flex;
  align-items: center;
  padding: 10px 22px 15px;
}
.reclaim-farm-list li:nth-child(odd){
  background-color: rgba(0,0,0,0.1);
}
.reclaim-farm-list-c2{
  flex:1;
  margin-left: 20px;
}
.reclaim-farm-list-c3{
  text-align: right;
}
.reclaim-farm-star{
  width: 32px;
  height: 31px;
  display: inline-block;
  background-image: url(img/star.png?__sprite);
}
.reclaim-farm-list img{
  background: #fff6d8;
    box-shadow: 0px 1px 0px 1px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding-top: 2px;
    padding-right: 2px;
}
.reclaim-farm-list h2,
.reclaim-farm-price{
  font-size: 24px;
  text-shadow: 0px 2px #fff9e3,
         0px -2px #fff9e3,
         2px 0px #fff9e3,
         -2px 0px #fff9e3;
}
.reclaim-farm-list h2{
  color:#5e1f12;
  margin-bottom: 11px;
}
.reclaim-farm-price{
  color: #e11301;
  margin-bottom: 21px;
}
.reclaim-farm-comment{
  font-size: 14px;
  color: #5e1f12;
}

.reclaim-estate-title{
  text-indent: -999em;
  width: 150px;
  height: 41px;
  display: inline-block;
  background-image: url(img/title1.png?__sprite);
}
.reclaim-estate{
  color:#5e1f12;
  font-size: 24px;
  padding: 7px;
  text-shadow: 0px 2px #fff9e3,
         0px -2px #fff9e3,
         2px 0px #fff9e3,
         -2px 0px #fff9e3;
}
.reclaim-estate>li{
  border-bottom: 3px solid rgba(16,14,10,0.2);
  padding:21px 0 21px 34px;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.reclaim-estate>li:last-child{
  border-bottom: none;
}
.reclaim-estate>li span{
  width: 130px;
}
.reclaim-estate-photo{
  overflow: hidden;
}
.reclaim-estate-photo>li{
  margin-right: 10px;
  float: left;
}
.reclaim-estate-focus{
  background-image: url(img/focus.png?__sprite);
  width: 108px;
  height: 48px;
  text-indent: -999em;
  position: absolute;
  right: 42px;
  top: 9px;
}

</style>
