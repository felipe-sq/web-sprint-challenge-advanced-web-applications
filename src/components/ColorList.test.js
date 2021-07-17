import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import userEvent from '@testing-library/user-event';
import { render, screen} from "@testing-library/react";

import ColorList from './ColorList';

const sampleColor = [
  {
  color: "limegreen",
  code: { hex: "#99ddbc" },
  id: 1,
}]

const emptyArray = [];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList color={emptyArray} />)
});

test("Renders a list of colors without errors", () => {
  render(<ColorList color={sampleColor} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const toggleEdit = jest.fn()
  render(<ColorList color={sampleColor}/>);

  let editing = screen.queryByTestId("color");
  userEvent.click(editing);
  
  expect(toggleEdit).toBeCalled();
});
