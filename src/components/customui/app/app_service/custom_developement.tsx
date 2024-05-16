import { CollapsibleComponent } from "@/components/global/collapsibleComponent"
import { Button } from "@/components/ui/button"

export const AppCustomDevelopement =()=>{
    return(
        <div>
            <CollapsibleComponent
                    title="Custom Mobile Developement"
                    subTitle=""
                >
                    <div>
                        <ul className="text-xs text-[grey] gap-8 list-disc leading-7 ">
                            <li>Does your app need additional native functionality? Do you need a vendor provided iOS or Android native SDK integrated?</li>
                            <li>Median's engineering team can build a custom plugin to meet your requirements.</li>
                            <li>Custom plugins typically provide the additional required native functionality such as SDK functions through the Median JavaScript Bridge.</li>
                            <li>Custom plugins integrate into your existing app through our online build platform allowing you to continue building your app online and to receive ongoing updates.</li>
                            <li>Please provide us with your requirements and we look forward to assisting you with your project.</li>
                        </ul>
                        <div className="flex items-center gap-2 font-semibold text-lg my-4">#20000 <span className="font-medium text-sm">one-time payment</span></div>
                        <Button className="bg-black text-white">
                            Contact us
                        </Button>
                    </div>
                </CollapsibleComponent>
        </div>
)
}