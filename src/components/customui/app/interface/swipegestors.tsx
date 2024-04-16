import { Text } from "@/components/global/text"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
export const SwipeGestorsCardCard =({
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
            <div>
                <Text
                    style="text-md mt-4"
                    value="Navigation Background Color"
                />
                <div className="flex gap-4 items-center mt-4">
                    <div className="flex flex-col gap-2">
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
                    <div className="flex flex-col gap-2">
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
            <div>
                <Text
                    style="text-md mt-4"
                    value="Navigation Active Color"
                />
                <div className="flex gap-4 items-center mt-4">
                    <div className="flex flex-col gap-2">
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
                    <div className="flex flex-col gap-2">
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
            <div>
                <Text
                    style="text-md mt-4"
                    value="Navigation Inactive Color"
                />
                <div className="flex gap-4 items-center mt-4">
                    <div className="flex flex-col gap-2">
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
                    <div className="flex flex-col gap-2">
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
    )
}