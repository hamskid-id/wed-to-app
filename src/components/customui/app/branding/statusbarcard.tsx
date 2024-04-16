import { Text } from "@/components/global/text"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
export const StatusbarCard =({
    os
}:{
    os:"IOS"|"Android"
})=>{
    return(
        <div className="p-4 rounded-md border">
            <div className="flex gap-2 items-center border border-b p-4 rounded-t-md">
                {
                    os ==="IOS"?(
                        <AiFillApple size="2rem"/>
                    ):(
                        <AiFillAndroid size="2rem"/>
                    )
                }
                {os}
            </div>
            <div className="flex lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between gap-4">
                <div className="flex gap-2 flex-col items-start flex-grow">
                    <div className="w-full">
                        <Text
                            style="text-md mt-4 mb-2"
                            value="Appearance"
                        />
                        <div className="w-full flex lg:flex-row xl:flex-row md:flex-row sm:flex-col justify-between items-center gap-4">
                            <RadioGroup 
                                className="flex justify-between border p-[0.7rem] rounded-md w-full"
                                defaultValue="auto">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="auto" id="r1" />
                                    <Label htmlFor="r1">Auto</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="light" id="r2" />
                                    <Label htmlFor="r2">Light</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="dark" id="r3" />
                                    <Label htmlFor="r3">Dark</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div>
                        <Text
                            style="text-md mb-2"
                            value="Background Color"
                        />
                        <div className="flex gap-4 items-center">
                            <div>
                                <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                                    <div className=" w-[0.8rem] h-[0.8rem] relative">
                                        <img
                                            src="/whitescreen.svg"
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </div>
                                    Light mode
                                </div>
                                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#FFFFFF"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-2 items-center text-[grey] text-xs mb-2">
                                    <div className=" w-[0.8rem] h-[0.8rem] relative">
                                        <img
                                            src="/darkscreen.svg"
                                            alt="object not found"
                                            className="w-full"
                                        />
                                    </div>
                                    Dark mode
                                </div>
                                <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                    <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-black"></div>
                                    <Text
                                        style="text-[grey] text-xs"
                                        value="#000000"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Text
                        style="text-md mt-4 mb-2"
                        value="Effects"
                    />
                    <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="overlay">OVERLAY</Label>
                            <Switch id="overlay" />
                        </div>
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="blur">BLUR</Label>
                            <Switch id="blur" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}