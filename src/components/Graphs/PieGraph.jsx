import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const COLORS = ["#007acc", "#ff6b6b", "#32cd32", "#ffa500", "#6a0dad"];

export default function PieGraph({ data, title = "円グラフ" }) {
    if (!data || data.length === 0) return null;

    const keys = Object.keys(data[0]).filter((key) => key !== "name");

    return (
        <div>
            {keys.map((key, idx) => (
                <Paper key={key} sx={{ padding: 2, margin: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        {title} - {key}
                    </Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey={key}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: "#fff", borderRadius: 8, border: "1px solid #ccc" }}
                            />
                            <Legend
                                verticalAlign="bottom"
                                height={36}
                                iconType="circle"
                                formatter={(value, entry) => (
                                    <span style={{ color: COLORS[entry.index % COLORS.length] }}>{value}</span>
                                )}
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </Paper>
            ))}
        </div>
    );
}
