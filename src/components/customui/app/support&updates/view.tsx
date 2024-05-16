import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Text } from "@/components/global/text"
import { AiOutlineLink} from "react-icons/ai"
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
                            <AiOutlineLink size="1.4rem"/>
                            Support Portal
                        </Button>
                        <div className="grid lg:grid-col-2 xl:grid-col-2 md:grid-col-2 sm:grid-col-1 ">
                            <div className="border p-4 rounded-md">
                                <Text
                                    style="text-lg font-semibold"
                                    value="Assisted Supports And Updates"
                                />
                                <ul className="text-sm gap-4">
                                    <li>Unlimited online app rebuilds and a guarantee of compatibility with iOS and Android updates</li>
                                    <li>Priority email support with one business day or sooner response from our team</li>
                                    <li>Engineering support for web to app integrations and advanced troubleshooting</li>
                                </ul>
                                <div className="flex items-center gap-2">#20000 <span>/year</span></div>
                                <Button className="bg-black text-white w-full">
                                    Purchase
                                </Button>
                            </div>
                            <div className="border p-4 rounded-md">
                                <Text
                                    style="text-lg font-semibold"
                                    value="Enterprise Support"
                                />
                                <ul className="text-sm gap-4">
                                    <li>Technical support for MDM deployments, private app stores, app security assessments</li>
                                    <li>Phone-based incident reporting for business hours or 24-hour coverage</li>
                                    <li>SLA to provide certainty of ongoing compatibility and response target times</li>
                                </ul>
                                <Text
                                    style="text-sm text-center font-semibold"
                                    value="Custom Pricing"
                                />
                                <Text
                                    style="text-sm text-center"
                                    value="Our team will contact you to discuss your requirement"
                                />
                                <div className="flex items-center gap-4">#20000 <span>one-time payment</span></div>
                                <Button className="bg-black text-white w-full">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </CollapsibleComponent>
            </div>
        </div>
    )
}