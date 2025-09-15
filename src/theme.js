// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#007acc",   // メインカラー（ボタンやリンク）
        },
        secondary: {
            main: "#ff6b6b",   // サブカラー
        },
        background: {
            default: "#f9f9f9", // ページ背景
            paper: "#ffffff",   // Card / Drawer の背景
        },
        text: {
            primary: "#333333",
            secondary: "#666666",
        },
    },
    components: {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.active": {
                        backgroundColor: "#e0f7fa",
                        color: "#007acc",
                        fontWeight: "bold",
                    },
                },
            },
        },
    },
});

export default theme;
