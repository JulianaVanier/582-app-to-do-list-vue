<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <ListOfLists></ListOfLists>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import ListOfLists from "./components/ListOfLists.vue";

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
        }
      ],
      tasks: [
        {
          id: 1,
          name: "Task 1",
          date: "2023-01-01",
          responsability: "Person 1",
          list_id: 1,
        },
        {
          id: 2,
          name: "Task 2",
          date: "2023-01-02",
          responsability: "Person 2",
          list_id: 2,
        },
        {
          id: 3,
          name: "Task 3",
          date: "2023-01-03",
          responsability: "Person 3",
          list_id: 2,
        },
        {
          id: 4,
          name: "Task 4",
          date: "2023-01-04",
          responsability: "Person 4",
          list_id: 3,
        },
        {
          id: 5,
          name: "Task 5",
          date: "2023-01-05",
          responsability: "Person 5",
          list_id: 3,
        },
        {
          id: 6,
          name: "Task 6",
          date: "2023-01-06",
          responsability: "Person 6",
          list_id: 3,
        },
      ]
    };
  },
  components: {
    // HelloWorld,
    ListOfLists,
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
