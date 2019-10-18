import { Component } from 'react';

export const peopleSchema = {
  _id: {
    type: String,
    canRead: ['guests'],
    label: 'id',
    optional: true,
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => new Date(),
  },
  lastModification: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => new Date(),
    onUpdate: () => new Date(),
  },
  userId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  title: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  url: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
    input: 'url',
    placeholder: 'https://',
  },
  image: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
    input: 'url',
  },
  isTrue: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  answerToLife: {
    type: Number,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  myObject: {
    type: Object,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  now: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  array: {
    type: Array,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
  'array.$': {
    type: String,
  },
  component: {
    type: Component,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['guests'],
    canCreate: ['guests'],
  },
};
