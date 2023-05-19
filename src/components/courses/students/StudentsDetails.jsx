import React from "react";
import { Link } from "react-router-dom";

export const StudentsDetails = () => {
  const DetailsMap = [
    {
      title: "Student Name 1",
      id: 1,
    },
    {
      title: "Student Name 2",
      id: 2,
    },
  ];
  return (
    <div>
      {DetailsMap.map((el) => {
        return (
          <div>
            <p>{el.title}</p>
            <Link to={`${el.id}/details`}>Details</Link>
          </div>
        );
      })}
    </div>
  );
};
