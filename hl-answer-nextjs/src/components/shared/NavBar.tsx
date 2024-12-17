import Link from 'next/link'
import { ReactElement } from 'react'

const navigation = [
    { name: 'Backend', href: '/answer/backend' },
    { name: 'Frontend', href: '/answer/frontend' },
]

export default function NavBar(): ReactElement {
    return (
        <div className="sticky top-0 flex h-12 items-center bg-cyan-950 px-4">
            <Link className="text-2xl font-bold" href="/">NextJS</Link>
            <div className="mx-14 flex space-x-4">
                {navigation.map(item => (
                    <Link key={item.name} href={item.href} className="font-semibold">{item.name}</Link>
                ))}
            </div>
        </div>
    )
}