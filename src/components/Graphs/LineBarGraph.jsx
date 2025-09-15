import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

// 棒グラフ用カラー
const BAR_COLORS = ["#007acc", "#ffa500", "#32cd32", "#ff7f50"];
// 折れ線グラフ用カラー
const LINE_COLORS = ["#ff6b6b", "#6a0dad", "#00bcd4", "#8bc34a"];

export default function LineBarGraph({
    data,
    title = "複合グラフ",
    barKeys = [],
    lineKeys = [],
}) {
    if (!data || data.length === 0) return null;

    return (
        <Paper sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6" gutterBottom>{title}</Typography>
            <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#8884d8" />

                    {/* 左 Y 軸：棒グラフ用 */}
                    <YAxis yAxisId="left" stroke="#8884d8" />

                    {/* 右 Y 軸：折れ線用 */}
                    <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />

                    <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: 8, border: "1px solid #ccc" }} />
                    <Legend />

                    {/* 棒グラフ：左軸 */}
                    {barKeys.map((key, index) => (
                        <Bar
                            key={key}
                            dataKey={key}
                            yAxisId="left"
                            fill={BAR_COLORS[index % BAR_COLORS.length]}
                            radius={[4, 4, 0, 0]}
                        />
                    ))}

                    {/* 折れ線：右軸 */}
                    {lineKeys.map((key, index) => (
                        <Line
                            key={key}
                            type="monotone"
                            dataKey={key}
                            yAxisId="right"
                            stroke={LINE_COLORS[index % LINE_COLORS.length]}
                            strokeWidth={3}
                            dot={{ r: 5, strokeWidth: 2, fill: LINE_COLORS[index % LINE_COLORS.length] }}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                </ComposedChart>
            </ResponsiveContainer>
        </Paper>
    );
}
