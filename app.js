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

function addView(viewFunc) {
  viewFunc(defaultState);
}

// Reducer that processing the  state 
addView((state) => {
  console.log(`There are ${state.courses.length} courses in the library`);
});

addView((state) => {
  console.log(`The latest course in the library: ${state.courses[state.courses.length -1].name}`);
});

// 
defaultState.courses.push({
  name: "This is new course",
  topic: "Really does not matter"
});