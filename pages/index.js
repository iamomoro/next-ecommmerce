import Head from 'next/head'
import Image from 'next/image'
import layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <layout>
    <div>
      <h1>Products</h1>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
      </ul>
    </div>
    </layout>
  )
}
