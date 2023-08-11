<template>
  <!-- <h2>{{ list.name }}</h2> -->
  <div class="box-task">
    <div class="task-item">
      <input type="checkbox" name="task" value="{{tasks.id}}" />
      <!-- <h1>{{ tasks.listName }}</h1> -->
      <label for="task"
        ><p data-testid="taskName">{{ tasks.name }}</p></label
      >
      <!-- <p>Date: {{ tasks.date }}</p>
    <p>Responsability: {{ tasks.responsability }}</p> -->
      <div data testid="addImportant" @click="addImportant">
        <img v-if="!isAddedImp" src="/img/icon-star.png" alt="icon star" />
        <img v-else-if="isAddedImp" src="/img/favourite.png" alt="icon star" />
      </div>
      <div data testid="deleteTask" @click="deleteTask">
        <img src="/img/delete.png" alt="icon delete" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
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
  data() {
    return {
      isAddedImp: false,
    };
  },
  methods: {
    addImportant() {
      // console.log("testimportant");
      this.$emit("addLabelImportant", this.tasks.id);
      this.isAddedImp = true;
    },
    deleteTask() {
      // console.log("testdelete");
      this.$emit("deleteThisTask", this.tasks.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
