import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_JOBS } from "../GraphQL/Queries";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function GetJobs() {
  const { error, loading, data } = useQuery(LOAD_JOBS);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    if (data) {
      setJobs(data.jobs);
    }
    console.log(data);
  }, [data]);
  return (
    <div>
      {" "}
      {jobs.map((val, index) => {
        return (
          <div className="row col-sm-12 mb-3 m-0 mt-3">
            <div>
              <Card style={{ minHeight: 200 }} key={index}>
                <Card.Header>
                  <b>{"Company Name: "}</b>
                  {val.company.name}
                </Card.Header>
                <Card.Body>
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>
                    {val.description.length > 350
                      ? val.description.substring(0, 350) + "..."
                      : val.description}
                  </Card.Text>
                  Apply here:{" "}
                  <Card.Link href={val.applyUrl} target="_blank">
                    {val.applyUrl}
                  </Card.Link>
                  <br />
                  {val.userEmail ? (
                    <>
                      OR <br /> Email your resume:{" "}
                      <Card.Link href={"mailto:" + val.userEmail}>
                        {val.userEmail}
                      </Card.Link>
                    </>
                  ) : (
                    <></>
                  )}
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GetJobs;
