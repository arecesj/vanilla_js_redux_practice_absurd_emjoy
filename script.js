// 'use strict';
window.onload = () => {
  console.log('hello world!');
  const displayFace = document.querySelector('#display-face');
  document.querySelector('#happy').addEventListener('click', () => {
    store.dispatch({ type: 'HAPPY' });
    const newFace = store.getState().face;
    displayFace.textContent = newFace;
  });
  document.querySelector('#sad').addEventListener('click', () => {
    store.dispatch({ type: 'SAD' });
    const newFace = store.getState().face;
    displayFace.textContent = newFace;
  });
  document.querySelector('#angry').addEventListener('click', () => {
    store.dispatch({ type: 'ANGRY' });
    const newFace = store.getState().face;
    displayFace.textContent = newFace;
  });
  document.querySelector('#confused').addEventListener('click', () => {
    store.dispatch({ type: 'CONFUSED' });
    const newFace = store.getState().face;
    displayFace.textContent = newFace;
  });
};
