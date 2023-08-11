<template>
  <!-- <button v-for="task in tasks" :key="task.id">
    {{ task.labelImportant === true ? "Important" : "" }}
  </button> -->
  <section class="body-app">
    <div class="box-body">
      <div class="box-body-left">
        <CategoriesLists
          :lists="lists"
          :tasks="tasks"
          @tasksOfList="tasksOfList"
          @importantList="importantList"
        ></CategoriesLists>
      </div>
      <div class="box-body-right">
        <ListOfTasks
          :tasks="tasks"
          :idListDisplay="idListDisplay"
          :idListImportant="idListImportant"
          @deleteList="deleteList"
          @addLabelImportant="addLabelImportant"
          @deleteThisTask="deleteThisTask"
        ></ListOfTasks>
      </div>
    </div>
  </section>
</template>

<script>
import CategoriesLists from "./components/CategoriesLists.vue";
import ListOfTasks from "./components/ListOfTasks.vue";

export default {
  name: "App",
  data() {
    return {
      idListDisplay: 0,
      idListImportant: 0,
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
    CategoriesLists,
    ListOfTasks,
  },
  methods: {
    addLabelImportant(id) {
      // console.log("testimportant3");
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
    tasksOfList(id) {
      this.idListDisplay = id;
      // for (let i = 0; i < this.tasks.length; i++) {
      //   if (this.tasks[i].listId === id) {
      //     // console.log(this.tasks[i].listId);
      //     this.id = id;
      //   }
      // }
    },
    importantList() {
      this.idListImportant = true;
      console.log("look", this.idListImportant);
      // for (let i = 0; i < this.tasks.length; i++) {
      //   if (this.tasks[i].labelImportant === true) {
      //     // console.log(this.tasks[i].listId);
      //     idListImportant.push(this.tasks[i]);
      //   }
      // }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
  // background-color: #f1eded;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // background-color: #faf9f8;
}
.body-app {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .box-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .box-body-left {
    width: 20%;
    height: 100%;
    background-color: white;
    border-right: 1px solid #d5d5d6;
  }
  .box-body-right {
    width: 80%;
    height: 100%;
    background-color: #faf9f8;
  }
  .box-lists {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;

    .btn-list {
      font-family: "Poppins", sans-serif;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;
      // border-bottom: 1px solid #d5d5d6;
      cursor: pointer;
      &:hover {
        background-color: #f1eded;
      }
    }
  }
}
</style>
