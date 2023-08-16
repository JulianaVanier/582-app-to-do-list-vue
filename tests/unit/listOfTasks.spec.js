import { shallowMount } from "@vue/test-utils";
import ListOfTasks from "@/components/ListOfTasks.vue";

describe("ListOfTasks.vue", () => {
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

  it("renders lists when passed", async () => {
    const tasks = [
      {
        id: 1,
        name: "Analyze monthly expenses and income to create an updated budget plan.",
        date: "2023-01-01",
        listId: 1,
        labelImportant: true,
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
        idListImportant: true,
        idListDisplay: 1,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          },
        ],
      },
    });

    const filteredTasks = wrapper.vm.filterList;
    if (wrapper.props("idListImportant")) {
      expect(filteredTasks).toEqual([tasks[0]]);
    } else {
      expect(filteredTasks).toEqual([tasks[1]]);
    }
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

  it("action to removeImportant emits a event", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: true,
      completed: false,
    };
    const wrapper = shallowMount(ListOfTasks, {
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
    await wrapper.vm.removeLabelImportant(1);
    expect(wrapper.emitted().removeLabelImportant[0][0]).toBe(1);
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

  it("emits addNewTask event when addNewTask method is called", async () => {
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

    await wrapper.vm.taskCompleted(tasks.id);

    expect(wrapper.emitted().taskCompleted).toBeTruthy();
    expect(wrapper.emitted().taskCompleted[0]).toEqual([tasks.id]);
  });

  it("action to taskCompleted emits a event", async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: true,
      completed: false,
    };
    const wrapper = shallowMount(ListOfTasks, {
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
    await wrapper.vm.taskCompleted(1);
    expect(wrapper.emitted().taskCompleted[0][0]).toBe(1);
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
