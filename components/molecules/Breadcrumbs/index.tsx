import React, { forwardRef, LegacyRef, Children, useState } from 'react'
import clsx from 'clsx'
import { CommonProps, useCustomStyles, theme, Color } from '@common/utils'
import { Ellipsis } from '@components/atoms/SVG'
import Button, { ButtonProps } from '@components/atoms/Button'
export interface ExtraProps {
  separator?: string
  children?: React.ReactNode
  spacing?: string
  maxItems?: number
  collapseBtnProps?: ButtonProps
  color?: Color
}
export type BreadcrumbsProps = ExtraProps &
  CommonProps &
  React.HtmlHTMLAttributes<HTMLElement>
function Breadcrumbs(props: BreadcrumbsProps, ref?: LegacyRef<HTMLElement>) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  function collapseBreadcrumbs() {
    setIsCollapsed(true)
  }
  const {
    children,
    separator = '/',
    spacing = '0.5rem',
    maxItems = Infinity,
    className,
    themeMode,
    collapseBtnProps,
    color = 'gray',
    cs,
    ...other
  } = props
  const arrayChildren = Children.toArray(children)

  const isLastChild = (index: number) => arrayChildren.length - 1 === index

  const isHiddenChild = (index: number) =>
    isCollapsed ? false : index + 1 > maxItems - 1 && !isLastChild(index)

  const isCollapseBtnVisible = (index: number) =>
    isLastChild(index) && arrayChildren.length > maxItems && !isCollapsed

  const extraStyles = useCustomStyles(cs)

  return (
    <>
      <nav
        data-theme={themeMode}
        data-testid="breadcrumbs"
        ref={ref}
        className={clsx(
          extraStyles.className,
          'breadcrumbs',
          `breadcrumbs-${color}`,
          {
            [`${className}`]: className
          }
        )}
        {...other}
      >
        {Children.map(arrayChildren, (child, index) => (
          <>
            {isHiddenChild(index) ? (
              <></>
            ) : (
              <>
                {isCollapseBtnVisible(index) && (
                  <>
                    <Button
                      themeMode={themeMode}
                      size="xs"
                      isIconButton={true}
                      variant="ghost"
                      aria-label="show paths"
                      onClick={() => collapseBreadcrumbs()}
                      {...collapseBtnProps}
                    >
                      <Ellipsis />
                    </Button>

                    <span>{separator}</span>
                  </>
                )}
                {child}
                {!isLastChild(index) && <span>{separator}</span>}
              </>
            )}
          </>
        ))}
      </nav>
      <style jsx>{`
        .breadcrumbs {
          display: flex;
          align-items: 'center';
          gap: ${spacing};
        }
        .breadcrumbs > * {
          margin: 0;
        }
        .breadcrumbs-${color} {
          color: ${theme.color[color].main};
        }
        .breadcrumbs-${color}[data-theme="dark"] {
          color: ${theme.color[color].light};
        }
        ${extraStyles.styles}
      `}</style>
    </>
  )
}

export default forwardRef(Breadcrumbs)
