"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProductCard from "../Cards/ProductCard";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DialogTest({ open, onClose }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setIsOpen(open);
  // }, [open]);
  return (
    <Dialog
      // initialFocus={completeButtonRef}
      // as="div"
     //className="fixed inset-0 z-10 overflow-y-auto"
      onOpenChange={() => {
        console.log("onOpenChange");
        setIsOpen(false);
      }}
      open={open}
    >
      {/* <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger> */}
      <DialogContent className="w-screen">
        {/* <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader> */}
        <ProductCard />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                onClose();
              }}
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
