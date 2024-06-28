import * as React from "react"
import {Slot} from "@radix-ui/react-slot"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center brand-button justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "px-[17px] py-[15px] border-radius-[4px] bg-brand-bg-accent text-brand-text-primary disabled:bg-brand-state-accent_disabled transition-all hover:bg-brand-state-blue_hover focus:bg-brand-state-blue_focused focus:ring-offset-0 ring-offset-transparent focus:ring-offset-transparent focus-visible:ring-offset-0 focus-visible:ring-0 space-x-[8px]",
                defaultOld: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                ghost_dark: 'bg-transparent text-brand-text-tertiary',
                ghost_low: 'bg-transparent',
                link: "text-primary underline-offset-4 hover:underline",
                none: '',
                tab: 'text-brand-text-secondary font-semibold',
            },
            size: {
                default: "space-x-[8px] brand-button",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                ghost: "h-auto p-0",
                tab: 'px-4 py-[10px]',
                none: '',
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean,
    svgPlace?: 'left' | 'right',
    svgIcon?: React.ReactElement,
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, svgPlace, svgIcon, children, ...props}, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {svgPlace === 'left' && svgIcon}
                <span>{children}</span>
                {svgPlace === 'right' && svgIcon}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export {Button, buttonVariants}
