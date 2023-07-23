import useJsonFetch from "../../hooks/useJsonFetch";

export default function Loading() {
    const [{loading}] = useJsonFetch('http://localhost:7070/error');

    return (
        <div>{`Загрузка: ${loading}`}</div>
    )
}