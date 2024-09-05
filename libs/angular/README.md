<div align="center">
<img width="600" alt="green-angular" src="https://github.com/seb-oss/green/assets/11420341/c776109a-c980-4c33-92dd-109f1ff31ba2">
<h1>@sebgroup/green-angular</h1>
<p>
Angular components with SEB's look and feel.
</p>
</div>

## Install

If you are using the latest version of Angular, you can simply install `@sebgroup/green-angular` like this:

```
// If you are using yarn
yarn install @sebgroup/green-angular --save

// If you are using npm
npm install @sebgroup/green-angular --save
```

However, because `@sebgroup/green-angular` has a peer dependency to `@angular/cdk`, and Angular is very picky about which versions go together, if you use an older version of Angular you need to explicitly install the matching version of `@angular/cdk` as well.

For example, for Angular 14:

```
npm install @angular/cdk@~14.0.0 @sebgroup/green-angular --save
```

Currently, our aim is to support the LTS version of Angular as well as the current latest version.

## Import module

We recommend that you import `NggModule` (or just the module you need for Angular Green) into a shared module eg. `SharedModule` that can be imported into other, preferably lazy loaded modules when needed.

```ts
import { NggModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [...],
  imports: [
    ...
    NggModule
  ],
  exports: [
    NggModule
  ]
})
export class SharedModule {}
```

## Import styling

We recommend setting up your Angular project to use scss (SASS) for css preprocessing.

Once configured to use scss, it's just a matter of including the scss to your main styles file, typically it would be `styles.scss` located at the root of the `src` folder unless you've changed it.

### Add scss

`{project}/src/styles.scss`

```css
// import base styles from @sebgroup/chlorophyll
@use '@sebgroup/chlorophyll/scss';
```

### Have other needs?

More examples and use cases coming soon! In the meantime create an [issue over at github](https://github.com/seb-oss/green/issues)
