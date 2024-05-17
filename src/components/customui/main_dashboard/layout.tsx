import React from "react";
import { SideNav } from "./sidenav";
import { TopNav } from "../../global/topnav";

export const DashBoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="bg-[#f9fafb] h-screen px-2 relative">
      <div className="mb-4">
        <TopNav />
      </div>
      <div className="mobileNav">
        <SideNav />
      </div>
      <div className="w-full h-full">
        <div
          className="flex bg-cl"
          style={{
            height: "100%",
          }}
        >
          <div className="h-[100%]">
            <SideNav style="relative desktopNav w-60 overflow-hidden dark:bg-zinc-800 bg-white shadow me-2" />
          </div>
          <div className="w-full h-full lg:pt-8 xl:pt-8 md:pt-8 sm:pt-2 xs:pt-2 overflow-auto bg-white rounded-md">
            <div className="px-4  overflow-auto w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
