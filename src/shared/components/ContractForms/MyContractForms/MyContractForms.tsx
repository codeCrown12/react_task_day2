// import { Spinner } from 'Components/Spinner';
import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';
import { ContractFormsList } from '../ContractFormsList';
import { AddNewForm } from '../AddNewForm';
import { Api } from 'Utils/api';

import classes from './myContractForms.module.css';

// interface Props {
// }

// const getForms = () => {}

const MyContractForms = () => {

  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      const response = await Api.get('https://rptest.manaknightdigital.com/api/companyId/contract-forms');
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className={classes.contractFormContent}>
      <div className={classes.titleContainer}>
        <h1>Form Templates</h1>
        <AddNewForm />
      </div>
      <ContractFormsList templates={data} />
    </div>
  )
};

const MyContractFormsMemo = memo(MyContractForms, areEqual);

export { MyContractFormsMemo as MyContractForms };
