<template>
  <div class="box-title-list">
    <h2>{{ nameListDisplay }}</h2>
  </div>
  <div class="form-add-task" v-if="idListDisplay != 0">
    <form @submit.prevent="addNewTask(idListDisplay)">
      <input
        type="text"
        name="task"
        placeholder="+ Add new task"
        v-model="name"
        class="input-add-task"
        maxlength="40"
      />
      <input class="input-btn" type="submit" value="+" />
    </form>
  </div>
  <TaskItem
    v-for="task in filterList"
    :key="task.id"
    :tasks="task"
    :lists="lists"
    :title="task.listName"
    :idListDisplay="idListDisplay"
    @addLabelImportant="addLabelImportant"
    @deleteThisTask="deleteThisTask"
    @removeLabelImportant="removeLabelImportant"
    @taskCompleted="taskCompleted"
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
    idListImportant: {
      type: Boolean,
      required: true,
    },
    nameListDisplay: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      newTask: "",
    };
  },
  components: {
    TaskItem,
  },
  methods: {
    addLabelImportant(id) {
      console.log(id);
      this.$emit("addLabelImportant", id);
    },
    deleteThisTask(id) {
      this.$emit("deleteThisTask", id);
    },
    removeLabelImportant(id) {
      this.$emit("removeLabelImportant", id);
    },
    addNewTask(idListDisplay) {
      this.$emit("addNewTask", idListDisplay, this.name);
      this.name = "";
    },
    taskCompleted(id) {
      this.$emit("taskCompleted", id);
    },
  },
  computed: {
    filterList() {
      var list = [];
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
          }
        }
      }
      return list;
    },
  },
};
</script>

<style scoped lang="scss"></style>
