import { BrandingSection } from "@/components/customui/app/branding/view"
import { EditLayout } from "@/components/customui/app/edit_app/editlayout"
// import { useParams } from "react-router-dom"
export const BrandingPage =()=>{
    // const{
    //     action
    // }=useParams();
    return(
        <EditLayout>
            <BrandingSection />
        </EditLayout>
    )
}