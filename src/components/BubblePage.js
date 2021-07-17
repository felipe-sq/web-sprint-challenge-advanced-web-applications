import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';
import axiosWithAuth from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    axiosWithAuth().get('/colors')
    .then(res => {
      setColors(res.data);
    })
    .catch(err => console.log(err));
  }, [])

  // useEffect(() => {
  //   let mounted = true;
  //   fetchColorService()
  //     .then(res => {
  //       if(mounted) {
  //         setColors(res)
  //       }
  //     })
  //   return () => mounted = false;
  // }, []);
  
  // Commented code to remove fetchColorService as it was causing failing tests 

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth().put(`/colors/${editColor.id}`, editColor)
      .then(res => {
        console.log(res)
        let editChosenColor = colors.findIndex(color => (color.id === editColor.id));
        colors[editChosenColor] = editColor;
        setColors([
          ...colors
        ])
      })
      .catch(err => {
        console.log("there was an error with your edit request:", err)
      })
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth().delete(`/colors/${colorToDelete.id}`)
      .then(res => {
        setColors(colors.filter(item => item.id !== colorToDelete.id))
      })
      .catch(err => {
        console.log("oops, something went wrong:", err)
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
