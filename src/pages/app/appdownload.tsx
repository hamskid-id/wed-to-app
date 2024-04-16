import { AppDownloadSection } from "@/components/customui/app/app_download&build/view"
import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
// import { useParams } from "react-router-dom"
export const AppDownloadPage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <AppDownloadSection/>
        </EditLayout>
    )
}