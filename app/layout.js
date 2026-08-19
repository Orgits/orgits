import "@/node_modules/react-modal-video/css/modal-video.css"
import "@/public/assets/css/style.css"
import "@/public/assets/css/responsive.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import {interTight,} from '@/lib/font'
export const metadata = {
    title: 'Orgits Business Solutions Pvt. Ltd. | Technology, AI, Marketing & IT Compliance',
    description: 'Orgits Business Solutions helps enterprises and startups with software development, AI, CRM and marketing automation, digital marketing, cloud solutions, IT consulting and Information Systems Audit & compliance.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${interTight.variable}`}>
            <body>{children}</body>
        </html>
    )
}
