export type Action = { type: 'set', payload: string } | { type: 'clear' }
export type Dispatch = (action: Action) => void
export type State = { message: string }

export const NotificationReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'set': {
            return { message: action.payload };
        }
        case 'clear': {
            return { message: '' };
        }
        default: {
            throw new Error(`Unhandled action type: ${action}`)
        }
    }
}