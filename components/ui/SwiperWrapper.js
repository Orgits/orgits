'use client'
import { Suspense, lazy, useMemo } from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules"

const Swiper = lazy(() => import('swiper/react').then(mod => ({ default: mod.Swiper })))
const SwiperSlide = lazy(() => import('swiper/react').then(mod => ({ default: mod.SwiperSlide })))

export function SwiperWrapper({ options, children, className }) {
    const swiperModules = useMemo(() => [Autoplay, Pagination, Navigation], [])
    
    return (
        <Suspense fallback={<div className={className || ''} aria-hidden="true">{children}</div>}>
            <Swiper {...options} className={className} modules={swiperModules}>
                {children}
            </Swiper>
        </Suspense>
    )
}

export function SwiperSlideWrapper({ children, className }) {
    return (
        <Suspense fallback={<div className={className || ''} aria-hidden="true">{children}</div>}>
            <SwiperSlide className={className}>
                {children}
            </SwiperSlide>
        </Suspense>
    )
}