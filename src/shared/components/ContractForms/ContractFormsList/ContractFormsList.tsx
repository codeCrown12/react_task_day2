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
  const rows = templates.map((template) => (
    <TableRow>
      <TableColumn>
        <div>
          <span>{template}</span>
          <p>Testing</p>
        </div>
      </TableColumn>

      <TableColumn>
        <div>
          <p>Testing</p>
        </div>
      </TableColumn>

      <TableColumn>
        <div>
          <p>Testing</p>
        </div>
      </TableColumn>
    </TableRow>
  ));

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
