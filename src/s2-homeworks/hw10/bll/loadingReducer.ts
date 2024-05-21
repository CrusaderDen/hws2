const initState = {
    isLoading: false,
}

export type LoadingReducerStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: LoadingReducerStateType = initState, action: ActionsType): LoadingReducerStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type ActionsType = LoadingActionType

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
