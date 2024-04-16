import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { OsConfigCard } from "@/components/global/os_config_card"
import { AiOutlinePlus, AiOutlineUpload } from "react-icons/ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AppDownloadConfig } from "./app_download"
import { Label } from "@/components/ui/label"
import { CustomConfigCard } from "../web_overides/customcard"

export const AppDownloadSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="App Download & Build Settings"
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="App Download"
                    subTitle={`After making changes to your app configuration press "Rebuild" to rebuild your app files for download. To test your iOS app on a physical device build from source using Xcode, an Apple Developer account is required. Your Android app may be built locally using our included Gradle script or using Android Studio.`}
                >
                    <AppDownloadConfig/>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="App Identifiers"
                    subTitle="Set a Bundle ID and Package Name for publishing. These are identifiers for your app registered with the Apple App Store and Google Play Store. They can be changed for licensed apps at any time before your app is published."
                >
                    <div className="flex flex-col gap-4 lg:w-[30%] xl:w-[30%] md:w-[50%] sm:w-full">
                        <OsConfigCard
                            os="IOS"
                        >
                            <div className="flex flex-col gap-2 border">
                                <Label htmlFor="bundle_id text-[grey]">Bundle Id</Label>
                                <Input type="text" className="p-2 w-full bg-[grey]"/>
                            </div>
                        </OsConfigCard>
                        <OsConfigCard
                            os="Android"
                        >
                            <div className="flex flex-col gap-2 border">
                                <Label htmlFor="bundle_android_name text-[grey]">Android Bundle Name</Label>
                                <Input type="text" className="p-2 w-full bg-[grey]"/>
                            </div>
                            <div className="flex flex-col gap-2 border">
                                <Label htmlFor="bundle_andriod_version text-[grey]">Android Version Name</Label>
                                <Input type="text" className="p-2 w-full bg-[grey]"/>
                            </div>
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Google Service"
                    subTitle="Add Google Firebase configuration files to your app automatically. Download the GoogleService-Info.plist file for iOS and google-services.json file for Android and either import the files or copy and paste the contents. This feature is available for licensed apps."
                >
                    <div className="grid grid-col-1 gap-8">
                        <OsConfigCard
                            os="IOS"
                        >  
                            <CustomConfigCard
                                title="GoogleService-info-plist"
                            />
                        </OsConfigCard>
                        <OsConfigCard
                            os="Android"
                        >  
                            <CustomConfigCard
                                title="GoogleService-json"
                            />
                        </OsConfigCard>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Development Tools"
                    subTitle={`To debug JavaScript in your web content from our browser-based simulators first rebuild your app with Web Console Logs enabled. Then, on the simulator panel toggle "Debug" and click "Appetize". The JavaScript console for the app will be shown at the bottom of the window that opens. Note: For Android this option must be disabled when building an APK/AAB for the Google Play Store.`}
                >
                    <div>
                        <Text
                            style="text-md text-[grey] font-semibold mb-2"
                            value="WEB CONSOLE LOGS"
                        />
                        <RadioGroup 
                            className="flex justify-between border p-[0.7rem] flex-grow rounded-md w-fit gap-8"
                            defaultValue="disable">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="disable" id="r1" />
                                <Label htmlFor="disable">Disable</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="enable" id="r2" />
                                <Label htmlFor="enable">Enable</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="App  Configuration"
                    subTitle="Your entire app is configured using an appConfig.json file. You may Edit/Import/Export the appConfig.json configuration file for your app. If you need to duplicate an existing app you can simply import the corresponding appConfig.json file."
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-fit">
                            <Label htmlFor="airplane-mode" className="text-[grey] text-xs">Edit AppConfig.Json</Label>
                            <Button className="flex items-center gap-2 bg-white border text-black">
                                <AiOutlinePlus size="1.4rem"/>
                                Edit
                            </Button>
                        </div>
                        <div className="flex flex-col gap-2 w-fit">
                            <Label htmlFor="airplane-mode" className="text-[grey] text-xs">Upload AppConfig.Json</Label>
                            <Button className="flex items-center gap-2 bg-white border text-black">
                                <AiOutlinePlus size="1.4rem"/>
                                Upload
                            </Button>
                        </div>
                        <div className="flex flex-col gap-2 w-fit">
                            <Label htmlFor="airplane-mode" className="text-[grey] text-xs">Import AppConfig.Json</Label>
                            <Button className="flex items-center gap-2 bg-white border text-black">
                                <AiOutlineUpload size="1.4rem"/>
                                Export
                            </Button>
                        </div>
                        <div className="flex flex-col gap-2 w-fit">
                            <Label htmlFor="airplane-mode" className="text-[grey] text-xs">Export AppConfig.Json</Label>
                            <Button className="flex items-center gap-2 bg-white border text-black">
                                <AiOutlinePlus size="1.4rem"/>
                                import
                            </Button>
                        </div>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}