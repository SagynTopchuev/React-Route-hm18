import React from "react";
import { Routes, Route } from "react-router-dom";
import { Anouncements } from "../Anouncements";
import { Courses } from "../courses/Courses";
import { MaterialDetail } from "../courses/material/MaterialDetail";
import { MaterialsDetails } from "../courses/material/MaterialsDetails";
import { RatingsDetails } from "../courses/RatingsDetails";
import { StudentDetail } from "../courses/students/StudentDetail";
import { StudentsDetails } from "../courses/students/StudentsDetails";
import { Notifications } from "../Notifications";
import { Schedule } from "../Schedule";

export const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route path="courses/*" element={<Courses />}>
        <Route path="materials" element={<MaterialsDetails />} />
        <Route path="materials/:id/details" element={<MaterialDetail />}>
          <Route
            path="submited"
            element={<p style={{ margin: 0 }}>submited Page</p>}
          />
          <Route
            path="waiting"
            element={<p style={{ margin: 0 }}>Waiting Page</p>}
          />
          <Route path="late" element={<p style={{ margin: 0 }}>late Page</p>} />
        </Route>

        <Route path="students" element={<StudentsDetails />} />
        <Route path="students/:id/details" element={<StudentDetail />} />
        <Route path="ratings" element={<RatingsDetails />} />
      </Route>
      <Route path="/anouncements" element={<Anouncements />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/schedule" element={<Schedule />} />
      {/* </Route> */}
    </Routes>
  );
};
