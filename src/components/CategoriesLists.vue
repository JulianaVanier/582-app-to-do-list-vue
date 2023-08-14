<template>
  <!-- <div class="box-menu"><img src="/img/menu.png" alt="" /></div> -->
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
    <div class="add-new-list">
      <!-- <div class="btn-add-new-list">Add new list</div> -->
      <div class="form-add-list" v-if="idListDisplay != 0">
        <form @submit.prevent="addNewList">
          <input
            type="text"
            name="task"
            placeholder="+ Add new list"
            v-model="name"
            class="input-add-list"
            maxlength="15"
          />
          <input class="input-btn-list" type="submit" value="+" />
        </form>
      </div>
    </div>
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
      this.$emit("tasksOfList", id);
    },

    showImportantTasks() {
      this.$emit("importantList");
    },
    addNewList() {
      this.$emit("addNewList", this.name);
      this.name = "";
    },
  },
};
</script>

<style scoped lang="scss"></style>
