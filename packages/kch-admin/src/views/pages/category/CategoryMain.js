import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import RyTree from 'ui-component/ry-tree/RyTree';

const mockData = [
  {
    id: 2,
    name: '职业评测',
    children: [
      {
        id: 3,
        name: '霍兰德测评',
        children: [
          {
            id: 4,
            name: '马斯洛心理测评',
            children: [
              {
                id: 6,
                name: '犯罪倾向测评',
                children: []
              },
              {
                id: 7,
                name: '自杀倾向测评',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 8,
    name: '研学营',
    children: [
      {
        id: 9,
        name: '无人机研学营',
        children: []
      }
    ]
  }
];

const CategoryManagement = (props) => {
  const [value, setValue] = useState(mockData);
  const onChangeHandler = (val) => {
    setValue([...val]);
  };

  return (
    <MainCard title="分类管理">
      <RyTree
        value={value}
        checked
        rowAction
        onRemove={console.log}
        onEdit={console.log}
        onChange={onChangeHandler}
      ></RyTree>
    </MainCard>
  );
};

export default CategoryManagement;
