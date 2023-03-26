import React from "react";
import "../style/Profile.css";
// import Ellipse1 from "../assets/Ellipse1.png";
import { Outlet } from "react-router";
import { Flex } from "@chakra-ui/react";
import { useUser } from "../context/UserContext";

function DashboardInnerLayout() {
    const { profile }:any = useUser();
  return (
    <Flex
      minH="calc(100vh- 120px)"
      mt="160px"
      mx={{ base: 5, md: 10 }}
      mb="50px"
      direction={{ base: "column", md: "row" }}
    >
      {/* <section className='mt-5 p-4 sec-profile1 row p-md-5'> */}
      <main className="sec-profile mt-md-3 col-md-4">
        <article className="art-profile text-center">
          <div className="mt-4">
            <img src={profile?.img || "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"} alt="" />
          </div>
          <div className="mt-2 profile-text text-center">
            <h4 className="text-uppercase">{profile?.name}</h4>
          </div>
        </article>
        <article className="mt-3 text-center mb-5 mb-md-0">
          <div>
            <p>
              Complete Orders <span className="profile-two">25</span>
            </p>
          </div>
          <div>
            <p>
              Incomplete Orders <span className="profile-three">26</span>
            </p>
          </div>
          <div>
            <p>
              Cancelled Orders <span className="profile-two">27</span>
            </p>
          </div>
        </article>
        {/* <article className="mt-5 p-3 mb-3">
          <p className="logoutt">Log Out</p>
        </article> */}
      </main>
      <Outlet />
      {/* </section> */}
    </Flex>
  );
}

export default DashboardInnerLayout;
