import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"

export const AppPublishingTab =()=>{
    return(
        <div>
            <CollapsibleComponent
                    title="Self Publish"
                    subTitle=""
                >
                    <ul className="text-xs text-[grey] gap-8 list-disc leading-7 ">
                        <li>For iOS a Mac with Xcode is required to build and upload your app to the Apple App Store</li>
                        <li>For Android the AAB file created by our build platform can be uploaded directly to Google Play</li>
                        <li>Our Publishing Guide is a helpful reference for customers who are publishing themselves</li>
                    </ul>
                    <Button className="bg-[grey] text-black my-4">View Documentaions</Button>
                    <div className="w-full">
                        <div className="border p-4 rounded-md w-full leading-7">
                            <Text
                                style="text-lg font-semibold my-4"
                                value="5starComapny publishing Team"
                            />
                            <div className="flex flex-col gap-2">
                                <Text
                                    style="text-xs text-[grey]"
                                    value="Our experienced team manages the end-to-end process for the Apple App Store and Google Play"
                                />
                                <Text
                                    style="text-xs text-[grey]"
                                    value="On-device testing for iOS via TestFlight (Apple Mac and Xcode not required)"
                                />
                                <Text
                                    style="text-xs text-[grey]"
                                    value="Complete configuration of OneSignal push notifications"
                                />
                                <Text
                                    style="text-xs text-[grey]"
                                    value="Preparation of keystores, signing certificates and provisioning profiles"
                                />
                                <Text
                                    style="text-xs text-[grey]"
                                    value="Creation of app store listings and screenshots"
                                />
                                <Text
                                    style="text-xs text-[grey]"
                                    value="Management of app review feedback with guarantee of approval"
                                />
                            </div>
                            <div className="flex items-center gap-2 font-semibold text-lg my-4">#20000 <span className="font-medium text-sm">one-time payment</span></div>
                            <Button className="bg-black text-white w-full">
                                Purchase
                            </Button>
                        </div>
                    </div>
                </CollapsibleComponent>
        </div>
)
}