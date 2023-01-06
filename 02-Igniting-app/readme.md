# Assignment

## 1. What is NPM?

NPM is the abbreviation for Node Package Manager, which is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. 

NPM helps manage and share the packages (libraries, frameworks, tools, etc.) that you use in your projects, and it also helps you find and install packages that you might need. 

It is a command-line interface (CLI) tool that you can use from the terminal or command prompt to install, update, and manage packages. NPM is a key part of the Node.js ecosystem and is widely used by developers around the world.

---

## 2. What is NPX?

npx is a tool that is included with npm, the package manager for JavaScript. It allows you to run command-line executables that are available as packages in the npm registry. 

It is similar to the npm command, but it is specifically designed to be used to run packages temporarily, rather than installing them permanently as dependencies of your project.

For example, if you want to use a tool called create-react-app to create a new React app, you can use npx to run it without first installing it globally on your system:

```
npx create-react-app my-app
```

This will create a new directory called my-app and generate a basic React app inside it. The create-react-app tool is not installed globally, but npx will download and run it for you temporarily, so you can use it right away.

npx is a convenient way to use command-line tools and libraries without cluttering your system with global installations, and it can also be used to ensure that you are using the latest version of a package when you run it.

---

## 3. What is difference between **dependencies** vs **devDependencies**

In a *package.json* file, the **dependencies** field lists the packages that your project depends on and that need to be installed when someone runs npm install. These are packages that are required for your project to run in production.

The ***devDependencies*** field, on the other hand, lists the packages that are only needed for development and testing, and that are not required for the project to run in production. These might include test runners, linters, transpilers, and other tools that are used during the development process, but are not needed in the final built version of the project.

---

## 4. What is webpack? why do we need it?

***Webpack*** is a **JavaScript** module bundler that takes your JavaScript code and its dependencies and creates a single bundle file that you can serve to your web application. It can also be configured to *transform*, *optimize*, and *bundle* other assets like **CSS**, **images**, and **fonts**.

***Webpack*** is useful because it helps you manage and optimize your assets for deployment. In a modern web application, you might have many different JavaScript files, style sheets, images, and other assets that need to be bundled together and served to the client. 

Manually managing these assets and ensuring that they are served efficiently can be a complex and error-prone task. Webpack helps automate this process by allowing you to define a configuration file that specifies how your assets should be transformed and bundled.

***Webpack*** is also useful because it can optimize your assets for *performance*. It can minify your JavaScript and CSS, transpile modern JavaScript code to work in older browsers, and optimize images and other assets for faster loading.

*Overall, Webpack is a powerful and flexible tool that can help you manage and optimize your web application's assets, and it is widely used in modern web development.*

---

## 5. What is Parcel?

***Parcel*** is a *fast, zero-configuration web application bundler*. It is similar to tools like **Webpack** and **Rollup**, but it aims to be simpler and easier to use, with minimal configuration required.

Like **Webpack** and **Rollup**, **Parcel** takes your application's code and dependencies and bundles them into a single package that can be served to the client. It supports a wide range of file types, including *JavaScript*, *HTML*, *CSS*, *images*, and *fonts*, and it can **transform** and **optimize** these files as it bundles them.

One of the main advantages of ***Parcel*** is its simplicity. It has a minimal configuration, and it can automatically detect and adapt to the requirements of your project. This means that you don't need to spend a lot of time setting up and configuring your bundler, and you can get started building your application right away.

***Parcel*** is also fast, with a focus on performance. It uses multiple processes and a cache to speed up builds, and it can also automatically optimize your assets for production.

Overall, ***Parcel*** is a popular choice for web application bundling, especially for smaller projects or for developers who want a simple, easy-to-use bundler.

---

## 6. What is .parcel-cache?

***.parcel-cache*** is the default name of the directory where ***Parcel***, a web application bundler, stores its cache files.

When you run ***Parcel*** to build your application, it will create a cache of the files it has processed in the ***.parcel-cache*** directory. This *cache* is used to speed up subsequent builds by allowing Parcel to reuse the transformed and optimized versions of your files instead of processing them again.

The ***.parcel-cache*** directory is typically located in the root directory of your project, and it is hidden by default on most operating systems. It is not intended to be modified by the user, and you should not need to interact with it directly.

If you want to clear the cache or disable caching in Parcel, you can use the ***--no-cache*** flag when running the bundler. This will prevent Parcel from creating a cache or using an existing cache, and it will process all of your files from scratch each time you build your application.

---

## 7. What is Tree Shaking?

