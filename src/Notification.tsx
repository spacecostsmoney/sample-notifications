import { useNotification } from "./context/NotificationContext"

export const Notification = (): JSX.Element => {
    const {state} = useNotification();

    return (
        <h1>{state.message}</h1>
    )
}