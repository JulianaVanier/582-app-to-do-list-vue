<template>
  <HeaderApp></HeaderApp>
  <section class="body-app">
    <div class="box-body">
      <div class="box-body-left">
        <CategoriesLists
          :lists="lists"
          :tasks="tasks"
          @tasksOfList="tasksOfList"
          @importantList="importantList"
          @deleteList="deleteList"
          @addNewList="addNewList"
        ></CategoriesLists>
      </div>
      <div class="box-body-right">
        <ListOfTasks
          :tasks="tasks"
          :lists="lists"
          :idListDisplay="idListDisplay"
          :idListImportant="idListImportant"
          :nameListDisplay="nameListDisplay"
          v-model="name"
          @addLabelImportant="addLabelImportant"
          @deleteThisTask="deleteThisTask"
          @removeLabelImportant="removeLabelImportant"
          @addNewTask="addNewTask"
        ></ListOfTasks>
      </div>
      <!-- {{ this.counter }} -->
    </div>
  </section>
</template>

<script>
import CategoriesLists from "./components/CategoriesLists.vue";
import ListOfTasks from "./components/ListOfTasks.vue";
import HeaderApp from "./components/HeaderApp.vue";
// import { onMounted } from "vue";
// import { ref } from "vue";

export default {
  name: "App",
  data() {
    return {
      idListDisplay: 0,
      idListImportant: 0,
      nameListDisplay: "",
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
        {
          id: 2,
          name: "Home",
          qt: 0,
        },
        {
          id: 3,
          name: "Vacation",
          qt: 0,
        },
      ],
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
        },
        {
          id: 2,
          name: "Dedicate 30 minutes to declutter and organize the kitchen pantry.",
          date: "2023-01-02",
          listId: 2,
          labelImportant: false,
        },
        {
          id: 3,
          name: "Water indoor plants and check for signs of pests.",
          date: "2023-01-03",
          listId: 2,
          labelImportant: false,
        },
        {
          id: 4,
          name: "Book admission tickets for Disneyland and Disney California Adventure parks.",
          date: "2023-01-04",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 5,
          name: " Secure hotel accommodation within the Disney Resort for the duration of the trip.",
          date: "2023-01-05",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 6,
          name: " Make advanced dining reservations at popular Disney restaurants.",
          date: "2023-01-06",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 7,
          name: "Select preferred FastPass attractions to minimize wait times.",
          date: "2023-01-07",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 8,
          name: "Set up a dedicated savings account for the upcoming vacation using automated transfers.",
          date: "2023-01-08",
          listId: 1,
          labelImportant: false,
        },
        {
          id: 9,
          name: "Clean out the dryer vent to ensure proper airflow and prevent potential hazards.",
          date: "2023-01-09",
          listId: 2,
          labelImportant: false,
        },
        {
          id: 10,
          name: "Create a detailed daily itinerary, including must-visit attractions and entertainment shows.",
          date: "2023-01-06",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 11,
          name: "Set a budget for souvenirs and merchandise purchases throughout the trip.",
          date: "2023-01-07",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 12,
          name: "Research potential investment opportunities in renewable energy stocks.",
          date: "2023-01-08",
          listId: 1,
          labelImportant: false,
        },
        {
          id: 13,
          name: "Rearrange and categorize books on the bookshelf by genre or alphabetical order.",
          date: "2023-01-09",
          listId: 2,
          labelImportant: false,
        },
      ],
    };
  },
  components: {
    CategoriesLists,
    ListOfTasks,
    HeaderApp,
  },
  methods: {
    addLabelImportant(id) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          this.tasks[i].labelImportant = true;
          console.log(this.tasks[i].labelImportant);
        }
      }
    },
    removeLabelImportant(id) {
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          this.tasks[i].labelImportant = false;
          console.log(this.tasks[i].labelImportant);
        }
      }
    },
    deleteThisTask(id) {
      // if (confirm("Are you sure you want to delete this task?") != true) return;
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id === id) {
          this.tasks.splice(i, 1);
        }
      }
      this.counterTasksPerList();
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
      this.idListImportant = false;
      for (let i = 0; i < this.lists.length; i++) {
        if (this.lists[i].id === id) {
          this.nameListDisplay = this.lists[i].name;
        }
      }
    },
    importantList() {
      this.idListImportant = true;
      this.idListDisplay = 0;
      this.nameListDisplay = "Important";
    },
    addNewTask(listId, name) {
      // console.log(newTask);
      // console.log(idListDisplay);
      this.tasks.push({
        id: this.tasks.length + 1,
        name: name,
        date: new Date().toISOString().slice(0, 10),
        listId: listId,
        labelImportant: false,
      });
      // this.lists[listId - 1].qt = this.lists[listId - 1].qt + 1;
      this.counterTasksPerList();
    },
    counterTasksPerList() {
      // console.log("chips");
      for (let i = 0; i < this.lists.length; i++) {
        this.lists[i].qt = 0;
        for (let j = 0; j < this.tasks.length; j++) {
          if (this.tasks[j].listId === this.lists[i].id) {
            this.lists[i].qt = this.lists[i].qt + 1;
          }
        }
      }
    },
    addNewList(name) {
      // if (name === "") {
      //   alert("Please, enter a name for the list.");
      // } else {
      //   this.lists.push({
      //     id: this.lists.length + 1,
      //     name: name,
      //     qt: 0,
      //   });
      this.lists.push({
        id: this.lists.length + 1,
        name: name,
        qt: 0,
      });
    },
  },
  mounted: function () {
    this.counterTasksPerList();
    // console.log("ju");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");

#app {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
// STYLE APP
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // background-color: #faf9f8;
}
.body-app {
  height: 100%;
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
    width: 18%;
    height: 100%;
    background-color: white;
    border-right: 1px solid #d5d5d6;
  }
  .box-body-right {
    width: 83%;
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
      color: #292827;
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
        cursor: pointer;
      }
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }

  // STYLE CATEGORIES LISTS
  .box-menu {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  .qt-tasks {
    padding-right: 20px;
    font-family: "Poppins", sans-serif;
    color: #292827;
  }
  // STYLE TASKITEM
  .contentTask {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-task {
    display: flex;
    justify-content: space-around;
    .task-item {
      background-color: #ffffff;
      font-family: "Poppins", sans-serif;
      color: #292827;
      // font-size: 14px;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;

      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      border-radius: 5px;
      margin: 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: #f1eded;
        cursor: pointer;
      }
      img {
        width: 15px;
        height: 15px;
        margin: 0 10px;
      }
      p {
        margin-left: 10px;
      }
      .done p {
        text-decoration: line-through;
      }
    }
  }
  .add-new-list {
    margin-top: 30px;
    background-color: #77c9a4;
    .form-add-list {
      height: 40px;
      display: flex;
      align-items: center;
      form {
        width: 100%;
        ::placeholder {
          color: white;
          font-size: 16px;
          font-family: "Poppins", sans-serif;
          padding-left: 10px;
        }
        .input-add-list {
          border: none;
          font-family: "Poppins", sans-serif;
          font-size: 16px;
          color: #292827;
          width: 80%;
          height: 30px;
          background-color: #77c9a4;
        }
        .input-btn-list {
          border: none;
          background-color: #ffffff;
          padding: 4px 7px;
          border-radius: 100%;
          color: #77c9a4;
        }
      }
    }
  }
  // ListOfTasks
  .box-title-list {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 20px;

    h2 {
      font-family: "Poppins", sans-serif;
      color: #00095e;
      font-size: 25px;
      margin: 20px 0 10px 20px;
      letter-spacing: 1px;
    }
  }
  .box-add-task {
    background-color: #ffffff;
    font-family: "Poppins", sans-serif;
    color: #42b883;
    // font-size: 14px;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 5px;
    margin: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: #f1eded;
      cursor: pointer;
    }
  }
  .box-task {
    display: flex;
    justify-content: space-around;
    .task-item {
      background-color: #ffffff;
      font-family: "Poppins", sans-serif;
      color: #292827;
      // font-size: 14px;
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 20px;

      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      border-radius: 5px;
      margin: 0.5rem;
      cursor: pointer;
      &:hover {
        background-color: #f1eded;
        cursor: pointer;
      }
      img {
        width: 15px;
        height: 15px;
        margin: 0 10px;
      }
      p {
        margin-left: 10px;
      }
      .done p {
        text-decoration: line-through;
      }
    }
  }
  .form-add-task {
    display: flex;
    align-items: center;
    justify-content: start;
    background-color: white;
    font-family: "Poppins", sans-serif;
    /* color: #292827; */
    width: 100%;
    height: 50px;
    align-items: center;
    padding-left: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 5px;
    margin: 0.5rem;
    cursor: pointer;
    form {
      width: 100%;
      ::placeholder {
        color: #77c9a4;
        font-size: 16px;
        font-family: "Poppins", sans-serif;
      }
      .input-add-task {
        border: none;
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        color: #292827;
        width: 35%;
        height: 30px;
      }
      .input-btn {
        border: none;
        background-color: #77c9a4;
        padding: 4px 7px;
        border-radius: 100%;
        color: white;
      }
    }
  }
}
</style>
