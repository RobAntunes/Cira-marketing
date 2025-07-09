const navigation = {
    main: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    social: [
        {
            name: 'X',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-[#FEEDCC]">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-20 sm:pb-24 lg:px-8">
                <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6">
                    {navigation.main.map((item) => (
                        <a key={item.name} href={item.href} className="text-[#2A2A2A] hover:text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-16 flex justify-center gap-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-[#2A2A2A] hover:text-gray-800">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="size-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-sm/6 text-[#2A2A2A]">&copy; 2025 Solo Labs, Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}
