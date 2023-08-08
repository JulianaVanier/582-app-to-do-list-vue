import { shallowMount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem";

describe("TaskItem.vue", () => {
  // Props
  it("renders props.tasks when passed", () => {
    const tasks = {
      id: 1,
      name: "Task 1",
      date: "2023-01-01",
      responsability: "Person 1",
      list_id: 1,
    };
    const wrapper = shallowMount(TaskItem, {
      props: { tasks },
    });

    expect(wrapper.find("h2").text()).toBe(tasks.name);
    // expect(wrapper.text()).toMatch([task.name]);
  });

  // Emit
  //   it("emit an addImportant event", () => {});

  //   it("emit an addToday event", () => {});

  //   it("emit task id event", () => {});
});
