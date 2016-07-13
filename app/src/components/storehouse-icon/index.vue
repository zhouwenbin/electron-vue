<template>
  <section class="storehouse-icon" @click="hideStorehouse()">仓库</section>
</template>

<script>
import { hideStorehouse } from '../../vuex/actions'

export default {
  vuex: {
    actions: {
      hideStorehouse
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.storehouse-icon{
	position: absolute;
	left: 40px;
	top: 607px;
	text-indent: -999em;
	width: 118px;
	height: 117px;
	background-image: url(img/icon.png?__sprite);
}
</style>
