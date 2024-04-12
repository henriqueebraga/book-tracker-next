import React from 'react'
import Link from 'next/link'

type HeaderLinkProps = {
	href: string;
	label: string;
}

export default function HeaderLink({ href, label }: HeaderLinkProps) {
	return (
		<>
			<Link href={href} className="mr-4 ">{label}</Link>
		</>
	)
}

