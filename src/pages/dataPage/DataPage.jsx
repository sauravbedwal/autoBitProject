import React from "react";
import Header from "../../components/header/Header";
import ScriptButtons from "../../components/scriptButtons/ScriptButtons";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import SearchBar from "../../components/searchBar/SearchBar";
import ScriptData from "../../components/scriptData/ScriptData";
import Footer from "../../components/footer/Footer";

const DataPage = () => {
  return (
    <>
      <Header />
      <ScriptButtons />
      <ToggleButton />
      <SearchBar />
      <ScriptData />
      <Footer />
    </>
  );
};

export default DataPage;
