import ProfileListItem from './ProfileListItem.vue';

export default {
  title: 'Molecules/ProfileListItem',
  component: ProfileListItem
};

const Template = () => ({
  components: { ProfileListItem },
  template: '<profile-list-item>Text</profile-list-item>'
});

export const Default = Template.bind({});
