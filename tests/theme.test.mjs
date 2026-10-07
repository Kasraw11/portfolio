import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import {
  themeBootstrapScript,
  THEME_STORAGE_KEY,
  getTheme,
  setTheme,
  subscribeToTheme,
} from "../src/lib/theme.ts";

function bootstrap(saved, blocked = false) {
  const document = { documentElement: { dataset: {} } };
  const localStorage = {
    getItem: () => {
      if (blocked) throw new Error("Storage denied");
      return saved;
    },
  };
  vm.runInNewContext(themeBootstrapScript, { document, localStorage });
  return document.documentElement.dataset.theme;
}

test("first visit defaults to dark without relying on system preference", () => {
  assert.equal(bootstrap(null), "dark");
});
test("saved light and dark choices survive a new page load", () => {
  assert.equal(bootstrap("light"), "light");
  assert.equal(bootstrap("dark"), "dark");
});
test("invalid or unavailable storage safely falls back to dark", () => {
  assert.equal(bootstrap("invalid"), "dark");
  assert.equal(bootstrap(undefined, true), "dark");
});
test("switching theme updates the document and persists the choice", (t) => {
  const oldDocument = globalThis.document;
  const oldStorage = Object.getOwnPropertyDescriptor(
    globalThis,
    "localStorage",
  );
  const saved = new Map();
  globalThis.document = { documentElement: { dataset: { theme: "dark" } } };
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: { setItem: (key, value) => saved.set(key, value) },
  });
  t.after(() => {
    if (oldDocument === undefined) delete globalThis.document;
    else globalThis.document = oldDocument;
    if (oldStorage)
      Object.defineProperty(globalThis, "localStorage", oldStorage);
    else delete globalThis.localStorage;
  });
  setTheme("light");
  assert.equal(getTheme(), "light");
  assert.equal(saved.get(THEME_STORAGE_KEY), "light");
  assert.equal(bootstrap(saved.get(THEME_STORAGE_KEY)), "light");
  globalThis.localStorage.setItem = () => {
    throw new Error("Quota exceeded");
  };
  assert.doesNotThrow(() => setTheme("dark"));
  assert.equal(getTheme(), "dark");
});
test("storage changes sync across tabs and subscriptions clean up", (t) => {
  const previous = {
    document: globalThis.document,
    window: globalThis.window,
    MutationObserver: globalThis.MutationObserver,
  };
  let storageHandler;
  let disconnected = false;
  let removed = false;
  globalThis.document = { documentElement: { dataset: { theme: "dark" } } };
  globalThis.window = {
    addEventListener: (_, handler) => {
      storageHandler = handler;
    },
    removeEventListener: (_, handler) => {
      removed = handler === storageHandler;
    },
  };
  globalThis.MutationObserver = class {
    observe() {}
    disconnect() {
      disconnected = true;
    }
  };
  t.after(() => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete globalThis[key];
      else globalThis[key] = value;
    }
  });
  const unsubscribe = subscribeToTheme(() => {});
  storageHandler({ key: THEME_STORAGE_KEY, newValue: "light" });
  assert.equal(getTheme(), "light");
  storageHandler({ key: "unrelated", newValue: "dark" });
  assert.equal(getTheme(), "light");
  storageHandler({ key: null, newValue: null });
  assert.equal(getTheme(), "dark");
  unsubscribe();
  assert.ok(disconnected && removed);
});
