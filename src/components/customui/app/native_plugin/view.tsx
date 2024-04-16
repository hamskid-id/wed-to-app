import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const NativePluginSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="Native Plugin"
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Available Plugins"
                    subTitle=""
                >
                    <Input
                        type="text"
                        className="border w-full"
                        placeholder="Search for an app"
                    />
                </CollapsibleComponent>
            </div>
            {
                ["One Signal","Social Login","QR/Barcode scanner","Google Firebase Analytics","Face ID/Touch ID Android Biomet","In-App Purchases","App Review","Share into app","Native Datastore","Background Location","Haptics","HapAdMob Native Adstics","Native Media Player","Meta App Events","Native Contacts","Document Scanner","Secure Modal (Apple Pay)","Calendar","Offline Downloads","Card.io","Branch.io","NFC Tag Scanner"].map((plugins,index)=>{
                    return(
                            <div 
                                className="p-4 bg-white"
                                key={index}
                            >
                                <CollapsibleComponent
                                    title={
                                        <div  
                                            className="flex w-full gap-4 flex-wrap items-center"
                                        >
                                            <div className="flex-grow flex gap-2 items-center">
                                                <div className=" w-[0.8rem] h-[0.8rem] relative">
                                                    <img
                                                        src="/whitescreen.svg"
                                                        alt="object not found"
                                                        className="w-full"
                                                    />
                                                </div>
                                                <Text
                                                    style="text-sm text-start"
                                                    value={plugins}
                                                />
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <Text
                                                    style="text-sm"
                                                    value="#2000"
                                                />
                                                <Text
                                                    style="text-xs"
                                                    value="one time"
                                                />
                                                <Button className="bg-[grey] text-black badge">view docs</Button>
                                                <Button className="badge">Add</Button>
                                            </div>
                                        </div>
                                    }
                                    subTitle="Our most popular push notification service offers advanced messaging and fits businesses of all sizes, and is free to test before publishing. Opt for Full-Service, and we’ll configure it for your app."
                                >
                                <div></div>
                            </CollapsibleComponent>
                        </div>
                       
                    )
                })
            }
        </div>
    )
}