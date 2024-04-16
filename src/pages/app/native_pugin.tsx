import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
import { NativePluginSection } from "@/components/customui/app/native_plugin/view"
// import { useParams } from "react-router-dom"
export const NativePluginPage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <NativePluginSection />
        </EditLayout>
    )
}