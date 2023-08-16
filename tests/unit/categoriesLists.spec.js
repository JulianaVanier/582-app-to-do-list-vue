import { shallowMount } from "@vue/test-utils";
import CategoriesLists from "@/components/CategoriesLists.vue";

describe("CategoriesLists.vue", () => {
  it("renders props lists when passed", () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
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

    const renderedListElements = wrapper.findAll('[data-testid="buttonList"]');
    expect(renderedListElements).toHaveLength(1);
  });

  it("emits addLabelImportant event when addLabelImportant method is called", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
      props: { tasks },
    });

    await wrapper.vm.addLabelImportant(tasks.id);

    expect(wrapper.emitted().addLabelImportant).toBeTruthy();
    expect(wrapper.emitted().addLabelImportant[0]).toEqual([tasks.id]);
  });

  it("emits deleteThisTask event when deleteThisTask method is called", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
      props: { tasks },
    });

    await wrapper.vm.deleteThisTask(tasks.id);

    expect(wrapper.emitted().deleteThisTask).toBeTruthy();
    expect(wrapper.emitted().deleteThisTask[0]).toEqual([tasks.id]);
  });

  it("emits deleteList event when deleteList method is called", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
      props: { tasks },
    });

    await wrapper.vm.deleteList(tasks.id);

    expect(wrapper.emitted().deleteList).toBeTruthy();
    expect(wrapper.emitted().deleteList[0]).toEqual([tasks.id]);
  });

  it("emits showImportantTasks event when showImportantTasks method is called", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
      props: { tasks },
    });

    await wrapper.vm.showImportantTasks(tasks.id);

    expect(wrapper.emitted().importantList).toBeTruthy();
  });

  it("emits addNewList event when addNewList method is called", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
      props: { tasks },
    });

    await wrapper.vm.addNewList(tasks.id);

    expect(wrapper.emitted().addNewList).toBeTruthy();
  });

  it("action to showTasksOfList emits a event", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: true,
      completed: false,
    };
    const wrapper = shallowMount(CategoriesLists, {
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
    await wrapper.vm.showTasksOfList(1);
    expect(wrapper.emitted().tasksOfList[0][0]).toBe(1);
  });
});
