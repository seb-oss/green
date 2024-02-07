import type { Tree } from 'nx/src/generators/tree';
/**
 * Returns workspace defaults. It includes defaults folders for apps and libs,
 * and the default scope.
 *
 * Example:
 *
 * ```typescript
 * { appsDir: 'apps', libsDir: 'libs', npmScope: 'myorg' }
 * ```
 * @param tree - file system tree
 */
export declare function getWorkspaceLayout(tree: Tree): {
    appsDir: string;
    libsDir: string;
    standaloneAsDefault: boolean;
    /**
     * @deprecated This will be removed in Nx 17. Use {@link getNpmScope} instead.
     */
    npmScope: string;
};
/**
 * Experimental
 */
export declare function extractLayoutDirectory(directory: string): {
    layoutDirectory: string;
    projectDirectory: string;
};
