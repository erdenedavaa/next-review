import Heading from '@/components/Heading'
import { getFeaturedReview } from '@/lib/reviews'
import Link from 'next/link'


export default async function HomePage() {
  const review = await getFeaturedReview()
  console.log('[HomePage] rendering')

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-10'>Only best</p>
      <div className='border bg-white rounded shadow hover:shadow-xl hover:scale-[101%] w-80 sm:w-full'>
        <Link
          href={`/reviews/${review.slug}`}
          className='flex flex-col sm:flex-row'
        >
          <img
            src={review.image}
            alt={review.title}
            width='320'
            height='180'
            className='rounded-t sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='py-1 text-center font-orbitron font-semibold sm:px-2'>
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  )
}
