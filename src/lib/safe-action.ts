import { createSafeActionClient } from 'next-safe-action'

export const actionClient = createSafeActionClient({
  handleServerError(e, utils) {
    // You can access these properties inside the `utils` object.
    const { clientInput, bindArgsClientInputs, metadata, ctx } = utils

    // Log to console.
    console.error('Action error:', e)

    // Return generic message
    return 'Oh no, something went wrong!'
  },
})
