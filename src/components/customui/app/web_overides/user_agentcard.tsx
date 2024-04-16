import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"

export const UserAgentConfigCard =()=>{
    return(
        <div className="p-4 rounded-md border">
            <RadioGroup 
                className="flex justify-between border p-[0.7rem] flex-grow rounded-md"
                defaultValue="off">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enable" id="r1" />
                    <Label htmlFor="enable">Enable</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="blocked" id="r2" />
                    <Label htmlFor="disable">Disable</Label>
                </div>
            </RadioGroup>
            <Input
                className="w-full p-2 rounded-md border"
                type="text"
            />
        </div>
    )
}