<template>
  <div class="box-menu" :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <img src="/img/menu.png" alt="" @click.prevent="toggleMenu" />
  </div>
</template>
<script>
export default {
  name: "MenuButton",
  props: {},
  data() {
    return {
      collapsed: false,
    };
  },

  methods: {
    toggleMenu() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped lang="scss">
.collapsed {
  transform: translateX(-100%);
}

.expanded {
  transform: translateX(0);
}
</style>
