import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { isValidArray } from 'utils/commonCheck';

const StyledListItemIcon = (props) =>
  React.createElement(ListItemIcon, { sx: { alignItems: 'center' }, ...props });

const StyledCollapse = (props) =>
  React.createElement(Collapse, { sx: { pl: (theme) => theme.spacing(3.5) }, ...props });

const StyledExpandMore = (props) =>
  React.createElement(ExpandMore, { sx: { ml: (theme) => theme.spacing(1) }, ...props });

const StyledExpandLess = (props) =>
  React.createElement(ExpandLess, { sx: { ml: (theme) => theme.spacing(1) }, ...props });

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  width: '300px'
}));

const StyledList = styled(List)(({ theme, active }) => ({
  '& .MuiList-root': {
    padding: '0'
  }
}));

const EditSVG = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ padding: '0 4px' }}
      stroke="#9E9E9E"
      className="icon icon-tabler icon-tabler-edit"
      width="32"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
      <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
      <path d="M16 5l3 3" />
    </svg>
  );
};
EditSVG.propTypes = {
  onClick: PropTypes.func
};

const TrashSVG = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-trash"
      width="32"
      height="24"
      style={{ padding: '0 4px' }}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#9E9E9E"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg>
  );
};
TrashSVG.propTypes = {
  onClick: PropTypes.func
};

// RyTree
function RyTree(props) {
  const {
    value,
    listProps,
    listItemProps,
    onChange,
    checked,
    onRemove,
    onEdit,
    rowAction,
    onRowClick,
    children
  } = props;

  if (typeof children === 'function') {
    return children(value);
  }

  const clickHandler = (type, val, final = true) => {
    if (type === 'collapse' && val.children?.length > 0) val.isCollapsed = !val.isCollapsed;
    if (type === 'check') {
      val.isChecked = !val.isChecked;
      if (val.children?.length > 0)
        val.children.map((child) => clickHandler('check', child, false));
    }
    final && onChange?.(value);
  };

  // recursion render
  const renderHandler = (item, listItemProps) => {
    const isValidArr = isValidArray(item?.children);
    if (isValidArr) item.isCollapsed = item.isCollapsed || false;
    if (checked) item.isChecked = item.isChecked || false;
    return (
      <div key={item.id}>
        <StyledListItemButton {...listItemProps} onClick={() => onRowClick?.(item)}>
          <StyledListItemIcon>
            {checked ? (
              <Checkbox
                checked={item.isChecked}
                onChange={() => clickHandler('check', item)}
              ></Checkbox>
            ) : null}
            <ListItemText primary={item.name}></ListItemText>
          </StyledListItemIcon>
          <div onClick={() => clickHandler('collapse', item)}>
            {item.isCollapsed === true ? <StyledExpandMore /> : null}
            {item.isCollapsed === false ? <StyledExpandLess /> : null}
          </div>
          {rowAction ? (
            <div style={{ right: '0', position: 'absolute' }}>
              {typeof rowAction === 'function' ? (
                rowAction(item)
              ) : (
                <>
                  <EditSVG onClick={() => onEdit?.(item)} />
                  <TrashSVG onClick={() => onRemove?.(item)} />
                </>
              )}
            </div>
          ) : null}
        </StyledListItemButton>
        {isValidArr ? (
          <StyledCollapse in={item.isCollapsed}>
            <StyledList>
              {item.children.map((i) => {
                return renderHandler(i, listItemProps);
              })}
            </StyledList>
          </StyledCollapse>
        ) : null}
      </div>
    );
  };

  return (
    <StyledList {...listProps}>
      {Array.isArray(value) && value.map((item) => renderHandler(item, listItemProps))}
    </StyledList>
  );
}

RyTree.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  value: PropTypes.array,
  listProps: PropTypes.object,
  listItemProps: PropTypes.object,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  onRowClick: PropTypes.func,
  checked: PropTypes.bool,
  rowAction: PropTypes.oneOfType([PropTypes.bool, PropTypes.func])
};

export default RyTree;
