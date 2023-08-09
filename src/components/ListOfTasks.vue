<template>
  <!-- <h1>{{ tasks[0].listName }}</h1> -->
  <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :tasks="task"
    :title="task.listName"
    @addImportant="addImportant"
    @deleteTask="deleteTask"
  >
  </TaskItem>

  <button data testid="deleteList" @click="deleteList">Delete List</button>
</template>

<script>
import TaskItem from "./TaskItem.vue";

export default {
  name: "ListOfTasks",
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
  components: {
    TaskItem,
  },
  methods: {
    addImportant() {
      this.$emit("addImportant", this.tasks.id);
    },
    deleteTask() {
      this.$emit("deleteTask", this.tasks.id);
    },
    deleteList() {
      this.$emit("deleteList", this.tasks.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
