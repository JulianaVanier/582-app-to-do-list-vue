<template>
  <!-- <h2>{{ list.name }}</h2> -->
  <div class="box-task">
    <div class="task-item">
      <input
        type="checkbox"
        name="task"
        value="{{tasks.id}}"
        @click="taskCompleted"
      />
      <!-- <h1>{{ tasks.listName }}</h1> -->
      <label for="task" :class="{ done }"
        ><p data-testid="taskName">{{ tasks.name }}</p></label
      >
      <!-- <p>Date: {{ tasks.date }}</p>
    <p>Responsability: {{ tasks.responsability }}</p> -->
      <div data testid="addImportant">
        <img
          v-if="tasks.labelImportant === false"
          src="/img/icon-star.png"
          alt="icon star"
          @click="addImportant"
        />
        <img
          v-else
          src="/img/favourite.png"
          alt="icon star"
          @click="removeImportant"
        />
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
      done: false,
      isCompleted: false,
    };
  },
  methods: {
    addImportant() {
      // console.log("testimportant");
      this.$emit("addLabelImportant", this.tasks.id);
    },
    removeImportant() {
      this.$emit("removeLabelImportant", this.tasks.id);
    },
    deleteTask() {
      // console.log("testdelete");
      this.$emit("deleteThisTask", this.tasks.id);
    },
    taskCompleted() {
      this.done = !this.done;
      this.$emit("taskCompleted", this.tasks.id);
      this.isCompleted = !this.isCompleted;
    },
  },
};
</script>

<style scoped lang="scss"></style>
