import React from 'react';
import DeleteButton from './DeleteButton';

export default {
  title: 'Components/DeleteButton',
  component: DeleteButton,
};
function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <DeleteButton {...args} />;
}
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
