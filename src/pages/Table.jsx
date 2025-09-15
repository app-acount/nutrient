import DataTable from "../components/DataTable";

const sampleData = [
    { 氏名: "Alice", 年齢: 25, 職業: "Engineer" },
    { 氏名: "Bob", 年齢: 30, 職業: "Designer" },
    { 氏名: "Charlie", 年齢: 28, 職業: "Manager" },
];

export default function TablePage() {
    return (
        <div style={{ padding: "1rem" }}>
            <h2>📋 表ページ</h2>
            <DataTable data={sampleData} />
        </div>
    );
}
