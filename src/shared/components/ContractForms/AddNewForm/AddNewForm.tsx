/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
// import { Spinner } from 'Components/Spinner';
import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';
import { Modal } from 'Components/Modal';
import { Api } from 'Utils/api';

import classes from './addNewForm.module.css';

const AddNewForm = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onCloseModal = () => {
    setIsOpen(false);
  };
  const [name, setName] = React.useState('');
  const [template, setTemplate] = React.useState('');
  const [hasSignature, setHasSignature] = React.useState(false);

  interface FormDataType {name: string, template: string, has_signature: boolean}
  const requestBody: FormDataType = { name: '', template: '', has_signature: false };

  const inputChangeHandler = (setFunction: any, event: any) => {
    setFunction(event.target.value);
  };

  const checkBoxChangeHandler = (setFunction: any, event: any) => {
    setFunction(event.target.checked);
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestBody.name = name;
    requestBody.template = template;
    requestBody.has_signature = hasSignature;
    const response = await Api.post('https://rptest.manaknightdigital.com/api/contract-forms', requestBody);
    console.log(response);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={`${classes.addFormButton}`}>Add +</button>
      <Modal
        classes={classes}
        title="Add new template"
        isOpen={isOpen}
        dataBsBackdrop="static"
        dataBsKeyboard="false"
        modalHeader
        modalCloseClick={onCloseModal}
      >
        <div>
          <form onSubmit={onSubmitHandler}>
            <div className="row">
              <div className="col-12">
                <input onChange={(e) => inputChangeHandler(setName, e)} type="text" className="form-control" placeholder="Form name" aria-label="Last name" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="form-check">
                  <input onChange={(e) => checkBoxChangeHandler(setHasSignature, e)} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label">
                    Require signature
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <textarea onChange={(e) => inputChangeHandler(setTemplate, e)} rows={5} className="form-control" placeholder="template" aria-label="Last name" />
              </div>
            </div>
            <div className="submitBtnContainer mt-5">
              <div><button type="submit" className={`${classes.addFormButton}`}>Submit</button></div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

const AddNewFormMemo = memo(AddNewForm, areEqual);

export { AddNewFormMemo as AddNewForm };
