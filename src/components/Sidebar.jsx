import SidebarConfig, {SidebarItem} from './SidebarConfig';
import { LifeBuoy, Receipt, Boxes, Package, UserCircle, BarChart3, LayoutDashboard, Settings, Box} from 'lucide-react';

export default function Sidebar() {

  return (
    <main className='App'>
      <SidebarConfig>
          <SidebarItem icon={<LayoutDashboard  size={20}/>} text='Dashboard' alert />
          <SidebarItem icon={<BarChart3 size={20} />} text='Statistics' active />
          <SidebarItem icon={<UserCircle size={20} />} text='Users' />
          <SidebarItem icon={<Boxes size={20} />} text='Inventory' />
          <SidebarItem icon={<Package size={20} />} text='Orders' />
          <SidebarItem icon={<Receipt size={20} />} text='Bilings' />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text='Settings' />
          <SidebarItem icon={<LifeBuoy size={20} />} text='Help' />
      </SidebarConfig>
    </main>
  )
}