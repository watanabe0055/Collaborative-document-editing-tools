import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";

/**
 * DialogCloseButton
 *
 * @param children - React.ReactNode
 */
type DialogCloseButtonProps = {
  title?: string;
  dialogTriggerText: string;
  description?: string;
  isShowHeader?: boolean;
  children: React.ReactNode;
};

/**
 *
 * @param param0 - DialogCloseButtonProps
 * @description DialogCloseButton
 */
export function DialogCloseButton({
  title,
  dialogTriggerText,
  description,
  children,
  isShowHeader = false,
}: DialogCloseButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{dialogTriggerText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        {isShowHeader && (
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                閉じる
              </Button>
            </DialogClose>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
