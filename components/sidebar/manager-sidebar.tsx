import {Calendar, ChevronDown, Plus, Trophy} from "lucide-react";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem
} from "@/components/ui/sidebar";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";

export const ManagerItems = [
    {
        title: "Create Tournament",
        url: "#",
        icon: Plus,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    }
]

type Tournament = {
    id: number;
    name: string;
    href: string;
};

export async function ManagerSidebar() {
    const TournamentSubItemsResponse = await fetch("http://localhost:5174/api/manager/tournaments", {
        credentials: "include",
    })
    const TournamentSubItems: Tournament[] = await TournamentSubItemsResponse.json();

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Manager</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    <Collapsible defaultOpen className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton>
                                    <Trophy />
                                    <span>My Tournaments</span>
                                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {TournamentSubItems.map((item) => (
                                        <SidebarMenuSubItem key={item.id}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={item.href}>
                                                    <span>{item.name}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
                <SidebarMenu>
                    {ManagerItems.map((item) => (
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
    )
}