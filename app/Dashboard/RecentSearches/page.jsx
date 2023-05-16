"use client";
import { databases, account } from "@/components/AppwriteConfig";
import Link from "next/link";
import { useState, useEffect } from "react";
import DashboardNavbar from "../DashboardNavbar";
import Footer from "@/components/Footer";

const Page = () => {
  const [summaries, setSummaries] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    account.get().then(
      (response) => {
        const getSummaries = databases.listDocuments(
          "64618f1a3234466eef99",
          "6462291b01f1095303c1"
        );
        getSummaries
          .then(
            (summary) => {
              // setSummaries(summary.documents);
              const documentsuid = summary.documents.map((doc) => doc.userId);
              const filteredSummaries = summary.documents.filter(
                (s) => s.userId === response.$id
              );
              setSummaries(filteredSummaries);
            },
            (error) => {
              alert(error);
              console.log(error);
            }
          )
          .finally(() => {
            setLoader(false);
          });
      },
      (error) => {
        console.log(error);
        alert(error);
        setLoader(false);
      }
    );
  }, []);

  const deleteSummary = (id) => {
    const promise = databases.deleteDocument(
      "64618f1a3234466eef99",
      "6462291b01f1095303c1",
      id
    );
    promise
      .then(
        function (response) {
          console.log(response);
        },
        function (error) {
          alert(error);
          console.log(error);
        }
      )
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <div>
      <DashboardNavbar />
      <h1 className="text-center">Your Recent Searches:</h1>
      {loader ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          {summaries && summaries.length > 0 ? (
            summaries.map((summary) => (
              <div key={summary.$id}>
                <div className="recent-one">
                  <h5 className="text-red">Link:</h5>
                  <Link className="articles-link" href={summary.url}>
                    <h5> {summary.url}</h5>
                  </Link>
                  <h5 className="text-red">Summary:</h5>
                  <p className="articles-link">{summary.summary}</p>
                  <button
                    className="btn btn-danger text-center"
                    onClick={() => {
                      deleteSummary(summary.$id);
                    }}
                  >
                    Delete This
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h4>No Recent Searches Found.</h4>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Page;
