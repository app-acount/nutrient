import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const COLORS = ["#007acc", "#ff6b6b", "#32cd32", "#ffa500"];

export default function LineGraph({ data, title = "折れ線グラフ" }) {
    const lines = Object.keys(data[0] || {}).filter((key) => key !== "name");

    return (
        <Paper sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis stroke="#8884d8" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#fff", borderRadius: 8, border: "1px solid #ccc" }}
                    />
                    <Legend />
                    {lines.map((key, index) => (
                        <Line
                            key={key}
                            type="monotone"
                            dataKey={key}
                            stroke={COLORS[index % COLORS.length]}
                            strokeWidth={3}
                            dot={{ r: 5, strokeWidth: 2, fill: COLORS[index % COLORS.length] }}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </Paper>
    );
}
