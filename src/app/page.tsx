import ProtectedRoute from '@/components/protected-route';

export default function Home() {
  return (
    <ProtectedRoute>
      <div>
        <p>Teste Home</p>
      </div>
    </ProtectedRoute>
  );
}
