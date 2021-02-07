import BaseLink from './BaseLink.vue';

export default {
  title: 'Atoms/BaseLink',
  component: BaseLink
};

const Template = () => ({
  components: { BaseLink },
  template: '<base-link :routeTo="`/`">Text</base-link>'
});

export const Default = Template.bind({});
