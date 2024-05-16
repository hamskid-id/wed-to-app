import { AppServicePageWrapper } from "@/components/customui/app/app_service/view"
import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
// import { useParams } from "react-router-dom"
export const AppServicePage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <AppServicePageWrapper/>
        </EditLayout>
    )
}