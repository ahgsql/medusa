#!/usr/bin/env node

import { EOL } from "os"
import { run } from "../seed"

const args = process.argv
const path = args.pop() as string

export default (async () => {
  const { config } = await import("dotenv")
  config()
  if (!path) {
    throw new Error(
      `filePath is required.${EOL}Example: medusa-promotion-seed <filePath>`
    )
  }

  await run({ path })
})()
