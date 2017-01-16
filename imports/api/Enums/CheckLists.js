import SEnum from 's-enum';

export const statuses = SEnum([
  {
    value: 0,
    label: 'Unknown',
    desc: 'Configuration in Progress',
    // icon: 'fa fa-question',
  },
  {
    value: 1,
    label: 'Configuring',
    desc: 'CheckList is being edited',
  },
]);
