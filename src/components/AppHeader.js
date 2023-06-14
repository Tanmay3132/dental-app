import { Button } from "@mui/material";
import React from "react";

export default function AppHeader() {
  return (
    <div className="header-main-div-class">
      <div className="header-class row" style={{ height: "15%" }}>
        <div className="col-3 d-flex align-items-center justify-content-center ">
          <img
            src="https://websitedemos.net/health-wellness-02/wp-content/uploads/sites/833/2021/05/white-logo.svg"
            alt="app-logo"
            height={"40px"}
          />
        </div>
        <div className="col-3"></div>
        <div className="col-5 d-flex justify-content-between align-items-center">
          <Button className="text-light header-menu p-3" variant="text">
            Home
          </Button>
          <Button className="text-light header-menu p-3" variant="text">
            About
          </Button>
          <Button className="text-light header-menu p-3" variant="text">
            Services
          </Button>
          <Button className="text-light header-menu p-3" variant="text">
            Contact
          </Button>
          <Button className="text-light header-border p-2" variant="outlined">
            Call : +91 123456789
          </Button>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row m-1" style={{ height: "85%" }}>
        <div className="col-2"></div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <div className="home-bold-text">
            Best Dentistry Services You Can Trust.
          </div>
          <div className="home-about-text">
            If you are looking for a reliable dentist in town, we are here to
            help. We are known for the best, affordable, and painless dental
            treatments with quick appointments and timely solutions.
          </div>
          <Button variant="contained">Book an Appointment</Button>
        </div>
        <div className="col-4 d-flex justify-content-center">
          <img
            src="https://websitedemos.net/health-wellness-02/wp-content/uploads/sites/833/2021/05/dental.jpg"
            alt="sample-dental"
            height={"500px"}
          />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
