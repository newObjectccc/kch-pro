import React, { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import MenuList from './components/MenuList';

const CategoryManagement = (props) => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index, hasChild) => {
    setSelectedIndex(index);
    setOpen(!open)
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return <MainCard title="分类管理"> 
    <div style={{width: 200, borderRight: '1px solid #ddd'}}>
      <MenuList />
    </div>
  </MainCard>;
};

export default CategoryManagement;
