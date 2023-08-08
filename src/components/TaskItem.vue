<template>
  <div class="task-item">
    <h1>{{ tasks.listName }}</h1>
    <h2>Name: {{ tasks.name }}</h2>
    <p>Date:{{ tasks.date }}</p>
    <p>Responsability:{{ tasks.responsability }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: {
    tasks: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss"></style>
