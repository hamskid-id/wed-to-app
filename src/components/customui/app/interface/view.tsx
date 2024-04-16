import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ScreenOrientationConfigCard } from "./screenorientationconfig"
import { KeepScreenOnCard } from "./keep_screen_config"
import { SwipeGestorsCardCard } from "./swipegestors"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { OsConfigCard } from "@/components/global/os_config_card"

export const InterfaceSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="App Interface"
                />
                <Text
                    style="text-sm text-[grey]"
                    value="App Interface settings control the functionality of your app, allowing you to optimize the app versus website experience for your users."
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Kepp Screen On"
                    subTitle="Keep the device screen on all the time for many purposes such as a in-vehicle display app, museum kiosk app, trade show demo, etc. In addition to an app configuration which will be enabled at all times this setting can also be set and cleared via the JavaScript Bridge."
                >
                    <RadioGroup 
                        className="flex w-fit gap-8 justify-between border p-[0.7rem] rounded-md"
                        defaultValue="off">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="off" id="r1" />
                            <Label htmlFor="off">Off</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="on" id="r2" />
                            <Label htmlFor="on">On</Label>
                        </div>
                    </RadioGroup>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Full Screen"
                    subTitle="Control whether your app is displayed in full screen. This mode can also be set at runtime from your website using the JavaScript Bridge. Note that on Android when full screen mode enabled the keyboard will overlay on top of your web content which can cause issues for users completing forms."
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
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
                    title="Dark Mode"
                    subTitle="Set the default Light/Dark mode for your app. The Auto mode follows the device setting for Light & Dark Mode, but you can set Light or Dark to force a mode irrespective of the device setting. The current mode can also be changed at runtime using the Median JavaScript Bridge."
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <OsConfigCard
                            os="IOS"
                            radios={[
                                {
                                    title:"Auto",
                                    label:"Auto Light/Dark"
                                },{
                                    title:"Light",
                                    label:"Light"
                                },{
                                    title:"dark",
                                    label:"Dark"
                                }
                            ]}
                        />
                        <OsConfigCard
                            os="Android"
                            radios={[
                                {
                                    title:"Auto",
                                    label:"Auto Light/Dark"
                                },{
                                    title:"Light",
                                    label:"Light"
                                },{
                                    title:"dark",
                                    label:"Dark"
                                }
                            ]}
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Screen Orientation"
                    subTitle="Control whether the orientation of your app changes automatically as the device is rotated or remains fixed in portrait or landscape mode. Note that Fixed Portrait for iPad will automatically disable multi-tasking."
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <ScreenOrientationConfigCard
                            os="IOS"
                        />
                        <ScreenOrientationConfigCard
                            os="Android"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Keep Screen On"
                    subTitle="With native page transitions enabled a loading spinner will show when loading new pages within your app. The current page will fade out, the loading spinner will be displayed, and then the new page will fade in when it has finished loading."
                >
                    <RadioGroup 
                        className="flex justify-between border p-[0.7rem] flex-grow rounded-md"
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
                    <div className="flex flex-col gap-2 my-4">
                        <Label htmlFor="overlay">Overlay</Label>
                        <Slider defaultValue={[33]} max={100} step={1} className="lg:w-[30%] xl:w-[30%] md:w-30%] sm:w-full"/>
                    </div>
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <KeepScreenOnCard
                            os="IOS"
                        />
                        <KeepScreenOnCard
                            os="Android"
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Pull To Refresh"
                    subTitle="With native page transitions enabled a loading spinner will show when loading new pages within your app. The current page will fade out, the loading spinner will be displayed, and then the new page will fade in when it has finished loading."
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
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
                        <OsConfigCard
                            os="Android"
                            radios={[
                                {
                                    title:"Off",
                                    label:"off"
                                },{
                                    title:"On",
                                    label:"on"
                                }
                            ]}
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Swipe Gestures"
                    subTitle="Add swipe gestures to your app to enable swiping to go back and forward in the navigation history. On Android, arrow indicators will show on the screen to indicate when there is a page available to go back to or to go forward to."
                >
                    <RadioGroup 
                        className="flex justify-between border p-[0.7rem] flex-grow rounded-md w-fit gap-8 mb-4"
                        defaultValue="off">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="off" id="r1" />
                            <Label htmlFor="off">Off</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="on" id="r2" />
                            <Label htmlFor="on">On</Label>
                        </div>
                    </RadioGroup>
                    <SwipeGestorsCardCard
                        os="Android"
                    />
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Pinch to zoom"
                    subTitle="Add pinch-to-zoom functionality so that users can use two fingers to zoom in and out without your app. This feature is disabled by default as in some scenarios the behavior may not be required."
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
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
                        <OsConfigCard
                            os="Android"
                            radios={[
                                {
                                    title:"Off",
                                    label:"off"
                                },{
                                    title:"On",
                                    label:"on"
                                }
                            ]}
                        />
                    </div>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Accessibility & Dynamic Type"
                    subTitle="When enabled the text on pages displayed within your iOS app will adjust in size according to your device's settings using the CSS property -webkit-text-size-adjust"
                >
                    <div className="flex flex-col gap-4">
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
                    title="Front Scalling"
                    subTitle="Disable Android system front scaling or set a specific scale irrespective of device and device settings. e.g. 90% for smaller text than default."
                >
                    <div className="flex flex-col gap-4">
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
                    title="Maximum windows"
                    subTitle={`Set a maximum number of windows that are opened simultaneously to improve performance for resource-intensive apps. Once the maximum number of windows has been reached, then previously opened windows will be automatically closed starting with the window that was open first. Enable "Auto Close" so that when your primary website URL (app home screen) is opened, all other previously opened windows will be automatically closed.`}
                >
                    <RadioGroup 
                        className="flex justify-between border p-[0.7rem] flex-grow rounded-md w-fit gap-8"
                        defaultValue="disable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="permitted" id="r1" />
                            <Label htmlFor="disable">Disable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label htmlFor="enable">Enable</Label>
                        </div>
                    </RadioGroup>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="View port width"
                    subTitle={`The app's viewport is the visible area of the window where content is visible. To adjust the scale of pages shown within your app, you can force a page width. Before modifying this setting, we first suggest altering the viewport meta tag on your website.`}
                >
                    <RadioGroup 
                        className="flex justify-between border p-[0.7rem] flex-grow rounded-md w-fit gap-8"
                        defaultValue="disable">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="permitted" id="r1" />
                            <Label htmlFor="disable">Disable</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="enable" id="r2" />
                            <Label htmlFor="enable">Enable</Label>
                        </div>
                    </RadioGroup>
                </CollapsibleComponent>
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Localization"
                    subTitle={`By default your user's default device language will be set within your app for all web content which will then display in the corresponding language in the same manner it is displayed in a regular browser, i.e. if there is an Accept-Language header present. The native UI components in the native app layer have been localized to various languages as contributed by customers. These must be selected to enable for your app.`}
                >
                    <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        {
                            ["English","Arabic","catain","Others"].map((lang,index)=>{
                                return(
                                    <div 
                                        className="flex-grow"
                                        key={index}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <Checkbox value={lang} id="r1" />
                                            <Label htmlFor={lang}>{lang}</Label>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}