import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
import { OverviewSection } from "@/components/customui/app/overview/view"
// import { useParams } from "react-router-dom"
export const OverviewPage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <OverviewSection />
        </EditLayout>
    )
}