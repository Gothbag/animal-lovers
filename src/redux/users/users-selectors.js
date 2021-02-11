import { createSelector } from "reselect";

export const usersSelector = state => state.users || [];

export const activeUsersSelector = createSelector(
  usersSelector,
  users => users.filter(users => users.isActive)
);

export const baseAnimalsSelector = createSelector(
  activeUsersSelector,
  activeUsers => {
    const repeatAnimals = activeUsers.reduce((acc, activeUser) => {
      const { animals } = activeUser;
      return [...acc, ...animals];
    }, []);
    return [...new Set(repeatAnimals)];
  }
);

const getFullName = user => {
  const { name } = user;
  return `${name.given} ${name.surname}`;
};

const getAnimalFan = user => ({
  fullName: getFullName(user),
  id: user.id,
  points: user.points
});

export const animalsSelector = createSelector(
  [baseAnimalsSelector, activeUsersSelector],
  (baseAnimals, activeUsers) =>
    baseAnimals.map(baseAnimal => {
      const users = activeUsers.reduce((acc, activeUser) => {
        const doesLikeAnimal = activeUser.animals.includes(baseAnimal);
        if (doesLikeAnimal) {
          return [...acc, getAnimalFan(activeUser)];
        }
        return acc;
      }, []);

      return {
        name: baseAnimal,
        users
      };
    })
);
