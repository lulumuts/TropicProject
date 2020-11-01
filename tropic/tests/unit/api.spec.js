import { shallowMount } from "@vue/test-utils";
import api from "@/components/api.vue";
const axios = require("axios");
const getAllData = require("@/api");
jest.mock("axios");

describe("api.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(api, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("renders snapshot when list is not empty", async () => {
    const todos = {
      data: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ],
    };
    const wrapper = shallowMount(api, { todos });
    expect(wrapper.element).toMatchSnapshot();
  });
  // with jest uses a mock value to test the api vs making a real request

  it("returns the api data", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
      ],
    });

    const title = await getAllData();
    expect(title).toEqual([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
    ]);
  });
});
