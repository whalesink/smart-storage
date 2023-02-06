# 快速开始

Smart Storage 提供三种方式来管理存储：

- 结合 **Vue 3**中的 `ref` API
- 结合 **React**中的 `useState` API
- 在任何支持 `cjs` 模块或 `esm` 模块的项目中独立使用

## Vue 3

### 安装

```sh
npm install @smart-storage/vue-hooks --save
```

### 创建存储模块

在您的项目中随意创建一个文件:

```ts
// storage.ts
import { createLocalStorage } from '@smart-storage/vue-hooks';

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

export const { useStorage } = createLocalStorage<UserInfo>({
  // 存储键
  rootNodeKey: 'user_info',
  // 用于初始化
  initial: {
    hasSigned: false, // 非空属性必须初始化
  },
});
```

### 在 vue 组件中使用

```vue
<script setup lang="ts">
import { onMounted } from 'vue';
import { getUserInfo } from '@/api'; // 假设您有一个获取用户信息的异步函数
import { useStorage } from './storage';

/* 在Typescript的帮助下，您可以轻松地解构hook的返回值 */
const {
  refs: { token, hasSigned },
  resetters: { resetToken, resetHasSigned },
  checkers: { containsToken, containsHasSigned },
} = useStorage();

onMounted(() => {
  getUserInfo().then(res => {
    token.value = res.token; // vue响应式变量(组合式API)
    hasSigned.value = true; // 同上
  });
});

const onSignOut = () => {
  resetToken(); // 重置 token 的值
  resetHasSigned(); // 重置 hasSigned 的值
};
</script>

<template>
  <div>Contains token: {{ containsToken() }}</div>
  <div>Contains hasSigned: {{ containsHasSigned() }}</div>
  <button @click="onSignOut">Sign out</button>
</template>
```

## React

### 安装

```sh
npm install @smart-storage/react-hooks --save
```

### 创建存储模块

在您的项目中随意创建一个文件:

```ts
// storage.ts
import { createSessionStorage } from '@smart-storage/vue-hooks';

interface TestStorage {
  str?: string;
  num?: number;
  bool: boolean;
  arr: string[];
}

export const { useStorage } = createSessionStorage<TestStorage>({
  // 存储键
  rootNodeKey: 'react_test_key',
  // 非空属性必须初始化
  initial: { bool: false, arr: [] },
});
```

### 在函数式组件中使用

```tsx
import React, { useEffect } from 'react';
import { getUserInfo } from '@/api'; // 假设您有一个获取用户信息的异步函数
import { useStorage } from './storage';

function TestComponent() {
  /* 在Typescript的帮助下，您可以轻松地解构hook的返回值 */
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
    resetToken(); // 重置 token 的值
    resetHasSigned(); // 重置 hasSigned 的值
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

## 独立使用

### 安装

```sh
npm install @smart-storage/hooks --save
```

### 创建存储模块

在您的项目中随意创建一个文件:

```ts
// storage.ts
import { createSessionStorage } from '@smart-storage/hooks';

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

export const { useStorage } = createSessionStorage<UserInfo>({
  // 存储键
  rootNodeKey: 'user_info',
  // 用于初始化
  initial: {
    hasSigned: false, // 非空属性必须初始化
  },
});
```

### 在脚本中使用

```ts
import { getUserInfo } from '@/api'; // 假设您有一个获取用户信息的异步函数
import { useStorage } from './storage';

const { token, hasSigned } = useStorage();

(() => {
  getUserInfo().then(res => {
    token.set(res.token);
    hasSigned.set(true);
    console.log(hasSigned.get()); // true
  });
})();

const onSignOut = () => {
  token.remove(); // 从存储模块中删除此键值对
  hasSigned.set(false);
  console.log(token.get(), token.exist()); // undefined, false
};
```

## 直接使用

### 安装

```sh
npm install @smart-storage/core --save
```

### 使用

```ts
import { RootNode, StorageType } from '@smart-storage/core';
import { getUserInfo } from '@/api'; // 假设您有一个获取用户信息的异步函数

interface UserInfo {
  token?: string;
  hasSigned: boolean;
}

const rootNode = new RootNode<UserInfo>('user_info', StorageType.SESSION);

(() => {
  getUserInfo().then(res => {
    rootNode.setItem('token', res.token);
    rootNode.setItem('hasSigned', true);
    console.log(rootNode.getItem('hasSigned')); // true
    console.log(rootNode.contains('token')); // true
  });
})();

const onSignOut = () => {
  rootNode.removeItem('token');
  rootNode.setItem('hasSigned', false);
  console.log(rootNode.getItem('token')); // undefined
  console.log(rootNode.size()); // 1

  // Or
  rootNode.clear();
  console.log(rootNode.size()); // 0
};
```

## Next

现在，您可以享受到 TypeScript 带来的类型提示了！