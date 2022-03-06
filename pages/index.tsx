/**
 * Copyright (c) myl7 2020-2022
 * SPDX-License-Identifier: Apache-2.0
 */

import type { NextPage } from 'next'

import Head from 'next/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Main from '../components/main'

const Index: NextPage = () => {
  return (
    <div id="root">
      <Head>
        <title>title: short description</title>
        <meta name="description" content="full description" />
      </Head>
      <Header />
      <Main></Main>
      <Footer />
    </div>
  )
}

export default Index
