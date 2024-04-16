import { AiOutlineMenu } from "react-icons/ai";

export const TopNav =()=>{
    return(
        <div className="mb-2 flex lg:flex-row xl:flex-row md:flex-col sm:flex-col justify-between md:flex-col-reverse sm:flex-col-reverse items-center w-full gap-2 bg-black">
            <div className="flex items-center justify-between w-full bg-black p-2 rounded">
                <div className="flex gap-2 items-center">
                    <div className="lg:hidden xl:hidden md:block sm:block">
                        <div
                            id="toggler"
                            className="inline-block transition duration-150 ease-in-out hover:shadow-lg  active:shadow-lg"
                            data-te-sidenav-toggle-ref
                            data-te-target="#full-screen-example"
                            data-te-ripple-init>
                            <span className="block ">
                                <AiOutlineMenu
                                    size="1.5rem"
                                    color="grey"
                                />
                            </span>
                        </div>
                    </div>
                    <div className=" w-[6rem] h-[3.5rem] relative">
                        <img
                            src="/5starlogo.svg"
                            alt="object not found"
                            className="w-full"
                        />
                    </div>
                    
                </div>
                <div className="flex gap-[0.5rem] items-center"> 
                    <span className="border border-[grey] p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="grey" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </span>
                    <span className="relative rounded w-[2.6rem] h-[2.8rem]">
                        <img 
                            src="/laundry img.svg"
                            alt="object not found"
                            className="w-full object-cover"
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}