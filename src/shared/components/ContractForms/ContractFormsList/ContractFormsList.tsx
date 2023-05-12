import React, { memo } from 'react';
import { areEqual } from 'Utils/equalityChecks';
import { Table, TableBody, TableColumn, TableHeader, TableRow, Th } from 'Components/Table';
import classes from './contractFormsList.module.css';

interface Props {
  templates: any[]
}

const ContractFormsList = ({
  templates,
}: Props) => {
  const rows = templates.map(template => 
    <TableRow key={template.company_id}>
      <TableColumn>
        <div>
          <p>{template.name}</p>
        </div>
      </TableColumn>

      <TableColumn>
        <div>
          <p>{template.created_at}</p>
        </div>
      </TableColumn>

      <TableColumn>
        <div>
          <button>Delete</button>
        </div>
      </TableColumn>
    </TableRow>
  );

  return (
    <>
      <div>
        <Table className={`table ${classes.contractFormsListWrapper}`}>
          <TableHeader>
            <TableRow>
              <Th>Template name</Th>
              <Th>Date created</Th>
              <Th />
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

const ContractFormsListMemo = memo(ContractFormsList, areEqual);

export { ContractFormsListMemo as ContractFormsList };
