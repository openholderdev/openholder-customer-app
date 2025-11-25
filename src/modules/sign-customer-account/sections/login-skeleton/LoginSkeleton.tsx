import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoginSkeleton() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
        <Skeleton height={32} width="75%" />
        <Skeleton height={16} width="50%" />
        <div className="space-y-4 mt-6">
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
        <Skeleton height={48} className="mt-6" />
      </div>
    </main>
  );
}
