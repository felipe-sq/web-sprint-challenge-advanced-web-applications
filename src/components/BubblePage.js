import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);


  useEffect(() => {
     fetchColorService()
      .then((res) => { setColors(res)})
      .catch((err) => { console.log(err)})
  }, []);
  console.log(colors)
  
  // Updated useEffect to use fetchColorService

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth().put(`/colors/${editColor.id}`, editColor)
      .then(res => {
        console.log(res.data.id)

        setColors(
          colors.map(
            item => {
              if (item.id === Number(res.data.id)) {
                return res.data;
              } else {
                return item
              }
            }
          )
        )
      })
      .catch(err => {
        console.log("there was an error with your edit request:", {err})
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`)
      .then(res => {
        setColors(colors.filter(item => item.id !== 
          Number(res.data)))
      })
      .catch(err => {
        console.log("oops, something went wrong:", {err})
      })
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
