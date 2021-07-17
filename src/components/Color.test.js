import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const sampleColor = {
  color: "limegreen",
  code: { hex: "#99ddbc"},
  id: 1,
}

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={sampleColor}/>);
});
  
test("Renders the color passed into component", () => {
  render(<Color color={sampleColor}/>);

  const testColor = screen.queryAllByTestId("color");
  expect(testColor).toBeInTheDocument();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const handleDelete = jest.fn();
  const toggleEdit = jest.fn();

  render (<Color color={sampleColor}/>)
  
  const deleteKey = screen.getByTestId("delete")
  userEvent.click(deleteKey)
  
  expect(handleDelete).toBeCalled()
  expect(toggleEdit).toBeCalled();});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const setEditColor = jest.fn();
  const toggleEdit = jest.fn();

  render (<Color color={sampleColor}/>)
  const colorTest = screen.getByTestId("color")
  
  userEvent.click(colorTest)
  
  expect(setEditColor).toBeCalled()
  expect(toggleEdit).toBeCalled();
});