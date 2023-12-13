import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { useSelector } from 'react-redux';
import RyButton from 'ui-component/ry-button/RyButton';
import RyInput from 'ui-component/ry-input/RyInput';

import { Box, FormControl, FormHelperText, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project imports

// project imports
import useScriptRef from 'hooks/useScriptRef';

const ProContent = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: 400,
    border: '1px solid #ddd',
    padding: '10px'
  })
);

const OperButton = styled('RyButton')(({ theme, open }) => ({
  ...theme.typography.mainContent,
  svg: {
    width: 20,
    height: 20
  }
}));

const VideoListItem = styled('ListItem', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    ...theme.typography.mainContent,
    borderBottom: '1px solid #ddd'
  })
);

const ProgramCreate = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [programList, setProgramList] = useState([
    { name: '001', id: '001', checked: true },
    { name: '002', id: '002', checked: true },
    { name: '003', id: '003', checked: true }
  ]);
  const handleShowDrawer = () => {
    setOpen(!open);
  };
  useImperativeHandle(ref, () => ({
    handleShowDrawer
  }));

  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const customization = useSelector((state) => state.customization);
  const [checked, setChecked] = useState(true);

  const googleHandler = async () => {
    console.error('Login');
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const actionHandler = () => {};

  const changeIndex = (type, row, index) => {
    const idx = type === 'up' ? index - 1 : index + 1;
    const newDataSource = programList.filter((ele) => ele.id !== row.id);
    newDataSource.splice(idx, 0, row);
    setProgramList(newDataSource);
  };

  const handleDelete = (row, value, index) => {
    console.log(row, value, index);
    const newDataSource = programList.filter((ele) => ele.id !== row.id);
    setProgramList(newDataSource);
  };

  return (
    <Drawer
      anchor={'right'}
      open={open}
      // style={{
      //   width: 700,
      //   padding: 12,
      // }}
      PaperProps={{
        sx: {
          width: 500,
          padding: '20px'
        }
      }}
    >
      <Formik
        initialValues={{
          programName: '',
          teacherName: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          programName: Yup.string().required('课程名称必填'),
          teacherName: Yup.string().required('教师必填')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          setSubmitting(true);
          console.log(values);
          try {
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <FormControl
              fullWidth
              error={Boolean(touched.programName && errors.programName)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              <RyInput
                id="outlined-adornment-programName-login"
                type="programName"
                value={values.programName}
                name="programName"
                onBlur={handleBlur}
                onChange={handleChange}
                label="课程名称"
                inputProps={{}}
              />
              {touched.programName && errors.programName && (
                <FormHelperText error id="standard-weight-helper-text-programName-login">
                  {errors.programName}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.desc && errors.desc)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              <RyInput
                id="outlined-adornment-programName-login"
                type="desc"
                value={values.desc}
                name="desc"
                onBlur={handleBlur}
                onChange={handleChange}
                label="课程简介"
                inputProps={{}}
                textarea
              />
              {touched.desc && errors.desc && (
                <FormHelperText error id="standard-weight-helper-text-programName-login">
                  {errors.desc}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.teacherName && errors.teacherName)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              <RyInput
                id="outlined-adornment-teacherName-login"
                value={values.teacherName}
                name="teacherName"
                onBlur={handleBlur}
                onChange={handleChange}
                label="课程教师"
                inputProps={{}}
                select
              >
                <MenuItem value="t0">教师1</MenuItem>
                <MenuItem value="t1">教师2</MenuItem>
              </RyInput>
              {touched.teacherName && errors.teacherName && (
                <FormHelperText error id="standard-weight-helper-text-teacherName-login">
                  {errors.teacherName}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.teacherName && errors.teacherName)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              <RyInput
                id="outlined-adornment-price"
                value={values.price}
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                label="课程价格"
                inputProps={{}}
                type="number"
              />
              {touched.price && errors.price && (
                <FormHelperText error id="standard-weight-helper-text-price">
                  {errors.price}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.teacherName && errors.teacherName)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              <RyInput
                id="outlined-adornment-cover"
                value={values.price}
                name="cover"
                onBlur={handleBlur}
                onChange={handleChange}
                label="课程封面"
                select
              >
                <MenuItem value="t0">P1</MenuItem>
                <MenuItem value="t1">P2</MenuItem>
              </RyInput>
              {touched.cover && errors.cover && (
                <FormHelperText error id="standard-weight-helper-text-cover">
                  {errors.price}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.teacherName && errors.teacherName)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              课时列表
            </FormControl>
            <FormControl
              fullWidth
              error={Boolean(touched.teacherName && errors.teacherName)}
              sx={{ ...theme.typography.customInput, width: 350 }}
            >
              <RyButton variant="contained">添加课时</RyButton>
            </FormControl>
            <FormControl>
              <ProContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                  {(programList || []).map((item, index) => (
                    <ListItem
                      key={item?.id}
                      disableGutters
                      secondaryAction={[
                        <OperButton
                          key={item?.id + 0}
                          variant="text"
                          onClick={() => changeIndex('up', item, index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrow-big-up-filled"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
                              strokeWidth="0"
                              fill="currentColor"
                            />
                          </svg>
                        </OperButton>,
                        <OperButton
                          key={item?.id + 1}
                          variant="text"
                          onClick={() => changeIndex('down', item, index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-arrow-big-down-filled"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z"
                              strokeWidth="0"
                              fill="currentColor"
                            />
                          </svg>
                        </OperButton>,
                        <OperButton
                          key={item?.id + 2}
                          variant="text"
                          onClick={() => handleDelete(item, index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-trash-x-filled"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#2c3e50"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16zm-9.489 5.14a1 1 0 0 0 -1.218 1.567l1.292 1.293l-1.292 1.293l-.083 .094a1 1 0 0 0 1.497 1.32l1.293 -1.292l1.293 1.292l.094 .083a1 1 0 0 0 1.32 -1.497l-1.292 -1.293l1.292 -1.293l.083 -.094a1 1 0 0 0 -1.497 -1.32l-1.293 1.292l-1.293 -1.292l-.094 -.083z"
                              strokeWidth="0"
                              fill="currentColor"
                            />
                            <path
                              d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"
                              strokeWidth="0"
                              fill="currentColor"
                            />
                          </svg>
                        </OperButton>
                      ]}
                    >
                      <ListItemText primary={item?.name} />
                    </ListItem>
                  ))}
                </List>
              </ProContent>
            </FormControl>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </form>
        )}
      </Formik>
    </Drawer>
  );
});
export default ProgramCreate;
