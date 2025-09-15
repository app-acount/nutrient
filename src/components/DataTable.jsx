import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export default function DataTable({ data }) {
    const [tableData, setTableData] = useState(data);
    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState(Object.keys(data[0] || {})[0]);
    const [search, setSearch] = useState("");

    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [editedRow, setEditedRow] = useState({});

    const columns = Object.keys(data[0] || {});

    const handleSort = (col) => {
        const isAsc = orderBy === col && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(col);
    };

    const handleRowClick = (row, index) => {
        setSelectedRow({ ...row, _index: index });
        setEditedRow({ ...row });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedRow(null);
        setEditedRow({});
    };

    const handleSave = () => {
        const newData = [...tableData];
        newData[selectedRow._index] = editedRow;
        setTableData(newData);
        handleClose();
    };

    const sortedData = [...tableData]
        .filter((row) =>
            columns.some((col) =>
                row[col].toString().toLowerCase().includes(search.toLowerCase())
            )
        )
        .sort((a, b) => {
            if (a[orderBy] < b[orderBy]) return order === "asc" ? -1 : 1;
            if (a[orderBy] > b[orderBy]) return order === "asc" ? 1 : -1;
            return 0;
        });

    return (
        <div>
            {/* 検索 */}
            <TextField
                label="検索"
                variant="outlined"
                fullWidth
                margin="normal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* テーブル */}
            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
                <Table stickyHeader aria-label="data table">
                    <TableHead>
                        <TableRow>
                            {columns.map((col) => (
                                <TableCell key={col} align="center" sx={{ fontWeight: "bold" }}>
                                    <TableSortLabel
                                        active={orderBy === col}
                                        direction={orderBy === col ? order : "asc"}
                                        onClick={() => handleSort(col)}
                                    >
                                        {col}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData.map((row, i) => (
                            <TableRow
                                key={i}
                                hover
                                sx={{ cursor: "pointer" }}
                                onClick={() => handleRowClick(row, tableData.indexOf(row))}
                            >
                                {columns.map((col) => (
                                    <TableCell key={col} align="center">
                                        {row[col]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* 編集用モーダル */}
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>詳細編集</DialogTitle>
                <DialogContent>
                    {columns.map((col) => (
                        <TextField
                            key={col}
                            label={col}
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={editedRow[col] || ""}
                            onChange={(e) =>
                                setEditedRow({ ...editedRow, [col]: e.target.value })
                            }
                        />
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>キャンセル</Button>
                    <Button variant="contained" onClick={handleSave}>
                        保存
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
