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
      expect(animalsSelector(state).length).toEqual(16);
      expect(animalsSelector(state)[0]).toEqual({
        name: "tiger",
        users: [
          {
            fullName: "Liliana Britt",
            id: "5fbfe211f360cb3058158a7c",
            points: 93
          },
          {
            fullName: "Jeanie Melendez",
            id: "5fbfe2112f528372cc224027",
            points: 65
          }
        ]
      });
    });
  });
});
