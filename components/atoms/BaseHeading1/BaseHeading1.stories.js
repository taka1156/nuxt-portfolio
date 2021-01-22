import BaseHeading1 from './BaseHeading1.vue';

export default {
  title: 'atoms/BaseHeading1',
  component: BaseHeading1
};

const Template = () => ({
  components: { BaseHeading1 },
  template: '<base-heading1>ダミーテキスト</base-heading1>'
});

export const Default = Template.bind({});
