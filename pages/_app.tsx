/**
 * Copyright (c) myl7 2022
 * SPDX-License-Identifier: Apache-2.0 OR MIT
 */

import '../styles/globals.css'
import '../styles/reset.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
