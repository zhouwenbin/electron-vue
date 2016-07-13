<template>
  <div class="mask" :class="{ 'hide': isHideMask }"></div>
</template>

<script>
export default {
  vuex: {
    state: {
      isHideMask: state => state.isHideMask
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mask{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,0.8);
	z-index: 999;
}
</style>
