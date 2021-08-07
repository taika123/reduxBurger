const burgerState = {
    burger: {salad:1, cheese:1, beef:1},
    menu: {
        salad:10,
        cheese:10,
        beef:10,
    },
    total:30
}


export const BurgerReducer = (state = burgerState, action) => {
    switch(action.type) {
        case 'ADD_BREADMID':{
            console.log(action)
            let {propsBurger, amount} = action
            if(action.amount === -1 && state.burger[action.propsBurger] < 1){
                return {...state}
            }
            //thay đổi số lượng
            let burgerUpdate = {...state.burger}
            burgerUpdate[propsBurger] += amount
            state.burger =  burgerUpdate;
            //tính tổng tiên
            state.total += amount * state.menu[propsBurger]
            return {...state}
        }
        default:
    }
    return {...state};
}