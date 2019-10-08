export const instialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export function reducer(state, action) {
  switch (action.type) {
    case "BLA":
      return { ...state };
    default:
      return state;
  }
};
