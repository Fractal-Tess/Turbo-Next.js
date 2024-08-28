# Turborepo

[Turborepo](https://turbo.build/repo/docs) is a powerful build system for JavaScript and TypeScript monorepos. It optimizes the build process by caching task outputs and running tasks in parallel. This documentation will guide you through the ideology of using this template and how to configure it to your needs.

## Table of Contents

## Tasks

## Table of Contents

- [Turborepo](#turborepo)
  - [Table of Contents](#table-of-contents)
  - [Tasks](#tasks)
    - [Task Order](#task-order)
    - [In-Package Task Order](#in-package-task-order)
    - [Specifying Outputs](#specifying-outputs)
    - [Specifying Inputs](#specifying-inputs)


Each key in the `tasks` object is a task that can be executed by `turbo run`. Turborepo will search your packages for scripts in their `package.json` that have the same name as the task.

### Task Order

Use the `dependsOn` key to specify tasks that must finish before another begins. For example, to ensure a library's build script runs before the application's build script, use:

```json
{
  "tasks": {
    "build": {
      "dependsOn": ["^build"]
    }
  }
}
```


The `^` syntax runs tasks starting at the bottom of the dependency graph. If an application depends on a library with a `build` task, the library's task runs first, followed by the application's.

---

Depending on tasks in the same package
```json
{
  "tasks": {
    "test": {
      "dependsOn": ["build"] 
    }
  }
}
```
---
Depending on a specific task in a specific package

```json
{
  "tasks": {
    "lint": {
      "dependsOn": ["utils#build"] 
    }
  }
}
```

---

You can also be more specific about the dependent task, limiting it to a certain package:
```json
{
  "tasks": {
    "web#lint": {
      "dependsOn": ["utils#build"] 
    }
  }
}
```

### No dependencies

Some tasks may not have any dependencies. For example, a task for finding typos in Markdown files likely doesn't need to care about the status of your other tasks. In this case, you can omit the dependsOn key or provide an empty array.


```json
{
  "tasks": {
    "spell-check": {
      "dependsOn": [] 
    }
  }
}
```

### Specifying Outputs

Turborepo caches task outputs to avoid redundant work. The `outputs` key defines the files and directories to cache after a task completes. Without it, no files are cached, and cache hits won’t restore outputs.

Example for common tools:

```json
{
  "tasks": {
    "build": {
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    }
  }
}
```

For more on glob patterns, see the globbing specification.

### Specifying Inputs

The `inputs` key specifies which files contribute to a task's cache hash. By default, all Git-tracked files in the package are included, but you can specify additional files.

Think of these files as files that influence the output of the task and are not tracked by git. These files should be included in the `inputs` key in order for the task to be cached correctly.

For example, if you are inlining the contents of an .env file in in your build process, you should include the .env file in the `inputs` key in order for the task to be cached correctly.

Example:

```json
{
  "tasks": {
    "build": {
      "inputs": [".env"]
    }
  }
}
```

This feature opts out of all of Turborepo's default inputs behavior, including following along with changes tracked by source control. This means that your .gitignore file will no longer be respected, and you will need to ensure that you do not capture those files with your globs.

> Keep in mind that the inputs is a glob of all matching files that are relative to the package's `package.json` file.
> `turbo.json` is always considered an input.

To restore the default behavior, use the `$TURBO_DEFAULT$` microsyntax.

### Restoring Defaults with `$TURBO_DEFAULT$`

The default inputs behavior is often what you will want for your tasks. However, you can increase your cache hit ratios for certain tasks by fine-tuning your inputs to ignore changes to files that are known to not affect the task's output.

For this reason, you can use the `$TURBO_DEFAULT$` microsyntax to fine-tune the default inputs behavior:

```json
{
  "tasks": {
    "build": {
      "inputs": ["$TURBO_DEFAULT$", ".env"]
    }
  }
}
```

---

### Environment Variables

The `env` key lists environment variables that a task depends on, affecting its cache hash.

Example:

```json
{
  "tasks": {
    "build": {
      "env": ["DATABASE_URL"]
    }
  }
}
```

**Note:** Turborepo automatically includes environment variables prefixed by common frameworks (e.g., `NEXT_PUBLIC_` for Next.js) through Framework Inference.

### Wildcards

Turborepo supports wildcards for environment variables. For example, to include all variables starting with `MY_API_`:

```json
{
  "tasks": {
    "build": {
      "env": ["MY_API_*"]
    }
  }
}
```

This ensures that any variable with the `MY_API_` prefix impacts the cache hash.

---

### Caching

**Default:** `true`

The `cache` key determines whether task outputs are cached. Set `cache` to `false` for tasks that you want to always run, such as long-running development tasks.

Example:

```json
{
  "tasks": {
    "dev": {
      "cache": false
    }
  }
}
```

This configuration ensures that the `build` task caches its outputs, while the `dev` task runs every time without caching.

### Persistent

**Default:** `false`

Label a task as persistent to prevent other tasks from depending on long-running processes. Persistent tasks are made interactive by default.

Because a long-running process won't exit, tasks that would depend on it would never run. Once you've labeled the task as persistent, turbo will throw an error if other tasks depend on it.

This option is most useful for development servers or other "watch" tasks.

```json
{
  "tasks": {
    "dev": {
      "persistent": true
    }
  }
}
```

Tasks marked with persistent are also interactive by default.


### Remote Caching Artifacts

There are two ways to enable the caching of task artifacts:

* Connect to vercel's caching service by running `pnpm turbo login` followed by `pnpm turbo link` - [docs](https://turbo.build/repo/docs/core-concepts/remote-caching)
* Connect to a self-hosted cache server - [I recommend this](https://github.com/ducktors/turborepo-remote-cache)


As for the self hosted method, once the service is hosted, simply create a `.turbo/config.json` file with the following contents:

```json

{
  # The FQDN of the host running the cache server
  "apiUrl": "https://example.com",
  # The same value for the `TURBO_TOKEN` environment veriable used in the server.
  "token": "xxxxxxxxxxxxxxxxx",
  # The teamId under which all artifacts will be stored.
  # The value of this HAS TO begin with `team_`
  "teamid": "team_example"
}
```

In CI/CD, you can can either chose to git commit the `.turbo` folder so the `config.json` file can be used to establish connection to the prefered caching service,
or you can use the `turbo` cli flags like This
```bash
turbo login --api="https://example.com"
turbo link --api="https://example.com"
turbo run build --api="https://example.com" --token="xxxxxxxxxxxxxxxxx" --team="team_example"
```

For more info refer to the original [docs](https://turbo.build/repo/docs/core-concepts/remote-caching)
