import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadUsers, animalsSelector } from "../../redux/users";
import FanEntry from "../../components/fan-entry";

import "./animal-fans.css";

export default function AnimalFans() {
  const dispatch = useDispatch();

  const animals = useSelector(animalsSelector);

  useEffect(() => {
    if (animals.length === 0) {
      dispatch(loadUsers());
    }
  });

  return (
    <div className="animal-fans-container">
      {animals.map(animal => (
        <FanEntry key={animal.name} {...animal} />
      ))}
    </div>
  );
}
