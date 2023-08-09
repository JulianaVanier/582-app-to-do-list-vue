<template>
  <div class="task-item">
    <!-- <h1>{{ tasks.listName }}</h1> -->
    <h2 data-testid="taskName">{{ tasks.name }}</h2>
    <p>Date: {{ tasks.date }}</p>
    <p>Responsability: {{ tasks.responsability }}</p>
    <button data testid="addImportant" @click="addImportant">
      Add Important
    </button>
    <button data testid="deleteTask" @click="deleteTask">Delete Task</button>
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
    lists: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addImportant() {
      this.$emit("addImportant", this.tasks.id);
    },
    deleteTask() {
      this.$emit("deleteTask", this.tasks.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
