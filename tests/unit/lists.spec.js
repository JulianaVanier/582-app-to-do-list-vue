import { shallowMount } from "@vue/test-utils";
import Lists from "@/components/Lists";

describe("Lists.vue", () => {
  // Props
  it("renders props.tasks when passed", () => {});

  it("renders props.importantTasks when passed", () => {});

  it("renders props.todayTasks when passed", () => {});

  // Button Important

  it("important button is calling function displayImportantTasks", () => {});

  it("condition display message", () => {});

  it("loop displaying list of importantTasks", () => {});

  // Button Today

  it("important button is calling function displayTodayTasks", () => {});

  it("condition display message", () => {});

  it("loop displaying list of todayTasks", () => {});

  // Import Component

  it("import component TaskItem working", () => {});

  // Listeners

  it("listeners receiving emit", () => {});

  // Emit

  it("emit an addImportant event", () => {});

  it("emit an addToday event", () => {});

  it("emit task id event", () => {});
});
