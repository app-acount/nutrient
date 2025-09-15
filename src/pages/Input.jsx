import TextField from "@mui/material/TextField";

export default function Input({ value, onChange, label }) {
    return (
        <div style={{ margin: "1rem 0" }}>
            <h2>📝 入力ページ</h2>
            <TextField
                label={label || "値を入力"}
                variant="outlined"
                fullWidth
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
