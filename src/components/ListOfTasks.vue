<template>
  <h1>{{ idListDisplay }}</h1>
  <TaskItem
    v-for="task in filterList"
    :key="task.id"
    :tasks="task"
    :title="task.listName"
    @addLabelImportant="addLabelImportant"
    @deleteThisTask="deleteThisTask"
  >
  </TaskItem>
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
    idListDisplay: {
      type: Number,
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
  },
  computed: {
    filterList() {
      var list = [];
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].listId === this.idListDisplay) {
          list.push(this.tasks[i]);
        }
      }
      return list;
      // return this.tasks.filter((task) => task.listId === this.idListDisplay);
    },
  },
};
</script>

<style scoped lang="scss"></style>
