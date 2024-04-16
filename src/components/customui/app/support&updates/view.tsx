import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { AiOutlineSync} from "react-icons/ai"
import { Button } from "@/components/ui/button"

export const SupportViewSection =()=>{
    return(
        <div className="flex gap-1 flex-col">
            <div className="p-2 bg-white w-full rounded">
                <Text
                    style="text-xl font-semibold mb-1"
                    value="Support & Updates"
                />
            </div>
            <div className="p-4 bg-white">
                <CollapsibleComponent
                    title="Self Support for free"
                    subTitle=""
                >
                   <div className="flex flex-col gap-4">
                        <ul className="text-[grey]">
                            {
                                [
                                    "Six months of online app rebuilds for changes to your app configuration",
                                    "Apps function indefinitely subject to future compatibility with iOS and Android versions",
                                    "Community support through Median's documentation and support portal"
                                ].map((items,index)=><li className="text-[grey] mb-2" key={index}>{items}</li>)
                            }
                        </ul>
                        <Button className="flex items-center gap-2 bg-white border text-black">
                            <AiOutlineSync size="1.4rem"/>
                            Support Portal
                        </Button>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}