import { shallowMount } from "@vue/test-utils";
import TaskItem from "@/components/TaskItem.vue";

describe("TaskItem.vue", () => {
  it("renders props tasks when passed", () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(TaskItem, {
      props: { tasks:tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          }]
      },
    });

    expect(wrapper.find("p").text()).toBe(tasks.name);
  });

  it("changes class of label when tasks is completed",  async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: true,
    };
    const wrapper = shallowMount(TaskItem, {
      props: { tasks:tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          }]
      },
    });
    expect(wrapper.find("label").classes()).toContain("done");
  });
  
 it("show image icon star empty when tasks.labelImportant is false" , async () => {
    const tasks = {
      id: 1,
      name: "Analyze monthly expenses and income to create an updated budget plan.",
      date: "2023-01-01",
      listId: 1,
      labelImportant: false,
      completed: false,
    };
    const wrapper = shallowMount(TaskItem, {
      props: { tasks:tasks,
        lists: [
          {
            id: 1,
            name: "Financial",
            qt: 0,
          }]
      },
    });
    expect(wrapper.find('img[alt="icon star empty"]').exists()).toBe(true);
 });

 it("show image icon star full when tasks.labelImportant is true" , async () => {
  const tasks = {
    id: 1,
    name: "Analyze monthly expenses and income to create an updated budget plan.",
    date: "2023-01-01",
    listId: 1,
    labelImportant: true,
    completed: false,
  };
  const wrapper = shallowMount(TaskItem, {
    props: { tasks:tasks,
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        }]
    },
  });
  expect(wrapper.find('img[alt="icon star full"]').exists()).toBe(true);
});

it("checked if tasks is completed" , async () => {
  const tasks = {
    id: 1,
    name: "Analyze monthly expenses and income to create an updated budget plan.",
    date: "2023-01-01",
    listId: 1,
    labelImportant: true,
    completed: true,
  };
  const wrapper = shallowMount(TaskItem, {
    props: { tasks:tasks,
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        }]
    },
  });
  expect(wrapper.find('input[type="checkbox"]').element.checked).toBe(true);
});

it("action to addImportant emits a event" , async () => {
  const tasks = {
    id: 1,
    name: "Analyze monthly expenses and income to create an updated budget plan.",
    date: "2023-01-01",
    listId: 1,
    labelImportant: true,
    completed: false,
  };
  const wrapper = shallowMount(TaskItem, {
    props: { tasks:tasks,
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        }]
    },
  });
  await wrapper.vm.addImportant(1);
  expect(wrapper.emitted().addLabelImportant[0][0]).toBe(1);
});

it("action to removeImportant emits a event" , async () => {
  const tasks = {
    id: 1,
    name: "Analyze monthly expenses and income to create an updated budget plan.",
    date: "2023-01-01",
    listId: 1,
    labelImportant: true,
    completed: false,
  };
  const wrapper = shallowMount(TaskItem, {
    props: { tasks:tasks,
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        }]
    },
  });
  await wrapper.vm.removeImportant(1);
  expect(wrapper.emitted().removeLabelImportant[0][0]).toBe(1);
});

it("action to deleteThisTask emits a event" , async () => {
  const tasks = {
    id: 1,
    name: "Analyze monthly expenses and income to create an updated budget plan.",
    date: "2023-01-01",
    listId: 1,
    labelImportant: true,
    completed: false,
  };
  const wrapper = shallowMount(TaskItem, {
    props: { tasks:tasks,
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        }]
    },
  });
  await wrapper.vm.deleteTask(1);
  expect(wrapper.emitted().deleteThisTask[0][0]).toBe(1);
});

it("action to taskCompleted emits a event" , async () => {
  const tasks = {
    id: 1,
    name: "Analyze monthly expenses and income to create an updated budget plan.",
    date: "2023-01-01",
    listId: 1,
    labelImportant: true,
    completed: false,
  };
  const wrapper = shallowMount(TaskItem, {
    props: { tasks:tasks,
      lists: [
        {
          id: 1,
          name: "Financial",
          qt: 0,
        }]
    },
  });
  await wrapper.vm.taskCompleted(1);
  expect(wrapper.emitted().taskCompleted[0][0]).toBe(1);
});
});
