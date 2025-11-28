import { InjectionToken } from '@angular/core'

import { getScopedTagName } from '@sebgroup/green-core/scoping'

export interface ScopeResolver {
  getScopedTagName(tagName: string, alwaysAddSuffix?: boolean): string
}

export const SCOPE_RESOLVER = new InjectionToken<ScopeResolver>(
  'SCOPE_RESOLVER (for Green Core)',
  {
    providedIn: 'root',
    factory: () =>
      ({
        getScopedTagName,
      }) as ScopeResolver,
  },
)
