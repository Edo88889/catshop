
export const Data = (payload) => {
    return{
        type: 'DATA',
        payload:payload
    }
}
export const Arr = (payload) => {
    return{
        type: 'ARR',
        payload:payload
    }
}
export const Favorites = (payload) => {
    return{
        type: 'FAVORITES',
        payload:payload
    }
}
export const DeletFavorites = (payload) => {
    return{
        type: 'DELETEFAVORITES',
        payload:payload
    }
}