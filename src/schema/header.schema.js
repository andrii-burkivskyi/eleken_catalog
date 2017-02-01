import { Schema, arrayOf } from 'normalizr';

const navItem = new Schema('navItems', { idAttribute: 'slug' });

export const NAV_ITEMS = arrayOf(navItem); // eslint-disable-line
