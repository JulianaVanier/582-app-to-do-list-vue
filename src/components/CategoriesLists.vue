<template>
  <div>
    <ul>
      <li>
        <button v-for="task in tasks" :key="task.id">
          {{ task.labelImportant === true ? "Important" : "" }}
        </button>
      </li>
      <li v-for="list in lists" :key="list.id">
        <button data testid="buttonList" @click="showTasksOfList(list.id)">
          {{ list.name }}
          {{ list.id }}
        </button>
      </li>
    </ul>
    <ListOfTasks
      :tasks="tasks"
      @deleteList="deleteList"
      @addLabelImportant="addLabelImportant"
      @deleteThisTask="deleteThisTask"
    ></ListOfTasks>
  </div>

  <button data testid="deleteList" @click="deleteList">Delete List</button>
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
    lists: {
      type: Object,
      required: true,
    },
  },

  components: {
    ListOfTasks,
  },
  methods: {
    addLabelImportant(id) {
      this.$emit("addLabelImportant", id);
    },
    deleteThisTask(id) {
      this.$emit("deleteThisTask", id);
    },
    deleteList(id) {
      this.$emit("deleteList", id);
    },
    showTasksOfList(id) {
      // console.log("test-buttonlist");
      // this.$emit("showTasksOfList", id);
      // console.log(id);
      this.$emit("tasksOfList", id);
      // this.$emit("tasksOfList");
      // alert(`${this.list.id}`);
    },
  },
};
</script>

<style scoped lang="scss"></style>
