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
  <!-- <h1>{{ showListCategories }}</h1> -->

  <div>
    <ul>
      <li v-for="list in lists" :key="list.id">
        {{ lists.name }}
      </li>
    </ul>
    <ListOfTasks
      :tasks="tasks"
      @deleteList="deleteList"
      @addImportant="addImportant"
      @deleteTask="deleteTask"
    ></ListOfTasks>
  </div>
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
      type: Array,
      required: true,
    },
  },

  components: {
    ListOfTasks,
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

  // computed: {
  //   showListCategories() {
  //     // return this.lists.filter((list) => list.id === this.tasks.listId);
  //     for (let i = 0; i < this.lists.length; i++) {
  //       return this.lists[i].name;
  //     }
  //   },
  // },
};
</script>

<style scoped lang="scss"></style>
