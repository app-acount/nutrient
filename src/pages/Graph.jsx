import LineGraph from "../components/Graphs/LineGraph";
import BarGraph from "../components/Graphs/BarGraph";
import PieGraph from "../components/Graphs/PieGraph";
import LineBarGraph from "../components/Graphs/LineBarGraph";

const sampleData = [
    { name: "1月", 売上: 300, 利益: 120, 費用: 200, ユーザー数: 150 },
    { name: "2月", 売上: 250, 利益: 100, 費用: 180, ユーザー数: 130 },
    { name: "3月", 売上: 400, 利益: 180, 費用: 250, ユーザー数: 200 },
    { name: "4月", 売上: 350, 利益: 160, 費用: 230, ユーザー数: 180 },
];


export default function GraphPage() {
    return (
        <div style={{ padding: "1rem" }}>
            <h2>📈 複数データ対応グラフページ</h2>
            <LineGraph data={sampleData} title="折れ線グラフ" />
            <BarGraph data={sampleData} title="棒グラフ" />
            <PieGraph data={sampleData} title="円グラフ" />
            <LineBarGraph
                data={sampleData}
                title="売上・利益・費用・ユーザー数"
                barKeys={["売上", "費用"]}
                lineKeys={["利益", "ユーザー数"]}
            />
        </div>
    );
}
