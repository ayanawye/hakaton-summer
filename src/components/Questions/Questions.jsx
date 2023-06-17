import { Collapse } from 'antd';
const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>hh</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>vbn</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>hgh</p>,
  },
];

export default function Questions() {
    const onChange = (key) => {
        console.log(key);
      };
  return (
    <div>
        <Collapse items={items} onChange={onChange} />
    </div>
  )
}
