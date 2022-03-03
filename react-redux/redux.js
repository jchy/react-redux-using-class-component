// We should have a store

class Store{
    constructor(initialState,reducer){
        this.state = initialState;
        this.reducer = reducer;
    }
    getState(){
        return this.state
    }
    dispatch(action){
        this.state = this.reducer(action,this.state)
    }
}

const initialState ={
    todo : []
}

const reducer = ({type,payload},state) =>{
    switch(type){
        case "ADD_TODO": return{
            ...state,todo:[...state.todo,payload]
        }
        case "UPDATE_TODO": return {
            ...state,todo:state.todo.map((item)=>item.title === payload ? {...item,status : !item.status}: item)
        }
        default: return state
    }

}
var store = new Store(initialState,reducer);
// console.log(store.getState())

const action = {
    type:"ADD_TODO",
    payload : {
        title : "Learn Redux",
        status : false
    }
}

store.dispatch(action);
console.log(store.getState())

const action2 = {
    type:"UPDATE_TODO",
    payload : "Learn Redux"
}
store.dispatch(action2)
console.log(store.getState())