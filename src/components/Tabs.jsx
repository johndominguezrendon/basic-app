import React from 'react';

const Tabs = ({ onTabClick, currentTab }) => {
    const tabs = [
        {
            name: 'Flying Scotsman',
            value: 'scotsman'
        },
        {
            name: 'Golden Arrow',
            value: 'arrow'
        },
        {
            name: 'Hogwarts Express',
            value: 'express'
        },
        {
            name: 'Orient Express',
            value: 'oexpress'
        },
    ]

    const renderTabs = () => {
        return tabs.map(tab => (
            <li key={tab.name}
                className={tab.value === currentTab ? 'is-active': ''}
                onClick={() => onTabClick(tab.value)}>
                <a>{tab.name}</a>
            </li>
        ))
    }

    return (
        <div className="tabs">
            <ul>
                {renderTabs()}
            </ul>
        </div>
    );
};

export default Tabs;