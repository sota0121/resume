import React from 'react';
import Layout from '../components/layout'
import Head from 'next/head'
import AppBar from '../components/app-bar'

export const Profile = () => {
  return (
    <Layout>
      <Head>
        <title>{'SOTA Lab Home Page'}</title>
      </Head>
      <AppBar />
      <div className="container mx-auto">
        Profile Page is under construction ...
      </div>
    </Layout>
  )
};

export default Profile;