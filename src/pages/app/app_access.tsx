import { AppAccess } from "@/components/customui/app/app_access/view"
import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
// import { useParams } from "react-router-dom"
export const AppAccessPage =()=>{

    
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <AppAccess/>
        </EditLayout>
    )
}