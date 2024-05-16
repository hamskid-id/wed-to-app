
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AppDevelopementTab } from "./appDevelopementTab";
import { AppPublishingTab } from "./appPubishingTab";
import { AppCustomDevelopement } from "./custom_developement";
import { Text } from "@/components/global/text";

export const  AppServicePageWrapper=()=>{
    return(
        <div className="bg-white">
            <Text
                style="text-2xl font-semibold my-4"
                value="5starCompany service"
            />
        <Tabs defaultValue="App Developement" className="w-full">
            <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex justify-between items-center pb-4">
                    <TabsList className="bg-white justify-start items-start flex w-full lg:gap-4 xl:gap-4 md:gap-4 sm:gap-2 h-fit">
                        <TabsTrigger value="App Developement" className=" py-2 w-fit   me-2 data-[state=active]:border-b-2 border-[grey]">App Developement</TabsTrigger>
                        <TabsTrigger value="App Publishing" className="w-fit data-[state=active]:border-b-2 border-[grey]  py-2 ">App Publishing </TabsTrigger>
                        <TabsTrigger value="Custorm Develoepement" className="w-fit data-[state=active]:border-b-2 border-[grey]  py-2 ">Custorm Developement </TabsTrigger>
                    </TabsList>
                </div>
            <ScrollBar orientation="horizontal" />
            </ScrollArea>
                <div className="-md bg-white p-4">
                    <TabsContent value="App Developement">
                        <AppDevelopementTab/>
                    </TabsContent>
                    <TabsContent value="App Publishing">
                        <AppPublishingTab/>
                    </TabsContent>
                    <TabsContent value="Custorm Develoepement">
                        <AppCustomDevelopement/>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}