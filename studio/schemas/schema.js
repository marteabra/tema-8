import createSchema from 'part:@sanity/base/schema-creator'

import blockContent from './blockContent.js';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import project from './documents/project';
import about from './documents/about';
import linkAssets from './documents/linkAssets';

export default createSchema({

  name: 'default',
  types: schemaTypes.concat([
    project,
    about,
    blockContent,
    linkAssets
  ]),
})
