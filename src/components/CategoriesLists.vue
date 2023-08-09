<template>
  <!-- <div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <h1>{{ tasks[0].listName }}</h1>
      </li>
    </ul>
  </div> -->
  <!-- <h1>{{ tasks[0].listName }}</h1> -->
  <!-- <div v-for="list in lists" :key="list.id"></div> -->
  <!-- <li v-for="list in lists" :key="list.id">
    <h1>{{ lists }}</h1>
  </li> -->

  <div>
    <ul>
      <li v-for="list in lists" :key="list.id">
        {{ list.name }}
      </li>
    </ul>
    <!-- <h3 v-bind="lists">{{ lists.name }}</h3> -->
    <!-- <h1>{{ showListCategories }}</h1> -->

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
  },
};
</script>

<style scoped lang="scss"></style>