***Tree shaking*** is a term used in the context of JavaScript module bundlers like *Webpack* and *Parcel*. It refers to the process of removing unused code from your project, and it can be used to reduce the size of your bundled JavaScript file and improve the performance of your application.

In modern JavaScript development, it is common to use third-party libraries and frameworks that export many functions and variables that you might not use in your project. These unused exports can still end up in your final bundle, increasing its size and making it slower to download and execute.

***Tree shaking*** works by analyzing the dependencies of your project and determining which exports are actually used. It then removes the unused exports, so they are not included in the final bundle. This can help reduce the size of your bundled code and improve the performance of your application.

To use ***tree shaking***, you need to use a module bundler that supports it, like *Webpack* or *Parcel*, and you also need to use a JavaScript language that supports a static module syntax, like ECMAScript 2015 (ES6) or later. You can then import or require only the specific functions or variables that you need, and the module bundler will take care of the rest.

Overall, ***tree shaking*** is a useful optimization technique that can help you reduce the size of your bundled code and improve the performance of your application.


---

## 8. What is Hot Module Replacement?

***Hot Module Replacement (HMR)*** is a feature in Parcel, a JavaScript module bundler, that allows you to update the modules in your application without a full reload. This can be useful for speeding up the development process, as it allows you to see the changes you make in your code immediately, without having to wait for the browser to reload.

Parcel will monitor the files in your project for changes, and it will automatically replace the updated modules in the browser without reloading the page. This allows you to make changes to your code and see the results immediately, without losing the state of your application.

Overall, Hot Module Replacement is a useful feature that can improve the development workflow and speed up the development process by allowing you to see the changes you make in your code immediately.

---

## 9. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words

Here are five notable features of Parcel, a web application bundler:

1. **Zero configuration:** One of the main advantages of Parcel is that it requires minimal configuration. You can start using it right away, without having to create a configuration file or spend time setting it up.

1. **Fast:** Parcel is designed to be fast, with a focus on performance. It uses multiple processes and a cache to speed up builds, and it can also automatically optimize your assets for production.

1. **Support for a wide range of file types:** Parcel supports a wide range of file types, including JavaScript, HTML, CSS, images, and fonts. It can transform and optimize these files as it bundles them, making it easy to build and deploy a modern web application.

1. **Automatic dependency resolution:** Parcel can automatically detect and resolve dependencies in your project, making it easy to manage and update your dependencies over time.

1. **Hot Module Replacement:** Parcel includes support for Hot Module Replacement (HMR), which allows you to update the modules in your application without a full reload. This can be useful for speeding up the development process, as it allows you to see the changes you make in your code immediately.


---

## 10. What is .gitignore? What should we add and not add into it?

***.gitignore*** is a file that you can use to specify patterns for files and directories that you want Git, a version control system, to ignore when tracking changes in your project. The .gitignore file is usually located in the root directory of your project, and it applies to all directories and files in the repository, unless they are explicitly included in another .gitignore file.

The ***.gitignore*** file is useful because it allows you to exclude certain files and directories from version control, which can be useful for things like temporary files, compiled files, and sensitive information that you don't want to commit to your repository.

Overall, the .gitignore file is a useful tool for excluding files and directories from version control, and it can help you keep your repository clean and focused on the important parts of your project.

Basic .gitignore template

```
# Compiled source
*.com
*.class
*.dll
*.exe
*.o
*.so

# Packages
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases
*.log
*.sql
*.sqlite

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Editor-specific files
.idea/
*.iml
*.swp

# IDE-specific files
*.sln
*.suo

# Temporary files
*.tmp
*.bak
*.tmp

# Ignore npm packages
node_modules/

# Ignore yarn packages
yarn-error.log

```

---

## 11. What is the difference between package.json and package-lock.json?

**package.json** is a file that is used to manage the dependencies of a JavaScript project. It is typically located in the root directory of a project, and it includes information about the project, as well as a list of the packages that the project depends on.

**package-lock.json**, on the other hand, is a file that is used to lock the dependencies of a project to a specific version. It is generated automatically when you run npm install or yarn install, and it records the exact versions of the packages that are installed in the project.

The main difference between **package.json** and **package-lock.json** is that package.json specifies the dependencies of a project in a flexible way, while package-lock.json specifies the exact versions of the packages that are installed.

For example, in package.json, you might specify that your project depends on a package called lodash, and you might specify a version range like ^4.17.15. This means that your project is compatible with any version of lodash that starts with 4.17.15, including patch and minor version updates.

