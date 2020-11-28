import {createStore} from 'redux';

const form = document.querySelector("form")
const input = document.querySelector('input')
const ul = document.querySelector('ul');

const ADD_TODO ="ADD_TODO";
const DELDTE_TODO ="DELDTE_TODO";

const addToDo = (text) => {
    return{
        type: ADD_TODO,
        text
    }
}

const deleteToDo = (id) => {
    return{
        type:DELDTE_TODO,
        id,
    }
}

const reducer = (state = [], action ) => {
    console.log(action);
    switch(action.type){
        case ADD_TODO:
            return [{text:action.text, id: Date.now()}, ...state ];
        case DELDTE_TODO:
            return state.filter(toDo => toDo.id !== action.id);
        default :
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement('li');
        const btn = document.createElement('button');

        btn.innerText = "DEL";
        btn.addEventListener('click', dispatchDeleteTodo)
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos);

const onSubmit =(e) => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddTodo(toDo)
}

form.addEventListener('submit',onSubmit);