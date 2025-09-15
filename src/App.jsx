import { Routes, Route, NavLink, Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Toolbar,
  AppBar,
  Typography,
  CssBaseline,
  Button,
} from "@mui/material";
import { useState } from "react";
import Home from "./pages/Home";
import Graph from "./pages/Graph";
import Table from "./pages/Table";
import Input from "./pages/Input";
import Settings from "./pages/Settings";
import Modal from "./pages/Modal";

const drawerWidth = 200;

function App() {
  const [inputValue, setInputValue] = useState("佐藤 太郎");
  const [layoutType, setLayoutType] = useState("sidebar"); // "sidebar" or "tabs"

  const menuItems = [
    { to: "/", label: "🏠 ホーム" },
    { to: "/graph", label: "📊 グラフ" },
    { to: "/table", label: "📋 表" },
    { to: "/input", label: "📝 入力" },
    { to: "/settings", label: "⚙ 設定" },
    { to: "/modal", label: "🪟 モーダル" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />

      {/* 上部バー */}
      <AppBar position="fixed" sx={{ zIndex: 1201 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap>
            個人アプリテンプレ
          </Typography>
          <Button
            color="inherit"
            onClick={() =>
              setLayoutType(layoutType === "sidebar" ? "tabs" : "sidebar")
            }
          >
            {layoutType === "sidebar" ? "タブに切替" : "サイドバーに切替"}
          </Button>
        </Toolbar>
      </AppBar>

      {/* ナビゲーション */}
      {layoutType === "sidebar" ? (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.to}>
                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  // NavLink の isActive を利用
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "#e0f7fa" : "transparent",
                    fontWeight: isActive ? "bold" : "normal",
                    color: isActive ? "#007acc" : "inherit",
                  })}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Drawer>
      ) : (
        <nav
          style={{
            position: "fixed",
            top: 64, // AppBarの高さ
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            background: "#f5f5f5",
            borderBottom: "1px solid #ccc",
            zIndex: 1200,
          }}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              style={({ isActive }) => ({
                padding: "1rem 2rem",
                textDecoration: "none",
                color: isActive ? "#007acc" : "#333",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* メインコンテンツ */}
      <main
        style={{
          flexGrow: 1,
          padding: "1rem",
          marginTop: layoutType === "tabs" ? 110 : 64, // タブ時はAppBar+タブ分
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/table" element={<Table />} />
          <Route
            path="/input"
            element={
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                label="名前"
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
