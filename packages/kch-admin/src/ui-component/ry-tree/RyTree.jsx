import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from 'prop-types';
import { isValidArray } from 'utils/commonCheck';

// RyTree
function RyTree(props) {
  const { value, listProps, listItemProps, onChange, isChecked, children } = props;

  if (typeof children === 'function') {
    return children(value);
  }

  const clickHandler = (val) => {
    if (val.children?.length > 0) val.isCollapsed = !val.isCollapsed;
    onChange?.(value);
  };

  // recursion render
  const renderHandler = (item, listItemProps, listProps) => {
    const isValidArr = isValidArray(item?.children);
    if (isValidArr) item.isCollapsed = item.isCollapsed || false;
    return (
      <div key={item.id}>
        <ListItemButton {...listItemProps} onClick={() => clickHandler(item)}>
          <ListItemIcon>
            {isChecked ? <Checkbox checked={item.isChecked}></Checkbox> : null}
            <ListItemText primary={item.name}></ListItemText>
            {item.isCollapsed === true ? <ExpandMore /> : null}
            {item.isCollapsed === false ? <ExpandLess /> : null}
          </ListItemIcon>
        </ListItemButton>
        {isValidArr ? (
          <Collapse sx={{ paddingLeft: '16px' }} in={item.isCollapsed}>
            <List {...listProps}>
              {item.children.map((i) => {
                return renderHandler(i, listItemProps, listProps);
              })}
            </List>
          </Collapse>
        ) : null}
      </div>
    );
  };

  return (
    <List sx={{ width: '400px' }} {...listProps}>
      {Array.isArray(value) && value.map((item) => renderHandler(item, listItemProps, listProps))}
    </List>
  );
}

RyTree.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  value: PropTypes.array,
  listProps: PropTypes.object,
  listItemProps: PropTypes.object,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool
};

export default RyTree;
