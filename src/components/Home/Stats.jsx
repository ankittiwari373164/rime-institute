import { Award, BookOpen, TrendingUp, Users } from "lucide-react"
import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

const stats = [
  { icon: Users, value: 6000, suffix: "+", label: "Students" },
  { icon: Award, value: 23, suffix: "+", label: "Years Of History" },
  { icon: BookOpen, value: 20, suffix: "+", label: "Certified Courses" },
  { icon: TrendingUp, value: 95, suffix: "%", label: "Placement Rate" },
]

function StatItem({ icon: Icon, value, suffix, label }) {
  const count = useMotionValue(0)

  const rounded = useTransform(count, (latest) =>
    Math.floor(latest)
  )

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 7,
      ease: "easeOut",
    })

    return controls.stop
  }, [value])

  return (
    <div className="text-center group cursor-pointer">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 rounded-full mb-4 group-hover:bg-[#C9A961] transition-colors">
        <Icon className="w-10 h-10 text-[#C9A961] group-hover:text-white transition-colors" />
      </div>

      <div className="text-4xl font-bold text-gray-900 mb-2 overflow-y-hidden">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>

      <div className="text-gray-600">{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}