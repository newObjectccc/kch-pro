import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import useCategory from 'hooks/useCategory';
import useMounted from 'hooks/useMounted';
import useResource from 'hooks/useResource';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import TotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import RyButton from 'ui-component/ry-button/RyButton';
import RyInput from 'ui-component/ry-input/RyInput';
import RyTable from 'ui-component/ry-table/RyTable';
import RyTree from 'ui-component/ry-tree/RyTree';

const mockTableData = [
  {
    name: '',
    format: '',
    size: '',
    createdBy: '',
    createdAt: ''
  },
  {
    name: '',
    format: '',
    size: '',
    createdBy: '',
    createdAt: ''
  }
];

function CertificateResource(props) {
  const { data: certificateList, loading, error, request: getCertificate } = useResource();
  const { data: categoryList, request: getCategory, update: updateCategory } = useCategory();
  const [certificateName, setCertificateName] = useState('');
  const [currentCategory, setCurrentCategory] = useState({});

  const searchHandler = (imParam = {}) => {
    const params = {
      name: certificateName ? certificateName : undefined,
      categoryId: currentCategory.id ? currentCategory.id : undefined,
      ...imParam
    };
    getCertificate(params);
  };

  useMounted(() => {
    getCategory();
    searchHandler();
  });

  if (loading) return <TotalGrowthBarChart />;
  if (error) {
  }

  const onTreeClickHandler = (val) => {
    if (val.id === currentCategory.id || val.children?.length > 0) return;
    setCurrentCategory({ ...val });
    searchHandler({ categoryId: val.id });
  };

  const actionHandler = (type, row) => {
    console.log(type, row);
  };

  const resetParams = () => setCertificateName('');

  const columns = [
    { title: '证书名称', dataIndex: 'name' },
    { title: '证书格式', dataIndex: 'format' },
    { title: '证书大小', dataIndex: 'size' },
    { title: '创建人', dataIndex: 'createdBy' },
    { title: '创建时间', dataIndex: 'createdAt' },
    {
      title: '操作',
      dataIndex: '__action',
      render: (value, idx, row) => (
        <>
          <RyButton variant="text" onClick={() => actionHandler('preview', row)}>
            预览
          </RyButton>
          <RyButton variant="text" onClick={() => actionHandler('edit', row)}>
            编辑
          </RyButton>
          <RyButton variant="text" onClick={() => actionHandler('remove', row)}>
            删除
          </RyButton>
        </>
      )
    }
  ];

  return (
    <MainCard title="证书管理">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <RyTree
            value={categoryList}
            onRowClick={onTreeClickHandler}
            onChange={(val) => {
              updateCategory([...val]);
              console.log([...val]);
            }}
            listProps={{
              sx: {
                height: '100%',
                borderRight: (theme) => `1px solid ${theme.palette.divider}`
              }
            }}
          ></RyTree>
        </Grid>
        <Grid item xs={9}>
          <Stack direction="row" mb={2}>
            证书&nbsp;&nbsp;|&nbsp;&nbsp;{currentCategory.name}
          </Stack>
          <Stack direction="row" justifyContent="space-between" mb={2}>
            <Stack direction="row" spacing={2}>
              <RyButton sx={{ height: '100%' }} variant="contained" onClick={searchHandler}>
                上传证书
              </RyButton>
              <RyButton sx={{ height: '100%' }} variant="outlined" onClick={resetParams}>
                删除
              </RyButton>
            </Stack>
            <Stack direction="row" spacing={2}>
              <RyInput
                label="证书名称"
                size="small"
                placeholder="输入证书名称查询"
                value={certificateName}
                onChange={(evt) => setCertificateName(evt.target.value)}
              />
              <RyButton sx={{ height: '100%' }} variant="contained" onClick={searchHandler}>
                查询
              </RyButton>
              <RyButton sx={{ height: '100%' }} variant="outlined" onClick={resetParams}>
                重置
              </RyButton>
            </Stack>
          </Stack>

          <RyTable
            columns={columns}
            dataSource={certificateList ?? mockTableData}
            pagination={{}}
          />
        </Grid>
      </Grid>
    </MainCard>
  );
}

CertificateResource.propTypes = {
  children: PropTypes.node
};

export default CertificateResource;
