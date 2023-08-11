<template>
  <TaskItem
    v-for="task in filterList"
    :key="task.id"
    :tasks="task"
    :lists="lists"
    :title="task.listName"
    @addLabelImportant="addLabelImportant"
    @deleteThisTask="deleteThisTask"
  >
  </TaskItem>
  <!-- {{ idListImportant }} -->
  <!-- {{ idListDisplay }} -->
  <!-- <TaskItem v-for="task in filterImportant" :key="task.id" :tasks="task">
  </TaskItem> -->
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
    idListImportant: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    TaskItem,
  },
  methods: {
    addLabelImportant(id) {
      // console.log("testimportant2");
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
      // console.log("here", this.idListImportant);
      if (this.idListImportant === true) {
        for (let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].labelImportant === true) {
            list.push(this.tasks[i]);
          }
        }
      } else {
        for (let i = 0; i < this.tasks.length; i++) {
          if (this.tasks[i].listId === this.idListDisplay) {
            list.push(this.tasks[i]);
            // console.log(list);
          }
        }
      }
      return list;
    },
  },
};
</script>

<style scoped lang="scss"></style>
