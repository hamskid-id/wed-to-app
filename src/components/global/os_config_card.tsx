import { Label } from "@/components/ui/label"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const OsConfigCard =({
    os,
    radios,
    children,
}:{
    os:"IOS"|"Android"|"IOS and Android",
    children?:React.ReactNode,
    radios?:{
        title:string,
        label:string
    }[]
})=>{
    return(
        <div>
            <div className="flex gap-2 items-center border border-b p-4 rounded-t-md">
                {
                    os ==="IOS"?(
                        <AiFillApple size="2rem"/>
                    ):os ==="Android"?(
                        <AiFillAndroid size="2rem"/>
                    ):<div className="flex gap-4 items-center"><AiFillApple size="2rem"/><AiFillAndroid size="2rem"/></div>
                }
                {os}
            </div>
            {
                radios&&(
                    <RadioGroup 
                        className="flex justify-between border p-[0.7rem] flex-grow rounded-md"
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
                )
            }{
                children && <div>{children}</div>
            }
        </div>
    )
}