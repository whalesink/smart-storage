import { createApp, defineComponent } from 'vue';
import { createLocalStorage, createSessionStorage, UseStorage, UseStorageHelper } from '../src';

interface TestStorage {
  str?: string;
  num?: number;
  bool: boolean;
  arr: number[];
}

function useTestCase(
  useStorage: UseStorage<TestStorage>,
  useStorageHelper: UseStorageHelper,
  protect = false,
  type: 'local' | 'session' = 'local'
) {
  const container = document.createElement('div');
  const App = defineComponent({
    template: 'vue',
    setup() {
      const {
        refs: { str, num, bool, arr },
        resetters: { resetNum, resetBool, resetArr },
        checkers: { containsStr, containsNum },
      } = useStorage();
      const storageHelper = useStorageHelper();

      /* When I tried to execute the test code with onMounted, some strange errors occurred, 
      such as not being able to trigger updates to itemRef. But it works fine in a browser environment, 
      so I tested it directly in setup. */

      str.value = 'string';
      expect(str.value).toBe('string');
      expect(containsStr()).toBe(true);

      expect(storageHelper.contains('num')).toBe(false);
      expect(storageHelper.size()).toBe(3);

      num.value = 1;
      expect(num.value).toBe(1);
      expect(containsNum()).toBe(true);
      expect(storageHelper.size()).toBe(4);

      expect(bool.value).toBe(true);
      resetBool();
      expect(storageHelper.size()).toBe(4);
      expect(bool.value).toBe(true);

      resetNum();
      expect(storageHelper.size()).toBe(3);
      expect(num.value).toBe(undefined);

      storageHelper.initialize();
      expect(storageHelper.size()).toBe(2);

      arr.value.push(1);
      expect(arr.value).toStrictEqual([1]);
      resetArr();
      expect(arr.value).toStrictEqual([]);

      if (protect) {
        let windowStorage: Storage;
        if (type === 'local') {
          windowStorage = window.localStorage;
        } else {
          windowStorage = window.sessionStorage;
        }

        try {
          windowStorage.setItem('createProtectStorageTest', '123');
        } catch (err: any) {
          const message = `Direct calls for setItem to "createProtectStorageTest" are disabled! Do not use the 'protect' property if this is not your preference.`;
          expect(err.message).toBe(message);
        }

        try {
          windowStorage.removeItem('createProtectStorageTest');
        } catch (err: any) {
          const message = `Direct calls for removeItem to "createProtectStorageTest" are disabled! Do not use the 'protect' property if this is not your preference.`;
          expect(err.message).toBe(message);
        }

        expect(bool.value).toBe(true);

        bool.value = false;
        expect(bool.value).toBe(false);
      }

      return { str, num, bool };
    },
  });
  createApp(App).mount(container);
}

test('createLocalStorage', () => {
  const { useStorage, useStorageHelper } = createLocalStorage<TestStorage>({
    rootNodeKey: 'createLocalStorageTest',
    initial: { bool: true, arr: [] },
  });
  useTestCase(useStorage, useStorageHelper);
});

test('createSessionStorage', () => {
  const { useStorage, useStorageHelper } = createSessionStorage<TestStorage>({
    rootNodeKey: 'createSessionStorageTest',
    initial: { bool: true, arr: [] },
  });
  useTestCase(useStorage, useStorageHelper);
});

test('createProtectStorage', () => {
  const { useStorage, useStorageHelper } = createSessionStorage<TestStorage>({
    rootNodeKey: 'createProtectStorageTest',
    protect: true,
    initial: { bool: true, arr: [] },
  });
  useTestCase(useStorage, useStorageHelper, true);
});