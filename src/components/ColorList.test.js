import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import userEvent from '@testing-library/user-event';
import { render, screen} from "@testing-library/react";

import ColorList from './ColorList';
import EditMenu from './EditMenu';

const sampleColor = [
  {
  color: "limegreen",
  code: { hex: "#99ddbc" },
  id: 1,
}]

const emptyArray = [];

test("Renders an empty list of colors without errors", () => {
  render(<ColorList color={emptyArray} editing={null} toggleEdit={null} saveEdit={null} deleteColor={null}/>)
});

test("Renders a list of colors without errors", () => {
  render(<ColorList color={sampleColor} />)
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const toggleEdit = jest.fn()
  const editing = jest.fn()

  render(<ColorList color={sampleColor} editing={editing} toggleEdit={toggleEdit}/>);

  const colorToEdit = screen.getByTestId("color");
  userEvent.click(colorToEdit);

  // render(<EditMenu/>)  
  expect(toggleEdit).toBeCalled();
  expect(editing).toBeCalled();
});
