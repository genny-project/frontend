import 'styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'views/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'views';
import {
  Logger,
  LogLevel,
  EventBus,
  Event,
  EventType,
  EventSourceAdapterLoader,
  EventSource,
  Store,
  Workflow,
} from 'utils/gennyjs/core';
import { TimerAdapter, HttpAdapter, AlertAdapter } from 'utils/gennyjs/bundled/event-source-adapter';
import { Timer, Alert } from 'utils/gennyjs/bundled/event-sources';

/* Import the custom events */
import customEvents from '../workflows/events.json';

/* Import a test workflow */
import testWorkflow from '../workflows/test.workflow.json';
import testWorkflow2 from '../workflows/test2.workflow.json';

const Root = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

/* Load the bundled event source adapters */
EventSourceAdapterLoader.register('timer', TimerAdapter);
EventSourceAdapterLoader.register('http', HttpAdapter);
EventSourceAdapterLoader.register('alert', AlertAdapter);

const eventSources = [];

/* Load the bundled event sources */
const timerEventSource = new EventSource(Timer);
const alertEventSource = new EventSource(Alert);

eventSources.push(timerEventSource);
eventSources.push(alertEventSource);

Logger.setLevel(LogLevel.DEBUG);

/* Create a new store */
const apiStore = new Store('api', {
  autoSave: true,
  autoSaveTime: 15000,
  persistent: true,
});

window.apiStore = apiStore;

EventBus.defineEvent(customEvents);

const workflows = [];

/* Create a test workflow */
const workflow = new Workflow(testWorkflow);
const workflow2 = new Workflow(testWorkflow2);

workflows.push(workflow);
workflows.push(workflow2);

/* Define the app init event */
EventBus.defineEvent('APP_INIT');

const initEvent = new Event({
  name: 'APP_INIT',
  type: EventType.REQ,
});

/* Trigger the app init event */
initEvent.publish();
