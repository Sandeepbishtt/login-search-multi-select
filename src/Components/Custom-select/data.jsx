
import {uniqueId} from 'lodash'

import "./index.css";

const colors = ["red", "yellow", "green", "blue"];

const components = [
  { title: "React", id: "react" },
  { title: "Angular", id: "angular" },
  { title: "Vue", id: "vue" },
  { title: "Ember", id: "ember" },
];

const newArr = [];
colors.forEach((val, i) => {
  const obj = {
    title: val,
    id: uniqueId(),
  };
  return newArr.push(obj);
});


export const colorOptions = newArr.map((val, i) => {
  val.label = val.title
  val.value = val.title;
  return val;
});

export const updatedComponents = components.map((item) => {
  item.label = item.title
  item.value = item.title;
  return item;
});
