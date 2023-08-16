import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("listens for an event to addLabelImportant and changes the label to important", () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(App, {
      props: {
        tasks: tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          },
        ],
      },
    });

    wrapper.vm.addLabelImportant(1);
    expect(wrapper.vm.tasks[0].labelImportant).toBe(true);
  });

  it("listens for an event to removeLabelImportant and changes to false", () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: true,
      completed: false,
    };
    const wrapper = shallowMount(App, {
      props: {
        tasks: tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          },
        ],
      },
    });

    wrapper.vm.removeLabelImportant(1);
    expect(wrapper.vm.tasks[0].labelImportant).toBe(false);
  });

  it("listens for an event to taskCompleted and changes to true or false", () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(App, {
      props: {
        tasks: tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          },
        ],
      },
    });

    wrapper.vm.taskCompleted(1);
    expect(wrapper.vm.tasks[0].completed).toBe(true);

    wrapper.vm.taskCompleted(1);
    expect(wrapper.vm.tasks[0].completed).toBe(false);
  });

});
