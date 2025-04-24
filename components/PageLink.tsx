import React, { HTMLProps } from "react"
import cn from "classNames"
import "./css/PageLink.css"

type PageLinkProps = HTMLProps<HTMLAnchorElement> & { active?: boolean }

export default function PageLink({
  className,
  children,
  active,
  disabled,
  ...props
}: PageLinkProps) {
  const customClassName = cn("page-link", className, { active, disabled })

  if (disabled) {
    return <span className={customClassName}>{children}</span>
  }

  return (
    <a
      {...props}
      className={customClassName}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </a>
  )
}
