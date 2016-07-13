<template>
  <section class="farm">
    <ul v-for="items in data">
      <li v-for="item in items.cols" @click="change(item)">
        <div class="farm-floor" v-show="item.hasFloor" :class="{'empty': item.isFloorEmpty}"></div>
        <img :src="item.src" v-show="item.isShow"></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  vuex: {
    state: {
      isCollect: state => state.isCollect,
      isBasket: state => state.isBasket,
      isChemical: state => state.isChemical,
      isPickaxe: state => state.isPickaxe,
      isSow: state => state.isSow,
      sowItem: state => state.sowItem
    }
  },
  methods: {
    change (item) {
      if (this.isCollect && item.isShow) {
        window.alert('您成功获得' + item.name)
        item.isShow = false
      } else if (this.isBasket && item.isShow) {
        window.alert('已收获至仓库')
        item.isShow = false
      } else if (this.isChemical && item.isFloorEmpty) {
        item.isFloorEmpty = !item.isFloorEmpty
        window.alert('已施肥')
      } else if (this.isPickaxe && !item.isFloorEmpty) {
        item.isShow = false
        item.isFloorEmpty = true
      } else if (this.isSow && !item.isShow && !item.isFloorEmpty) {
        item.isShow = true
        item.src = this.sowItem.thumb
        item.name = this.sowItem.name
      } else if (item.isShow && !this.isCollect && !this.isBasket && !this.isChemical && !this.isPickaxe && !this.isSow) {
        var confirm = window.confirm('是否要预定此物品')
        if (confirm === true) {
          window.alert('预定成功')
        }
      }
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
          cols: [
            {
              name: '橙子',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/a71df434-8698-4c9a-8f85-5c8955323b7f.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '橙子',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/a71df434-8698-4c9a-8f85-5c8955323b7f.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '橙子',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/a71df434-8698-4c9a-8f85-5c8955323b7f.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '橙子',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/a71df434-8698-4c9a-8f85-5c8955323b7f.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '卷心菜',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/025b6458-208e-4d63-b02e-116342bbaa06.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '玉米',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/3f70fa19-2e3f-4f36-a3d1-7884705bdf47.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        },
        {
          cols: [
            {
              name: '花',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/690c4d5b-e416-4c28-94d6-f4e9510ea88d.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '花',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/690c4d5b-e416-4c28-94d6-f4e9510ea88d.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '花',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/690c4d5b-e416-4c28-94d6-f4e9510ea88d.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }, {
              name: '花',
              src: 'http://img0.fengqucdn.com/cmsres/20160620/690c4d5b-e416-4c28-94d6-f4e9510ea88d.png',
              isShow: true,
              hasFloor: true,
              isFloorEmpty: false
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.farm-floor{
  width: 199px;
  height: 100px;
  background-image: url(img/floor.png?__sprite);
}
.farm-floor.empty{
  background-image: url(img/floor-empty.png?__sprite);
}

.farm{
  display: flex;
  padding-left: 213px;
  padding-top: 66px;
}
.farm ul{
  transform: rotate(64deg);
  position: absolute;
}
.farm li{
  transform: rotate(-64deg);
  position: relative;
  margin:8px 0;
  width:199px;
  height: 100px;
}
.farm ul:nth-child(1){

}
.farm ul:nth-child(2){
  left: 311px;
  top: 117px;
}
.farm ul:nth-child(3){
  left: 409px;
  top: 167px;
}
.farm ul:nth-child(4){
  left: 570px;
  top: 249px;
}
.farm ul:nth-child(5){
  left: 671px;
  top: 300px;
}
.farm ul:nth-child(6){
  left: 772px;
  top: 349px;
}
.farm img{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-65%);
}
</style>
