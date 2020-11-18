import NavLogo from './BaseLogo.vue';

export default {
  title: 'Atoms/BaseLogo',
  component: NavLogo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = () => ({
  components: { NavLogo },
  template: '<base-logo>Text</base-logo>',
});

export const Default = Template.bind({});
