// material-ui
import { Typography } from '@mui/material';
import pages from './pages';
import { useEffect, useState } from 'react';
import NavItem from './NavItem';
import NavCollapse from './NavCollapse';
// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const [current, setCurrent] = useState('')

  const navItems = pages.map((item) => {
    switch (item?.type) {
      case 'collapse':
        return <NavCollapse menu={item} level={1} current={current} setCurrent={setCurrent} />
      case 'item':
        return <NavItem item={item} level={1} current={current} setCurrent={setCurrent} />
      default:
        break;
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
