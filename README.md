# react-components

Another react components library. 

### Philosophy

The design philosophy is to prioritize native (HTML) elements over convoluted react components. Abstraction is kept to a minimum. Thus, functionality is kept pure while attention is placed on performance, maintainability and scalability.

### Dependencies

- React
- React Router
- TailwindCSS

### Instructions

```bash
# start storybook
bun run storybook
```

### Examples

```tsx
import { Button } from "@jimtang2/react-components;

function Container() {
    return (
        <div>
            <Button label="OK">
        </div>
    )
}
```