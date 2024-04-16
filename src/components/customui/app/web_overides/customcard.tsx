import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AiOutlinePlus} from "react-icons/ai"

export const CustomConfigCard =({
    title
}:{
    title:string
})=>{
    return(
        <div className="p-4 rounded-md border">
            <div>
                <Button className="flex items-center gap-2 bg-white border text-black my-4 m-auto mb-4">
                    <AiOutlinePlus size="1.4rem"/>
                    Add {title}
                </Button>
                <Input 
                    type="text"
                    className="w-full p-2 rounded"
                />
            </div>
        </div>
    )
}