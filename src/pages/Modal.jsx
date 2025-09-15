import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField"; // モダンな入力UI
import ModalDialog from "../components/ModalDialog";

export default function ModalTestPage() {
    const [open, setOpen] = React.useState(false);
    const [inputOpen, setInputOpen] = React.useState(false);

    // 詳細表示用
    const selectedUser = {
        name: "山田 太郎",
        age: "22",
        email: "test@gmail.com",
    };

    // 入力フォーム用
    const [formData, setFormData] = React.useState({
        name: "",
        age: "",
    });

    const handleSave = () => {
        console.log("保存データ:", formData);
        setInputOpen(false);
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h2>🪟 モーダルテストページ</h2>

            {/* ボタン */}
            <Button variant="contained" onClick={() => setOpen(true)} sx={{ mr: 2 }}>
                詳細モーダルを開く
            </Button>
            <Button variant="contained" onClick={() => setInputOpen(true)}>
                入力モーダルを開く
            </Button>

            {/* 詳細モーダル */}
            <ModalDialog open={open} onClose={() => setOpen(false)} title="ユーザー詳細">
                <Typography>名前: {selectedUser?.name}</Typography>
                <Typography>年齢: {selectedUser?.age}</Typography>
                <Typography>メール: {selectedUser?.email}</Typography>
            </ModalDialog>

            {/* 入力モーダル */}
            <ModalDialog
                open={inputOpen}
                onClose={() => setInputOpen(false)}
                title="ユーザー編集"
                actions={
                    <>
                        <Button onClick={() => setInputOpen(false)} color="secondary">
                            キャンセル
                        </Button>
                        <Button onClick={handleSave} variant="contained" color="primary">
                            保存
                        </Button>
                    </>
                }
            >
                <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <TextField
                        label="名前"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        fullWidth
                    />
                    <TextField
                        label="年齢"
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        fullWidth
                    />
                </form>
            </ModalDialog>
        </div>
    );
}
