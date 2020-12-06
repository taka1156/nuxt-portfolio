import TheCopyright from './TheCopyright.vue';

export default {
  title: 'Organisms/TheCopyright',
  component: TheCopyright,
};

const Template = () => ({
  components: { TheCopyright },
  template: '<the-copyright />',
});

export const Default = Template.bind({});
