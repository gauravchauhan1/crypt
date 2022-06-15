import React from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";

const News = () => {
  const { data: news } = useGetCryptosNewsQuery({
    newsCategory: "Cryptocurrency",
    count: 50,
  });
  console.log(news);
  return <div>News</div>;
};

export default News;
