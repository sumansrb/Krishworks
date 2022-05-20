import axios from "axios";
import React, { useEffect, useState } from "react";
import MiniDrawer from "./components/Drawer/Drawer";

const App = () => {
  const [doctorDetails, setDoctorDetails] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://619f39821ac52a0017ba467e.mockapi.io/patientDetails"
    );
    setDoctorDetails(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [doctorName, setDoctorName] = useState([]);
  const fetchData2 = async () => {
    const res = await axios.get(
      "https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails"
    );
    setDoctorName(res.data);
  };
  useEffect(() => {
    fetchData2();
  }, []);

  const [appointmentDetails, setAppointmentDetails] = useState([]);
  const fetchData3 = async () => {
    const resp = await axios.get(
      "https://619f39821ac52a0017ba467e.mockapi.io/appointment_details"
    );
    setAppointmentDetails(resp.data);
  };
  useEffect(() => {
    fetchData3();
  }, []);

  const [files, setFiles] = useState([]);
  const fetchData4 = async () => {
    const resp = await axios.get(
      "https://619f39821ac52a0017ba467e.mockapi.io/Files"
    );
    setFiles(resp.data);
  };
  useEffect(() => {
    fetchData4();
  }, []);

  return (
    <div>
      <MiniDrawer
        doctorDetails={doctorDetails}
        doctorName={doctorName}
        appointmentDetails={appointmentDetails}
        files={files}
      />
    </div>
  );
};

export default App;
