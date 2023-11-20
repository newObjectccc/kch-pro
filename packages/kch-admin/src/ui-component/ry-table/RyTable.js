import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => {
  return {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  };
});

const CellComponent = (column, cIdx, row, rIdx, value) => {
  const { dataIndex, title, render, ...restColumn } = column;
  let ChildrenNode = value || title;
  if (typeof render === 'function' && rIdx !== undefined)
    ChildrenNode = column.render(value, rIdx, row);
  return (
    <StyledTableCell {...restColumn} key={dataIndex ?? cIdx}>
      {ChildrenNode}
    </StyledTableCell>
  );
};

const RyTable = ({ columns, dataSource }) => {
  if (!Array.isArray(columns) || columns?.length < 1)
    return console.warn('RyTable columns must be an array!');
  if (!Array.isArray(dataSource) || dataSource?.length < 1)
    return <div>没有数据!超哥进来改一下这个UI!</div>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>{columns.map(CellComponent)}</TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((row, rIdx) => (
            <StyledTableRow key={row.id ?? row.key ?? rIdx}>
              {columns.map((col, cIdx) => CellComponent(col, cIdx, row, rIdx, row[col.dataIndex]))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

RyTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array
};

export default RyTable;
