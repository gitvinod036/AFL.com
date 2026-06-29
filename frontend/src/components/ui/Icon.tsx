import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export function DynamicIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const icons = Icons as unknown as Record<string, LucideIcon>
  const Icon = icons[name] ?? Icons.Circle
  return <Icon className={className} aria-hidden />
}
