<template>
  <section class="house" @click="hideProp()" :class="house"></section>
  <section class="tree"></section>
</template>

<script>
import { hideProp } from '../../vuex/actions'
export default {
  vuex: {
    state: {
      house: state => state.house
    },
    actions: {
      hideProp
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.house{
  position: absolute;
}
.house1{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/9324c5ff-b1f3-4cc6-aa69-c8de63a07c86.png);
  width: 299px;
  height: 309px;
  left: 766px;
  top: 16px;
}
.house2{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/78c23efb-9031-4990-9143-1f0b2a2fff54.png);
  width: 241px;
  height: 290px;
  left: 785px;
  top: 26px;
}
.house3{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/2667e22e-65bf-4181-863c-e52b21ecb8ef.png);
  width: 276px;
  height: 203px;
  left: 776px;
  top: 81px;
}
.house4{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/313fee61-eaa5-4cc5-8cd4-90cc602cafc0.png);
  width: 304px;
  height: 256px;
  left: 782px;
  top: 62px;
}
.house5{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/f954398d-778c-4d68-a17e-6af145039789.png);
  width: 240px;
  height: 320px;
  left: 786px;
  top: 0px;
}
.house6{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/962f8605-b83c-430a-bfda-6699ac394989.png);
  width: 243px;
  height: 245px;
  left: 811px;
  top: 50px;
}
.house7{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/3fd88a10-6dbb-4e62-b5f0-239828bf8987.png);
  width: 303px;
  height: 317px;
  left: 760px;
  top: 0px;
}
.house8{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/eb022642-902f-41ea-bdfe-07af29470f48.png);
  width: 300px;
  height: 271px;
  left: 773px;
  top: 58px;
}
.house9{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/c3ab32c2-a03b-45ec-8648-8e664394b369.png);
  width: 228px;
  height: 216px;
  left: 818px;
  top: 97px;
}
.tree{
  background: url(http://img0.fengqucdn.com/cmsres/20160620/9990ff34-f54e-40d9-8e33-53075e0b84ce.png);
  width: 171px;
  height: 163px;
  position: absolute;
  left: 976px;
  top: 221px;
}

</style>
