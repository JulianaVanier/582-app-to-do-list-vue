<template>
  <div class="box-lists">
    <div class="btn-list" @click="showImportantTasks">
      <img
        v-if="taskInImportant === false"
        src="/img/icon-star.png"
        alt="icon star empty"
      />
      <img v-else src="/img/favourite.png" alt="icon star full" />Important
    </div>
    <div v-for="list in lists" :key="list.id" class="contentTask">
      <div
        class="btn-list"
        data-testid="buttonList"
        id="buttonList"
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
      <div data testid="form-add-list" class="form-add-list">
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
</template>

<script>
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
    taskInImportant: {
      type: Boolean,
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
