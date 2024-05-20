import { useEffect} from "react";
import { useLocation, useParams} from "react-router-dom"
import { RouteBtn } from "../../global/routeBtn";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Text } from "@/components/global/text";


export const AppSideNav =({style}:{style?:string})=>{
    const{
        action
    }=useParams()
    const location = useLocation();
    const { pathname} = location;
    useEffect(() => {
        const init = async () => {
          const { Sidenav, Ripple,Tab,initTE} = await import("tw-elements");
          initTE({ Sidenav, Ripple,Tab});
        };
        init();
      }, []);
    const Routes =[
        {
            name:"Overview",
            route:`/${action}/overview`,
            icon:"home_icon.png"
        },{
            name:"Branding",
            route:`/${action}/branding`,
            icon:"secondnav_icon.png"
          
        },{
            name:"Link Handling",
            route:`/${action}/link_handling`,
            icon:"thirdnav_icon.png"
        },{
            name:"Interface",
            route:`/${action}/interface`,
            icon:"forthnav_icon.png"
        },{
            name:"Web Overides",
            route:`/${action}/web_overides`,
            icon:"fifthnav_icon.png"
        },{
            name:"App Permissions",
            route:`/${action}/app_permission`,
            icon:"sixthnav_icon.png"
        },{
            name:"App download",
            route:`/${action}/appdownload`,
            icon:"seventhnav_icon.png"
        },{
            name:"Native Plugins",
            route:`/${action}/native_plugins`,
            icon:"eightnav_icon.png"
        },{
            name:"App Service",
            route:`/${action}/app_service`,
            icon:"ninthnav_icon.png"
        },{
            name:"App Access",
            route:`/${action}/app_access`,
            icon:"tenthnav_icon.png"
        }
    ]

    return(
        <nav
            id={`${style?"":"full-screen-example"}`}
            className={`${style?style:"bg-white fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"} p-4`}
            data-te-sidenav-init
            data-te-sidenav-content="#content">
            <div>
                <div className="flex justify-between items-center">
                    <Text
                        style="text-sm text-start text-[grey]"
                        value="CONFIGURATION"
                    />
                    <div className="bg-[#f9fafb] rounded-full p-2">
                        <AiOutlineDoubleRight 
                            color="#6E6E82" 
                            size="1rem"
                        />
                    </div>
                </div>
                <ul
                    className="relative m-0 list-none px-[0.2rem]"
                    data-te-sidenav-menu-ref
                    >
                        {
                            Routes.map((link,index)=>{
                                const{
                                    name,
                                    route,
                                    icon
                                }=link;
                                return(
                                    <RouteBtn
                                        key={index}
                                        name={name}
                                        route={route}
                                        icon={icon}
                                        pathname={pathname}
                                    />
                                )
                            })
                        }
                </ul>
            </div>
        </nav>
    )
}