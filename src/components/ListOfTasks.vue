<template>
  <!-- <h1>{{ tasks[0].listName }}</h1> -->
  <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :tasks="task"
    :title="task.listName"
    @addLabelImportant="addLabelImportant"
    @deleteThisTask="deleteThisTask"
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
    addLabelImportant(id) {
      console.log("testimportant2");
      // console.log(id);
      this.$emit("addLabelImportant", id);
    },
    deleteThisTask(id) {
      this.$emit("deleteThisTask", id);
    },
    deleteList(id) {
      this.$emit("deleteList", id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
