import React from 'react';
import { InfoBar, Buckets, Bucket, Card } from 'views/generic/components';

const Home = () => (
  <div>
    <InfoBar title="INTERNSHIP" subtitles={[{ name: 'Xero Ltd' }, { name: 'Domenic Saporito' }, { name: 'Positions required: 3/3' }]} />
    <Buckets>
      <Bucket title="APPLIED" count={{ value: 5, total: 20 }}>
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="red" />
        <Card name="Matt Hayward" status="red" />
        <Card name="Matt Hayward" status="red" />
        <Card name="Matt Hayward" status="red" />
        <Card name="Matt Hayward" status="red" />
      </Bucket>
      <Bucket title="SHORTLISTED" count={{ value: 1, total: 3 }}>
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="red" />
        <Card name="Matt Hayward" status="red" />
      </Bucket>
      <Bucket title="INTERVIEWED" count={{ value: 1, total: 2 }}>
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="red" />
      </Bucket>
      <Bucket title="OFFERED" count={{ value: 2, total: 2 }}>
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="orange" />
        <Card name="Matt Hayward" status="red" />
      </Bucket>
      <Bucket title="PLACED" count={{ value: 1, total: 1 }}>
        <Card name="Matt Hayward" status="green" />
      </Bucket>
      <Bucket title="ACTIVE" count={{ value: 2, total: 2 }}>
        <Card name="Matt Hayward" status="green" />
        <Card name="Matt Hayward" status="green" />
      </Bucket>
    </Buckets>
  </div>
);


export default Home;
