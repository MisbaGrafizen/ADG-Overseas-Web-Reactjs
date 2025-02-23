import { ArrowRight, MessageSquare } from "lucide-react"
import  imag1 from '../../../public/heroImages/herobanner1.jpg'
import  imag2 from '../../../public/heroImages/herobanner3.jpg'

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      day: "03",
      month: "DEC",
      year: "2024",
      comments: 2,
      image:
      imag1 ,
      title: "WELDING AS A HOBBY TURNING PASSION INTO PROJECTS",
    },
    {
      id: 2,
      day: "20",
      month: "DEC",
      year: "2024",
      comments: 2,
      image:
      imag2,
      title: "WELDING AS A HOBBY TURNING PASSION INTO PROJECTS",
    },
    {
      id: 3,
      day: "23",
      month: "JULY",
      year: "2024",
      comments: 2,
      image:
      imag1,
      title: "WELDING AS A HOBBY TURNING PASSION INTO PROJECTS",
    },
    {
        id: 4,
        day: "23",
        month: "JULY",
        year: "2024",
        comments: 2,
        image:
        imag2,
        title: "WELDING AS A HOBBY TURNING PASSION INTO PROJECTS",
      },
  ]

  return (
    <div className="container font-Poppins mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="inline-block p-2 bg-[#B69D74] rounded">
            <MessageSquare className="w-5 h-5 text-white" />
          </span>
          <span className="text-sm font-medium text-[#B69D74]">ARTICLE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center max-w-4xl mx-auto">
          LATEST NEWS & ARTICLES FROM THE BLOG POSTS
        </h2>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="group    bg-white">
            {/* Image Container */}
            <div className="relative  h-[200px] rounded-t-xl overflow-hidden">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover h-[100%] w-[100%] transition-transform duration-300 group-hover:scale-105"
              />
              {/* Date Overlay */}
              <div className="absolute right-4 top-4 bg-[#B69D74] text-white px-3 py-2 text-center">
                <div className="text-2xl font-bold">{article.day}</div>
                <div className="text-sm">
                  {article.month}
                  <br />
                  {article.year}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 bg-gray-100 shadow-xl rounded-b-[10px]">
              {/* Comments */}
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-[#B69D74]" />
                <span className="text-sm text-gray-600">{article.comments} COMMENTS</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 line-clamp-2">{article.title}</h3>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-[#B69D74] font-medium group/link">
                Read More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

