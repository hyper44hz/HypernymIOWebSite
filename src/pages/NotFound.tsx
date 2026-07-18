import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Seo } from '../components/Seo';

const NotFound = () => (
  <main className="min-h-[75vh] bg-bg-primary flex items-center pt-24">
    <Seo title="Page Not Found | HyperNym" description="The requested page could not be found." />
    <div className="container mx-auto px-5 sm:px-8 lg:px-[60px] py-24">
      <p className="eyebrow mb-5">404 · PAGE NOT FOUND</p>
      <h1 className="max-w-3xl mb-6">The signal ends here.</h1>
      <p className="text-text-secondary max-w-xl mb-10">The page may have moved, but the platform is still within reach.</p>
      <Link to="/" className="btn-primary w-fit gap-2"><ArrowLeft size={18} /> Return home</Link>
    </div>
  </main>
);

export default NotFound;
