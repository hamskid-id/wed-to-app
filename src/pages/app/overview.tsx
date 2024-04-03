import { AppLayout } from "@/components/customui/app/layout"
import { useParams } from "react-router-dom"
export const OverviewPage =()=>{
    const{
        action
    }=useParams()
    return(
        <AppLayout>
            Hello {action} overview
        </AppLayout>
    )
}