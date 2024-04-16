import { Label } from "@/components/ui/label"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Text } from "@/components/global/text"

export const ScreenOrientationConfigCard =({
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
            <div className="flex flex-col gap-4">
                <Text
                    style="text-md font-semibold"
                    value={os ==="IOS"?"Iphone":"Phone"}
                />
                <RadioGroup 
                    className="flex flex-col border p-[0.7rem] flex-grow rounded-md"
                    defaultValue="auto">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auto" id="r1" />
                        <Label htmlFor="auto">Auto Rotate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="portrait" id="r2" />
                        <Label htmlFor="portrait">Fixed Portrait</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="landscape" id="r2" />
                        <Label htmlFor="Landscape">Fixed Landscape</Label>
                    </div>
                </RadioGroup>
                <Text
                    style="text-md font-semibold"
                    value={os ==="IOS"?"Ipad":"Tablet"}
                />
                <RadioGroup 
                    className="flex flex-col border p-[0.7rem] flex-grow rounded-md"
                    defaultValue="off">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auto" id="r1" />
                        <Label htmlFor="auto">Auto Rotate</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="portrait" id="r2" />
                        <Label htmlFor="portrait">Fixed Portrait</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="landscape" id="r2" />
                        <Label htmlFor="Landscape">Fixed Landscape</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
    )
}