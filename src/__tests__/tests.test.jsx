import React from 'react';
import Tabs from "../components/Tabs";
import {render, fireEvent} from '@testing-library/react'
import App from "../components/App";

test('Shows all the tabs', () => {
    const {queryByText} = render(
        <Tabs />,
    )

    expect(queryByText('Flying Scotsman')).not.toBeNull()
    expect(queryByText('Golden Arrow')).not.toBeNull()
    expect(queryByText('Hogwarts Express')).not.toBeNull()
    expect(queryByText('Orient Express')).not.toBeNull()
})

test('Changes the tab', () => {
    const {queryByText} = render(
        <App />,
    )

    const tab = queryByText('Hogwarts Express')
    fireEvent.click(tab)
    expect(queryByText('Hummek')).not.toBeNull()
})

test('Renders the logo', () => {
    const {queryByTestId} = render(
        <App />,
    )

    const logo = queryByTestId('logo')
    expect(logo).not.toBeNull()
})