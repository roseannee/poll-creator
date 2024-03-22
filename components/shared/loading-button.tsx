import { Button, ButtonProps } from "../ui/button"
import { Icons } from "./icons"

interface LoadingButtonProps extends ButtonProps {
  isLoading: boolean
}
export function LoadingButton({ isLoading, ...props }: LoadingButtonProps) {
  return (
    <Button className="w-full" {...props}>
      {isLoading ? (
        <>
          <Icons.loader className="mr-2 animate-spin" />
          Please wait...
        </>
      ) : (
        props.children
      )}
    </Button>
  )
}
