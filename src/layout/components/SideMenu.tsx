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

  const menuItems: MenuItem[] = [];
  routes[0].children?.forEach((item) => {
    if (!item?.meta?.hidden) {
      menuItems.push({
        label: item.meta?.name,
        key: item.path,
        icon: item.meta?.icon,
      } as MenuItem);
    }
  });

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e);
    navigate(e.key);
  };

  useEffect(() => {
    console.log(location);
    setSelectedKeys([location.pathname]);
  }, [location]);

  return (
    <Menu
      onClick={onClick}
      style={{ width: 150 }}
      mode="inline"
      selectedKeys={selectedKeys}
      items={menuItems}
    />
  );
}

export default SideMenu;
