const INITIAL_STATE = { face: '' };

function rootReducer(state = INITIAL_STATE, action) {
  if (action.type === 'HAPPY') return { face: '｡^‿^｡' };
  else if (action.type === 'SAD') return { face: 'ಥ_ಥ' };
  else if (action.type === 'ANGRY') return { face: 'ノಠ_ಠノ' };
  else if (action.type === 'CONFUSED') return { face: '(●__●)' };
  return state;
}
const store = Redux.createStore(rootReducer);
