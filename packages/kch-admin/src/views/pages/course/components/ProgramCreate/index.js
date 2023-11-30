
import React, {useImperativeHandle, forwardRef} from 'react';
import { useSelector } from 'react-redux';
import {Drawer} from '@mui/material';
import { useState } from 'react';
import RyInput from 'ui-component/ry-input/RyInput';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// project imports
import useScriptRef from 'hooks/useScriptRef';



const ProgramCreate = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false)
  const handleShowDrawer = () => {
    setOpen(!open)
  }
  useImperativeHandle(ref, () => ({
    handleShowDrawer,
  }))

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

  return <Drawer anchor={'right'}
      open={open}
      style={{
        width: 700,
        padding: 12,
      }}
    >
      <Formik
        initialValues={{
          programName: '',
          teacherName: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          programName: Yup.string().min(6).max(24).required('课程名称必填'),
          teacherName: Yup.string().min(6).max(24).required('教师必填')
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
              sx={{ ...theme.typography.customInput }}
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
              error={Boolean(touched.teacherName && errors.teacherName)}
              sx={{ ...theme.typography.customInput }}
            >
              <RyInput
                id="outlined-adornment-teacherName-login"
                type="text"
                value={values.teacherName}
                name="teacherName"
                onBlur={handleBlur}
                onChange={handleChange}
                label="课程教师"
                inputProps={{}}
              />
              {touched.teacherName && errors.teacherName && (
                <FormHelperText error id="standard-weight-helper-text-teacherName-login">
                  {errors.teacherName}
                </FormHelperText>
              )}
            </FormControl>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  登录
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
  </Drawer>;
});
export default ProgramCreate;
