"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { databases, account } from "@/components/AppwriteConfig";
import Footer from "@/components/Footer";
import DashboardNavbar from "./DashboardNavbar";

const page = () => {
  const [userDetails, setUserDetails] = useState();
  const [userId, setUserId] = useState();
  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
        setUserId(response.$id);
      },
      function (error) {
        console.log(error);
        alert(error);
      }
    );
  }, []);
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: "GET",
    url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
    params: {
      url: url,
      length: "3",
    },
    headers: {
      "X-RapidAPI-Key": "13511bb581msh1923b690d834d6ap1d0f42jsne1ef0cb13e10",
      "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
    },
    // Old Key: Reuse In Aug: b8959aad42msh3b2a09859555e2bp15fadcjsn2d84d320e1d0

    // New Key: 13511bb581msh1923b690d834d6ap1d0f42jsne1ef0cb13e10
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      const newSummary = response.data.summary;
      setSummary(newSummary);
      const docId = Date.now().toString();
      const data = {
        url: url,
        summary: newSummary,
        userId: userId,
      };
      const promise = databases.createDocument(
        "64618f1a3234466eef99",
        "6462291b01f1095303c1",
        docId,
        data
      );
      promise.then(
        function (response) {
          console.log(response);
          setIsLoading(false);
        },
        function (error) {
          alert(error);
          console.log(error);
          setIsLoading(false);
        }
      );
    } catch (error) {
      alert(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <h1 className="text-center">Article Summarizer</h1>
      <form className="formfix" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="url" className="form-label mt-3">
            <h3>Paste The Website's Url Here :</h3>
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-success">
          {isLoading ? "Summarizing..." : "Summarize It"}
        </button>
      </form>
      {summary && (
        <div className="result mt-3 container">
          <h5 className="text-center">Summary</h5>
          <p>{summary}</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default page;
