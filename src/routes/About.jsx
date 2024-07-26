import React from "react";
import Tabs from "./Tabes";

const About = () => {
  const tabData = [
    { label: "Tab 1" },
    { label: "Tab 2" },
    { label: "Tab 3" },
];

  return (
    <div>
    <h1>Hello</h1>
    <Tabs tabs={tabData} />
    </div>
  )
};
export default About;