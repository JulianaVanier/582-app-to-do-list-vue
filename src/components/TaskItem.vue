<template>
  <div class="box-task">
    <div class="task-item">
      <input
        type="checkbox"
        name="task"
        value="true"
        @change="taskCompleted"
        :checked="tasks.completed"
      />
      <label for="task" :class="[tasks.completed ? 'done' : '']"
        ><p data-testid="taskName">
          {{ tasks.name }}
        </p></label
      >
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
      this.$emit("addLabelImportant", this.tasks.id);
    },
    removeImportant() {
      this.$emit("removeLabelImportant", this.tasks.id);
    },
    deleteTask() {
      this.$emit("deleteThisTask", this.tasks.id);
    },
    taskCompleted() {
      this.$emit("taskCompleted", this.tasks.id);
    },
  },
};
</script>

<style scoped lang="scss"></style>
