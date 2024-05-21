const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            console.log(action.id)
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({type: 'SET_THEME_ID', id}) // fix any
type changeThemeIdActionType = {
    type: 'SET_THEME_ID'
    id: number
}