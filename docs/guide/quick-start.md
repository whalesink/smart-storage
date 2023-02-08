# Quick Start

Smart Storage provides three ways to manage storage:

- Combined with the `ref` API in **Vue 3**
- Combined with `useState` API in **React**
- Standalone use in any project that supports **cjs modules** or **esm modules**

## For Vue 3

### Install

<CodeSwitcher :languages="{ npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' }">

<template v-slot:npm>

```sh
npm install @smart-storage/vue-hooks
```

</template>

<template v-slot:yarn>

```sh
yarn add @smart-storage/vue-hooks
```

</template>

<template v-slot:pnpm>

```sh
pnpm add @smart-storage/vue-hooks
```

</template>

</CodeSwitcher>

### Create a Storage Module

Create a new file anywhere, and use like this:

```ts
// storage.ts
import { createLocalStorage } from '@smart-storage/vue-hooks';

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

export const { useStorage } = createLocalStorage<UserInfo>({
  // This is storage key
  storageModuleKey: 'user_info',
  // Used to initialize
  initial: {
    hasSigned: false, // Non-nullable properties must be initialized
  },
});
```

### Use Hooks in Component

```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import { getUserInfo } from '@/api'; // Suppose you have a function that gets user information
import { useStorage } from './storage';

/* You can easily deconstruct the hook's return value,
because TypeScript will give you great type hints */
const {
  refs: { token, hasSigned },
  resetters: { resetToken, resetHasSigned },
  checkers: { containsToken, containsHasSigned },
} = useStorage();

onMounted(() => {
  getUserInfo().then(res => {
    token.value = res.token; // It's a ref
    hasSigned.value = true; // Same as above
  });
});

const onSignOut = () => {
  resetToken(); // Reset the value of token
  resetHasSigned(); // Reset the value of hasSigned
};
</script>

<template>
  <div>Contains token: {{ containsToken() }}</div>
  <div>Contains hasSigned: {{ containsHasSigned() }}</div>
  <button @click="onSignOut">Sign out</button>
</template>
```

## For React

### Install

<CodeSwitcher :languages="{ npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' }">

<template v-slot:npm>

```sh
npm install @smart-storage/react-hooks
```

</template>

<template v-slot:yarn>

```sh
yarn add @smart-storage/react-hooks
```

</template>

<template v-slot:pnpm>

```sh
pnpm add @smart-storage/react-hooks
```

</template>

</CodeSwitcher>

### Create a Storage Module

Create a new file anywhere, and use like this:

```ts
// storage.ts
import { createSessionStorage } from '@smart-storage/react-hooks';

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

export const { useStorage } = createSessionStorage<UserInfo>({
  // This is storage key
  storageModuleKey: 'user_info',
  // Used to initialize
  initial: {
    hasSigned: false, // Non-nullable properties must be initialized
  },
});
```

### Use Hooks in Component

```tsx
import React, { useEffect } from 'react';
import { getUserInfo } from '@/api'; // Suppose you have a function that gets user information
import { useStorage } from './storage';

function TestComponent() {
  /* You can easily deconstruct the hook's return value,
  because TypeScript will give you great type hints */
  const {
    tokenState: { token, setToken, resetToken, containsToken },
    hasSignedState: { hasSigned, setHasSigned, resetHasSigned, containsHasSigned },
  } = useStorage();

  useEffect(() => {
    getUserInfo().then(res => {
      setToken(res.token);
      setHasSigned(true);
    });
  }, []);

  const onSignOut = () => {
    resetToken(); // Reset the value of token
    resetHasSigned(); // Reset the value of hasSigned
  };

  return (
    <>
      <div>Contains token: {containsToken()}</div>
      <div>Contains hasSigned: {containsHasSigned()}</div>
      <button onClick={onSignOut}>Sign out</button>
    </>
  );
}

export default TestComponent;
```

## Standalone Use

### Install

<CodeSwitcher :languages="{ npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' }">

<template v-slot:npm>

```sh
npm install @smart-storage/hooks
```

</template>

<template v-slot:yarn>

```sh
yarn add @smart-storage/hooks
```

</template>

<template v-slot:pnpm>

```sh
pnpm add @smart-storage/hooks
```

</template>

</CodeSwitcher>

### Create a Storage Module

Create a new file anywhere, and use like this:

```ts
// storage.ts
import { createSessionStorage } from '@smart-storage/hooks';

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

export const { useStorage } = createSessionStorage<UserInfo>({
  // This is storage key
  storageModuleKey: 'user_info',
  // Used to initialize
  initial: {
    hasSigned: false, // Non-nullable properties must be initialized
  },
});
```

### Use Hooks in a Script File

```ts
import { getUserInfo } from '@/api'; // Suppose you have a function that gets user information
import { useStorage } from './storage';

const { token, hasSigned } = useStorage();

(() => {
  getUserInfo().then(res => {
    token.set(res.token);
    hasSigned.set(true);
    console.log(hasSigned.get()); // Output: true
  });
})();

const onSignOut = () => {
  token.remove(); // Will delete the key and value from storage module
  hasSigned.set(false);
  console.log(token.get(), token.exist()); // Output: undefined, false
};
```

## Raw Usage

### Install

<CodeSwitcher :languages="{ npm: 'npm', yarn: 'yarn', pnpm: 'pnpm' }">

<template v-slot:npm>

```sh
npm install @smart-storage/core
```

</template>

<template v-slot:yarn>

```sh
yarn add @smart-storage/core
```

</template>

<template v-slot:pnpm>

```sh
pnpm add @smart-storage/core
```

</template>

</CodeSwitcher>

### Usage

```ts
import { StorageModule, StorageType } from '@smart-storage/core';
import { getUserInfo } from '@/api'; // Suppose you have a function that gets user information

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

const storageModule = new StorageModule<UserInfo>('user_info', StorageType.SESSION);

(() => {
  getUserInfo().then(res => {
    storageModule.setItem('token', res.token);
    storageModule.setItem('hasSigned', true);
    console.log(storageModule.getItem('hasSigned')); // Output: true
    console.log(storageModule.contains('token')); // Output: true
  });
})();

const onSignOut = () => {
  storageModule.removeItem('token');
  storageModule.setItem('hasSigned', false);
  console.log(storageModule.getItem('token')); // Output: undefined
  console.log(storageModule.size()); // Output: 1

  // Or
  storageModule.clear();
  console.log(storageModule.size()); // Output: 0
};
```

## Next

Now, you can enjoy the type hints brought by TypeScript!