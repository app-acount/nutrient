import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const COLORS = ["#007acc", "#ff6b6b", "#32cd32", "#ffa500", "#6a0dad"];

export default function BarGraph({ data, title = "棒グラフ" }) {
    if (!data || data.length === 0) return null;

    const keys = Object.keys(data[0]).filter((key) => key !== "name");

    return (
        <Paper sx={{ padding: 2, margin: 2 }}>
            <Typography variant="h6" gutterBottom>
                {title}
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis stroke="#8884d8" />
                    <Tooltip
                        contentStyle={{ backgroundColor: "#fff", borderRadius: 8, border: "1px solid #ccc" }}
                    />
                    <Legend />
                    {keys.map((key, index) => (
                        <Bar
                            key={key}
                            dataKey={key}
                            fill={COLORS[index % COLORS.length]}
                            radius={[4, 4, 0, 0]}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </Paper>
    );
}
