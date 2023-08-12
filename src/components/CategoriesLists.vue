<template>
  <div class="box-menu"><img src="/img/menu.png" alt="" /></div>
  <div class="box-lists">
    <div class="btn-list" @click="showImportantTasks">
      <img src="/img/icon-star.png" alt="" />Important
    </div>
    <div v-for="list in lists" :key="list.id" class="contentTask">
      <div
        class="btn-list"
        data
        testid="buttonList"
        @click="showTasksOfList(list.id)"
      >
        <img src="/img/icon-list.png" alt="icon list" />{{ list.name }}
      </div>
      <div class="qt-tasks">{{ list.qt }}</div>
      <div>
        <img
          class="imgDelete"
          src="/img/delete.png"
          alt="icon delete"
          style="margin-left: auto"
          @click="deleteList(list.id)"
        />
      </div>
    </div>

    <!-- <ListOfTasks
      :tasks="tasks"
      @deleteList="deleteList"
      @addLabelImportant="addLabelImportant"
      @deleteThisTask="deleteThisTask"
      ></ListOfTasks> -->
  </div>

  <!-- <button data testid="deleteList" @click="deleteList">Delete List</button> -->
</template>

<script>
// import ListOfTasks from "./ListOfTasks.vue";

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
    // ListOfTasks,
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
      console.log("btndellis", id);
    },
    showTasksOfList(id) {
      // console.log("test-buttonlist");
      // this.$emit("showTasksOfList", id);
      // console.log(id);
      this.$emit("tasksOfList", id);
      // this.$emit("tasksOfList");
      // alert(`${this.list.id}`);
    },
    // showImportantTask(id) {
    //   this.$emit("importantList", id);
    //   console.log(id);
    // },
    showImportantTasks() {
      this.$emit("importantList");
    },
  },
};
</script>

<style scoped lang="scss"></style>
