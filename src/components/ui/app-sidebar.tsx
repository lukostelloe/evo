import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
  } from "@/components/ui/sidebar"
import ContactButtons from "../contactButtons"
import ButtonTabs from "./buttonTabs"
  
  export function AppSidebar() {
    return (
      <Sidebar>
        <SidebarContent>
          <SidebarGroup><ContactButtons /></SidebarGroup>
          <SidebarGroup><ButtonTabs/></SidebarGroup>
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    )
  }
  