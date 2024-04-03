import React from "react";
import { Text } from "../../global/text";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export const AuthLayout=({
    children,
    route,
    routeText
}: {
    children: React.ReactNode,
    route:string,
    routeText:string
  })=>{
    const navigate = useNavigate()
    return(
        <div className="bg-[#e0f2fe] h-screen w-full">
            <div className="flex flex-row w-full h-full">
                <div className="w-[30rem] lg:block xl:block md:block sm:hidden relative authBg h-full bg-[#24243E]">
                     <div className="absolute bottom-[6rem] left-[2rem] right-[2rem]">
                        <Text
                            style="text-4xl text-center text-white font-semibold mb-4"
                            value="Partnership for Business Growth"
                        />
                        <Text
                            style="text-md text-center text-white font-light"
                            value="Partnerships are pivotal for business growth, enabling companies to leverage mutual strengths, share risks, and capitalize on opportunities."
                        />
                    </div>
                </div>
                <div className="p-4 flex-grow">
                    <div className="flex flex-wrap justify-between gap-2">
                        <div className="flex gap-2 items-center">
                            <AiOutlineDoubleLeft color="grey" size="1.3rem"/>
                            <Text
                                style="text-sm text-start"
                                value="Return Home"
                            />
                        </div>
                        <Text
                            style="text-sm text-start"
                            value={routeText}
                            clickFunc={()=>navigate(route)}
                        />
                    </div>
                    <div className="p-4 h-full lg:w-[450px] xl:w-[450px] md:w-[450px] sm:w-full m-auto relative flex flex-col items-center justify-center">
                        <div className="lg:p-8 xl:p-8 md:p-8 sm:p-4 rounded-md bg-white w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
       </div>
  );
};