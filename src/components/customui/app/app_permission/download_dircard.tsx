import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export const DownloadDirConfigCard =()=>{
    return(
        <div className="flex flex-col gap-4">
            <RadioGroup 
                className="flex flex-col border p-[0.7rem] flex-grow rounded-md"
                defaultValue="app">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="app" id="r2" />
                    <Label htmlFor="app">Files saved private to app</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="folder" id="r2" />
                    <Label htmlFor="folder">Files saved to download folder</Label>
                </div>
            </RadioGroup>
        </div>
    )
}