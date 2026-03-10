"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

function Command({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props}
    />
  )
}

interface CommandInputProps extends Omit<React.ComponentProps<"input">, "onChange" | "value"> {
  value?: string
  onValueChange?: (value: string) => void
}

function CommandInput({
  className,
  value,
  onValueChange,
  ...props
}: CommandInputProps) {
  return (
    <div data-slot="command-input-wrapper" className="flex h-9 items-center">
      <input
        data-slot="command-input"
        type="text"
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[data-slot=command-item]]:px-2 [&_[data-slot=command-item]]:py-1.5 overflow-hidden p-1",
        className
      )}
      {...props}
    />
  )
}

interface CommandItemProps extends React.ComponentProps<"div"> {
  value?: string
  onSelect?: () => void
}

function CommandItem({
  className,
  onSelect,
  ...props
}: CommandItemProps) {
  return (
    <div
      data-slot="command-item"
      role="option"
      onClick={onSelect}
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
}
