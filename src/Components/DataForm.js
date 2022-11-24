import React, { useState, history } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { CREATE_JOB_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
function DataForm() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [applyUrl, setApplyUrl] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [createJob, { error }] = useMutation(CREATE_JOB_MUTATION);
  const addJob = () => {
    createJob({
      variables: {
        commitmentId: "cjtu8esth000z0824x00wtp1i",
        companyName: companyName,
        description: jobDescription,
        title: jobTitle,
        applyUrl: applyUrl,
        locationNames: locationName,
        userEmail: userEmail,
      },
    });
    if (error) {
      console.log(error);
    } else {
      history.pushState("/");
    }
  };
  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3 mt-3" controlId="formJobTitle">
          <Form.Label>
            <b>Job Title</b>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
            placeholder="Enter Job Title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCompanyName">
          <Form.Label>
            <b>Company Name</b>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setCompanyName(e.target.value);
            }}
            placeholder="Company"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLocationName">
          <Form.Label>
            <b>Location Name</b>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setLocationName(e.target.value);
            }}
            placeholder="Location Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUserEmail">
          <Form.Label>
            <b>Apply Email</b>
          </Form.Label>
          <Form.Control
            type="Email"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            placeholder="Apply Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApplyUrl">
          <Form.Label>
            <b>Apply Url</b>
          </Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setApplyUrl(e.target.value);
            }}
            placeholder="User Email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formJobDescription">
          <Form.Label>
            <b>Job Description</b>
          </Form.Label>
          <Form.Control
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button
          className="mb-3"
          onClick={(e) => {
            addJob();
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default DataForm;
