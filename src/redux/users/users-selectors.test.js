import { activeUsersSelector, animalsSelector, baseAnimalsSelector } from ".";

import { activeUsers, state } from "./__mocks__";

describe("users selectors", () => {
  describe("activeUsersSelector", () => {
    it("should get all active users", () => {
      expect(activeUsersSelector(state)).toEqual(activeUsers);
    });
  });

  describe("animalsSelector", () => {
    it("should get all animals from the active users", () => {
      expect(baseAnimalsSelector(state)).toEqual([
        "tiger",
        "panda",
        "jaguar",
        "zebra",
        "horse",
        "gorilla",
        "lion",
        "bear",
        "elephant",
        "penguin",
        "cat",
        "kangaroo",
        "koala",
        "monkey",
        "dog",
        "rat"
      ]);
    });
  });

  describe("animalsSelector", () => {
    it("should get all animal objects", () => {
      expect(animalsSelector(state)).toEqual([
        {
          name: "tiger",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "panda",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "jaguar",
          users: ["Liliana Britt", "Lidia Newton"]
        },
        {
          name: "zebra",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "horse",
          users: ["Liliana Britt", "Jeanie Melendez", "Lidia Newton"]
        },
        {
          name: "gorilla",
          users: ["Liliana Britt"]
        },
        {
          name: "lion",
          users: ["Liliana Britt", "Jeanie Melendez", "Lidia Newton"]
        },
        {
          name: "bear",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "elephant",
          users: ["Liliana Britt"]
        },
        {
          name: "penguin",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "cat",
          users: ["Liliana Britt"]
        },
        {
          name: "kangaroo",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "koala",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "monkey",
          users: ["Liliana Britt", "Jeanie Melendez"]
        },
        {
          name: "dog",
          users: ["Liliana Britt", "Jeanie Melendez", "Lidia Newton"]
        },
        {
          name: "rat",
          users: ["Lidia Newton"]
        }
      ]);
    });
  });
});
