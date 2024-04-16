import { AppPermissionSection } from "@/components/customui/app/app_permission/view"
import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
// import { useParams } from "react-router-dom"
export const AppPermissionPage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <AppPermissionSection />
        </EditLayout>
    )
}