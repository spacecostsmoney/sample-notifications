import React, { ReactNode, useContext, useReducer } from 'react';
import { Dispatch, NotificationReducer, State } from '../reducer/NotificationReducer';

type CountProviderProps = { children: ReactNode }

const NotificationContext = React.createContext<{ state: State, dispatch: Dispatch } | undefined>(undefined)

const NotificationProvider = (props: CountProviderProps) => {
    const [state, dispatch] = useReducer(NotificationReducer, { message: '' })
    const value = { state, dispatch };

    return (
        <NotificationContext.Provider value={value}>
            {props.children}
        </NotificationContext.Provider>
    )
}

const useNotification = () => {
    const context = useContext(NotificationContext)
    if (context === undefined) {
        throw new Error('UseNotification must be used within a NotificationProvider')
    }

    return context
}

export { NotificationProvider, useNotification }