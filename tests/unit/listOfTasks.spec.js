import { shallowMount } from "@vue/test-utils";
import ListOfTasks from "@/components/ListOfTasks.vue";

describe("ListOfTasks.vue", () => {
  // Props
  it("renders props.tasks when passed", () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(ListOfTasks, {
      props: { tasks },
    });

    expect(wrapper.exists()).toBe(true);
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
    const wrapper = shallowMount(ListOfTasks, {
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
    const wrapper = shallowMount(ListOfTasks, {
      props: { tasks },
    });

    await wrapper.vm.deleteThisTask(tasks.id);

    expect(wrapper.emitted().deleteThisTask).toBeTruthy();
    expect(wrapper.emitted().deleteThisTask[0]).toEqual([tasks.id]);
  });

  it("filterList for idListImportant is false", async () => {
    const tasks = [
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
        name: "Dedicate 30 minutes to declutter and organize the kitchen pantry.",
        date: "2023-01-02",
        listId: 2,
        labelImportant: false,
        completed: false,
      },
    ];

    const wrapper = shallowMount(ListOfTasks, {
      props: {
        tasks: tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
          },
          {
            id: 2,
            name: "Home",
          },
          {
            id: 3,
            name: "Vacation",
          },
        ],
        idListDisplay: 2,
        idListImportant: false,
        nameListDisplay: "Home",
      },
    });

    const filteredTasks = wrapper.vm.filterList;
    const expectedTasks = tasks.filter((task) => task.listId === 2);

    expect(filteredTasks).toEqual(expectedTasks);
  });

  it("filterList when idListImportant is true", async () => {
    const tasks = [
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
        name: "Dedicate 30 minutes to declutter and organize the kitchen pantry.",
        date: "2023-01-02",
        listId: 2,
        labelImportant: false,
        completed: false,
      },
    ];

    const wrapper = shallowMount(ListOfTasks, {
      props: {
        tasks: tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
          },
          {
            id: 2,
            name: "Home",
          },
          {
            id: 3,
            name: "Vacation",
          },
        ],
        idListDisplay: 2,
        idListImportant: true,
        nameListDisplay: "Home",
      },
    });

    const filteredTasks = wrapper.vm.filterList;
    const expectedTasks = tasks.filter(
      (task) => task.listId === 2 && task.labelImportant === true
    );

    expect(filteredTasks).toEqual(expectedTasks);
  });
});
