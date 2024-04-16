import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { AiOutlineDownload, AiOutlineReload, } from "react-icons/ai"
import { Text } from "@/components/global/text"
import { OsConfigCard } from "@/components/global/os_config_card"
export const AppDownloadConfig =()=>{
    return(
        <div>
            <Button className="flex items-center gap-2 bg-white border text-black">
                <AiOutlineReload size="1.4rem"/>
                Rebuild
            </Button>
            <div className="grid lg:grid-col-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
                <OsConfigCard
                    os="IOS"
                >
                    <div className="flex flex-col gap-2">
                        <Text
                            style="text-sm"
                            value="Source Code"
                        />
                        <Button className="flex items-center gap-2 bg-white border text-black">
                            <AiOutlineReload size="1.4rem"/>
                            Rebuild Source
                        </Button>
                        <Text
                            style="text-xs text-[grey]"
                            value="Last updated Feb 14, 2014 04:40PM"
                        />
                        <Button className="flex items-center gap-2 bg-white bg-[grey] text-black">
                            <AiOutlineDownload size="1.4rem"/>
                            Download Source
                        </Button>
                        <Text
                            style="text-sm text-[grey]"
                            value="An Apple developer account is required to run on a physical device"
                        />
                    </div>
                </OsConfigCard>
                <OsConfigCard
                    os="Android"
                >   
                    <div className="flex flex-col gap-4">
                        <Text
                            style="text-sm"
                            value="APK/AAB"
                        />
                        <div className="flex items-center space-x-2">
                            <Label htmlFor="airplane-mode" className="font-semibold text-sm">SIGN WITH UPLOAD KEYSTORE</Label>
                            <Switch id="airplane-mode" />
                        </div>
                        <Button className="flex items-center gap-2 bg-white border text-black">
                            <AiOutlineReload size="1.4rem"/>
                            Rebuild Binaries
                        </Button>
                        <Text
                            style="text-sm p-4 rounded-md bg-[#E8F2FC]"
                            value="Your app configuration has been modified. Rebuild to incorporate your changes and our latest updates."
                        />
                        <Button className="flex items-center gap-2 bg-white border text-black">
                            <AiOutlineReload size="1.4rem"/>
                            Build Source
                        </Button>
                        <Text
                            style="text-sm p-4 rounded-md bg-[#E8F2FC]"
                            value="Your app configuration has been modified. Rebuild to incorporate your changes and our latest updates."
                        />
                    </div>
                </OsConfigCard>
            </div>
        </div>
    )
}