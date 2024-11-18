import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel, SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import {Home, Settings2} from "lucide-react";
import {ManagerSidebar} from "@/components/sidebar/manager-sidebar";

export const NavItems = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings2,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className="text-lg font-bold p-2 text-center">OTM</h1>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {NavItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <ManagerSidebar />
            </SidebarContent>
        </Sidebar>
    )
}
