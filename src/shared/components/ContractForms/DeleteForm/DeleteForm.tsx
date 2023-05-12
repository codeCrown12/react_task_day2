/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
// import { Spinner } from 'Components/Spinner';
import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';
import { Modal } from 'Components/Modal';
import { Api } from 'Utils/api';

import classes from './deleteForm.module.css';

interface Props {
  contractId: string
}

const DeleteForm = ({ contractId }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onDeleteHandler = async () => {
    const response = await Api.delete(`https://rptest.manaknightdigital.com/api/contract-forms/${contractId}`);
    console.log(response);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="btn btn-danger">Delete</button>
      <Modal
        classes={classes}
        title="Delete contract form"
        isOpen={isOpen}
        dataBsBackdrop="static"
        dataBsKeyboard="false"
        modalHeader
        modalCloseClick={onCloseModal}
      >
        <div>
          <p>Are you sure you want to delete this form?</p>
          <div className="d-flex justify-content-center mt-4">
            <div className="me-4"><button onClick={onDeleteHandler} className="btn btn-outline-danger">Delete</button></div>
            <div><button onClick={() => setIsOpen(false)} className="btn btn-outline-dark">Cancel</button></div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const DeleteFormMemo = memo(DeleteForm, areEqual);

export { DeleteFormMemo as DeleteForm };
