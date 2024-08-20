import React, { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

export const metadata = {
  title: "All Meals",
  description: "Brows the delicious meals shared by our vibrant Community."
}

async function Meals(){
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export default async function LandingPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{' '} <span className={classes.highlight} >by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it yourself, It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href='/meals/share' >
            Share your favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main} >
        <Suspense fallback={<p className={classes.loading} >Featching Meals...</p>} >
          <Meals />
        </Suspense>
      </main>
    </>
  )
}
