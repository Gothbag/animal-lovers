export const activeUsers = [
  {
    id: "5fbfe211f360cb3058158a7c",
    name: {
      given: "Liliana",
      surname: "Britt"
    },
    points: 93,
    animals: [
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
      "dog"
    ],
    isActive: true,
    age: 21
  },
  {
    id: "5fbfe2112f528372cc224027",
    name: {
      given: "Jeanie",
      surname: "Melendez"
    },
    points: 65,
    animals: [
      "kangaroo",
      "koala",
      "tiger",
      "lion",
      "panda",
      "dog",
      "penguin",
      "zebra",
      "horse",
      "bear",
      "monkey"
    ],
    isActive: true,
    age: 33
  },
  {
    id: "5fbfe2113215361d6363a231",
    name: {
      given: "Lidia",
      surname: "Newton"
    },
    points: 19,
    animals: ["horse", "lion", "dog", "jaguar", "rat"],
    isActive: true,
    age: 28
  }
];

export const state = {
  users: [
    ...activeUsers,
    {
      id: "5fbfe211d32e20623de48785",
      name: {
        given: "Irma",
        surname: "Mendez"
      },
      points: 28,
      animals: ["cat", "horse", "elephant", "tiger", "gorilla"],
      isActive: false,
      age: 20
    },
    {
      id: "5fbfe2113215361d6363a231",
      name: {
        given: "Lidia",
        surname: "Newton"
      },
      points: 19,
      animals: ["horse", "lion", "dog", "jaguar"],
      isActive: false,
      age: 28
    },
    {
      id: "5fbfe211436c18b5bf92297c",
      name: {
        given: "Janell",
        surname: "Romero"
      },
      points: 93,
      animals: [
        "kangaroo",
        "penguin",
        "horse",
        "dog",
        "tiger",
        "jaguar",
        "cat",
        "bear",
        "gorilla",
        "panda",
        "lion",
        "monkey",
        "koala",
        "elephant"
      ],
      isActive: false,
      age: 21
    }
  ]
};
