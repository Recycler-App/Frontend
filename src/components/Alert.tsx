import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonProps
} from "@chakra-ui/react";
import React, { useRef } from "react"

type AlertProps = {
    title: string;
    body: any;
    actionText: string;
    action : () => void;
    isOpen: boolean;
    onClose:any;
}

export default function Alert({title, body, actionText, action, isOpen, onClose, ...actionButtonProps}: AlertProps & ButtonProps) {
  const cancelRef: any= useRef();

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent borderRadius={0}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>
             {body}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} borderRadius="0px">
                Cancel
              </Button>
              <Button color="light" borderRadius="0px" onClick={action} ml={3} _focus={{boxShadow:"none"}} {...actionButtonProps}>
                {actionText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
