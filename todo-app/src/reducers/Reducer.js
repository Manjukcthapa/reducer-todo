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
  console.log(action);
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];

      case 'TOGGLE_COMPLETED':
          return state.map(todo => {
                  if(todo.id === action.payload) {
                    return {...todo, completed: !todo.completed}
                  }
                  else {
                    return todo;
                  }
              })
              
    default:
      return state;
  }
}
