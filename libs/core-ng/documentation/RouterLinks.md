# Router Link Integration

## Overview

Components that can be used as links with an `href` property (like `gds-link`, `gds-button`, `gds-menu-button`, and `gds-breadcrumb`) automatically integrate with Angular's `[routerLink]` directive.

## How It Works

### Detection

The generator detects link components by checking if they have an `href` property in their Custom Elements Manifest:

```typescript
private static isLinkComponent(declaration: CustomElementDeclaration): boolean {
  if (!declaration.members) return false

  return declaration.members.some(
    (member: any) =>
      member.kind === 'field' &&
      member.name === 'href' &&
      member.privacy !== 'private' &&
      member.privacy !== 'protected',
  )
}
```

### Generated Integration

For link components, the generator automatically:

1. **Injects RouterLink and RouterLinkActive** (both optional with `@Self()`)
2. **Injects Renderer2** for DOM manipulation
3. **Adds integration methods**:
   - `updateHref()`: Tricks RouterLink into treating the component as an anchor, then sets the href attribute
   - `setActive()`: For `gds-menu-button`, syncs the `selected` property with RouterLinkActive's `isActive` state

4. **Hooks into lifecycle**:
   - `ngOnChanges`: Updates href when routerLink input changes
   - `ngAfterViewInit`: Initializes href and subscribes to active state changes
   - `constructor`: Subscribes to RouterLinkActive changes (for non-form-control components)

## Usage Examples

### Basic RouterLink

```typescript
import { Component } from '@angular/core';
import { GdsLinkComponent, GdsButtonComponent } from '@sebgroup/green-core-ng';

@Component({
  selector: 'app-nav',
  imports: [GdsLinkComponent, GdsButtonComponent],
  template: `
    <!-- Link component -->
    <gds-link [routerLink]="['/home']">
      Go Home
    </gds-link>

    <!-- Button component -->
    <gds-button [routerLink]="['/about']">
      About Us
    </gds-button>
  `
})
export class NavComponent {}
```

### With RouterLinkActive

```typescript
import { Component } from '@angular/core';
import { GdsMenuButtonComponent } from '@sebgroup/green-core-ng';

@Component({
  selector: 'app-menu',
  imports: [GdsMenuButtonComponent],
  template: `
    <gds-menu-button 
      [routerLink]="['/dashboard']" 
      routerLinkActive>
      Dashboard
    </gds-menu-button>

    <gds-menu-button 
      [routerLink]="['/settings']" 
      routerLinkActive>
      Settings
    </gds-menu-button>
  `
})
export class MenuComponent {}
```

The `gds-menu-button` component will automatically have its `selected` property set to `true` when the route is active.

### Query Parameters and Fragments

All RouterLink features work as expected:

```typescript
<gds-link 
  [routerLink]="['/search']"
  [queryParams]="{ q: 'angular' }"
  [fragment]="'results'">
  Search Results
</gds-link>
```

### Multiple Routes

```typescript
<gds-breadcrumb [routerLink]="['/products', productId, 'details']">
  Product Details
</gds-breadcrumb>
```

## Implementation Details

### Tricking RouterLink

The RouterLink directive internally checks if the host element is an anchor (`<a>`) tag. To make it work with custom elements, we set a private property:

```typescript
private updateHref(): void {
  if (!this.routerLink) return;

  // Trick RouterLink into thinking we are an anchor element
  (this.routerLink as any).isAnchorElement = true;
  (this.routerLink as any).updateHref();

  // Set the href attribute on our element
  this.renderer.setAttribute(
    this.elementRef.nativeElement,
    'href',
    this.routerLink.href || '',
  );
}
```

### Menu Button Active State

For `gds-menu-button` specifically, we sync the `selected` property:

```typescript
private setActive(): void {
  if (!this.routerLinkActive) return;
  
  // Special handling for gds-menu-button
  if (this.elementRef.nativeElement?.tagName === 'GDS-MENU-BUTTON') {
    this.elementRef.nativeElement.selected = this.routerLinkActive.isActive;
  }
}
```

## Migration from NggCoreRouterLinkDirective

### Before (using directive)

```typescript
import { NggCoreRouterLinkDirective } from '@sebgroup/green-angular/core-router-link';

@Component({
  imports: [GdsLinkComponent, NggCoreRouterLinkDirective],
  template: `
    <gds-link 
      [routerLink]="['/home']" 
      nggCoreRouterLink>
      Home
    </gds-link>
  `
})
```

### After (built-in)

```typescript
import { GdsLinkComponent } from '@sebgroup/green-core-ng';

@Component({
  imports: [GdsLinkComponent],
  template: `
    <gds-link [routerLink]="['/home']">
      Home
    </gds-link>
  `
})
```

The `nggCoreRouterLink` directive is no longer needed when using the generated wrappers!

## Which Components Support This?

All components with an `href` property get router link integration.

## Testing

The generator creates comprehensive tests for router link integration:

```typescript
describe('RouterLink Integration', () => {
  it('should work with RouterLink directive', async () => {
    // Tests that href is set when routerLink is used
  });

  it('should update href when routerLink changes', async () => {
    // Tests that href updates when routerLink input changes
  });

  // For gds-menu-button only:
  it('should sync selected state with RouterLinkActive for menu-button', async () => {
    // Tests that selected property syncs with active route
  });
});
```
