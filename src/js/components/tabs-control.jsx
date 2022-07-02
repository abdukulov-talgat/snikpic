import React from "react";

export default function TabsControl({ text, isActive, index, onClick }) {
  const classes = isActive ? 'tabs__control tabs__control--active' : 'tabs__control';

  return (
    <button className={classes} type="button" onClick={()=> onClick(index)}>{text}</button>
  );
}
