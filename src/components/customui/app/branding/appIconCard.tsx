import { Label } from "@/components/ui/label"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"

export const AppIconCard =({
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
            <div className="flex justify-between items-center py-4">
                <div>
                    <Label 
                        htmlFor="iconImg"
                        className="border p-2 rounded">Change image
                    </Label>
                    <input
                        type="file" 
                        name="iconImg"
                        id="iconImg"
                    />
                </div>
                <div className=" w-[3rem] h-[3rem] relative">
                    <img
                        src={img}
                        alt="object not found"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    )
}