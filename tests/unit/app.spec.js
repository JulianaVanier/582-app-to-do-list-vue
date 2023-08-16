import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("listens for an event to addLabelImportant and changes the label to important", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    await wrapper.vm.addLabelImportant(1);
    expect(wrapper.vm.tasks[0].labelImportant).toBe(true);
  });

  it("listens for an event to removeLabelImportant and changes to false", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    wrapper.vm.removeLabelImportant(1);
    expect(wrapper.vm.tasks[0].labelImportant).toBe(false);
  });

  it("listens for an event to taskCompleted and changes to true or false", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    wrapper.vm.taskCompleted(1);
    expect(wrapper.vm.tasks[0].completed).toBe(true);

    wrapper.vm.taskCompleted(1);
    expect(wrapper.vm.tasks[0].completed).toBe(false);
  });

  it("listens for an event to deleteThisTask and removes the task from the array", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    const idToDelete = 2;

    await wrapper.vm.deleteThisTask(idToDelete);
    expect(wrapper.vm.tasks.length).toBe(1);
  });

  it("listens for an event to deleteList and removes the list from the array", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    const idToDelete = 1;
    await wrapper.vm.deleteList(idToDelete);
    expect(wrapper.vm.lists.length).toBe(0);
  });

  it("listens for tasksOfList and returns the name of the list", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    const idToFind = 1;

    await wrapper.vm.tasksOfList(idToFind);
    expect(wrapper.vm.nameListDisplay).toBe("Financial");
    expect(wrapper.vm.collapsed).toBe(true);
  });

  it("listens for importantList and returns the name of the list", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    const id = 1;

    await wrapper.vm.importantList(id);
    expect(wrapper.vm.nameListDisplay).toBe("Important");
    expect(wrapper.vm.collapsed).toBe(true);
    expect(wrapper.vm.idListImportant).toBe(true);
  });

  it("listens for addNewTask and adds a new task to the array", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    const newTask = {
      id: 3,
      name: "Pay off credit card debt.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };


    await wrapper.vm.addNewTask(newTask);
    expect(wrapper.vm.tasks.length).toBe(3);
  });

  it("Listen for counterTasksPerList and returns the number of tasks per list", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });



    await wrapper.vm.counterTasksPerList(1);
    expect(wrapper.vm.lists[0].qt).toBe(2);
  });

  it("Listen for addNewList and adds a new list to the array", async () => {
    const wrapper = shallowMount(App);
    await wrapper.setData({
      tasks: [
        {
          id: 1,
          name: "Analyze monthly expenses and income to create an updated budget plan.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
        {
          id: 2,
          name: "Pay off credit card debt.",
          date: "2023-01-01",
          listId: 1,
          labelImportant: false,
          completed: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        },
      ],
    });

    const newList = {
      id: 2,
      name: "Work",
      qt: 0,
    };

    await wrapper.vm.addNewList(newList);
    expect(wrapper.vm.lists.length).toBe(2);
  });

});
