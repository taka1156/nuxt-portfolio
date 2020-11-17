import NavLogo from '../NavLogo.vue';

export default {
  title: 'Atoms/Nav/NavLogo',
  component: NavLogo,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = () => ({
  components: { NavLogo },
  template: '<nav-logo>Text</nav-logo>',
});

export const Default = Template.bind({});
