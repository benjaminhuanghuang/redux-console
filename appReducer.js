const {
  createStore
} = require('redux');

const defaultState = {
  courses: [{
      name: 'Learning React',
      topic: 'React',
    },
    {
      name: 'Learning Angular',
      topic: 'Angular',
    },
    {
      name: 'Using Redux with Angular',
      topic: 'Angular',
    }
  ]
};

// The reducer to run the actions and change the state
function reducer(state, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return Object.assign({}, state, {
        courses: [...state.courses, action.course]  });
    default:
      return state;
  }
}
// reducer to run all actions
// 
const store = createStore(reducer, defaultState);



// -- Old version
// function addView(viewFunc) {
//   viewFunc(defaultState);
// }

function addView(viewFunc) {
  //viewFunc(store.getState());
  store.subscribe(() => {
    // Be called when state changed
    viewFunc(store.getState());
  })
}

addView((state) => {
  console.log(`There are ${state.courses.length} courses in the library`);
});

addView((state) => {
  console.log(`The latest course in the library: ${state.courses[state.courses.length -1].name}`);
});

//  Change the store
store.dispatch({
  type: 'ADD_COURSE',
  course: {
    name: 'This is the new course',
    topic: 'Really does not matter'
  }
});