When you run npm install or yarn install, the package manager will resolve the dependencies of your project and install the packages that you need. It will then update package-lock.json to reflect the exact versions of the packages that were installed. So, if the latest version of lodash that satisfied the version range in package.json was 4.17.20, package-lock.json would specify 4.17.20 as the version of lodash that is installed in the project.

Overall, the package.json file is used to specify the dependencies of a project in a flexible way, while the package-lock.json file is used to lock the dependencies to specific versions to ensure reproducible builds.

---

## 12. Why should I not modify package-lock.json?

It is generally not recommended to modify package-lock.json manually, because it is intended to be a snapshot of the exact versions of the packages that are installed in your project. Modifying the file manually can cause conflicts with the package manager and make it difficult to manage the dependencies of your project.

Instead of modifying package-lock.json directly, you should use the package manager (such as npm or yarn) to manage the dependencies of your project. This will ensure that the package-lock.json file is updated correctly and that the dependencies of your project are properly resolved and installed.

For example, if you want to add or update a dependency in your project, you should use the npm install or yarn add command, rather than modifying package-lock.json directly. This will update the package.json file and the package-lock.json file to reflect the changes, and it will also install the necessary packages.

Overall, it is best to let the package manager handle the dependencies of your project and to avoid manually modifying package-lock.json. This will help ensure that the dependencies of your project are properly managed and that you are using a consistent and reproducible version of the packages that your project depends on.

---

## 13. What is node_modules ? Is it a good idea to push that on git?

***node_modules*** is a directory that is created automatically when you run `npm install` or `yarn install` in a JavaScript project. It contains the installed packages that your project depends on, as well as any dependencies of those packages.

It is generally not a good idea to include the ***node_modules*** directory in version control, such as Git, because it can significantly increase the size of your repository and make it slower to clone and work with. The ***node_modules*** directory can also contain many files that are not relevant to your project, and tracking these files in version control can make it harder to see the important changes in your code.

Instead of tracking the ***node_modules*** directory in version control, it is recommended to include the *package.json* and *package-lock.json* files in your repository. These files contain information about the dependencies of your project and the exact versions of the packages that are installed, and they can be used to recreate the ***node_modules*** directory when needed.

To recreate the ***node_modules*** directory, you can run the `npm install` or `yarn install` command, which will install the necessary packages based on the information in package.json and package-lock.json.

Overall, it is generally not a good idea to include the ***node_modules*** directory in version control, as it can increase the size and complexity of your repository. Instead, you should include the package.json and package-lock.json files and use the package manager to install the necessary packages when needed.

---

## 14. What is the dist folder?

The ***dist*** directory, or distribution directory, is a common convention used to store the built and compiled files of a project that are ready for deployment. It is typically located in the root directory of a project, and it can include files like JavaScript bundles, CSS stylesheets, images, and other assets that are needed to run the application.

The dist directory is usually generated by a build process, which takes the source files of a project and processes them in some way, such as transpiling, minifying, or bundling them. The build process can also perform other tasks, like optimizing images or generating assets like favicons or service workers.

The dist directory is typically used to store the final, production-ready version of a project, and it is usually what is deployed to a server or hosting platform when the project is released.

Overall, the dist directory is a common convention for storing the built and compiled files of a project, and it is used to store the final, production-ready version of a project that is ready for deployment.

---

## 15. What is browserlists?

Browserlists is a configuration file that is used to specify the target browsers and platforms for a project. It is typically used with tools like Autoprefixer, a tool that adds vendor prefixes to CSS styles to ensure compatibility with different browsers, and Babel, a tool that transpiles JavaScript code to be compatible with older or less capable browsers.

The Browserlists configuration is specified in a .browserlistrc file, which is usually located in the root directory of a project. It consists of a list of queries that define the target browsers and platforms for the project.

For example, a simple Browserlists configuration might look like this:

```
> 0.5%
last 2 versions
Firefox ESR
not dead

```

This configuration specifies that the project should target the latest versions of browsers that have at least 0.5% market share, as well as the last two versions of each browser. It also includes Firefox ESR (Extended Support Release) and excludes browsers that are no longer in active development.

The Browserlists configuration is used to ensure that the project is compatible with a wide range of browsers and platforms, and it can be customized to suit the specific requirements of the project.

Overall, Browserlists is a useful tool for specifying the target browsers and platforms for a project, and it can be used with tools like Autoprefixer and Babel to ensure compatibility and support for a wide range of browsers.

---