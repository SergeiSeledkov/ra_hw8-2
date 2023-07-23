import useJsonFetch from "../../hooks/useJsonFetch";

export default function Data() {
    const [{data}] = useJsonFetch('http://localhost:7070/data');

    return (
        <div>{data ? `Данные загружены: ${data.status}` : null}</div>
    )
}