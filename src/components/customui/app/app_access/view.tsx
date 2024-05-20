import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { SelectInput } from "@/components/global/selectInput"
import { Text } from "@/components/global/text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectItem } from "@/components/ui/select"

export const AppAccess =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold"
                    value="App Access Management"
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Add Existing member to app"
                >
                    <div className="flex lg:flex-row md:flex-row xl:flex-row sm:flex-col gap-4 my-4">
                        <Input
                            type="text"
                            className="border"
                            placeholder="example@gmail.com"
                        />
                        <div className="flex gap-2 items-center w-[5rem] justify-end">
                            <SelectInput
                                    label="viewer"
                                    placeholder="viewer"
                                    style="4rem border"
                                >
                                {
                                    [{
                                        title:"200%",
                                        value:"200%"
                                    }].map((selectvalue,index)=>{
                                        const{
                                            title,
                                            value
                                        }=selectvalue;
                                        return(
                                            <SelectItem 
                                                value={value}
                                                key={index}
                                            >{title}
                                            </SelectItem>
                                        )
                                    })
                                }
                            </SelectInput>
                            <Button className="bg-black text-white">Add</Button>
                        </div>
                    </div>
                    <Text
                        style="font-semibold text-lg my-4"
                        value="Organizaton member with access to this app"
                    />
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between lg:flex-row md:flex-row xl:flex-row sm:flex-col">
                            <div className="flex gap-2 items-center">
                                <div className=" w-[2rem] h-[2rem] relative">
                                    <img
                                        src="/laundry img.svg"
                                        alt="object not found"
                                        className="w-full"
                                    />
                                </div>
                                <Text
                                    value="Kemmy"
                                    style="text-sm text-start"
                                />
                            </div>
                            <div className="flex gap-2 items-center w-[5rem] justify-end">
                                <SelectInput
                                        label="viewer"
                                        placeholder="viewer"
                                        style="4rem border"
                                    >
                                    {
                                        [{
                                            title:"200%",
                                            value:"200%"
                                        }].map((selectvalue,index)=>{
                                            const{
                                                title,
                                                value
                                            }=selectvalue;
                                            return(
                                                <SelectItem 
                                                    value={value}
                                                    key={index}
                                                >{title}
                                                </SelectItem>
                                            )
                                        })
                                    }
                                </SelectInput>
                            </div>
                        </div>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}