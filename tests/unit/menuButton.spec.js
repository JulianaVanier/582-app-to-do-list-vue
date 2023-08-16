import { shallowMount } from "@vue/test-utils";
import MenuButton from "@/components/MenuButton.vue";

describe("MenuButton.vue", () => {
it("toggleMenu true and false when clicked", () => {
    const wrapper = shallowMount(MenuButton);
    wrapper.find("img").trigger("click");
    expect(wrapper.vm.collapsed).toBe(true);
    wrapper.find("img").trigger("click");
    expect(wrapper.vm.collapsed).toBe(false);
  });
});