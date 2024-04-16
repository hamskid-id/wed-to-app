import { SelectInput } from "@/components/global/selectInput";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { IoMoveSharp } from "react-icons/io5";
export const RestoreDefaultActionList =()=>{
    return(
        <div className="flex flex-col gap-0">
            {
                [
                    {
                        title:"Non web Link",
                        dropdowns:["App Browser"]
                    },{
                        title:"FaceBook",
                        dropdowns:["App Browser"]
                    },{
                        title:"Twiiter",
                        dropdowns:["App Browser"]
                    },{
                        title:"Instagram",
                        dropdowns:["App Browser"]
                    },{
                        title:"Google map",
                        dropdowns:["App Browser"]
                    },{
                        title:"Google Map Search",
                        dropdowns:["App Browser"]
                    }
                ]?.map((list,index)=>{
                    return(       
                        <div 
                            className="p-2 rounded-md border"
                            key={index}
                        >
                            <div  className="flex gap-4 flex-rap items-center p-1 bg-[#f9fafb]">
                                <div className="flex gap-4 items-center flex-grow">
                                    <IoMoveSharp size="1.4rem" />
                                    <Input
                                        type="text"
                                        className="border"
                                        defaultValue={list.title}
                                    />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <SelectInput
                                        label="App Browser"
                                        placeholder="App Browser"
                                        style="w-full border"
                                    >
                                        {
                                            list.dropdowns.map((selectvalue,index)=>{
                                                return(
                                                    <SelectItem 
                                                        value={selectvalue}
                                                        key={index}
                                                    >{selectvalue}
                                                    </SelectItem>
                                                )
                                            })
                                        }
                                    </SelectInput>
                                    <AiOutlineEdit size="1.4rem"/>
                                    <AiOutlineDelete size="1.4rem"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}