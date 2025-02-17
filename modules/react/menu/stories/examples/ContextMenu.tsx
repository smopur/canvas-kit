import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';

export const ContextMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.TargetContext>Open Menu</Menu.TargetContext>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item>First Item</Menu.Item>
            <Menu.Item>Second Item</Menu.Item>
            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
            <Menu.Item>Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <p>
        Selected: <span data-testid="output">{selected}</span>
      </p>
    </Menu>
  );
};
