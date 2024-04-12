import { StatusContent } from "./StatusContent"
import { StatusIcon } from "./StatusIcon"

export const StatusMessage = ({ children }: {children: React.ReactNode} ) => {
    return (
        <div className="flex items-center">
            {children}
        </div>
    )
}

StatusMessage.Content = StatusContent;
StatusMessage.Icon = StatusIcon;