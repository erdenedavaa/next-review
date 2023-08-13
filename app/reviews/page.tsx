import Heading from '@/components/Heading'
import Link from 'next/link'
import { getReviews } from '@/lib/reviews'

export const metadata = {
  title: 'Reviews',
}

export default async function ReviewPage() {
  const reviews = await getReviews()
  // console.log(`[ReviewPage] reviews:`, reviews)

  return (
    <div className='py-10'>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews</p>
      <br />
      <ul className='flex flex-col sm:flex-row sm:flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='border w-80 bg-white rounded shadow hover:shadow-xl hover:scale-[101%] hover:transition-scale hover:ease-out duration-1000'
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt={review.title}
                width='320'
                height='180'
                className='rounded-t'
              />
              <h2 className='py-1 text-center font-orbitron font-semibold'>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
