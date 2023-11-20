import Stack from '@mui/material/Stack';
import { generateAxiosHook } from 'hooks/useAxios';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import TotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import RyButton from 'ui-component/ry-button/RyButton';
import RyInput from 'ui-component/ry-input/RyInput';
import RyTable from 'ui-component/ry-table/RyTable';

const useStudent = generateAxiosHook('post', '/to-buser/list');

const SystemManagement = () => {
  const [params, setParams] = useState({ pageNo: 1, pageSize: 20 });
  const { data, loading, error } = useStudent(params);

  if (loading) return <TotalGrowthBarChart />;
  if (error) return <div>error</div>;

  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: '姓名', dataIndex: 'username' },
    { title: '手机号', dataIndex: 'phoneNum' },
    { title: '角色', dataIndex: 'roleId' },
    { title: '创建时间', dataIndex: 'createdAt' },
    { title: '创建人', dataIndex: 'createdBy' },
    {
      title: '操作',
      dataIndex: '__action',
      render: (value, idx, row) => (
        <RyButton variant="text" onClick={() => alert(`爱你超哥${JSON.stringify(row, null, 2)}`)}>
          编辑
        </RyButton>
      )
    }
  ];

  const searchParamsHandler = (val) => setParams((p) => ({ ...p, ...val }));

  return (
    <MainCard title="管理员设置">
      <Stack direction="row" mb={2} spacing={2}>
        <RyInput
          label="ID"
          size="small"
          placeholder="输入id查询"
          value={params.id}
          onChange={(evt) => searchParamsHandler({ id: Number(evt.target.value) })}
        />
        <RyInput
          label="姓名"
          size="small"
          placeholder="输入姓名查询"
          value={params.username}
          onChange={(evt) => searchParamsHandler({ username: evt.target.value })}
        />
        <RyInput
          label="手机号"
          size="small"
          placeholder="输入手机号查询"
          value={params.phoneNum}
          onChange={(evt) => searchParamsHandler({ phoneNum: evt.target.value })}
        />
        <RyButton variant="contained">查询</RyButton>
        <RyButton variant="outlined">重置</RyButton>
      </Stack>
      <RyTable columns={columns} dataSource={data?.data} />
    </MainCard>
  );
};

export default SystemManagement;
