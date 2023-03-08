import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import routes from '@renderer/routers';
import { useEffect, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function SideMenu(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  // Get menu items.
  const menuItems: MenuItem[] = [];
  routes?.forEach((item) => {
    if (!item?.meta?.hidden) {
      menuItems.push({
        label: item.meta?.name,
        key: item.path,
        icon: item.meta?.icon,
        title: '',
      } as MenuItem);
    }
  });

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  // Listen the change of router
  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location]);

  return (
    <Menu
      onClick={onClick}
      mode="vertical"
      selectedKeys={selectedKeys}
      items={menuItems}
    />
  );
}

export default SideMenu;
