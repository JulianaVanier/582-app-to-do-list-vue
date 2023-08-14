import { shallowMount } from "@vue/test-utils";
import CategoriesLists from "@/components/CategoriesLists.vue";

describe("CategoriesLists.vue", () => {
  //   // Props
  it("renders props.tasks when passed", () => {
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

    expect(wrapper.exists()).toBe(true);
  });

  //   // Button Important

  //   it("important button is calling function displayImportantTasks", () => {});

  //   it("condition display message", () => {});

  //   it("loop displaying list of importantTasks", () => {});

  //   // Button Today

  //   it("important button is calling function displayTodayTasks", () => {});

  //   it("condition display message", () => {});

  //   it("loop displaying list of todayTasks", () => {});

  //   // Import Component

  //   it("import component TaskItem working, emits", async () => {
  //     const allData = {
  //       props: {
  //         tasks: {
  //           id: 1,
  //           name: "Analyze monthly expenses and income to create an updated budget plan.",
  //           date: "2023-01-01",
  //           listId: 1,
  //           labelImportant: false,
  //           completed: false,
  //         },
  //         lists: [{ id: 1, name: "List 1", qt: 0 }],
  //       },
  //     };

  //     const wrapper = shallowMount(CategoriesLists, {
  //       props: { allData },
  //     });

  //     const listButton = wrapper.find('[data-testid="buttonList"]');
  //     await listButton.trigger("click");

  //     expect(wrapper.emitted("tasksOfList")).toBeTruthy();
  //     expect(wrapper.emitted("tasksOfList")[0][0]).toBe(1);
  //   });

  //   // Listeners

  //   it("listeners receiving emit", () => {});

  //   // Emit

  //   it("emit an addImportant event", () => {});

  //   it("emit an addToday event", () => {});

  //   it("emit task id event", () => {});
});
