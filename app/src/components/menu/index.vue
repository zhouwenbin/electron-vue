<template>
  <nav class="menu">
    <ul>
      <li v-for="item in data" v-text="item.name" @click="changeMenu(item, $index)" :class="{'active': isActive == $index}"></li>
    </ul>
  </nav>
</template>

<script>
import { changeMenu } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      isActive: state => state.isActive
    },
    actions: {
      changeMenu
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
          name: '播种',
          type: 'sow'
        },
        {
          name: '采集',
          type: 'collect'
        },
        {
          name: '篮子',
          type: 'basket'
        },
        {
          name: '化肥',
          type: 'chemical'
        },
        {
          name: '锄头',
          type: 'pickaxe'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.menu{
  position: absolute;
  left: 799px;
  top: 624px;
}
.menu ul{
  display: flex;
}
.menu li{
  text-indent: -999em;
  width: 94px;
  height: 89px;
  margin-left: 4px;
}
.menu li.active{
  transform:scale(1.2);
}
.menu li:nth-child(1){
  background-image: url(img/icon0.png?__sprite);
}
.menu li:nth-child(2){
  background-image: url(img/icon1.png?__sprite);
}
.menu li:nth-child(3){
  background-image: url(img/icon2.png?__sprite);
}
.menu li:nth-child(4){
  background-image: url(img/icon3.png?__sprite);
}
.menu li:nth-child(5){
  background-image: url(img/icon4.png?__sprite);
}
</style>
