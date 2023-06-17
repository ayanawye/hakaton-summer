import React from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

function Header() {
    const items = [
      {
        label: 'Главная',
        key: 'mail',
      },
      {
        label: 'Тесты знаний',
        key: 'app',
      },
    ]
    const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};


export default Header;