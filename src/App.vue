<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <!-- <CategoriesLists></CategoriesLists> -->

  <!-- <TaskItem
    v-for="task in tasks"
    :key="task.id"
    :tasks="task"
    :title="task.listName"
    @addImportant="executeImportant"
    @deleteTask="executedeleteTask"
  >
  </TaskItem> -->
  <!-- <ListOfTasks
    :tasks="tasks"
    @deleteList="deleteList"
    @addLabelImportant="addLabelImportant"
    @deleteThisTask="deleteThisTask"
  ></ListOfTasks> -->
  <CategoriesLists
    :lists="lists"
    :tasks="tasks"
    @deleteList="deleteList"
    @addLabelImportant="addLabelImportant"
    @deleteThisTask="deleteThisTask"
  ></CategoriesLists>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import CategoriesLists from "./components/CategoriesLists.vue";
// import TaskItem from "./components/TaskItem.vue";
// import ListOfTasks from "./components/ListOfTasks.vue";
import CategoriesLists from "./components/CategoriesLists.vue";

export default {
  name: "App",
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "List 1",
        },
        {
          id: 2,
          name: "List 2",
        },
        {
          id: 3,
          name: "List 3",
        },
      ],
      tasks: [
        {
          id: 1,
          name: "Task 1",
          date: "2023-01-01",
          responsability: "Person 1",
          listId: 1,
          listName: "List 1",
          labelImportant: false,
        },
        {
          id: 2,
          name: "Task 2",
          date: "2023-01-02",
          responsability: "Person 2",
          listId: 2,
          listName: "List 2",
          labelImportant: false,
        },
        {
          id: 3,
          name: "Task 3",
          date: "2023-01-03",
          responsability: "Person 3",
          listId: 2,
          listName: "List 2",
          labelImportant: false,
        },
        {
          id: 4,
          name: "Task 4",
          date: "2023-01-04",
          responsability: "Person 4",
          listId: 3,
          listName: "List 3",
          labelImportant: false,
        },
        {
          id: 5,
          name: "Task 5",
          date: "2023-01-05",
          responsability: "Person 5",
          listId: 3,
          listName: "List 3",
          labelImportant: false,
        },
        {
          id: 6,
          name: "Task 6",
          date: "2023-01-06",
          responsability: "Person 6",
          listId: 3,
          listName: "List 3",
          labelImportant: false,
        },
      ],
    };
  },
  components: {
    // HelloWorld,
    // CategoriesLists,
    // TaskItem,
    // ListOfTasks,
    CategoriesLists,
  },
  methods: {
    addLabelImportant(id) {
      console.log("testimportant3");
      for (let i = 0; i < this.tasks.length; i++) {
        // console.log("testimportant4");
        // console.log(this.tasks.length);
        // console.log(id);
        if (this.tasks[i].id === id) {
          this.tasks[i].labelImportant = true;
          console.log(this.tasks[i].labelImportant);
        }
      }
    },
    deleteThisTask(id) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          // https://bytearcher.com/articles/how-to-delete-value-from-array/
          this.tasks.splice(i, 1);
        }
      }
    },
    deleteList(id) {
      for (let i = 0; i < this.lists.length; i++) {
        if (this.lists[i].id === id) {
          this.lists.splice(i, 1);
        }
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
