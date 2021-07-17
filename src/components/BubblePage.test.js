import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor} from "@testing-library/react";

import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';
jest.mock('../services/fetchColorService');

const sampleColor = {
    color: "limegreen",
    code: { hex: "#99ddbc"},
    id: 1,
}

test("Renders without errors", ()=> {
    render(<BubblePage/>)
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.


    fetchColorService.mockResolvedValueOnce(sampleColor);

    render(<BubblePage />);
    // const testColors = screen.getByText(/color/i);
    // expect(testColors).toBeInTheDocument();
    const colorForTest = screen.getAllByTestId('color');

    await waitFor(() => {
        expect(colorForTest).toHaveLength(1);
    })
});