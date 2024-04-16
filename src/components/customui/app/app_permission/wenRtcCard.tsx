import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Text } from "@/components/global/text"

export const WebRtcConfigCard =({
    radios
}:{
    radios:{
        title:string,
        label:string
    }[]
})=>{
    return(
        <div className="flex gap-4 flex-col border">
            <Text
                style="text-sm font-semibold"
                value="Microphone"
            />
            <RadioGroup 
                className="flex justify-between border p-[0.7rem] flex-grow "
                defaultValue="off">
                    {
                        radios.map((rad,index)=>{
                            const{
                                title,
                                label
                            }=rad;
                            return(
                                <div 
                                    className="flex items-center space-x-2"
                                    key={index}
                                >
                                    <RadioGroupItem value={label} id="r1" />
                                    <Label htmlFor={label}>{title}</Label>
                                </div>
                            )
                        })
                    }
            </RadioGroup>
            <Text
                style="text-sm font-semibold"
                value="Camera"
            />
            <RadioGroup 
                className="flex justify-between border border-y p-[0.7rem] flex-grow"
                defaultValue="off">
                    {
                        radios.map((rad,index)=>{
                            const{
                                title,
                                label
                            }=rad;
                            return(
                                <div 
                                    className="flex items-center space-x-2"
                                    key={index}
                                >
                                    <RadioGroupItem value={label} id="r1" />
                                    <Label htmlFor={label}>{title}</Label>
                                </div>
                            )
                        })
                    }
            </RadioGroup>
        </div>
    )
}