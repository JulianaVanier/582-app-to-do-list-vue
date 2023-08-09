<template>
  <ListOfTasks :tasks="tasks"></ListOfTasks>
</template>

<script>
import ListOfTasks from "./ListOfTasks.vue";

export default {
  name: "CategoriesLists",
  props: {
    tasks: {
      type: Object,
      required: true,
    },
  },

  components: {
    ListOfTasks,
  },
};
</script>

<style scoped lang="scss"></style>
