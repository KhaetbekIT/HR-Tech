import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

interface ILogo {
    children: React.ReactNode,
    className?: string
}

function Logo({ children, className }: ILogo) {
    return (
        <Link href={"/"} className={classNames('text-xl', className)}>{children}</Link>
    )
}

export default Logo