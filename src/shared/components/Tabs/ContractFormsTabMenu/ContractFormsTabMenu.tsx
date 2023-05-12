import React, { memo, ReactNode, useState } from 'react';

import { areEqual } from 'Utils/equalityChecks';
import { width } from 'Utils/screen';
// // import { Icon } from "Components/Icons";
// import { ProjectsSearch } from 'Containers/Projects';
import { Tab } from '../Tab';

import classes from './ContractFormsTabMenu.module.css';

interface Props {
  id?: string;
  className?: string;
  children?: ReactNode;
}

const createTabs = (activeTab: string, onTabClick: (e: any) => void) => (
  <>
    <Tab
      key="contract-forms-tab"
      id="contract-forms-tab"
      className={`${classes.flexCenter} ${classes.button} ${
        activeTab === 'contract-forms-tab' ? `active ${classes['active-Tab']}` : ''
      }`}
      target="my-projects"
      onClick={onTabClick}
    >
      <>
        <span>Contract Forms</span>
      </>
    </Tab>
  </>
);

/*
  In order to override bootstraps active class on tabs, there is a click event onTabClick, which will get the name of the tab that was clicked
  and then trigger a re-render.  Note in the createTabs method above, where the active class is added or not, based on which tab was clicked.
*/
const ContractFormsTabMenu = ({ id = 'tabs', className, children }: Props) => {
  // We want to set the initial active tab to the first tab in the incoming tabList
  const [activeTab, setActiveTab] = useState('contract-forms-tab');

  const onTabClick = (e: any) => {
    // Occasionally, e.currentTarget is undefined.  Set the current activeTab if we run into this bug

    setActiveTab(e?.currentTarget?.id || activeTab);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className={classes.contractFormsTabWrapper}>
            <div className={classes.tabsContainer}>
              <ul
                className={`nav nav-tabs pr-4 ${width < 576 ? 'flex-sm-column' : 'width'}   ${classes.tabs} ${
                  className || ''
                }`}
                id={id}
                role="tablist"
              >
                {createTabs(activeTab, onTabClick)}
              </ul>
              <div className={`${classes.filterButtonContainer} ${classes.flexCenter}`}>
                {/*
                <span className={classes.filterButton}>
                  Filter <Icon type="filter" className={classes.filterIcon} />
                </span>
                */}
              </div>
              <div className={classes.searchContainer}>
                {/* <ProjectsSearch /> */}
              </div>
            </div>
            <div className="tab-content w-100 h-100 d-inline-block" id="myTabContent" style={{ height: 'auto' }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContractFormsTabMenu.defaultProps = {
  id: undefined,
  className: undefined,
  children: undefined,
};

const ContractFormsTabMenuMemo = memo(ContractFormsTabMenu, areEqual);
export { ContractFormsTabMenuMemo as ContractFormsTabMenu };
