import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
import { Web_OveridesSection } from "@/components/customui/app/web_overides/view"
// import { useParams } from "react-router-dom"
export const WebOveridesPage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <Web_OveridesSection/>
        </EditLayout>
    )
}