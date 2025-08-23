import { createSafeActionClient } from 'next-safe-action'

export const actionClient = createSafeActionClient({
  handleServerError(e) {
    console.error('Action error:', e)
    return 'Oh no, something went wrong!'
  },
})
