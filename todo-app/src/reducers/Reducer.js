export const initialState = [
  {
    item: "shopping list",
    completed: false,
    id: 38929334
  },

  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

export function reducer(state, action) {
  switch (action.type) {
    case "addItem":
      {console.log(state)}
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    default:
      return state;
  }
}
