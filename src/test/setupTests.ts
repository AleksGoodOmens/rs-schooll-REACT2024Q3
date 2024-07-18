import '@testing-library/jest-dom';

import fetch, { Headers, Request, Response } from 'node-fetch';
import { server } from './msw/server';
import { afterAll, afterEach, beforeAll } from 'vitest';

// link with example => https://codesandbox.io/p/github/oidualc/redux-toolkit/master?file=%2Fexamples%2Fquery%2Freact%2Fvitest%2Fsrc%2FsetupTests.ts%3A1%2C1-18%2C1&workspace=%7B%22gitSidebarPanel%22%3A%22PR%22%2C%22sidebarPanel%22%3A%22GIT%22%7D

// @ts-expect-error => check link higher
globalThis.fetch = fetch;
// @ts-expect-error => check link higher
globalThis.Headers = Headers;
// @ts-expect-error => check link higher
globalThis.Request = Request;
// @ts-expect-error => check link higher
globalThis.Response = Response;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
