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

  // it("delete list", () => {
  //   const lists = [
  //     { id: 1, name: "List 1", qt: 3 },
  //     { id: 2, name: "List 2", qt: 5 },
  //   ];

  //   const wrapper = shallowMount(CategoriesLists, {
  //     props: {
  //       lists: lists,
  //       tasks: [],
  //     },
  //   });

  //   wrapper.vm.deleteList(1);
  //   expect(wrapper.vm.lists).toHaveLength(1);
  //   expect(wrapper.vm.lists[0].name).toBe("List 2");
  // });
});
