import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    typecheck: {
      // Disabling this resolves the issue.
      enabled: true
    }
  }
})
