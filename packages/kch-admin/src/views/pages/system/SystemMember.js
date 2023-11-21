import Stack from '@mui/material/Stack';
import { generateAxiosHook } from 'hooks/useAxios';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import TotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import RyButton from 'ui-component/ry-button/RyButton';
import RyInput from 'ui-component/ry-input/RyInput';
import RyTable from 'ui-component/ry-table/RyTable';
import {
  isBiggerOrEqualThan1,
  isChinaLandMobile,
  isValidNumber,
  isValidValue
} from 'utils/commonCheck';

const useStudent = generateAxiosHook('post', '/to-buser/list');

const SystemManagement = () => {
  const [formValues, setFormValues] = useState({ id: '', username: '', phoneNum: '' });
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

  const paramsHandler = (val) => {
    const validationVal = val;
    if (val.id !== '' && !isBiggerOrEqualThan1(val.id)) {
      validationVal.idErrorMsg = 'id必须为大于等于1的整数';
    }
    if (val.phoneNum !== '' && !isChinaLandMobile(val.phoneNum)) {
      validationVal.phoneNumErrorMsg = '手机号必须是大陆手机号';
    }
    if (isValidNumber(val.id)) validationVal.id = parseInt(val.id);
    setFormValues(validationVal);
  };

  const searchHandler = () => {
    const normalized = { ...formValues, pageNo: 1, pageSize: 20 };
    // eslint-disable-next-line array-callback-return
    Object.entries(formValues).map(([key, val]) => {
      if (!isValidValue(val)) delete normalized[key];
    });
    setParams(normalized);
  };

  const resetParams = () => {
    setFormValues({ id: '', username: '', phoneNum: '' });
  };

  return (
    <MainCard title="管理员设置">
      <Stack direction="row" spacing={2} mb={2}>
        <RyInput
          error={Boolean(formValues.idErrorMsg)}
          helperText={formValues.idErrorMsg}
          label="ID"
          size="small"
          placeholder="输入id查询"
          value={formValues.id}
          onChange={(evt) =>
            paramsHandler({
              username: formValues.username,
              phoneNum: formValues.phoneNum,
              id: evt.target.value
            })
          }
        />
        <RyInput
          label="姓名"
          size="small"
          placeholder="输入姓名查询"
          value={formValues.username}
          onChange={(evt) =>
            paramsHandler({
              username: evt.target.value,
              phoneNum: formValues.phoneNum,
              id: formValues.id
            })
          }
        />
        <RyInput
          error={Boolean(formValues.phoneNumErrorMsg)}
          helperText={formValues.phoneNumErrorMsg}
          label="手机号"
          size="small"
          placeholder="输入手机号查询"
          value={formValues.phoneNum}
          onChange={(evt) =>
            paramsHandler({
              username: formValues.username,
              phoneNum: evt.target.value,
              id: formValues.id
            })
          }
        />
        <RyButton sx={{ height: '100%' }} variant="contained" onClick={searchHandler}>
          查询
        </RyButton>
        <RyButton sx={{ height: '100%' }} variant="outlined" onClick={resetParams}>
          重置
        </RyButton>
      </Stack>
      <RyTable columns={columns} dataSource={data?.data} />
    </MainCard>
  );
};

export default SystemManagement;
