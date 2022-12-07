---
id: test-file
title: Test File
sidebar_position: 1
description: TBD
---

# Header 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Header 2

- unordered list 1
  1.  inline LaTex: $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$
- unordered list 2
  1.  ordered sublist 1
  1.  ordered sublist 2
- unordered list 3
  - sublist 1
  - sublist 2

### Header 3

#### Header 4

---

# Images

Internal:
![The docusaurus.jpg Image](../../static/img/docusaurus.png)

External:
![](https://seneca-ictoer.github.io/OERResources/OERTemplate/docusaurus.png)

# Syntax highlighting:

```cpp
#include <iostream>
int main(void){
	std::cout << "hello world" << std::endl;
	return 0;
}
```

# LaTex

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

# Admonitions

:::note

A note block

code in admonition block

```cpp
#include <iostream>
int main(void){
	std::cout << "hello world" << std::endl;
	return 0;
}
```

Latex in admonition block

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

Internal:
![The docusaurus.jpg Image](../../static/img/docusaurus.png)

External:
![](https://seneca-ictoer.github.io/OERResources/OERTemplate/docusaurus.png)

:::

:::tip

A tip block
code in admonition block

```python
print("This line will be printed.")
```

Latex in admonition block

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

Internal:
![The docusaurus.jpg Image](../../static/img/docusaurus.png)

External:
![](https://seneca-ictoer.github.io/OERResources/OERTemplate/docusaurus.png)

:::

:::caution

A caution block
code in admonition block

```cpp
#include <iostream>
int main(void){
	std::cout << "hello world" << std::endl;
	return 0;
}
```

Latex in admonition block

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

Internal:
![The docusaurus.jpg Image](../../static/img/docusaurus.png)

External:
![](https://seneca-ictoer.github.io/OERResources/OERTemplate/docusaurus.png)

:::

:::danger

a danger block
code in admonition block

```cpp
#include <iostream>
int main(void){
	std::cout << "hello world" << std::endl;
	return 0;
}
```

Latex in admonition block

$$x = {-b \pm \sqrt{b^2-4ac} \over 2a}$$

Internal:

![The docusaurus.jpg Image](../../static/img/docusaurus.png)

External:

![](https://seneca-ictoer.github.io/OERResources/OERTemplate/docusaurus.png)

:::

# Table

| col 1                                  | col 2                                                        | col 3                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| r1-c1                                  | $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$                       | r1-c3                                                                        |
| $x = {-b \pm \sqrt{b^2-4ac} \over 2a}$ | ![The docusaurus.jpg Image](../../static/img/docusaurus.png) | r2-c3                                                                        |
| r3-c1                                  | r3-c2                                                        | ![](https://seneca-ictoer.github.io/OERResources/OERTemplate/docusaurus.png) |
