<template>
  <!-- <button v-for="task in tasks" :key="task.id">
    {{ task.labelImportant === true ? "Important" : "" }}
  </button> -->
  <HeaderApp></HeaderApp>
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
          :lists="lists"
          :idListDisplay="idListDisplay"
          :idListImportant="idListImportant"
          :nameListDisplay="nameListDisplay"
          @deleteList="deleteList"
          @addLabelImportant="addLabelImportant"
          @deleteThisTask="deleteThisTask"
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

export default {
  name: "App",
  data() {
    return {
      idListDisplay: 0,
      idListImportant: 0,
      nameListDisplay: "",
      // counter: 0,
      lists: [
        {
          id: 1,
          name: "Financial",
        },
        {
          id: 2,
          name: "Home",
        },
        {
          id: 3,
          name: "Vacation",
        },
      ],
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          responsability: "Person 1",
          listId: 1,
          labelImportant: false,
        },
        {
          id: 2,
          name: "Dedicate 30 minutes to declutter and organize the kitchen pantry.",
          date: "2023-01-02",
          responsability: "Person 2",
          listId: 2,
          labelImportant: false,
        },
        {
          id: 3,
          name: "Water indoor plants and check for signs of pests.",
          date: "2023-01-03",
          responsability: "Person 3",
          listId: 2,
          labelImportant: false,
        },
        {
          id: 4,
          name: "Book admission tickets for Disneyland and Disney California Adventure parks.",
          date: "2023-01-04",
          responsability: "Person 4",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 5,
          name: " Secure hotel accommodation within the Disney Resort for the duration of the trip.",
          date: "2023-01-05",
          responsability: "Person 5",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 6,
          name: " Make advanced dining reservations at popular Disney restaurants.",
          date: "2023-01-06",
          responsability: "Person 6",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 7,
          name: "Select preferred FastPass attractions to minimize wait times.",
          date: "2023-01-07",
          responsability: "Person 7",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 8,
          name: "Set up a dedicated savings account for the upcoming vacation using automated transfers.",
          date: "2023-01-08",
          responsability: "Person 8",
          listId: 1,
          labelImportant: false,
        },
        {
          id: 9,
          name: "Clean out the dryer vent to ensure proper airflow and prevent potential hazards.",
          date: "2023-01-09",
          responsability: "Person 9",
          listId: 2,
          labelImportant: false,
        },
        {
          id: 10,
          name: "Create a detailed daily itinerary, including must-visit attractions and entertainment shows.",
          date: "2023-01-06",
          responsability: "Person 10",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 11,
          name: "Set a budget for souvenirs and merchandise purchases throughout the trip.",
          date: "2023-01-07",
          responsability: "Person 11",
          listId: 3,
          labelImportant: false,
        },
        {
          id: 12,
          name: "Research potential investment opportunities in renewable energy stocks.",
          date: "2023-01-08",
          responsability: "Person 12",
          listId: 1,
          labelImportant: false,
        },
        {
          id: 13,
          name: "Rearrange and categorize books on the bookshelf by genre or alphabetical order.",
          date: "2023-01-09",
          responsability: "Person 13",
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
    deleteThisTask(id) {
      if (confirm("Are you sure you want to delete this task?") != true) return;
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
  },
  computed: {
    // counterTasksPerList() {
    //   for (let i = 0; i < this.lists.length; i++) {
    //     let counter = 0;
    //     for (let j = 0; j < this.tasks.length; j++) {
    //       if (this.tasks[j].listId === this.lists[i].id) {
    //         this.counter++;
    //       }
    //     }
    //     this.lists[i].counterTasks = counter;
    //     console.log(this.lists[i].counterTasks);
    //   }
    //   return this.lists;
    // },
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
  // STYLE TASKITEM
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
}
</style>
