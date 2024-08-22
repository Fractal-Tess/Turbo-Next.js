# Turborepo

Turborepo is a powerful build system for JavaScript and TypeScript monorepos. It optimizes the build process by caching task outputs and running tasks in parallel. This documentation will guide you through the build process and how to authorize Turbo to save artifacts.

## Table of Contents

1. [Introduction](#turborepo)
2. [Tasks](#tasks)
   1. [Task Order](#task-order)
   2. [^ Syntax](#-syntax)
   3. [In-Package Task Order](#in-package-task-order)
3. [Configuring Tasks](#tasks-1)

## Tasks

Each key in the tasks object represents a task that can be executed by `turbo run`. Turborepo will search monorepo packages for scripts in `package.json` that match the task name.

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

### `^` Syntax

The `^` syntax runs tasks starting at the bottom of the dependency graph. If an application depends on a library with a `build` task, the library's task runs first, followed by the application's.

### In-Package Task Order

To enforce the order of tasks within the same package, list the task name in `dependsOn` without the `^`. For example, to run `build` before `test` in a library.

Here's a more concise version of the documentation:

---

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

For example, if you are inlining the contents of an .env file in your build process, you should include the .env file in the `inputs` key in order for the task to be cached correctly.

Example:

```json
{
  "tasks": {
    "build": {
      "inputs": ["**/*.env"]
    }
  }
}
```

> This feature opts out of all of Turborepo's default inputs behavior, including following along with changes tracked by source control. This means that your .gitignore file will no longer be respected, and you will need to ensure that you do not capture those files with your globs.

To restore the default behavior, use the `$TURBO_DEFAULT$` microsyntax.

### Restoring Defaults with `$TURBO_DEFAULT$`

The default inputs behavior is often what you will want for your tasks. However, you can increase your cache hit ratios for certain tasks by fine-tuning your inputs to ignore changes to files that are known to not affect the task's output.

For this reason, you can use the `$TURBO_DEFAULT$` microsyntax to fine-tune the default inputs behavior:

```json
{
  "tasks": {
    "build": {
      "inputs": ["$TURBO_DEFAULT$", "**/*.env"]
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
