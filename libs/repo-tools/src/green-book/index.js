import { mkdir, readdirSync, writeFile } from 'fs';
import { htmlPlugin } from '@craftamap/esbuild-plugin-html';
import { TsconfigPathsPlugin } from '@esbuild-plugins/tsconfig-paths';
import mdx from '@mdx-js/esbuild';
import * as esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import findConfig from 'find-config';
import { globby } from 'globby';
const config = {
    outDir: '.green-book',
    componentDir: 'libs/core/src/components',
    lib: 'core',
};
const configJSON = findConfig.read('.greenbookrc');
const importedConfig = JSON.parse(configJSON);
Object.assign(config, importedConfig);
const getDirectories = (path) => readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
const componentNames = [];
try {
    componentNames.push(...getDirectories(config.componentDir));
}
catch (error) {
    console.error('No component directory found in: ' + config.componentDir);
}
const cleanPath = (path) => {
    const stringArr = path.split('/');
    return stringArr.slice(3, stringArr.length - 1).join('/');
};
const init = async () => {
    mkdir(`${config.outDir + '/' + config.lib}/generated/`, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    const paths = await globby([
        config.componentDir + '/**/*.stories.md',
        config.componentDir + '/**/*.stories.mdx',
    ]);
    const jsTemplate = (componentName, mdxPath) => `
      import * as React from 'react'
      import MDXContent from '${mdxPath}'
      import * as ReactDOM from 'react-dom'

      ReactDOM.render(<MDXContent />, document.getElementById('root'))
      `;
    const components = componentNames.map((componentName) => {
        writeFile(config.outDir + '/' + config.lib + '/generated/' + componentName + '.jsx', jsTemplate(componentName, '../../../' + paths.find((path) => path.includes(componentName))), (err) => {
            if (err)
                throw err;
        });
        return {
            name: componentName,
            entryPoint: '/generated/' + componentName + '.jsx',
            path: componentName,
        };
    });
    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script>
            globalThis.GDS_DISABLE_VERSIONED_ELEMENTS = true;
            new EventSource('/esbuild').addEventListener('change', () => location.reload());
          </script>
      </head>
      <body>
          <ul>${components
        .map((component) => `<li><a href="/${component.path}">${component.name}</a></li>`)
        .join('')}</ul>
          <div id="root">
          </div>
      </body>
      </html>
      `;
    const generatedEntrypoints = [];
    const files = paths.map((path) => {
        const prePath = cleanPath(path);
        const componentName = prePath.split('/')[1];
        generatedEntrypoints.push(config.outDir + '/' + config.lib + '/generated/' + componentName + '.jsx');
        return {
            entryPoints: [
                config.outDir +
                    '/' +
                    config.lib +
                    '/generated/' +
                    componentName +
                    '.jsx',
            ],
            filename: componentName + '/index.html',
            title: 'Hello World',
            htmlTemplate,
        };
    });
    let ctx = await esbuild.context({
        entryPoints: generatedEntrypoints,
        entryNames: '[dir]/[name]',
        metafile: true,
        bundle: true,
        outdir: config.outDir + '/www',
        outbase: config.outDir + '/generated',
        plugins: [
            mdx({ format: 'detect' }),
            htmlPlugin({
                files: files,
            }),
            sassPlugin({
                type: 'css-text',
            }),
            TsconfigPathsPlugin({ tsconfig: 'tsconfig.base.json' }),
        ],
    });
    await ctx.watch();
    ctx.serve({
        servedir: config.outDir + '/www',
    });
    console.log(`Server running at http://localhost:8000`);
};
init();
