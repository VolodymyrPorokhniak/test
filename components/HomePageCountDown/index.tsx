'use client'

import Countdown from "@/components/Countdown";

export default function HomePageCountDown() {
    return (
        <Countdown date={Date.now() + 100000000} text={"До початку заходу залишилось"} />
    )
}
