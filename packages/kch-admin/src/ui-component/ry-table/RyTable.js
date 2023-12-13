import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import RyButton from 'ui-component/ry-button/RyButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.dark,
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

const StyledEmpty = styled('td')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  width: '100%',
  '> div': {
    textAlign: 'center',
    padding: '12px 0',
  },
  '.emptyText': {
    fontSize: 16,
    margin: '8px 0'
  },
}));

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

const Empty = (columns, createFunc) => {
  const handleClick = () => {
    createFunc?.()
  }

  return (
    <TableBody>
      <tr>
        <td colSpan={columns.length}>
          <StyledEmpty>
            <div style={{ width: '100%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-empty" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M9 10l.01 0" />
                <path d="M15 10l.01 0" />
                <path d="M9 15l6 0" />
              </svg>
              <div className='emptyText'>暂无数据</div>
              <div>
                {createFunc && <RyButton variant="text" onClick={() => handleClick()}>
                  去添加
                </RyButton>}
              </div>
            </div>
          </StyledEmpty>
        </td>
      </tr>
    </TableBody>
  )
}

const PaginationComponent = ({ pagination }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent="flex-end">
      <Pagination defaultPage={1} boundaryCount={2} {...pagination} />
    </Stack>
  );
};
PaginationComponent.propTypes = {
  pagination: PropTypes.object
};

const RyTable = ({ columns = [], dataSource = [], pagination }) => {
  if (!Array.isArray(columns) || columns?.length < 1)
    return console.warn('RyTable columns must be an array!');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>{columns.map(CellComponent)}</TableRow>
        </TableHead>
        {dataSource.length > 0 ?
          <TableBody>
            {dataSource.map((row, rIdx) => (
              <StyledTableRow key={row.id ?? row.key ?? rIdx}>
                {columns.map((col, cIdx) => CellComponent(col, cIdx, row, rIdx, row[col.dataIndex]))}
              </StyledTableRow>
            ))}
          </TableBody>
          : Empty(columns)}
      </Table>
      {pagination && dataSource.length ? <PaginationComponent pagination={pagination} /> : null}
    </TableContainer>
  );
};

RyTable.propTypes = {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  pagination: PropTypes.object
};

export default RyTable;
