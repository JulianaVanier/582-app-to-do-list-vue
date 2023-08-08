<template>
  <div class="task-item">
    <h2>{{ tasks.name }}</h2>
    <p>{{ tasks.date }}</p>
    <p>{{ tasks.responsability }}</p>
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
