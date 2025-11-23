export default function ProgressBar({ progress = 45 }: { progress: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
      <div className="bg-green-600 h-2 rounded-full" style={{width: `${progress}%`}}></div>
    </div>
  )
}
