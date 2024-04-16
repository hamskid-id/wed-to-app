import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
export const SplashScreenCard =({
    os,
    img,
}:{
    os:"IOS"|"Android",
    img:string, 
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
            <div className="flex gap-4 flex-col">
                <Text
                    style="text-md mt-4"
                    value="Screen style"
                />
                <div className="flex flex-wrap justify-between items-center gap-4">
                    <RadioGroup 
                        className="flex justify-between border p-[0.7rem] flex-grow rounded-md"
                        defaultValue="app_icon">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="app_icon" id="r1" />
                            <Label htmlFor="r1">App icon</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="new_image" id="r2" />
                            <Label htmlFor="r2">New image</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="solid_color" id="r3" />
                            <Label htmlFor="r3">Solid color</Label>
                        </div>
                    </RadioGroup>
                    <Button className="bg-white border text-black">Match {os}</Button>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="flex gap-2 items-start rounded bg-[#f9fafb] p-2">
                        <div className="bg-white py-8 px-4 rounded-md h-full flex flex-col justify-center items-center">
                            <div className=" w-[1.4rem] h-[1.4rem] relative">
                                <img
                                    src={img}
                                    alt="object not found"
                                    className="w-full"
                                />
                            </div>
                        </div>
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
                            <Text
                                style="text-[grey] text-xs mb-2"
                                value="BACKGROUND"
                            />
                            <div className="w-fit flex justify-between border rounded-md px-2 py-1 items-center gap-2">
                                <div className="h-[0.7rem] w-[0.7rem] p-1 rounded border bg-white"></div>
                                <Text
                                    style="text-[grey] text-xs"
                                    value="#FFFFFF"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-start rounded bg-[#f9fafb] p-2">
                        <div className="bg-black py-8 px-4 rounded-md h-full flex flex-col justify-center items-center">
                            <div className=" w-[1.4rem] h-[1.4rem] relative">
                                <img
                                    src={img}
                                    alt="object not found"
                                    className="w-full"
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
                            <Text
                                style="text-[grey] text-xs mb-2"
                                value="BACKGROUND"
                            />
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
        </div>
    )
}