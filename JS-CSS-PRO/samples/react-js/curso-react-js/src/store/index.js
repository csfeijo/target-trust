import { createStore } from 'redux';

const CURSOS_ESTADO_INICIAL = {
  data: [
    'HTML',
    'CSS',
    'JS',
  ],
};

function courses(state = CURSOS_ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state, data: [...state.data, action.title] };
      break;
    case 'REMOVE_COURSE':
      let newData = state.data;
      const index = newData.findIndex(k => k == action.title);
      newData.splice(index, 1);

      return { ...state, data: [...state.data] };
      break;
    default:
      return state;
      break;
  }
}

const store = createStore(courses);

export default store;
