import useJsonFetch from "../../hooks/useJsonFetch";

export default function Error() {
    const [{error}] = useJsonFetch('http://localhost:7070/error');

    return (
        <div>{error ? `Ошибка: ${error}` : null}</div>
    )
}