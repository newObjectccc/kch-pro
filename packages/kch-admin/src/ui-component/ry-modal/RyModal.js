import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import React from 'react';
import RyButton from 'ui-component/ry-button/RyButton';

export const RyModal = ({
  content,
  body,
  isConfirm,
  children
}) => {
  const [open, setOpen] = React.useState(false)

  const actionHandler = (type) => {
    setOpen(false)
  }

  return (
    <Modal open={open}>
      {!content ?
        <>
          {body}
          {isConfirm ?
            <Stack direction="row" spacing={2} >
              <RyButton variant="contained" onClick={() => actionHandler('confirm')}>确认</RyButton>
              <RyButton variant="outlined" onClick={() => actionHandler('cancel')}>取消</RyButton>
            </Stack>
            : null}
        </>
        : content}
      {children}
    </Modal>
  )
}

RyModal.propTypes = {
  content: PropTypes.node,
  body: PropTypes.node,
  isConfirm: PropTypes.bool,
  children: PropTypes.node
}

export const useRyModalSingleton = () => {

  return {

  }
}