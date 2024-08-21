import React from 'react';
import BasicLayout from '../layouts/BasicLayout';
//import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    // <div>
    //   <div className="flex">
    //     <Link to={'/about'}>About</Link>
    //   </div>
    //   <div className="texxt-3xl">
    //     <div>Main Page</div>
    //   </div>
    // </div>
    <BasicLayout>
      <div className="text-3xl">Main Page</div>
    </BasicLayout>
  );
};

export default MainPage;