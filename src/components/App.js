
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  const header = "Welcome to my website";
  const footer = "© 2023 My Website. All rights reserved."
  return (
    <PageLayout header={header} footer={footer}>
      This is the content of my website.
    </PageLayout>
  )
}

export default App
