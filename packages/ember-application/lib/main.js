import Ember from 'ember-metal/core';
import { runLoadHooks } from 'ember-runtime/system/lazy_load';

/**
Ember Application

@module ember
@submodule ember-application
@requires ember-views, ember-routing
*/

import DefaultResolver from 'ember-application/system/resolver';
import {
  Resolver
} from 'ember-application/system/resolver';
import Application from 'ember-application/system/application';
import 'ember-application/ext/controller'; // side effect of extending ControllerMixin

Ember.Application = Application;
Ember.Resolver = Resolver;
Ember.DefaultResolver = DefaultResolver;

runLoadHooks('Ember.Application', Application);
