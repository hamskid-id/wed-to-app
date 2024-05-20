import { SimulationView } from "@/components/global/simulationview"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { AiOutlineMore } from "react-icons/ai"
import { AppLayout } from "../layout"
import { TopNav } from "@/components/global/topnav"

export const EditLayout =({
    children
}:{
    children:React.ReactNode
})=>{
    return(
        <div>
            <div className="mb-2">
                <TopNav/>
            </div>
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col">
                <div className="flex-grow p-2 bg-[#f9fafb]">
                    <div className="flex justify-between lg:flex-row xl:flex-row md:flex-row sm:flex-col mb-2 px-2">
                        <div className="flex gap-2 text-lg items-center text-lg font-semibold">
                            <div className=" w-[3rem] h-[3rem] relative">
                                <img
                                    src="/brand_icon.png"
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                            WebHosting App
                        </div>
                        <div className="flex gap-4 items-center">
                            <Text
                                style="text-xs text-[grey]"
                                value="Last saved 12days ago"
                            />
                            <Button className="bg-black">Done Editing</Button>
                            <div className="bg-white p-2 rounded-md">
                                <AiOutlineMore size="1.2rem"/>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-y-clip">
                        <AppLayout>
                            <div className="bg-[#f9fafb]">
                                {children}
                            </div>
                        </AppLayout>
                    </div>
                </div>
                <SimulationView/>
            </div>
        </div>
    )
}