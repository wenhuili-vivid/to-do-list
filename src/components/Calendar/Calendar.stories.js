import React from 'react';
import Calendar from './Calendar';

export default {
  title: 'Components/Calendar',
  component: Calendar,
};
function Template(args) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Calendar {...args} />;
}
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
