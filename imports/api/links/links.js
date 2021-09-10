// Definition of the links collection

import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
const Links = new Mongo.Collection('links');
import Collection2 from 'meteor/aldeed:collection2'
Collection2.cleanOptions.filter = false;

const LinkSchema = new SimpleSchema({
  url: {
    type: String,
    label: 'url',
  },
  title: {
    type: String,
    label: 'title',
  }
})

Links.attachSchema(LinkSchema);

export { Links, LinkSchema };
