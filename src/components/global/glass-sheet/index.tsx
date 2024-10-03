import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type GlassSheetProps = {
    children: React.ReactNode
    trigger: React.ReactNode
    className?: string
    triggerClass?: string
}

const GlassSheet = ({
    children,
    trigger,
    className,
    triggerClass,
}: GlassSheetProps) => {
    return (
        <Sheet>
            <SheetTrigger className={cn(triggerClass)} asChild>
                {trigger}
            </SheetTrigger>
            <SheetContent
                className={cn(
                    "bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-60 bg-themeGray border-themeGray text-white p-4 rounded-lg",
                    className,
                )}
            >
                {children}
            </SheetContent>
        </Sheet>
    )
}

export default GlassSheet
