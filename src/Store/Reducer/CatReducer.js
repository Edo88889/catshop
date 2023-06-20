const initialState = {
    initialValue: [],
    arr: [],
    favorites: [],
    deleteFavorites: []
};
export const CatReducer = (state = initialState, action) => {
    if (action.type === 'DATA') {
        return {
        ...state,
            initialValue: action.payload
      }
    }
    if (action.type === 'ARR') {
        return {
            ...state,
            arr: [...state.arr, action.payload]
        };
    }
    if (action.type ==='FAVORITES'){
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        };
    }
    if (action.type ==='DELETEFAVORITES'){
        console.log('action.payload')
        return {
            ...state,
            deleteFavorites: state.favorites.filter((e,i) => e.i !== i)
        };
    }
    return state;
};