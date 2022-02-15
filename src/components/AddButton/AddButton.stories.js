import React from 'react';
import AddButton from './AddButton';

export default {
  title: 'Components/AddButton',
  component: AddButton,
};
function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AddButton {...args} />;
}
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: '+ Create',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: '+ Create',
};

export const Label = Template.bind({});
Label.args = {
  label: '+ Create',
};
