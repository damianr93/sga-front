import PropTypes from "prop-types";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    TablePagination,
    Box,
    Tooltip,
    TextField,
    MenuItem,
    IconButtonProps,
} from "@mui/material";
import { useState, useMemo, ReactElement } from "react";

interface Column<T = Record<string, unknown>> {
    field: keyof T;
    headerName: string;
    align?: 'left' | 'center' | 'right';
}

interface Action {
    name: string;
    icon: ReactElement;
    color?: IconButtonProps['color'];
    tooltip?: string;
}

interface CustomTableProperties<T = Record<string, unknown>> {
    columns: Column<T>[];
    data: T[];
    actions?: Action[];
    onActionClick?: (actionName: string, rowData: T) => void;
    pagination?: {
        rowsPerPage?: number;
        rowsPerPageOptions?: number[];
    };
}

const CustomTable = <T extends Record<string, unknown>>({
    columns,
    data,
    actions,
    onActionClick,
    pagination
}: CustomTableProperties<T>) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pagination?.rowsPerPage || 5);

    const [searchColumn, setSearchColumn] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const filteredData = useMemo(() => {
        if (!searchColumn || !searchTerm) return data;

        return data.filter((row) =>
            String(row[searchColumn])
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }, [searchColumn, searchTerm, data]);

    const paginatedData = pagination
        ? filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : filteredData;

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 2,
                    p: 2,
                    borderRadius: 2,
                }}
            >
                <TextField
                    select
                    label="Buscar por"
                    value={searchColumn}
                    onChange={(e) => setSearchColumn(e.target.value)}
                    sx={{ minWidth: 200 }}
                >
                    {columns.map((column, index) => (
                        <MenuItem
                            key={`${String(column.field)}-${index}`}
                            value={String(column.field)}
                        >
                            {column.headerName}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Valor a buscar"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ flexGrow: 1 }}
                />
            </Box>

            <TableContainer component={Paper} sx={{ maxHeight: 440, overflow: "auto" }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={String(column.field)}
                                    align={column.align || "left"}
                                    sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
                                >
                                    {column.headerName}
                                </TableCell>
                            ))}
                            {actions && <TableCell align="center">Acciones</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((row, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {columns.map((column) => (
                                    <TableCell
                                        key={`${rowIndex}-${String(column.field)}`}
                                        align={column.align || "left"}
                                    >
                                        {/* Safely access row data */}
                                        {row[column.field] !== undefined
                                            ? String(row[column.field])
                                            : ''}
                                    </TableCell>
                                ))}
                                {actions && actions.length > 0 && (
                                    <TableCell align="center">
                                        {actions.map((action, actionIndex) => (
                                            <Tooltip
                                                key={actionIndex}
                                                title={action.tooltip || ""}
                                                arrow
                                            >
                                                <IconButton
                                                    color={action.color || "default"}
                                                    size="small"
                                                    // Safely handle onClick with optional chaining
                                                    onClick={() => onActionClick?.(action.name, row)}
                                                    sx={{ m: 0.5 }}
                                                >
                                                    {action.icon}
                                                </IconButton>
                                            </Tooltip>
                                        ))}
                                    </TableCell>
                                )}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {pagination && (
                <TablePagination
                    rowsPerPageOptions={pagination.rowsPerPageOptions || [5, 10, 25]}
                    component="div"
                    count={filteredData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </Box>
    );
};

CustomTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string.isRequired,
            headerName: PropTypes.string.isRequired,
            align: PropTypes.oneOf(["left", "center", "right"]),
        })
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
            color: PropTypes.string,
            tooltip: PropTypes.string,
        })
    ),
    onActionClick: PropTypes.func,
    pagination: PropTypes.shape({
        rowsPerPage: PropTypes.number,
        rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    }),
};

export default CustomTable;