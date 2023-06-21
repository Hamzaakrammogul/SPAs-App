import React, { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

const Error = ()=>{
    return(
        <Fragment>
      <MainNavigation/>
      <main>
        <h1>Something bad happened...</h1>
        <p>Could not find this page :(</p>
      </main>
      </Fragment>
    );
};

export default Error;

