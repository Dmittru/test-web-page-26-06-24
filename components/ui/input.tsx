import * as React from "react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label_message?: string,
    addictIcons: boolean,
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({className, type, label_message, addictIcons = true, ...props}, ref) => {
        return (
            <div
                className={cn(
                    "relative disabled:opacity-50 flex gap-1 items-center border border-brand-text-secondary active:border-brand-text-primary rounded-[4px] px-[14px] py-2 subtitle-1 text-brand-text-secondary",
                    className
                )}
            >
                {label_message &&
                    <label
                        className="absolute -top-2 left-2 bg-black px-1 text-brand-caption bg-brand-bg-secondary text-sm"
                    >
                        {label_message}
                    </label>
                }
                {addictIcons &&
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8487 17.3729 13.5509 16.3199 14.9056L21.7071 20.2929C22.0976 20.6834 22.0976 21.3166 21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14.9057 16.3198C13.551 17.3729 11.8487 18 10 18C5.58172 18 2 14.4183 2 10Z"
                              fill="#B0B1B6"/>
                    </svg>
                }
                <input
                    type={type}
                    className={'bg-transparent w-full focus-visible:ring-0 focus-visible:ring-offset-transparent focus-visible:ring-offset-0'}
                    ref={ref}
                    {...props}
                />
                {addictIcons &&
                    <div className="flex items-center">
                        <Button variant={'none'} size={'none'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                                      fill="#E1E3E6"/>
                            </svg>
                        </Button>
                        <Button variant={'none'} size={'none'}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                      fill="#E1E3E6"/>
                            </svg>
                        </Button>
                    </div>
                }
            </div>
        )
    }
)
Input.displayName = "Input"

export {Input}
