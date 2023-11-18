import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BiSort } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';
import ReusableSelect from 'components/MultiSelect/MultiSelect';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export interface ModalCompProps{
  open: boolean;
  setOpen: (value:boolean) => any
 children:any
}


const KeepMountedModal: React.FC<ModalCompProps>  =({open, setOpen, children}) => {
  

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}
export default KeepMountedModal