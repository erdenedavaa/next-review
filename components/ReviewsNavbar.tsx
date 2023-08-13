'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { subRoute } from '../app/helper/urlSplit'

const ReviewsNavbar = ({ data: reviews = [] }) => {
  const currentRoute = usePathname()
  const isReviewsRoot = currentRoute.split('/').length === 2

  // for (const obj of reviews) {
  //   console.log(obj)
  // }

  if (!isReviewsRoot) {
    return (
      <nav className='my-10 bg-slate-50 inline-block py-2 px-10'>
        <ul className='flex flex-row gap-5'>
          {reviews.map((review) => (
            <li key={review.slug}>
              <Link
                href={`/reviews/${review.slug}`}
                className={
                  subRoute(currentRoute) === review.slug ? 'text-blue-500' : ''
                }
              >
                {review.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
export default ReviewsNavbar
