import { Button } from "@material-ui/core";
import { useEffect, useState } from "react"
import { useNotification } from "./context/NotificationContext"
import { SomeService } from "./hook/SomeService";

export const Results = (): JSX.Element => {
    const { dispatch } = useNotification()
    const [result, setResult] = useState<Response | null>(null);
    const [url, setUrl] = useState<string>('http://localhost:3000')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await SomeService(url);
                setResult(res);
                dispatch({ type: 'clear' });
            } catch (error) {
                setResult(null);
                dispatch({ type: 'set', payload: error.toString() });
            }
        }
        fetchData();
    }, [dispatch, url])

    return <>
        {result ? <h1>{result.status}</h1> : null}
        <Button variant={'contained'} onClick={() => setUrl('http://localhost:3000')}>Good Request</Button>
        <Button variant={'contained'} onClick={() => setUrl('http://google.com')}>Bad Request</Button>
    </>
};