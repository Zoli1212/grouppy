import React from "react"
import LandingPageNavbar from "./_components/navbar"

type Props = {
    children: React.ReactNode
}

function LandingPageLayout({ children }: Props) {
    return (
        <div className="flex felx-col container relative">
            <LandingPageNavbar>{children}</LandingPageNavbar>
        </div>
    )
}

export default LandingPageLayout
