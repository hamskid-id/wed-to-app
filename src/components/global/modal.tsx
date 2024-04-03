import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
//   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
 
export const ModalWrapper =({
    children,
    style,
    title,
    trigger,
    description
}:{
    children:React.ReactNode,
    style?:string,
    title?:string,
    description?:string,
    trigger:React.ReactNode
})=>{
    return(
        <Dialog>
            <DialogTrigger asChild>
            {trigger}
            </DialogTrigger>
            <DialogContent className={`${style?style:"sm:max-w-[425px]"}`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                    {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
            </DialogContent>
      </Dialog>
    )
}