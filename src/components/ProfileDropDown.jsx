import { Avatar, Menu } from '@mantine/core';

function ProfileDropDown() {
  return (
    <div className=" bg-red-500 rounded-full px-2 py-2 relative">
      <Menu>
        <Menu.Target>
          <Avatar color="cyan" radius="xl">
            MK
          </Avatar>
        </Menu.Target>
        <Menu.Dropdown>
            <Menu.Label>Application</Menu.Label>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Settings</Menu.Item>
          <Menu.Item>Logout</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default ProfileDropDown;
