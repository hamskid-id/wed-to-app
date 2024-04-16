import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { OsConfigCard } from "@/components/global/os_config_card"
import { AiOutlinePlus } from "react-icons/ai"
import { WebRtcConfigCard } from "./wenRtcCard"
import { DownloadDirConfigCard } from "./download_dircard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const AppPermissionSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="App Permission"
                />
                <Text
                    style="text-sm text-[grey]"
                    value="Some device hardware and functionality requires specific permissions from the user to access within your app. At times, permission requirements can be configured to be prompted when the app is first opened or they can be prompted when required at runtime via the JavaScript Bridge."
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="JaveScript Bridge Allowed"
                    subTitle="By default all pages that are displayed in your app can access the Median JavaScript Bridge. You may optionally restrict access based on URL paths. This feature should be disabled during debugging."
                >
                    <div className="w-fit m-auto my-4">
                        <Button className="flex items-center gap-2 bg-white border text-black">
                            <AiOutlinePlus size="1.4rem"/>
                            Add 
                        </Button>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="App Tracking Transparency"
                    subTitle="Configure your app to be compliant with Apple's User Privacy and Data Use Policies using the AppTrackingTransparency Framework."
                >
                    <div className="flex flex-col gap-4 lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full">
                        <OsConfigCard
                            os="IOS"
                            radios={[
                                {
                                    title:"Disable",
                                    label:"disable"
                                },{
                                    title:"Enable",
                                    label:"enable"
                                }
                            ]}
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Location Service"
                    subTitle="If your app requires access to the device location in Android, you will need to enable this permission and then call a JavaScript Bridge command to request permission at runtime. For iOS, permission is only prompted at runtime. But to avoid both the app and your website prompting twice for location permission, you will need to use the function median_geolocation_ready() which is called when location services are initialized within the app."
                >
                    <div className="flex flex-col gap-4 lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full">
                        <OsConfigCard
                            os="Android"
                            radios={[
                                {
                                    title:"Disable",
                                    label:"disable"
                                },{
                                    title:"Enable",
                                    label:"enable"
                                }
                            ]}
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="WebRTC Audoi & Video"
                    subTitle="You may enable WebRTC permissions within your app to support web-based audio and video applications that use the WebRTC framework. Similar to a standard browser, your app will request microphone and/or camera permission when your WebRTC app requires access."
                >
                    <div className="flex flex-col gap-4 lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full">
                        <OsConfigCard
                                os="Android"
                        >
                            <WebRtcConfigCard
                                radios={[
                                    {
                                        title:"Disable",
                                        label:"disable"
                                    },{
                                        title:"Enable",
                                        label:"enable"
                                    }
                                ]}
                            />
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Download Directory"
                    subTitle="Android requires permission to allow downloading to the device public downloads directory. Otherwise, downloaded files will only be accessible within the app."
                >
                    <div className="flex flex-col gap-4 lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full">
                        <OsConfigCard
                                os="Android"
                        >
                            <DownloadDirConfigCard/>
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Background Audio"
                    subTitle="Background audio permission on iOS allows audio from the app to be played while the app is minimized or backgrounded. Use the Median JavaScript Bridge to start and stop the background audio service to make use of this feature."
                >
                    <div className="flex flex-col gap-4 lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full">
                        <OsConfigCard
                            os="Android"
                            radios={[
                                {
                                    title:"Disable",
                                    label:"disable"
                                },{
                                    title:"Enable",
                                    label:"enable"
                                }
                            ]}
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="ISO Permission Description"
                    subTitle="Apple requires permission descriptions that accurately represent how your app uses device functionality. Update the defaults when necessary to reflect your specific use case."
                >
                    <div className="flex flex-col gap-4">
                        <OsConfigCard
                            os="IOS"
                        >
                            <Input
                                type="text"
                                className="p-2 border rounded-md"
                            />
                        </OsConfigCard>
                        <OsConfigCard
                            os="IOS"
                        >
                            <Input
                                type="text"
                                className="p-2 border rounded-md"
                            />
                        </OsConfigCard>
                        <OsConfigCard
                            os="IOS"
                        >
                            <Input
                                type="text"
                                className="p-2 border rounded-md"
                            />
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}